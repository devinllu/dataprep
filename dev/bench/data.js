window.BENCHMARK_DATA = {
  "lastUpdate": 1645060812553,
  "repoUrl": "https://github.com/devinllu/dataprep",
  "entries": {
    "DataPrep.EDA Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "jlpengcs@gmail.com",
            "name": "Jinglin Peng",
            "username": "jinglinpeng"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "caac298bf1741914237f5de60726a838e1471947",
          "message": "Merge pull request #670 from sfu-db/benchmark_action\n\ntest(eda): add performance test",
          "timestamp": "2021-07-13T14:57:36-07:00",
          "tree_id": "3f7f269b138eb9b2c7c27463dcfcf92bab990484",
          "url": "https://github.com/sfu-db/dataprep/commit/caac298bf1741914237f5de60726a838e1471947"
        },
        "date": 1626213624583,
        "tool": "pytest",
        "benches": [
          {
            "name": "dataprep/tests/benchmarks/eda.py::test_create_report",
            "value": 0.198920389258266,
            "unit": "iter/sec",
            "range": "stddev: 0.01519471045276923",
            "extra": "mean: 5.027136754200001 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jlpengcs@gmail.com",
            "name": "Jinglin Peng",
            "username": "jinglinpeng"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6a6af6ee2815fa03e117fe0085712d6734c5e4b",
          "message": "Merge pull request #671 from sfu-db/readme_benchmark\n\ndocs(readme): add benchmark link",
          "timestamp": "2021-07-13T16:22:30-07:00",
          "tree_id": "14bd764dd31470a0eafb1f1f5a7fa7e6c66a2ce5",
          "url": "https://github.com/sfu-db/dataprep/commit/d6a6af6ee2815fa03e117fe0085712d6734c5e4b"
        },
        "date": 1626218746886,
        "tool": "pytest",
        "benches": [
          {
            "name": "dataprep/tests/benchmarks/eda.py::test_create_report",
            "value": 0.1666758029896957,
            "unit": "iter/sec",
            "range": "stddev: 0.23061170237253145",
            "extra": "mean: 5.999671110400004 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jlpengcs@gmail.com",
            "name": "Jinglin Peng",
            "username": "jinglinpeng"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "19077c6810bf1b684792dfbc2ebb2c690928bda9",
          "message": "Merge pull request #674 from Waterpine/song\n\ntest(eda): add test for config",
          "timestamp": "2021-07-20T17:32:09-07:00",
          "tree_id": "b1eb050b9d5305e56f83e37355d96cdc45c0b860",
          "url": "https://github.com/sfu-db/dataprep/commit/19077c6810bf1b684792dfbc2ebb2c690928bda9"
        },
        "date": 1626827704362,
        "tool": "pytest",
        "benches": [
          {
            "name": "dataprep/tests/benchmarks/eda.py::test_create_report",
            "value": 0.180197762286889,
            "unit": "iter/sec",
            "range": "stddev: 0.10882099934591108",
            "extra": "mean: 5.549458479999998 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jlpengcs@gmail.com",
            "name": "Jinglin Peng",
            "username": "jinglinpeng"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "72658db8cc238512466e02e7b2a45153ed379f12",
          "message": "Merge pull request #667 from sfu-db/bug-fix\n\nfeat(eda.diff): Add plot_diff([df1..dfn], continuous)",
          "timestamp": "2021-08-03T16:53:09-07:00",
          "tree_id": "fd66052e2b9cc1420a0ab9c9a2963f702fb5bdbc",
          "url": "https://github.com/sfu-db/dataprep/commit/72658db8cc238512466e02e7b2a45153ed379f12"
        },
        "date": 1628034978722,
        "tool": "pytest",
        "benches": [
          {
            "name": "dataprep/tests/benchmarks/eda.py::test_create_report",
            "value": 0.198074810508584,
            "unit": "iter/sec",
            "range": "stddev: 0.013045849110810106",
            "extra": "mean: 5.048597534600003 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jlpengcs@gmail.com",
            "name": "Jinglin Peng",
            "username": "jinglinpeng"
          },
          "committer": {
            "email": "youngw@sfu.ca",
            "name": "Weiyuan Wu",
            "username": "dovahcrow"
          },
          "distinct": true,
          "id": "a868c504d90fddc61db7556b0866e495e1134c11",
          "message": "build:update varname version",
          "timestamp": "2021-09-10T19:36:31-07:00",
          "tree_id": "f2c3ff81c3e3de7a757588e23fc6db064d0ff965",
          "url": "https://github.com/sfu-db/dataprep/commit/a868c504d90fddc61db7556b0866e495e1134c11"
        },
        "date": 1631328003852,
        "tool": "pytest",
        "benches": [
          {
            "name": "dataprep/tests/benchmarks/eda.py::test_create_report",
            "value": 0.1622125604402684,
            "unit": "iter/sec",
            "range": "stddev: 0.11301872409362092",
            "extra": "mean: 6.164750727599977 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jlpengcs@gmail.com",
            "name": "Jinglin Peng",
            "username": "jinglinpeng"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bf58e30df86d176f73b5aa9a29a626b14695892f",
          "message": "Merge pull request #688 from sfu-db/scattersample\n\nfix(eda):fix scatter sample size and rate",
          "timestamp": "2021-09-18T00:06:59-07:00",
          "tree_id": "232aa18818ed19974b4270b4a566e5119825e8d6",
          "url": "https://github.com/sfu-db/dataprep/commit/bf58e30df86d176f73b5aa9a29a626b14695892f"
        },
        "date": 1631949053337,
        "tool": "pytest",
        "benches": [
          {
            "name": "dataprep/tests/benchmarks/eda.py::test_create_report",
            "value": 0.1572721461202357,
            "unit": "iter/sec",
            "range": "stddev: 0.1333391852454711",
            "extra": "mean: 6.358404998399988 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jlpengcs@gmail.com",
            "name": "Jinglin Peng",
            "username": "jinglinpeng"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "13032fe3d7fb5a4dbf29f8f554122e4a5711f1ab",
          "message": "Merge pull request #691 from sahmad11/patch-1\n\ndocs(eda): scattter.sample_rate added to documentation",
          "timestamp": "2021-09-18T19:38:06-07:00",
          "tree_id": "6925a2e21290fb29d55f29a930355c23c1ceb71b",
          "url": "https://github.com/sfu-db/dataprep/commit/13032fe3d7fb5a4dbf29f8f554122e4a5711f1ab"
        },
        "date": 1632019314824,
        "tool": "pytest",
        "benches": [
          {
            "name": "dataprep/tests/benchmarks/eda.py::test_create_report",
            "value": 0.15184162391310188,
            "unit": "iter/sec",
            "range": "stddev: 0.0861931330025079",
            "extra": "mean: 6.585809439000036 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qidanrui@gmail.com",
            "name": "qidanrui",
            "username": "qidanrui"
          },
          "committer": {
            "email": "qidanrui@gmail.com",
            "name": "qidanrui",
            "username": "qidanrui"
          },
          "distinct": true,
          "id": "fd1057a86074d57b6a8714be7649f38d7d2439fe",
          "message": "fix all clean documents",
          "timestamp": "2021-11-03T18:03:59-07:00",
          "tree_id": "d551a1fa9f8225184e0a1151c1167dea763d9eb7",
          "url": "https://github.com/devinllu/dataprep/commit/fd1057a86074d57b6a8714be7649f38d7d2439fe"
        },
        "date": 1637545194829,
        "tool": "pytest",
        "benches": [
          {
            "name": "dataprep/tests/benchmarks/eda.py::test_create_report",
            "value": 0.2062705832472265,
            "unit": "iter/sec",
            "range": "stddev: 0.04219140050490568",
            "extra": "mean: 4.848001029799997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "youngw@sfu.ca",
            "name": "Weiyüen Wu",
            "username": "dovahcrow"
          },
          "committer": {
            "email": "ludevinl@sfu.ca",
            "name": "Devin Lu",
            "username": "devinllu"
          },
          "distinct": true,
          "id": "4f25b2f00a4c9b362bba059c249739cf1f1412d1",
          "message": "chore(CONTRIBUTING): suggesting not having merge commits in PR",
          "timestamp": "2021-11-21T17:58:02-08:00",
          "tree_id": "8ca03d4d0d93dfd879a0e42c93d7cc2db7adf738",
          "url": "https://github.com/devinllu/dataprep/commit/4f25b2f00a4c9b362bba059c249739cf1f1412d1"
        },
        "date": 1637555848891,
        "tool": "pytest",
        "benches": [
          {
            "name": "dataprep/tests/benchmarks/eda.py::test_create_report",
            "value": 0.2005279408748086,
            "unit": "iter/sec",
            "range": "stddev: 0.012109735283427221",
            "extra": "mean: 4.9868362266000075 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qidanrui@gmail.com",
            "name": "qidanrui",
            "username": "qidanrui"
          },
          "committer": {
            "email": "qidanrui@gmail.com",
            "name": "qidanrui",
            "username": "qidanrui"
          },
          "distinct": true,
          "id": "fd1057a86074d57b6a8714be7649f38d7d2439fe",
          "message": "fix all clean documents",
          "timestamp": "2021-11-03T18:03:59-07:00",
          "tree_id": "d551a1fa9f8225184e0a1151c1167dea763d9eb7",
          "url": "https://github.com/devinllu/dataprep/commit/fd1057a86074d57b6a8714be7649f38d7d2439fe"
        },
        "date": 1637562370804,
        "tool": "pytest",
        "benches": [
          {
            "name": "dataprep/tests/benchmarks/eda.py::test_create_report",
            "value": 0.19960531590576383,
            "unit": "iter/sec",
            "range": "stddev: 0.01671792747200017",
            "extra": "mean: 5.009886612799994 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jlpengcs@gmail.com",
            "name": "Jinglin Peng",
            "username": "jinglinpeng"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "93c7d6d8e3efd2c521567ef2135ebd6c5fd76749",
          "message": "Merge pull request #752 from devinllu/feat/create_overview_variables_section\n\nFeat/create overview variables section",
          "timestamp": "2021-11-24T19:32:22-08:00",
          "tree_id": "9ee03fb1e3fe8c0548148d5f849188f8cf989bbf",
          "url": "https://github.com/devinllu/dataprep/commit/93c7d6d8e3efd2c521567ef2135ebd6c5fd76749"
        },
        "date": 1637821078454,
        "tool": "pytest",
        "benches": [
          {
            "name": "dataprep/tests/benchmarks/eda.py::test_create_report",
            "value": 0.19373550207178394,
            "unit": "iter/sec",
            "range": "stddev: 0.015529527425316813",
            "extra": "mean: 5.1616765606 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qidanrui@gmail.com",
            "name": "qidanrui",
            "username": "qidanrui"
          },
          "committer": {
            "email": "qidanrui@gmail.com",
            "name": "qidanrui",
            "username": "qidanrui"
          },
          "distinct": true,
          "id": "997b3aba82e3a226709bc79362c1f3ce3accb814",
          "message": "Add frontend dist folder",
          "timestamp": "2021-11-24T23:01:25-08:00",
          "tree_id": "ec298d63ccd494b535745076ab0d5a735b6654bf",
          "url": "https://github.com/devinllu/dataprep/commit/997b3aba82e3a226709bc79362c1f3ce3accb814"
        },
        "date": 1637824895318,
        "tool": "pytest",
        "benches": [
          {
            "name": "dataprep/tests/benchmarks/eda.py::test_create_report",
            "value": 0.18901768972331737,
            "unit": "iter/sec",
            "range": "stddev: 0.17044156379364966",
            "extra": "mean: 5.2905101182000065 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "youngw@sfu.ca",
            "name": "Weiyuan Wu",
            "username": "dovahcrow"
          },
          "committer": {
            "email": "wangxiaoying0369@gmail.com",
            "name": "Xiaoying Wang",
            "username": "wangxiaoying"
          },
          "distinct": true,
          "id": "4032acb1d1f2c413d4cb000d17e8ffa611315f9f",
          "message": "v0.4.1\n\nBump to v0.4.1",
          "timestamp": "2021-11-25T18:07:07Z",
          "tree_id": "2aaece9e6d594ae7b72b2b0b60e2eb3fd5d35703",
          "url": "https://github.com/devinllu/dataprep/commit/4032acb1d1f2c413d4cb000d17e8ffa611315f9f"
        },
        "date": 1638254471431,
        "tool": "pytest",
        "benches": [
          {
            "name": "dataprep/tests/benchmarks/eda.py::test_create_report",
            "value": 0.19461941910480604,
            "unit": "iter/sec",
            "range": "stddev: 0.01901392579959621",
            "extra": "mean: 5.1382334024000045 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jlpengcs@gmail.com",
            "name": "Jinglin Peng",
            "username": "jinglinpeng"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f212d174c368cb5788420bc87a2baae514f0f7f1",
          "message": "Merge pull request #772 from sfu-db/terminal\n\nfix(eda):wordcloud setting in terminal",
          "timestamp": "2021-12-20T20:34:18-08:00",
          "tree_id": "8d627b2475f95623ce34790d226562580d6a7e77",
          "url": "https://github.com/devinllu/dataprep/commit/f212d174c368cb5788420bc87a2baae514f0f7f1"
        },
        "date": 1640069969668,
        "tool": "pytest",
        "benches": [
          {
            "name": "dataprep/tests/benchmarks/eda.py::test_create_report",
            "value": 0.25850184350393207,
            "unit": "iter/sec",
            "range": "stddev: 0.053731393034035284",
            "extra": "mean: 3.8684443656000043 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "youngw@sfu.ca",
            "name": "Weiyuan Wu",
            "username": "dovahcrow"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6c9e7ab91c4b065df194d5164ba2b2973858615e",
          "message": "Rename bug_report_cleaning to bug_report_cleaning.md",
          "timestamp": "2022-01-27T22:03:43-08:00",
          "tree_id": "e3d06400c078ad7517b6011e3244e7671bbf1298",
          "url": "https://github.com/devinllu/dataprep/commit/6c9e7ab91c4b065df194d5164ba2b2973858615e"
        },
        "date": 1643677895830,
        "tool": "pytest",
        "benches": [
          {
            "name": "dataprep/tests/benchmarks/eda.py::test_create_report",
            "value": 0.3154028211201169,
            "unit": "iter/sec",
            "range": "stddev: 0.05071296895117696",
            "extra": "mean: 3.1705486858000027 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jlpengcs@gmail.com",
            "name": "Jinglin Peng",
            "username": "jinglinpeng"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5c006c26adcfbb91bec73f0324b1a32c89714676",
          "message": "Merge pull request #797 from sfu-db/new_gui\n\nfeat(clean): New version of GUI",
          "timestamp": "2022-02-01T23:11:05-08:00",
          "tree_id": "08ebde87e8aaea32f072b0d39e40bd8a970a8b85",
          "url": "https://github.com/devinllu/dataprep/commit/5c006c26adcfbb91bec73f0324b1a32c89714676"
        },
        "date": 1643866837145,
        "tool": "pytest",
        "benches": [
          {
            "name": "dataprep/tests/benchmarks/eda.py::test_create_report",
            "value": 0.27410868467963,
            "unit": "iter/sec",
            "range": "stddev: 0.03298878406103689",
            "extra": "mean: 3.6481879483999933 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jlpengcs@gmail.com",
            "name": "Jinglin Peng",
            "username": "jinglinpeng"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f54f3ee79d2eaece8a920185e4373c2c9ba7760e",
          "message": "Merge pull request #799 from sfu-db/remove_bottneck\n\nchore(eda): remove dependency on bottleneck lib",
          "timestamp": "2022-02-03T01:13:59-08:00",
          "tree_id": "f4832f71374b045c36307efa44b4a34392ba05bc",
          "url": "https://github.com/devinllu/dataprep/commit/f54f3ee79d2eaece8a920185e4373c2c9ba7760e"
        },
        "date": 1643923428492,
        "tool": "pytest",
        "benches": [
          {
            "name": "dataprep/tests/benchmarks/eda.py::test_create_report",
            "value": 0.22008140974118562,
            "unit": "iter/sec",
            "range": "stddev: 0.05614679547732363",
            "extra": "mean: 4.543773148199994 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "youngw@sfu.ca",
            "name": "Weiyuan Wu",
            "username": "dovahcrow"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c0f04ec48729fbb59398c2820666433c8d006ca6",
          "message": "[skip-ci] update readme",
          "timestamp": "2022-02-03T17:39:11-08:00",
          "tree_id": "fb27956cb4023bb7946e230a6b837402f02939ba",
          "url": "https://github.com/devinllu/dataprep/commit/c0f04ec48729fbb59398c2820666433c8d006ca6"
        },
        "date": 1644364492002,
        "tool": "pytest",
        "benches": [
          {
            "name": "dataprep/tests/benchmarks/eda.py::test_create_report",
            "value": 0.2540751996691026,
            "unit": "iter/sec",
            "range": "stddev: 0.17114166672617617",
            "extra": "mean: 3.9358426218000035 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "65895033+gremur@users.noreply.github.com",
            "name": "Grey Murav",
            "username": "gremur"
          },
          "committer": {
            "email": "youngw@sfu.ca",
            "name": "Weiyuan Wu",
            "username": "dovahcrow"
          },
          "distinct": true,
          "id": "75820abd4bc295694ab1cb8c758907433507f253",
          "message": "Update currencies.json\n\nCorrected typo in Panamanian balboa symbol and replaced symbol for Russian ruble with correct one",
          "timestamp": "2022-02-08T22:22:33-08:00",
          "tree_id": "f49c80d95c447727f1753c48a8daae785dcb71f5",
          "url": "https://github.com/devinllu/dataprep/commit/75820abd4bc295694ab1cb8c758907433507f253"
        },
        "date": 1644453450325,
        "tool": "pytest",
        "benches": [
          {
            "name": "dataprep/tests/benchmarks/eda.py::test_create_report",
            "value": 0.27134096111023137,
            "unit": "iter/sec",
            "range": "stddev: 0.8256758789842116",
            "extra": "mean: 3.685400080800014 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yixuy@sfu.ca",
            "name": "henryye",
            "username": "yixuy"
          },
          "committer": {
            "email": "qidanrui@gmail.com",
            "name": "Danrui Qi",
            "username": "qidanrui"
          },
          "distinct": true,
          "id": "691257dc250682060d41ce8a33e92d1ead40e586",
          "message": "Fix when minute and second of lat and long are 60",
          "timestamp": "2022-02-14T12:18:44-08:00",
          "tree_id": "7042b04249581efc493411b0358cb0cad54f4546",
          "url": "https://github.com/devinllu/dataprep/commit/691257dc250682060d41ce8a33e92d1ead40e586"
        },
        "date": 1644893305135,
        "tool": "pytest",
        "benches": [
          {
            "name": "dataprep/tests/benchmarks/eda.py::test_create_report",
            "value": 0.2570951005643885,
            "unit": "iter/sec",
            "range": "stddev: 0.05350234381015034",
            "extra": "mean: 3.889611267599997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qidanrui@gmail.com",
            "name": "qidanrui",
            "username": "qidanrui"
          },
          "committer": {
            "email": "qidanrui@gmail.com",
            "name": "Danrui Qi",
            "username": "qidanrui"
          },
          "distinct": true,
          "id": "c192ab43259714822d0daa4ff556811dbf85c763",
          "message": "fix(clean): remove usaddress library",
          "timestamp": "2022-02-15T15:30:21-08:00",
          "tree_id": "88c404af82037913c6ce0ac48eba670e57f004e4",
          "url": "https://github.com/devinllu/dataprep/commit/c192ab43259714822d0daa4ff556811dbf85c763"
        },
        "date": 1645060809909,
        "tool": "pytest",
        "benches": [
          {
            "name": "dataprep/tests/benchmarks/eda.py::test_create_report",
            "value": 0.2986128767402046,
            "unit": "iter/sec",
            "range": "stddev: 0.140417742845289",
            "extra": "mean: 3.3488174083999978 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}