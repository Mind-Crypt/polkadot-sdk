#![cfg_attr(not(feature = "std"), no_std)]
use frame_support::pallet_prelude::*;
use frame_support::traits::OneSessionHandler;
#[cfg(feature = "serde")]
use serde::{Deserialize, Serialize};

use codec::{Encode, Decode, MaxEncodedLen};

use sp_runtime::{
	traits::{Convert, Member, OpaqueKeys, Zero},
	DispatchError, KeyTypeId, RuntimeAppPublic,
};
use sp_staking::SessionIndex;
use sp_std::{
	marker::PhantomData,
	ops::{Rem, Sub},
	prelude::*,
};

pub mod historical;

pub use pallet::*;

pub const LOG_TARGET: &str = "runtime::guard-session";

#[derive(Clone, Eq, PartialEq, Default, Debug, TypeInfo, Encode, Decode, MaxEncodedLen)]
#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
pub struct RGuardianInfo {
	pub active: u32,
	pub maximum: u32,
}

mod app {
	use scale_info::prelude::string::String;
	use sp_application_crypto::{app_crypto, key_types::GUARDIAN, sr25519};
	app_crypto!(sr25519, GUARDIAN);
}

sp_application_crypto::with_pair! {
	/// An authority discovery authority keypair.
	pub type GuardianPair = app::Pair;
}

/// An authority discovery authority identifier.
pub type GuardianId = app::Public;

/// An authority discovery authority signature.
pub type GuardianSignature = app::Signature;

impl<T: Config> sp_runtime::BoundToRuntimeAppPublic for Pallet<T> {
	type Public = GuardianId;
}

/// Decides whether the session should be ended.
pub trait ShouldEndSession<BlockNumber> {
	/// Return `true` if the session should be ended.
	fn should_end_session(now: BlockNumber) -> bool;
}

/// Ends the session after a fixed period of blocks.
///
/// The first session will have length of `Offset`, and
/// the following sessions will have length of `Period`.
/// This may prove nonsensical if `Offset` >= `Period`.
pub struct PeriodicSessions<Period, Offset>(PhantomData<(Period, Offset)>);

impl<
		BlockNumber: Rem<Output = BlockNumber> + Sub<Output = BlockNumber> + Zero + PartialOrd,
		Period: Get<BlockNumber>,
		Offset: Get<BlockNumber>,
	> ShouldEndSession<BlockNumber> for PeriodicSessions<Period, Offset>
{
	fn should_end_session(now: BlockNumber) -> bool {
		let offset = Offset::get();
		now >= offset && ((now - offset) % Period::get()).is_zero()
	}
}

/// A trait for managing creation of new guardian set.
pub trait SessionManager<GuardianId> {
	/// Plan a new session, and optionally provide the new guardian set.
	///
	/// Even if the guardian-set is the same as before, if any underlying economic conditions have
	/// changed (i.e. stake-weights), the new guardian set must be returned. This is necessary for
	/// consensus engines making use of the session pallet to issue a guardian-set change so
	/// misbehavior can be provably associated with the new economic conditions as opposed to the
	/// old. The returned guardian set, if any, will not be applied until `new_index`. `new_index`
	/// is strictly greater than from previous call.
	///
	/// The first session start at index 0.
	///
	/// `new_session(session)` is guaranteed to be called before `end_session(session-1)`. In other
	/// words, a new session must always be planned before an ongoing one can be finished.
	fn new_session(new_index: SessionIndex) -> Option<Vec<GuardianId>>;
	/// Same as `new_session`, but it this should only be called at genesis.
	///
	/// The session manager might decide to treat this in a different way. Default impl is simply
	/// using [`new_session`](Self::new_session).
	fn new_session_genesis(new_index: SessionIndex) -> Option<Vec<GuardianId>> {
		Self::new_session(new_index)
	}
	/// End the session.
	///
	/// Because the session pallet can queue guardian set the ending session can be lower than the
	/// last new session index.
	fn end_session(end_index: SessionIndex);
	/// Start an already planned session.
	///
	/// The session start to be used for validation.
	fn start_session(start_index: SessionIndex);
}

impl<A> SessionManager<A> for () {
	fn new_session(_: SessionIndex) -> Option<Vec<A>> {
		None
	}
	fn start_session(_: SessionIndex) {}
	fn end_session(_: SessionIndex) {}
}

/// Handler for session life cycle events.
pub trait SessionHandler<GuardianId> {
	/// All the key type ids this session handler can process.
	///
	/// The order must be the same as it expects them in
	/// [`on_new_session`](Self::on_new_session<Ks>) and
	/// [`on_genesis_session`](Self::on_genesis_session<Ks>).
	const KEY_TYPE_IDS: &'static [KeyTypeId];

	/// The given guardian set will be used for the genesis session.
	/// It is guaranteed that the given guardian set will also be used
	/// for the second session, therefore the first call to `on_new_session`
	/// should provide the same guardian set.
	fn on_genesis_session<Ks: OpaqueKeys>(guardians: &[(GuardianId, Ks)]);

	/// Session set has changed; act appropriately. Note that this can be called
	/// before initialization of your pallet.
	///
	/// `changed` is true whenever any of the session keys or underlying economic
	/// identities or weightings behind those keys has changed.
	fn on_new_session<Ks: OpaqueKeys>(
		changed: bool,
		guardians: &[(GuardianId, Ks)],
		queued_guardians: &[(GuardianId, Ks)],
	);

	/// A notification for end of the session.
	///
	/// Note it is triggered before any [`SessionManager::end_session`] handlers,
	/// so we can still affect the guardian set.
	fn on_before_session_ending() {}

	/// A guardian got disabled. Act accordingly until a new session begins.
	fn on_disabled(guardian_index: u32);
}

#[impl_trait_for_tuples::impl_for_tuples(1, 30)]
#[tuple_types_custom_trait_bound(OneSessionHandler<AId>)]
impl<AId> SessionHandler<AId> for Tuple {
	for_tuples!(
		const KEY_TYPE_IDS: &'static [KeyTypeId] = &[ #( <Tuple::Key as RuntimeAppPublic>::ID ),* ];
	);

	fn on_genesis_session<Ks: OpaqueKeys>(guardians: &[(AId, Ks)]) {
		// NOTE: Disabled as it currently causes issues with the macro expansion.
		log::warn!(target: LOG_TARGET, "OneSessionHandler on_genesis_session macro implementation is disabled due to macro expansion issues.");
		// for_tuples!(
		// 	#(
		// 		let our_keys: Box<dyn Iterator<Item=_>> = Box::new(guardians.iter()
		// 			.filter_map(|k|
		// 				k.1.get::<Tuple::Key>(<Tuple::Key as RuntimeAppPublic>::ID).map(|k1| (&k.0, k1))
		// 			)
		// 		);

		// 		Tuple::on_genesis_session(our_keys);
		// 	)*
		// )
	}

	fn on_new_session<Ks: OpaqueKeys>(
		changed: bool,
		guardians: &[(AId, Ks)],
		queued_guardians: &[(AId, Ks)],
	) {
		// NOTE: Disabled as it currently causes issues with the macro expansion.
		log::warn!(target: LOG_TARGET, "OneSessionHandler on_new_session macro implementation is disabled due to macro expansion issues.");
		// for_tuples!(
		// 	#(
		// 		let our_keys: Box<dyn Iterator<Item=_>> = Box::new(guardians.iter()
		// 			.filter_map(|k|
		// 				k.1.get::<Tuple::Key>(<Tuple::Key as RuntimeAppPublic>::ID).map(|k1| (&k.0, k1))
		// 			));
		// 		let queued_keys: Box<dyn Iterator<Item=_>> = Box::new(queued_guardians.iter()
		// 			.filter_map(|k|
		// 				k.1.get::<Tuple::Key>(<Tuple::Key as RuntimeAppPublic>::ID).map(|k1| (&k.0, k1))
		// 			));
		// 		Tuple::on_new_session(changed, our_keys, queued_keys);
		// 	)*
		// )
	}

	fn on_before_session_ending() {
		for_tuples!( #( Tuple::on_before_session_ending(); )* )
	}

	fn on_disabled(i: u32) {
		for_tuples!( #( Tuple::on_disabled(i); )* )
	}
}


/// `SessionHandler` for tests that use `UintAuthorityId` as `Keys`.
pub struct TestSessionHandler;
impl<AId> SessionHandler<AId> for TestSessionHandler {
	const KEY_TYPE_IDS: &'static [KeyTypeId] = &[sp_runtime::key_types::DUMMY];
	fn on_genesis_session<Ks: OpaqueKeys>(_: &[(AId, Ks)]) {}
	fn on_new_session<Ks: OpaqueKeys>(_: bool, _: &[(AId, Ks)], _: &[(AId, Ks)]) {}
	fn on_before_session_ending() {}
	fn on_disabled(_: u32) {}
}

#[frame_support::pallet]
pub mod pallet {
	use super::*;
	use frame_support::pallet_prelude::*;
	use frame_system::pallet_prelude::*;

	use super::*;

	/// The current storage version.
	const STORAGE_VERSION: StorageVersion = StorageVersion::new(0);

	#[pallet::pallet]
	#[pallet::storage_version(STORAGE_VERSION)]
	#[pallet::without_storage_info]
	pub struct Pallet<T>(_);

	#[pallet::config]
	pub trait Config: frame_system::Config {
		/// The overarching event type.
		type RuntimeEvent: From<Event> + IsType<<Self as frame_system::Config>::RuntimeEvent>;

		/// A stable ID for a guardian.
		type GuardianId: Member
			+ Parameter
			+ MaybeSerializeDeserialize
			+ MaxEncodedLen
			+ TryFrom<Self::AccountId>;

		/// A conversion from account ID to guardian ID.
		///
		/// Its cost must be at most one storage read.
		type ValidatorIdOf: Convert<Self::AccountId, Option<Self::GuardianId>>;

		/// Indicator for when to end the session.
		type ShouldEndSession: ShouldEndSession<BlockNumberFor<Self>>;

		/// Handler for managing new session.
		type SessionManager: SessionManager<Self::GuardianId>;
	}

	#[pallet::genesis_config]
	#[derive(frame_support::DefaultNoBound)]
	pub struct GenesisConfig<T: Config> {
		pub _phantom: PhantomData<T>,
	}

	#[pallet::genesis_build]
	impl<T: Config> BuildGenesisConfig for GenesisConfig<T> {
		fn build(&self) {
			let initial_guardians_0 =
				T::SessionManager::new_session_genesis(0).unwrap_or_else(|| {
					frame_support::print(
						"No initial guardian provided by `SessionManager`, use \
						session config keys to generate initial guardian set.",
					);
					vec![]
				});
			assert!(
				!initial_guardians_0.is_empty(),
				"Empty guardian set for session 0 in genesis block!"
			);

			let initial_guardians_1 = T::SessionManager::new_session_genesis(1)
				.unwrap_or_else(|| initial_guardians_0.clone());
			assert!(
				!initial_guardians_1.is_empty(),
				"Empty guardian set for session 1 in genesis block!"
			);

			// Tell everyone about the genesis session keys
			// T::SessionHandler::on_genesis_session::<T::Keys>(&queued_keys);

			Guardians::<T>::put(initial_guardians_0);

			T::SessionManager::start_session(0);
		}
	}

	/// The current set of guardians.
	#[pallet::storage]
	#[pallet::getter(fn guardians)]
	pub type Guardians<T: Config> = StorageValue<_, Vec<T::GuardianId>, ValueQuery>;

	/// Current index of the session.
	#[pallet::storage]
	#[pallet::getter(fn current_index)]
	pub type CurrentIndex<T> = StorageValue<_, SessionIndex, ValueQuery>;

	/// Indices of disabled guardians.
	///
	/// The vec is always kept sorted so that we can find whether a given guardian is
	/// disabled using binary search. It gets cleared when `on_session_ending` returns
	/// a new set of identities.
	#[pallet::storage]
	#[pallet::getter(fn disabled_guardians)]
	pub type DisabledGuardians<T> = StorageValue<_, Vec<u32>, ValueQuery>;

	#[pallet::event]
	#[pallet::generate_deposit(pub(super) fn deposit_event)]
	pub enum Event {
		/// New session has happened. Note that the argument is the session index, not the
		/// block number as the type might suggest.
		NewSession { session_index: SessionIndex },
	}

	#[pallet::error]
	pub enum Error<T> {
		/// Dummy error.
		Dummy,
	}

	#[pallet::hooks]
	impl<T: Config> Hooks<BlockNumberFor<T>> for Pallet<T> {
		/// Ref: https://github.com/paritytech/polkadot-sdk/blob/935c7f461ae8b4e607f1db16322ea952b438650e/substrate/frame/examples/offchain-worker/src/lib.rs#L539
		///
		/// Note that it's not guaranteed for offchain workers to run on EVERY block, there might
		/// be cases where some blocks are skipped, or for some the worker runs twice (re-orgs),
		/// so the code should be able to handle that.
		/// You can use `Local Storage` API to coordinate runs of the worker.
		fn on_initialize(n: BlockNumberFor<T>) -> Weight {
			log::warn!(target: LOG_TARGET, "on_initialize {:?}", n);
			if T::ShouldEndSession::should_end_session(n) {
				log::warn!(target: LOG_TARGET, "ending session {:?}", n);
				Self::rotate_guard_session();
				T::BlockWeights::get().max_block
			} else {
				// NOTE: the non-database part of the weight for `should_end_session(n)` is
				// included as weight for empty block, the database part is expected to be in
				// cache.
				Weight::zero()
			}
		}
	}
}

impl<T: Config> Pallet<T> {
	/// Move on to next session. Register new guardian set and session keys. Changes to the
	/// guardian set have a session of delay to take effect. This allows for equivocation
	/// punishment after a fork.
	pub fn rotate_guard_session() {
		let session_index = <CurrentIndex<T>>::get();
		log::info!(target: LOG_TARGET, "rotating guard session {:?}", session_index);

		// Inform the session handlers that a session is going to end.
		// T::SessionHandler::on_before_session_ending();
		T::SessionManager::end_session(session_index);

		// Get queued session keys and guardians.

		// if changed {
		// 	// reset disabled guardians
		// 	<DisabledGuardians<T>>::take();
		// }

		// Increment session index.
		let session_index = session_index + 1;
		<CurrentIndex<T>>::put(session_index);

		T::SessionManager::start_session(session_index);

		// Get next guardian set.
		let maybe_next_guardians = T::SessionManager::new_session(session_index + 1);
		log::info!(
			target: LOG_TARGET,
			"Next guardian list for session {}: {:?}",
			session_index + 1,
			maybe_next_guardians
		);
		let (next_guardians, next_identities_changed) =
			if let Some(guardians) = maybe_next_guardians {
				// NOTE: as per the documentation on `OnSessionEnding`, we consider
				// the guardian set as having changed even if the guardians are the
				// same as before, as underlying economic conditions may have changed.
				(guardians, true)
			} else {
				(Guardians::<T>::get(), false)
			};
		log::info!(
			target: LOG_TARGET,
			"Next guardian set for session {}: {:?}",
			session_index + 1,
			next_guardians
		);

		// Record that this happened.
		Self::deposit_event(Event::NewSession { session_index });

		// Tell everyone about the new session keys.
		// T::SessionHandler::on_new_session::<T::Keys>(changed, &session_keys, &queued_amalgamated);
	}
}
