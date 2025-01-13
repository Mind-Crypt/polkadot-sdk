window.BENCHMARK_DATA = {
  "lastUpdate": 1736793240671,
  "repoUrl": "https://github.com/paritytech/polkadot-sdk",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "41779041+alvicsam@users.noreply.github.com",
            "name": "Alexander Samusev",
            "username": "alvicsam"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "721f6d97613b0ece9c8414e8ec8ba31d2f67d40c",
          "message": "[WIP] Fix networking-benchmarks (#7036)\n\ncc https://github.com/paritytech/ci_cd/issues/1094",
          "timestamp": "2025-01-03T13:19:18Z",
          "tree_id": "bec3589885e7e27d15b93c25e9283008397e0049",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/721f6d97613b0ece9c8414e8ec8ba31d2f67d40c"
        },
        "date": 1735914628128,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/64B",
            "value": 17243400,
            "range": "± 496233",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/512B",
            "value": 17484119,
            "range": "± 365774",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/4KB",
            "value": 18688949,
            "range": "± 313839",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/64KB",
            "value": 22455693,
            "range": "± 428129",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/256KB",
            "value": 5322994,
            "range": "± 170673",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/2MB",
            "value": 31013751,
            "range": "± 1114317",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/16MB",
            "value": 218501431,
            "range": "± 13972729",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/128MB",
            "value": 1946804769,
            "range": "± 96309764",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yangqiwei97@gmail.com",
            "name": "Qiwei Yang",
            "username": "qiweiii"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b4f131b000e01f1aca3f023937a36dcc281d5e2",
          "message": "Replace duplicated whitelist with whitelisted_storage_keys (#7024)\n\nrelated issue: #7018\n\nreplaced duplicated whitelists with\n`AllPalletsWithSystem::whitelisted_storage_keys();` in this PR\n\n---------\n\nCo-authored-by: Guillaume Thiolliere <gui.thiolliere@gmail.com>\nCo-authored-by: Bastian Köcher <git@kchr.de>",
          "timestamp": "2025-01-03T22:22:12Z",
          "tree_id": "152f965d219452ec180463a016d757b195bd79ff",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/0b4f131b000e01f1aca3f023937a36dcc281d5e2"
        },
        "date": 1735947378032,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/64B",
            "value": 17771421,
            "range": "± 379395",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/512B",
            "value": 17796252,
            "range": "± 375294",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/4KB",
            "value": 19192305,
            "range": "± 550825",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/64KB",
            "value": 23424069,
            "range": "± 618808",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/256KB",
            "value": 6000664,
            "range": "± 322927",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/2MB",
            "value": 35457468,
            "range": "± 1762375",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/16MB",
            "value": 238664091,
            "range": "± 5449223",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/128MB",
            "value": 2169025360,
            "range": "± 170481694",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gui.thiolliere@gmail.com",
            "name": "Guillaume Thiolliere",
            "username": "gui1117"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "b5a5ac4487890046d226bedb0238eaccb423ae42",
          "message": "Make `TransactionExtension` tuple of tuple transparent for implication (#7028)\n\nCurrently `(A, B, C)` and `((A, B), C)` change the order of implications\nin the transaction extension pipeline. This order is not accessible in\nthe metadata, because the metadata is just a vector of transaction\nextension, the nested structure is not visible.\n\nThis PR make the implementation for tuple of `TransactionExtension`\nbetter for tuple of tuple. `(A, B, C)` and `((A, B), C)` don't change\nthe implication for the validation A.\n\nThis is a breaking change but only when using the trait\n`TransactionExtension` the code implementing the trait is not breaking\n(surprising rust behavior but fine).\n\n---------\n\nCo-authored-by: command-bot <>\nCo-authored-by: Bastian Köcher <git@kchr.de>",
          "timestamp": "2025-01-04T02:03:30Z",
          "tree_id": "7ceca99999c8a5065cee89a611c7b74b87f097cd",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/b5a5ac4487890046d226bedb0238eaccb423ae42"
        },
        "date": 1735960720711,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/64B",
            "value": 17906473,
            "range": "± 402710",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/512B",
            "value": 18028249,
            "range": "± 376977",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/4KB",
            "value": 19607414,
            "range": "± 347759",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/64KB",
            "value": 23842723,
            "range": "± 674082",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/256KB",
            "value": 5669355,
            "range": "± 326213",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/2MB",
            "value": 33259681,
            "range": "± 1448902",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/16MB",
            "value": 254199472,
            "range": "± 17716451",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/128MB",
            "value": 2206601933,
            "range": "± 183595326",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gui.thiolliere@gmail.com",
            "name": "Guillaume Thiolliere",
            "username": "gui1117"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "63c73bf6db1c8982ad3f2310a40799c5987f8900",
          "message": "Implement cumulus StorageWeightReclaim as wrapping transaction extension + frame system ReclaimWeight (#6140)\n\n(rebasing of https://github.com/paritytech/polkadot-sdk/pull/5234)\n\n## Issues:\n\n* Transaction extensions have weights and refund weight. So the\nreclaiming of unused weight must happen last in the transaction\nextension pipeline. Currently it is inside `CheckWeight`.\n* cumulus storage weight reclaim transaction extension misses the proof\nsize of logic happening prior to itself.\n\n## Done:\n\n* a new storage `ExtrinsicWeightReclaimed` in frame-system. Any logic\nwhich attempts to do some reclaim must use this storage to avoid double\nreclaim.\n* a new function `reclaim_weight` in frame-system pallet: info and post\ninfo in arguments, read the already reclaimed weight, calculate the new\nunused weight from info and post info. do the more accurate reclaim if\nhigher.\n* `CheckWeight` is unchanged and still reclaim the weight in post\ndispatch\n* `ReclaimWeight` is a new transaction extension in frame system. For\nsolo chains it must be used last in the transactino extension pipeline.\nIt does the final most accurate reclaim\n* `StorageWeightReclaim` is moved from cumulus primitives into its own\npallet (in order to define benchmark) and is changed into a wrapping\ntransaction extension.\nIt does the recording of proof size and does the reclaim using this\nrecording and the info and post info. So parachains don't need to use\n`ReclaimWeight`. But also if they use it, there is no bug.\n\n    ```rust\n  /// The TransactionExtension to the basic transaction logic.\npub type TxExtension =\ncumulus_pallet_weight_reclaim::StorageWeightReclaim<\n         Runtime,\n         (\n                 frame_system::CheckNonZeroSender<Runtime>,\n                 frame_system::CheckSpecVersion<Runtime>,\n                 frame_system::CheckTxVersion<Runtime>,\n                 frame_system::CheckGenesis<Runtime>,\n                 frame_system::CheckEra<Runtime>,\n                 frame_system::CheckNonce<Runtime>,\n                 frame_system::CheckWeight<Runtime>,\npallet_transaction_payment::ChargeTransactionPayment<Runtime>,\n                 BridgeRejectObsoleteHeadersAndMessages,\n\n(bridge_to_rococo_config::OnBridgeHubWestendRefundBridgeHubRococoMessages,),\nframe_metadata_hash_extension::CheckMetadataHash<Runtime>,\n         ),\n  >;\n  ```\n\n---------\n\nCo-authored-by: GitHub Action <action@github.com>\nCo-authored-by: georgepisaltu <52418509+georgepisaltu@users.noreply.github.com>\nCo-authored-by: Oliver Tale-Yazdi <oliver.tale-yazdi@parity.io>\nCo-authored-by: Sebastian Kunert <skunert49@gmail.com>\nCo-authored-by: command-bot <>",
          "timestamp": "2025-01-05T03:25:52Z",
          "tree_id": "92e44a9c9c2bddb2fc5b835eb4da173f2b8a4077",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/63c73bf6db1c8982ad3f2310a40799c5987f8900"
        },
        "date": 1736052015632,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/64B",
            "value": 19360222,
            "range": "± 427025",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/512B",
            "value": 19605168,
            "range": "± 371217",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/4KB",
            "value": 20540575,
            "range": "± 326460",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/64KB",
            "value": 24560635,
            "range": "± 359968",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/256KB",
            "value": 5914085,
            "range": "± 229219",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/2MB",
            "value": 39788757,
            "range": "± 1756332",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/16MB",
            "value": 269388417,
            "range": "± 9017069",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/128MB",
            "value": 2050114568,
            "range": "± 261694105",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "taozui472@gmail.com",
            "name": "taozui472",
            "username": "taozui472"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6eca7647dc99dd0e78aacb740ba931e99e6ba71f",
          "message": "chore: delete repeat words (#7034)\n\nCo-authored-by: Dónal Murray <donal.murray@parity.io>",
          "timestamp": "2025-01-06T08:44:06Z",
          "tree_id": "abf7ac90d5af0ebd540aee8c38f228c769112504",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/6eca7647dc99dd0e78aacb740ba931e99e6ba71f"
        },
        "date": 1736157315336,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/64B",
            "value": 18518156,
            "range": "± 286241",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/512B",
            "value": 18459913,
            "range": "± 455375",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/4KB",
            "value": 19408558,
            "range": "± 305986",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/64KB",
            "value": 23380746,
            "range": "± 399078",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/256KB",
            "value": 5245347,
            "range": "± 125418",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/2MB",
            "value": 32064176,
            "range": "± 1157857",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/16MB",
            "value": 247078269,
            "range": "± 9462816",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/128MB",
            "value": 2038311863,
            "range": "± 101668256",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alin@parity.io",
            "name": "Alin Dima",
            "username": "alindima"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ffa90d0f2b9b4438e2f0fa3d4d532923d7ba978f",
          "message": "fix chunk fetching network compatibility zombienet test (#6988)\n\nFix this zombienet test\n\nIt was failing because in\nhttps://github.com/paritytech/polkadot-sdk/pull/6452 I enabled the v2\nreceipts for testnet genesis,\nso the collators started sending v2 receipts with zeroed collator\nsignatures to old validators that were still checking those signatures\n(which lead to disputes, since new validators considered the candidates\nvalid).\n\nThe fix is to also use an old image for collators, so that we don't\ncreate v2 receipts.\n\nWe cannot remove this test yet because collators also perform chunk\nrecovery, so until all collators are upgraded, we need to maintain this\ncompatibility with the old protocol version (which is also why\nsystematic recovery was not yet enabled)",
          "timestamp": "2025-01-06T09:57:29Z",
          "tree_id": "09edfb7ad810cd2c4e6d7ce014ae8e109aae45ec",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/ffa90d0f2b9b4438e2f0fa3d4d532923d7ba978f"
        },
        "date": 1736162216242,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/64B",
            "value": 18231900,
            "range": "± 476847",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/512B",
            "value": 18591444,
            "range": "± 524627",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/4KB",
            "value": 19871592,
            "range": "± 642445",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/64KB",
            "value": 24544356,
            "range": "± 951555",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/256KB",
            "value": 6204546,
            "range": "± 387923",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/2MB",
            "value": 36951518,
            "range": "± 2115986",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/16MB",
            "value": 261906263,
            "range": "± 14637725",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/128MB",
            "value": 2314619027,
            "range": "± 300054232",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "skunert49@gmail.com",
            "name": "Sebastian Kunert",
            "username": "skunert"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "1dcff3df39b85fa43c7ca1dafe10f802cd812234",
          "message": "Avoid incomplete block import pipeline with full verifying import queue (#7050)\n\n## Problem\nIn the parachain template we use the [fully verifying import queue\n\n](https://github.com/paritytech/polkadot-sdk/blob/3d9eddbeb262277c79f2b93b9efb5af95a3a35a8/cumulus/client/consensus/aura/src/equivocation_import_queue.rs#L224-L224)\nwhich does extra equivocation checks.\n\nHowever, when we import a warp synced block with state, we don't set a\nfork choice, leading to an incomplete block import pipeline and error\nhere:\nhttps://github.com/paritytech/polkadot-sdk/blob/3d9eddbeb262277c79f2b93b9efb5af95a3a35a8/substrate/client/service/src/client/client.rs#L488-L488\n\nThis renders warp sync useless for chains using this import queue.\n\n## Fix\nThe fix is to always import a block with state as best block, as we\nalready do in the normal Aura Verifier.\nIn a follow up we should also take another look into unifying the usage\nof the different import queues.\n\nfixes https://github.com/paritytech/project-mythical/issues/256\n\n---------\n\nCo-authored-by: command-bot <>",
          "timestamp": "2025-01-06T13:09:06Z",
          "tree_id": "7963451289ed3c1109e365c661371697a9d65d03",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/1dcff3df39b85fa43c7ca1dafe10f802cd812234"
        },
        "date": 1736173094395,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/64B",
            "value": 16988649,
            "range": "± 243087",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/512B",
            "value": 17163058,
            "range": "± 273688",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/4KB",
            "value": 18275590,
            "range": "± 242814",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/64KB",
            "value": 22010132,
            "range": "± 331330",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/256KB",
            "value": 5107806,
            "range": "± 105368",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/2MB",
            "value": 29263117,
            "range": "± 732023",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/16MB",
            "value": 208360938,
            "range": "± 5879735",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/128MB",
            "value": 2004721601,
            "range": "± 169827432",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "oliver.tale-yazdi@parity.io",
            "name": "Oliver Tale-Yazdi",
            "username": "ggwpez"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "568231a9a85d94954c002532a0f4351a3bb59e83",
          "message": "[core-fellowship] Add permissionless import_member (#7030)\n\nChanges:\n- Add call `import_member` to the core-fellowship pallet.\n- Move common logic between `import` and `import_member` into\n`do_import`.\n\n## `import_member`\n\nCan be used to induct an arbitrary collective member and is callable by\nany signed origin. Pays no fees upon success.\nThis is useful in the case that members did not induct themselves and\nare idling on their rank.\n\n---------\n\nSigned-off-by: Oliver Tale-Yazdi <oliver.tale-yazdi@parity.io>\nCo-authored-by: Bastian Köcher <git@kchr.de>\nCo-authored-by: command-bot <>",
          "timestamp": "2025-01-06T13:52:07Z",
          "tree_id": "d1e2d74ae5b93d0e9604eeeaca75c9b9d82569a9",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/568231a9a85d94954c002532a0f4351a3bb59e83"
        },
        "date": 1736178119494,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/64B",
            "value": 18128978,
            "range": "± 434166",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/512B",
            "value": 18306660,
            "range": "± 686358",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/4KB",
            "value": 18926907,
            "range": "± 421995",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/64KB",
            "value": 23033271,
            "range": "± 426547",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/256KB",
            "value": 5222637,
            "range": "± 140025",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/2MB",
            "value": 30113118,
            "range": "± 811958",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/16MB",
            "value": 237846203,
            "range": "± 18053490",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/128MB",
            "value": 2073830289,
            "range": "± 115973754",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "3776356370@qq.com",
            "name": "jasmy",
            "username": "jasmyhigh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6b6c70b0165b2c38e239eb740a7561e9ed4570de",
          "message": "Fix typos (#7027)\n\nCo-authored-by: Dónal Murray <donal.murray@parity.io>",
          "timestamp": "2025-01-06T19:16:08Z",
          "tree_id": "abcb5e8f549fd7a7da9d45937584e1de89eb613e",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/6b6c70b0165b2c38e239eb740a7561e9ed4570de"
        },
        "date": 1736195422967,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/64B",
            "value": 18089519,
            "range": "± 373428",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/512B",
            "value": 18749405,
            "range": "± 346210",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/4KB",
            "value": 20363073,
            "range": "± 338558",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/64KB",
            "value": 24008737,
            "range": "± 477491",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/256KB",
            "value": 5540955,
            "range": "± 156486",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/2MB",
            "value": 33466866,
            "range": "± 1182922",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/16MB",
            "value": 247746785,
            "range": "± 13227748",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/128MB",
            "value": 2112305110,
            "range": "± 138039817",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "conr2d@proton.me",
            "name": "Jeeyong Um",
            "username": "conr2d"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c139739868eddbda495d642219a57602f63c18f5",
          "message": "Remove usage of `sp-std` from Substrate (#7043)\n\n# Description\n\nThis PR removes usage of deprecated `sp-std` from Substrate. (following\nPR of #5010)\n\n## Integration\n\nThis PR doesn't remove re-exported `sp_std` from any crates yet, so\ndownstream projects using re-exported `sp_std` will not be affected.\n\n## Review Notes\n\nThe existing code using `sp-std` is refactored to use `alloc` and `core`\ndirectly. The key-value maps are instantiated from a vector of tuples\ndirectly instead of using `sp_std::map!` macro.\n\n`sp_std::Writer` is a helper type to use `Vec<u8>` with\n`core::fmt::Write` trait. This PR copied it into `sp-runtime`, because\nall crates using `sp_std::Writer` (including `sp-runtime` itself,\n`frame-support`, etc.) depend on `sp-runtime`.\n\nIf this PR is merged, I would write following PRs to remove remaining\nusage of `sp-std` from `bridges` and `cumulus`.\n\n---------\n\nCo-authored-by: command-bot <>\nCo-authored-by: Guillaume Thiolliere <guillaume.thiolliere@parity.io>\nCo-authored-by: Bastian Köcher <info@kchr.de>\nCo-authored-by: Bastian Köcher <git@kchr.de>",
          "timestamp": "2025-01-07T07:57:06Z",
          "tree_id": "e2af4afb74389012a6222e82ffced1d704f0788c",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/c139739868eddbda495d642219a57602f63c18f5"
        },
        "date": 1736241113557,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/64B",
            "value": 18516064,
            "range": "± 285748",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/512B",
            "value": 18734121,
            "range": "± 399940",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/4KB",
            "value": 19540417,
            "range": "± 238677",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/64KB",
            "value": 23533396,
            "range": "± 587711",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/256KB",
            "value": 5314302,
            "range": "± 121738",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/2MB",
            "value": 30984870,
            "range": "± 769874",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/16MB",
            "value": 229765083,
            "range": "± 9143878",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/128MB",
            "value": 2040769205,
            "range": "± 134873103",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "14218860+iulianbarbu@users.noreply.github.com",
            "name": "Iulian Barbu",
            "username": "iulianbarbu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1059be75c36634dff26a9b8711447a0c66926582",
          "message": "workflows: add debug input for sync templates act (#7057)\n\n# Description\n\nIntroduce a workflow `debug` input for `misc-sync-templates.yml` and use\nit instead of the `runner.debug` context variable, which is set to '1'\nwhen `ACTIONS_RUNNER_DEBUG` env/secret is set\n(https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/troubleshooting-workflows/enabling-debug-logging#enabling-runner-diagnostic-logging).\nThis is useful for controlling when to show debug prints.\n\n## Integration\n\nN/A\n\n## Review Notes\n\nUsing `runner.debug` requires setting the `ACTIONS_RUNNER_DEBUG` env\nvariable, but setting it to false/true is doable through an input, or by\nimporting a variable from the github env file (which requires a code\nchange). This input alone can replace the entire `runner.debug` +\n`ACTIONS_RUNNER_DEBUG` setup, which simplifies debug printing, but it\ndoesn't look as standard as `runner.debug`. I don't think it is a big\ndeal overall, for this action alone, but happy to account for other\nopinions.\n\nNote: setting the `ACTIONS_RUNNER_DEBUG` whenever we want in a separate\nbranch wouldn't be useful because we can not run the\n`misc-sync-templates.yml` action from other branch than `master` (due to\nbranch protection rules), so we need to expose this input to be\ncontrollable from `master`.\n\n---------\n\nSigned-off-by: Iulian Barbu <iulian.barbu@parity.io>",
          "timestamp": "2025-01-07T09:14:13Z",
          "tree_id": "ffe876cd067ff686e941927f9a3d09c764674c94",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/1059be75c36634dff26a9b8711447a0c66926582"
        },
        "date": 1736245520387,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/64B",
            "value": 17948231,
            "range": "± 441277",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/512B",
            "value": 18291261,
            "range": "± 439265",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/4KB",
            "value": 19691346,
            "range": "± 364100",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/64KB",
            "value": 23983517,
            "range": "± 638831",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/256KB",
            "value": 5851992,
            "range": "± 357602",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/2MB",
            "value": 36852846,
            "range": "± 1920278",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/16MB",
            "value": 256980059,
            "range": "± 16994794",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/128MB",
            "value": 2343084054,
            "range": "± 189242042",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ludovic.domingues96@gmail.com",
            "name": "Ludovic_Domingues",
            "username": "Krayt78"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "baa3bcc60ddab6a700a713e241ad6599feb046dd",
          "message": "Fix defensive! macro to be used in umbrella crates (#7069)\n\nPR for #7054 \n\nReplaced frame_support with $crate from @gui1117 's suggestion to fix\nthe dependency issue\n\n---------\n\nCo-authored-by: command-bot <>",
          "timestamp": "2025-01-07T13:28:28Z",
          "tree_id": "5d4e70f7cd0c9f24448bd2fd2fff6e915f1e2493",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/baa3bcc60ddab6a700a713e241ad6599feb046dd"
        },
        "date": 1736262607435,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/64B",
            "value": 17340880,
            "range": "± 473502",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/512B",
            "value": 17758477,
            "range": "± 368188",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/4KB",
            "value": 18695993,
            "range": "± 262157",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/64KB",
            "value": 22949200,
            "range": "± 439613",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/256KB",
            "value": 5493384,
            "range": "± 262929",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/2MB",
            "value": 35276995,
            "range": "± 1703109",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/16MB",
            "value": 245747686,
            "range": "± 15486665",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/128MB",
            "value": 2144684907,
            "range": "± 176735510",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "14218860+iulianbarbu@users.noreply.github.com",
            "name": "Iulian Barbu",
            "username": "iulianbarbu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a5780527041e39268fc8b05b0f3d098cde204883",
          "message": "release: unset SKIP_WASM_BUILD (#7074)\n\n# Description\n\nSeems like I added `SKIP_WASM_BUILD=1` 💀 for arch64 binaries, which\nresults in various errors like:\nhttps://github.com/paritytech/polkadot-sdk/issues/6966. This PR unsets\nthe variable.\n\nCloses #6966.\n\n## Integration\n\nPeople who found workarounds as in #6966 can consume the fixed binaries\nagain.\n\n## Review Notes\n\nI introduced SKIP_WASM_BUILD=1 for some reason for aarch64 (probably to\nspeed up testing) and forgot to remove it. It slipped through and\ninterfered with `stable2412` release artifacts. Needs backporting to\n`stable2412` and then rebuilding/overwriting the aarch64 artifacts.\n\n---------\n\nSigned-off-by: Iulian Barbu <iulian.barbu@parity.io>",
          "timestamp": "2025-01-07T15:25:16Z",
          "tree_id": "893a3df0d4e6361dbfdaf01ae5d38d5d4c987ee4",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/a5780527041e39268fc8b05b0f3d098cde204883"
        },
        "date": 1736268545208,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/64B",
            "value": 18467008,
            "range": "± 424226",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/512B",
            "value": 18882123,
            "range": "± 396137",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/4KB",
            "value": 20201234,
            "range": "± 561997",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/64KB",
            "value": 25061321,
            "range": "± 772038",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/256KB",
            "value": 6360589,
            "range": "± 420166",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/2MB",
            "value": 39938061,
            "range": "± 1650485",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/16MB",
            "value": 300148937,
            "range": "± 7831357",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/128MB",
            "value": 2229257643,
            "range": "± 192909986",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ludovic.domingues96@gmail.com",
            "name": "Ludovic_Domingues",
            "username": "Krayt78"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "645878a27115db52e5d63115699b4bbb89034067",
          "message": "adding warning when using default substrateWeight in production (#7046)\n\nPR for #3581 \nAdded a cfg to show a deprecated warning message when using std\n\n---------\n\nCo-authored-by: command-bot <>\nCo-authored-by: Adrian Catangiu <adrian@parity.io>",
          "timestamp": "2025-01-07T17:17:10Z",
          "tree_id": "975fb5e3dc7c97a7455b793258611ed4568d9131",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/645878a27115db52e5d63115699b4bbb89034067"
        },
        "date": 1736274429312,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/64B",
            "value": 17277121,
            "range": "± 278632",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/512B",
            "value": 17517088,
            "range": "± 303186",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/4KB",
            "value": 18580193,
            "range": "± 262033",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/64KB",
            "value": 22495472,
            "range": "± 787771",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/256KB",
            "value": 5243113,
            "range": "± 238907",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/2MB",
            "value": 33190734,
            "range": "± 1227202",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/16MB",
            "value": 265761054,
            "range": "± 8759005",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/128MB",
            "value": 1969552896,
            "range": "± 156706208",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alistair.singh7@gmail.com",
            "name": "Alistair Singh",
            "username": "alistair-singh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4059282fc7b6ec965cc22a9a0df5920a4f3a4101",
          "message": "Snowbridge: Support bridging native ETH (#6855)\n\nChanges:\n1. Use the 0x0000000000000000000000000000000000000000 token address as\nNative ETH.\n2. Convert it to/from `{ parents: 2, interior:\nX1(GlobalConsensus(Ethereum{chain_id: 1})) }` when encountered.\n\nOnchain changes:\nThis will require a governance request to register native ETH (with the\nabove location) in the foreign assets pallet and make it sufficient.\n\nRelated solidity changes:\nhttps://github.com/Snowfork/snowbridge/pull/1354\n\nTODO:\n- [x] Emulated Tests\n\n---------\n\nCo-authored-by: Vincent Geddes <117534+vgeddes@users.noreply.github.com>\nCo-authored-by: Bastian Köcher <git@kchr.de>\nCo-authored-by: Bastian Köcher <info@kchr.de>",
          "timestamp": "2025-01-07T21:23:45Z",
          "tree_id": "3f15f3f4ba924ca1b7785e747d2d5ebca3574d75",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/4059282fc7b6ec965cc22a9a0df5920a4f3a4101"
        },
        "date": 1736289306372,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/64B",
            "value": 17741432,
            "range": "± 442892",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/512B",
            "value": 18107378,
            "range": "± 447782",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/4KB",
            "value": 19190822,
            "range": "± 383803",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/64KB",
            "value": 23731634,
            "range": "± 617825",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/256KB",
            "value": 6106786,
            "range": "± 382171",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/2MB",
            "value": 34397002,
            "range": "± 1471693",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/16MB",
            "value": 257301185,
            "range": "± 18021515",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/128MB",
            "value": 2126395657,
            "range": "± 172615662",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "wenmujia@gmail.com",
            "name": "wmjae",
            "username": "wmjae"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cdf107de700388a52a17b2fb852c98420c78278e",
          "message": "fix typo (#7096)\n\nCo-authored-by: Dónal Murray <donalm@seadanda.dev>",
          "timestamp": "2025-01-09T11:51:38Z",
          "tree_id": "3a346971e1d34265114adf78bf999eaa0b5b158d",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/cdf107de700388a52a17b2fb852c98420c78278e"
        },
        "date": 1736427882060,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/64B",
            "value": 17165542,
            "range": "± 246927",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/512B",
            "value": 17429537,
            "range": "± 229073",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/4KB",
            "value": 18597221,
            "range": "± 291284",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/64KB",
            "value": 22336631,
            "range": "± 366341",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/256KB",
            "value": 5109933,
            "range": "± 108661",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/2MB",
            "value": 30190842,
            "range": "± 859780",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/16MB",
            "value": 224465248,
            "range": "± 3250385",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/128MB",
            "value": 1924914341,
            "range": "± 103358935",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "32275622+seemantaggarwal@users.noreply.github.com",
            "name": "seemantaggarwal",
            "username": "seemantaggarwal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "2f179585229880a596ab3b8b04a4be6c7db15efa",
          "message": "Migrating salary pallet to use umbrella crate (#7048)\n\n# Description\n\nMigrating salary pallet to use umbrella crate. It is a follow-up from\nhttps://github.com/paritytech/polkadot-sdk/pull/7025\nWhy did I create this new branch? \nI did this, so that the unnecessary cargo fmt changes from the previous\nbranch are discarded and hence opened this new PR.\n\n\n\n## Review Notes\n\nThis PR migrates pallet-salary to use the umbrella crate.\n\nAdded change: Explanation requested for why `TestExternalities` was\nreplaced by `TestState` as testing_prelude already includes it\n`pub use sp_io::TestExternalities as TestState;`\n\n\nI have also modified the defensive! macro to be compatible with umbrella\ncrate as it was being used in the salary pallet",
          "timestamp": "2025-01-09T14:48:59Z",
          "tree_id": "80ad6cace63f730e02467bda8a02b408a11f6a18",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/2f179585229880a596ab3b8b04a4be6c7db15efa"
        },
        "date": 1736438411908,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/64B",
            "value": 17169775,
            "range": "± 230560",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/512B",
            "value": 17400000,
            "range": "± 304617",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/4KB",
            "value": 18478178,
            "range": "± 311391",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/small_payload/libp2p/serially/64KB",
            "value": 22220898,
            "range": "± 599016",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/256KB",
            "value": 5036366,
            "range": "± 136499",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/2MB",
            "value": 30203242,
            "range": "± 874032",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/16MB",
            "value": 240212897,
            "range": "± 15826734",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_benchmark/large_payload/libp2p/serially/128MB",
            "value": 1882128148,
            "range": "± 142654145",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "request_response_protocol": [
      {
        "commit": {
          "author": {
            "email": "eresav@me.com",
            "name": "Andrei Eres",
            "username": "AndreiEres"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "6bfe4523acf597ef47dfdcefd11b0eee396bc5c5",
          "message": "networking-bench: Update benchmarks payload (#7056)\n\n# Description\n\n- Used 10 notifications and requests within the benchmarks. After moving\nthe network workers' initialization out of the benchmarks, it is\nacceptable to use this small number without losing precision.\n- Removed the 128MB payload that consumed most of the execution time.",
          "timestamp": "2025-01-09T18:20:07Z",
          "tree_id": "903477b959e883dd8daeff00beda8441cd55d58d",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/6bfe4523acf597ef47dfdcefd11b0eee396bc5c5"
        },
        "date": 1736449911762,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17163862,
            "range": "± 170203",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17446070,
            "range": "± 164252",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 18730101,
            "range": "± 98579",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 22547421,
            "range": "± 293148",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 50727588,
            "range": "± 643035",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 300331693,
            "range": "± 3948705",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2091391647,
            "range": "± 54342059",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14256263,
            "range": "± 109675",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14412977,
            "range": "± 77653",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 14771320,
            "range": "± 98653",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 18936940,
            "range": "± 137625",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 49662562,
            "range": "± 413487",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 291586625,
            "range": "± 4639808",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2308878584,
            "range": "± 8781236",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "franciscoaguirreperez@gmail.com",
            "name": "Francisco Aguirre",
            "username": "franciscoaguirre"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "e051f3edd3d6a0699a9261c8f8985d2e8e95c276",
          "message": "Add XCM benchmarks to collectives-westend (#6820)\n\nCollectives-westend was using `FixedWeightBounds`, meaning the same\nweight per instruction. Added proper benchmarks.\n\n---------\n\nCo-authored-by: GitHub Action <action@github.com>\nCo-authored-by: Branislav Kontur <bkontur@gmail.com>",
          "timestamp": "2025-01-10T02:20:01Z",
          "tree_id": "442535aa9d038b646a8bc597f5baf489661c544a",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/e051f3edd3d6a0699a9261c8f8985d2e8e95c276"
        },
        "date": 1736478677328,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17513611,
            "range": "± 231894",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17747614,
            "range": "± 158066",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19342746,
            "range": "± 92774",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23054691,
            "range": "± 164988",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 52100650,
            "range": "± 407725",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 313787855,
            "range": "± 2904933",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2337544694,
            "range": "± 119956966",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14631080,
            "range": "± 84241",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14840693,
            "range": "± 117272",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15424874,
            "range": "± 209023",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19730480,
            "range": "± 136949",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 50191870,
            "range": "± 441053",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 299081098,
            "range": "± 1880044",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2405092455,
            "range": "± 9514900",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "git@kchr.de",
            "name": "Bastian Köcher",
            "username": "bkchr"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "738282a2c4127f5e6a1c8d50235ba126b9f05025",
          "message": "Fix incorrected deprecated message (#7118)",
          "timestamp": "2025-01-11T10:32:50Z",
          "tree_id": "b2498b9f12218fdc6dbd1e34243d44889f118bc3",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/738282a2c4127f5e6a1c8d50235ba126b9f05025"
        },
        "date": 1736594645848,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18044700,
            "range": "± 153767",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 18331354,
            "range": "± 167473",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 20147906,
            "range": "± 344420",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23977172,
            "range": "± 319112",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 53129643,
            "range": "± 635022",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 317087858,
            "range": "± 4521386",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2413386156,
            "range": "± 31594654",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 15036676,
            "range": "± 118681",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 15074889,
            "range": "± 104668",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15857748,
            "range": "± 235167",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 20039519,
            "range": "± 173065",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 50820511,
            "range": "± 692420",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 308376455,
            "range": "± 3036490",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2460718408,
            "range": "± 6624429",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "git@kchr.de",
            "name": "Bastian Köcher",
            "username": "bkchr"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d8e3a434ea1e760190456e8df1359aa8137e16a",
          "message": "reference-docs: Start `state` and mention well known keys (#7037)\n\nCloses: https://github.com/paritytech/polkadot-sdk/issues/7033",
          "timestamp": "2025-01-13T12:32:01Z",
          "tree_id": "3dd18660d4fd66b37863cb6862e37aa0dcd4908c",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/7d8e3a434ea1e760190456e8df1359aa8137e16a"
        },
        "date": 1736775176661,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17639219,
            "range": "± 234844",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17906936,
            "range": "± 188639",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19398134,
            "range": "± 139774",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23110768,
            "range": "± 179179",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 55345609,
            "range": "± 1069731",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 320737970,
            "range": "± 8971466",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2344482664,
            "range": "± 65530518",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14592616,
            "range": "± 191900",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14855276,
            "range": "± 112557",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 15342068,
            "range": "± 151346",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 19772082,
            "range": "± 159814",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 52121899,
            "range": "± 296503",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 318478991,
            "range": "± 3338407",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2513740445,
            "range": "± 22113207",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pgherveou@gmail.com",
            "name": "PG Herveou",
            "username": "pgherveou"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ba572ae892d4e4fae89ca053d8a137117b0f3a17",
          "message": "[pallet-revive] Update gas encoding (#6689)\n\nUpdate the current approach to attach the `ref_time`, `pov` and\n`deposit` parameters to an Ethereum transaction.\nPreviously we will pass these 3 parameters along with the signed\npayload, and check that the fees resulting from `gas x gas_price` match\nthe actual fees paid by the user for the extrinsic.\n\nThis approach unfortunately can be attacked. A malicious actor could\nforce such a transaction to fail by injecting low values for some of\nthese extra parameters as they are not part of the signed payload.\n\nThe new approach encodes these 3 extra parameters in the lower digits of\nthe transaction gas, approximating the the log2 of the actual values to\nencode each components on 2 digits\n\n---------\n\nCo-authored-by: GitHub Action <action@github.com>\nCo-authored-by: command-bot <>",
          "timestamp": "2025-01-13T14:49:37Z",
          "tree_id": "4a9a0a7887bb994eca8d3e08360d73900bc2f4d3",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/ba572ae892d4e4fae89ca053d8a137117b0f3a17"
        },
        "date": 1736784087882,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 18018663,
            "range": "± 273071",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17634888,
            "range": "± 67745",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 19368755,
            "range": "± 298109",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 23258470,
            "range": "± 289207",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 51975347,
            "range": "± 470598",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 291360469,
            "range": "± 2392874",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2433093474,
            "range": "± 17063120",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14358250,
            "range": "± 67345",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14626759,
            "range": "± 124568",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 14901564,
            "range": "± 137575",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 18956808,
            "range": "± 86040",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 50747715,
            "range": "± 593781",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 292926166,
            "range": "± 3960874",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2370491534,
            "range": "± 41198195",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1728078+michalkucharczyk@users.noreply.github.com",
            "name": "Michal Kucharczyk",
            "username": "michalkucharczyk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e0fa4782e2872ea74d8038ebedb9f6e6be53457",
          "message": "`fatxpool`: rotator cache size now depends on pool's limits (#7102)\n\n# Description\n\nThis PR modifies the hard-coded size of extrinsics cache within\n[`PoolRotator`](https://github.com/paritytech/polkadot-sdk/blob/cdf107de700388a52a17b2fb852c98420c78278e/substrate/client/transaction-pool/src/graph/rotator.rs#L36-L45)\nto be inline with pool limits.\n\nThe problem was, that due to small size (comparing to number of txs in\nsingle block) of hard coded size:\n\nhttps://github.com/paritytech/polkadot-sdk/blob/cdf107de700388a52a17b2fb852c98420c78278e/substrate/client/transaction-pool/src/graph/rotator.rs#L34\nexcessive number of unnecessary verification were performed in\n`prune_tags`:\n\nhttps://github.com/paritytech/polkadot-sdk/blob/cdf107de700388a52a17b2fb852c98420c78278e/substrate/client/transaction-pool/src/graph/pool.rs#L369-L370\n\nThis was resulting in quite long durations of `prune_tags` execution\ntime (which was ok for 6s, but becomes noticable for 2s blocks):\n```\nPruning at HashAndNumber { number: 83, ... }. Resubmitting transactions: 6142, reverification took: 237.818955ms    \nPruning at HashAndNumber { number: 84, ... }. Resubmitting transactions: 5985, reverification took: 222.118218ms    \nPruning at HashAndNumber { number: 85, ... }. Resubmitting transactions: 5981, reverification took: 215.546847ms\n```\n\nThe fix reduces the overhead:\n```\nPruning at HashAndNumber { number: 92, ... }. Resubmitting transactions: 6325, reverification took: 14.728354ms    \nPruning at HashAndNumber { number: 93, ... }. Resubmitting transactions: 7030, reverification took: 23.973607ms    \nPruning at HashAndNumber { number: 94, ... }. Resubmitting transactions: 4465, reverification took: 9.532472ms    \n```\n\n## Review Notes\nI decided to leave the hardocded `EXPECTED_SIZE` for the legacy\ntransaction pool. Removing verification of transactions during\nre-submission may negatively impact the behavior of the legacy\n(single-state) pool. As in long-term we probably want to deprecate old\npool, I did not invest time to assess the impact of rotator change in\nbehavior of the legacy pool.\n\n---------\n\nCo-authored-by: command-bot <>\nCo-authored-by: Iulian Barbu <14218860+iulianbarbu@users.noreply.github.com>",
          "timestamp": "2025-01-13T17:42:22Z",
          "tree_id": "206d7c3d681e324e45101018e7b758dffe9f5f15",
          "url": "https://github.com/paritytech/polkadot-sdk/commit/0e0fa4782e2872ea74d8038ebedb9f6e6be53457"
        },
        "date": 1736793223534,
        "tool": "cargo",
        "benches": [
          {
            "name": "request_response_protocol/libp2p/serially/64B",
            "value": 17037566,
            "range": "± 91575",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/512B",
            "value": 17227602,
            "range": "± 113959",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/4KB",
            "value": 18721782,
            "range": "± 91561",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/64KB",
            "value": 22471893,
            "range": "± 186497",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/256KB",
            "value": 50006160,
            "range": "± 1505467",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/2MB",
            "value": 289683491,
            "range": "± 2550640",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/libp2p/serially/16MB",
            "value": 2228352738,
            "range": "± 112499268",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64B",
            "value": 14104640,
            "range": "± 97418",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/512B",
            "value": 14108451,
            "range": "± 58367",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/4KB",
            "value": 14556976,
            "range": "± 92937",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/64KB",
            "value": 18683920,
            "range": "± 127622",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/256KB",
            "value": 47644153,
            "range": "± 318348",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/2MB",
            "value": 281509357,
            "range": "± 1293849",
            "unit": "ns/iter"
          },
          {
            "name": "request_response_protocol/litep2p/serially/16MB",
            "value": 2244328548,
            "range": "± 11468921",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}