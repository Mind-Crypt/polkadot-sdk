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

//! This module expose one function `P_NPoS` (Payout NPoS) or `compute_total_payout` which returns
//! the total payout for the era given the era duration and the staking rate in NPoS.
//! The staking rate in NPoS is the total amount of tokens staked by nominators and validators,
//! divided by the total token supply.

use sp_runtime::{curve::PiecewiseLinear, traits::AtLeast32BitUnsigned, Perbill};

/// The total payout to all validators (and their nominators) per era and maximum payout.
///
/// Defined as such:
/// `staker-payout = yearly_inflation(npos_token_staked / total_tokens) * total_tokens /
/// era_per_year` `maximum-payout = max_yearly_inflation * total_tokens / era_per_year`
///
/// `era_duration` is expressed in millisecond.
pub fn compute_total_payout<N>(
	yearly_inflation: &PiecewiseLinear<'static>,
	npos_token_staked: N,
	total_tokens: N,
	era_duration: u64,
) -> (N, N, N)
where
	N: AtLeast32BitUnsigned + Clone,
{
	// Milliseconds per year for the Julian year (365.25 days).
	const MILLISECONDS_PER_YEAR: u64 = 1000 * 3600 * 24 * 36525 / 100;

	let portion = Perbill::from_rational(era_duration as u64, MILLISECONDS_PER_YEAR);
	let payout = portion *
		yearly_inflation
			.calculate_for_fraction_times_denominator(npos_token_staked, total_tokens.clone());
	let maximum = portion * (yearly_inflation.maximum * total_tokens);
	let validator_payout = payout.clone() * N::from(2u32) / N::from(3u32);
	let guardian_payout = payout.saturating_sub(validator_payout.clone());
	(validator_payout, guardian_payout, maximum)
}

#[cfg(test)]
mod test {
	use sp_runtime::curve::PiecewiseLinear;

	pallet_staking_reward_curve::build! {
		const I_NPOS: PiecewiseLinear<'static> = curve!(
			min_inflation: 0_025_000,
			max_inflation: 0_100_000,
			ideal_stake: 0_500_000,
			falloff: 0_050_000,
			max_piece_count: 40,
			test_precision: 0_005_000,
		);
	}

	#[test]
	fn npos_curve_is_sensible() {
		const YEAR: u64 = 365 * 24 * 60 * 60 * 1000;

		// check maximum inflation.
		// not 10_000 due to rounding error.
		assert_eq!(super::compute_total_payout(&I_NPOS, 0, 100_000u64, YEAR).2, 9_993);

		// super::I_NPOS.calculate_for_fraction_times_denominator(25, 100)
		assert_eq!(super::compute_total_payout(&I_NPOS, 0, 150_000u64, YEAR).0, 2_498);
		assert_eq!(super::compute_total_payout(&I_NPOS, 7_500, 150_000u64, YEAR).0, 3_248);
		assert_eq!(super::compute_total_payout(&I_NPOS, 37_500, 150_000u64, YEAR).0, 6_246);
		assert_eq!(super::compute_total_payout(&I_NPOS, 60_000, 150_000u64, YEAR).0, 8_494);
		assert_eq!(super::compute_total_payout(&I_NPOS, 75_000, 150_000u64, YEAR).0, 9_993);
		assert_eq!(super::compute_total_payout(&I_NPOS, 90_000, 150_000u64, YEAR).0, 4_380);
		assert_eq!(super::compute_total_payout(&I_NPOS, 112_500, 150_000u64, YEAR).0, 2_733);
		assert_eq!(super::compute_total_payout(&I_NPOS, 142_500, 150_000u64, YEAR).0, 2_513);
		assert_eq!(super::compute_total_payout(&I_NPOS, 150_000, 150_000u64, YEAR).0, 2_505);

		const DAY: u64 = 24 * 60 * 60 * 1000;
		assert_eq!(super::compute_total_payout(&I_NPOS, 37_500, 150_000u64, DAY).0, 17);
		assert_eq!(super::compute_total_payout(&I_NPOS, 75_000, 150_000u64, DAY).0, 27);
		assert_eq!(super::compute_total_payout(&I_NPOS, 112_500, 150_000u64, DAY).0, 7);

		const SIX_HOURS: u64 = 6 * 60 * 60 * 1000;
		assert_eq!(super::compute_total_payout(&I_NPOS, 37_500, 150_000u64, SIX_HOURS).0, 4);
		assert_eq!(super::compute_total_payout(&I_NPOS, 75_000, 150_000u64, SIX_HOURS).0, 6);
		assert_eq!(super::compute_total_payout(&I_NPOS, 112_500, 150_000u64, SIX_HOURS).0, 2);

		const HOUR: u64 = 60 * 60 * 1000;
		assert_eq!(
			super::compute_total_payout(
				&I_NPOS,
				3_750_000_000_000_000_000_000_000_000u128,
				7_500_000_000_000_000_000_000_000_000u128,
				HOUR
			)
			.0,
			57_038_500_000_000_000_000_000
		);
	}
}
