// This file is part of Substrate.

// Copyright (C) Parity Technologies (UK) Ltd.
// SPDX-License-Identifier: Apache-2.0

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// 	http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

//! On-chain logic to store a guardian-set for deferred validation using an off-chain worker.

use codec::Encode;
use sp_runtime::traits::Convert;
use sp_std::prelude::*;

use super::{shared, Config as HistoricalConfig};
use crate::{Config as SessionConfig, Pallet as GuardianModule, SessionIndex};

/// Store the guardian-set associated to the `session_index` to the off-chain database.
///
/// Further processing is then done [`off-chain side`](super::offchain).
///
/// **Must** be called from on-chain, i.e. a call that originates from
/// `on_initialize(..)` or `on_finalization(..)`.
/// **Must** be called during the session, which guardian-set is to be stored for further
/// off-chain processing. Otherwise the `FullIdentification` might not be available.
pub fn store_session_guardian_set_to_offchain<T: HistoricalConfig + SessionConfig>(
	session_index: SessionIndex,
) {
	let encoded_guardian_list = <GuardianModule<T>>::guardians()
		.into_iter()
		.filter_map(|guardian_id: <T as SessionConfig>::GuardianId| {
			let full_identification =
				<<T as HistoricalConfig>::FullIdentificationOf>::convert(guardian_id.clone());
			full_identification.map(|full_identification| (guardian_id, full_identification))
		})
		.collect::<Vec<_>>();

	encoded_guardian_list.using_encoded(|encoded_guardian_list| {
		let derived_key = shared::derive_key(shared::PREFIX, session_index);
		sp_io::offchain_index::set(derived_key.as_slice(), encoded_guardian_list);
	});
}

/// Store the guardian set associated to the _current_ session index to the off-chain database.
///
/// See [`store_session_guardian_set_to_offchain`]
/// for further information and restrictions.
pub fn store_current_session_guardian_set_to_offchain<T: HistoricalConfig + SessionConfig>() {
	store_session_guardian_set_to_offchain::<T>(<GuardianModule<T>>::current_index());
}
