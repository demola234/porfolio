'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "da2ba88241a9afc75c110feaaf3f12e4",
"favicon.ico": "7c55683bc583ab00728d77d8edcd32ba",
"index.html": "8bad074d3b7a584a9318c3037e2bd1a4",
"/": "8bad074d3b7a584a9318c3037e2bd1a4",
"CNAME": "c8d7b3c981df3cac5a49cf2cac6a1e8d",
"main.dart.js": "c2d97405678ca917903a948b0bfe6162",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Logo.png": "2930331c04675fb3311f4bc9695c8015",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c5d436e3553a7e35f657d35fe69e69bf",
".git/ORIG_HEAD": "30b24c61a77cd1a537c824884204f1f3",
".git/config": "38881ccff4dc4e249623736f3cd97a15",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/92/cf03437181e764724a14f3a8aa7d6ad34a81a7": "fe39f6a133c7c11c0eadd6dedaeff530",
".git/objects/0c/e9efb15f0b37eba0f9e20cb333cf9966a80aaa": "f48f12513797402d4f22dce72177fbee",
".git/objects/66/d155b2ed4220bb19be27a9eec2fca7e6e1ada6": "563a27b086808079477b787e59141862",
".git/objects/3e/be9a841424178daffdce69fd972a53a3b92618": "3a44e3dc9f547b8e7911dd998a842ba3",
".git/objects/3e/21d792a4afa83d9d8851ce20667b6251c56de2": "e6ab6f1816856622121d0c1e473b4226",
".git/objects/68/9f343cb830c189c342be09a69cd596990403f3": "60c03aaa804e6bf76bae4e0125bf81d6",
".git/objects/68/2808016b4ddfad6953af1dec7ee4f404c411d8": "9034d645d17647262277cf51d97773f1",
".git/objects/57/7bf20f6613da9646ca180c6f96077b16162b03": "f65e3cd729f2261bc7b848d49fdb144a",
".git/objects/3b/f7aa67e626e7067d3855788f3eb13316d59700": "22799482ecdbd3ee10fae9a08af69dee",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9e/4fc937c4eba5ab214453bcad37b71cb343708f": "ffc86b49c600e568e9c4f734c62b10fb",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/88f5ed59dfe17523cf004ad9a1e078893d3de9": "d9fae7898040c6673037b621b03d906b",
".git/objects/56/cb34b7f8bb9dfda46cb113ab3ed7677518d641": "e428c355ab4ee88e955cdd6288a897d4",
".git/objects/3d/aa0e171554db16f1b21ea4b3e66e573822b331": "de1dc4988d0372a5208cf5ee5f2a817c",
".git/objects/60/6d9f4694f8873697a3b4fca5085c7d0529a178": "e135144953abe1f37bb4b77a8b6560f5",
".git/objects/5f/19af48e4a37685489ef4f5516694c40cac51d1": "552533412cb303b7cb693ce582a0787e",
".git/objects/05/b38b60615ad9db05af31fb51cf7cd54ae50ace": "56802df7493345c201de516524432294",
".git/objects/05/559ec80f5575b14852d5400704d4fcad874cc8": "0b35d971d4a008440e11114a66b0963e",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/a4/081046c0567603ce3b5e2349adcd976e7e7611": "f3a7b5ec89211c0af86ab1da28c23ba0",
".git/objects/a3/a8d76b3e988a99e4b514692f3311cb61b5226f": "60336c91d19a5e2fafaf14b696e1f1ab",
".git/objects/b5/69f7a9751d6f0fcef274deec7cd61298800e53": "860eccc31f4f89bd239d7bbb52fe9409",
".git/objects/b2/f8eac628308578f29d166956b7436245f67ac0": "9b9832f6b7d05c3b46900e62b74edf4f",
".git/objects/b2/82d94a1f7e85f577ffa32c044c7f11d0628201": "c8a64555d668e538be39167463891fde",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/d0/b66258f09d222acb8d1fad0cdac4b8b021894d": "7e2896a621bb8615c211aa68d395c99f",
".git/objects/be/27f440c5473fc0c9c623074c7118a53fefaa4f": "d3488c1fd104a2bc132510eff7a7985c",
".git/objects/b4/6b5240a7cebd02e3ae2f82e05c2070d706adef": "3287a343a3cc897edcc853615e443b45",
".git/objects/a5/ce14f780e74144f0b3ed41c08f55f24febd086": "6166c039dea7978a221912dae3d86595",
".git/objects/d1/93a9a65a03eb80946a759cbde05b118b7ff72b": "e51eba5826a7fb0a70681a9005e3f8e2",
".git/objects/d1/a2ac21ec24fabe2e884c28b75ac41381b955b5": "c245bbd6ed0e9b64b64c3cb0d9d733bc",
".git/objects/ae/fb396057c1ca52c28db20055089424f38dbd45": "ea19a600b0438f1be21ceb2df671b812",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/c2842a250e47d2e79be3b11677968cdb2ccaa8": "6a1e861ff50e91d04e922a7f506780c5",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/c8bdd37ce624d4c25214395e8c69ec0ecff3b6": "054f97ece42252f17713861a861dedd2",
".git/objects/c7/a7fdeed54b1f038db965403a652848aa5e87c6": "1ea8422eb44b297a89ef4283ae2d06ea",
".git/objects/c9/1b2ee57756c39ab244ecf811e4782a43b07521": "fa4dfeb767e0d026aa352908a2326bf5",
".git/objects/c9/f4700bf43371b5613241cd7ecdb60f23417e5d": "0826ed598793d16324c331d79c08b4fd",
".git/objects/f5/4e2e5db5cf94fdffaa5e9b78d7f5d8fb174c14": "07dd0ff46ebb7eda2bdc11bc61073533",
".git/objects/cf/19ae8f020a2f8a893d9ddb9d565acebcce74c2": "97d419838ca920faaed5beeeb1862ec8",
".git/objects/cf/100c54fdbdffe5843e66c56e76b30c5eb8b0ec": "95250bea525df6233730bc9a4b81e504",
".git/objects/cf/2d9e7368ded7d27af23c7057bfa4ec85ccfb87": "d2c50e6c88746b14aa3969fafcc71cfe",
".git/objects/e4/38f0a0ac5361ff001b2c22a4b4686b768405e2": "866db39e3f5fb1009ef55d68d8c7232c",
".git/objects/c8/cbfef17368b4f3c9770a3f57e57d0531a19d35": "1d62d58971d40bc99e6b4ca4a349271f",
".git/objects/c8/addc632bf81d6f615bb067d91878a2c16e2df0": "cb4d26100339590df2130555ae710884",
".git/objects/ed/a5f4dbab53b2724190b4a64773161ab656a859": "2bdc6d38571ec48128db2bda08ee2bd9",
".git/objects/c1/3a14d08b94e1ac7e00dfc341ab662da2fdc327": "ed116a0f0a725b1a74b8ae3f6680443b",
".git/objects/ec/39be4362d850ab5847ab7996cb1a2dec621b56": "c680072fab42a1b01474d5600308a96b",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/20/67116ebace2e7cc7f0dc28a1e7035d938b3054": "d47b406b850ce1df0ae8a6dd89727768",
".git/objects/7d/0cd5543f5b5cb7bd705bb54e6e59e8caf4fcd2": "899f131c11aee284b25a3c41b4b300cf",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/7c/5884ad0201afe8a3d2bd43dc33d0576c19d0df": "57cc9b0edbac328db56d6518815d6851",
".git/objects/1f/9a6027a63d29970d7bf66d9d5a3c4368c14f08": "aaee21a0781527fdd0738a7c4500156b",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/73/c419db77cf3f4c3fb5f09fb0fdbaa85af61cca": "300d1965a942089434db8f52048ce8b8",
".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
".git/objects/28/e5c1bcf40020c30acbf4f963c3c7febb350cb1": "637a09510d8d6fb54a13558f5fd18c3f",
".git/objects/17/5f6c31f1e76842e23dd68bcb6573ebda670328": "ca9a23c913a055d615ce7060a9447667",
".git/objects/7b/4bbb9fef3d8724973f4456e4c84ab1bbe70be7": "e505a17b97e00b1b13eb985a7a9544c4",
".git/objects/8f/b3fa046d572486003a70751bdf886c39a6502c": "8ee952ec7bf8c3eefe703037b623a7ea",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/e317495e5b0d480867403be4223fe561076868": "25c69f631d8288835b73700d9d742b18",
".git/objects/26/92bc50df8bf960791e813d01bde6033ed3049d": "3b0380ff651c94e06c140657d76e4cbc",
".git/objects/75/1961dd54a3798480a79290247e26939132d8db": "45aad3d09d4929817246f9e77ee6a064",
".git/objects/81/89788e47f36329a5b94dd046b1fd7836feeef6": "0082bd62cec1d5ff38f82e5b7a6e9c88",
".git/objects/72/68a26c43b5d5568a2c38330f3aecd64a4cf671": "7e1bd082961e1bfe8ff72c3fe72f5aa4",
".git/objects/44/546148fb5b0559513443443c27d5e1de698c22": "c8258c04ebd0dc83868c39e8b8bec216",
".git/objects/2f/9a7cac96cadb44dd35cd1ae8596e006578af1c": "f3aa6cec2107c98bb7e61d10fe2f5da2",
".git/objects/2f/062aeaa2cc397d6cf66e78ca2b937d76f4a0eb": "b379bfc589240554adae3c37aa23e737",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e859444a4dfd331a6c7d5088d6b1836618ebf4": "5433d34ffd7d3aef084ad91700193bc9",
".git/objects/38/07ee0b929333910024e14f37c8eb39384822b8": "ee179ef2455b0220dd07cb21e57ba343",
".git/objects/6e/4b3297c9b78137fdcbda0b756c27769ec83aa7": "6ab9fbe4f437bda6c0c6e80afb9505ca",
".git/objects/36/2f2effdff7648ab55a7022086d9ddd1cefa742": "036051198188b3f51b42612f5d02d12c",
".git/objects/5c/61aaba3cc3bd3670a7b5e160865db2ad7bd118": "1342122d127c3cb2d5cfb129e11cb366",
".git/objects/5c/19c3dd9a29103df7f30607a0c180fca97db7e1": "f8deac6a1f5daac92172a0742ab21db9",
".git/objects/5c/e355c26d51fb8041b2f420656324ccb555d011": "7341bb855cb5a6bebd3c517d8c417cd3",
".git/objects/31/cffc912d7966a1df091326a3118e5ae03b7d93": "3ed4a66944c966bda001d7866b372c95",
".git/objects/31/a8d936836ae24ca71999b9a12d58facf7eff48": "64a82d36c2c21357b57d90b8da915a3e",
".git/objects/91/f8c470f6e45be307652791d23b82eaf2e057b4": "0a901f8368f055f4920ed0ce9df81da7",
".git/objects/96/ce97efc0c13b33b28f7f0c4945dfe32b2777f2": "a2a2d5c08ac9dd55ad000e87b2cd681c",
".git/objects/3a/128a50ca53014766fcd2ad7acfd9679d2f2d06": "44868e68ab18a39e16f019602252b128",
".git/objects/54/e77c2661b40f7bced315c692cb08536c6b71f6": "d5db38d1e1db6ad1d7d503e12dde74f8",
".git/objects/54/ee9d2fe25babe4dfe58b9f54b1e74e34975385": "9a4360953dc88b54f0cebdc6c29d3c21",
".git/objects/53/f96318bab3160806fcdf2929e044a8b43adf3d": "8229acac5c26f1e255baed8e6f55bdf5",
".git/objects/3f/5657a3de3398e3863de4cefdcbac15c1c29d68": "e0102ad78fd0ea235832cc63353badf0",
".git/objects/5e/3c3bccabe0e1c332aa21e64dedb1f07b0c542d": "06739f05918e0948cf03b81fa4c28173",
".git/objects/5b/b23b84335f596d70f6c84ab1aa66e771928c68": "a8e5e3e00a1de5c674b01fb09efc2bd1",
".git/objects/37/dc958726fbcbe0b98599cfd2ba24d707e79f0f": "be5888d7eb5c33d8ba2dd798816a1526",
".git/objects/37/32eae7b1c8e28e07399dcac31242892fb78d86": "b67c353c00875333e3f744302a22e810",
".git/objects/01/f7bc3df177a31c0adb4a0e869c33774655b0de": "3624fd0db509a4fcfeed989ba0109858",
".git/objects/99/237d8a57b8b7257f5564fdd982416ed3560a5f": "e0f05c67c2fb4bf69fd771cbedfdc261",
".git/objects/55/ee6eb2d290bdf28bd2f12f065de713ebe3e301": "d9f19080e5d3f1eab9f76e44184f98ff",
".git/objects/0f/9606276a18ca5851a74e887476ae5386d7303d": "fd1a4bacfd9207cc7dfbcec276327a21",
".git/objects/0f/9591bb461a89bd814aa60a3f036c257302d2ad": "0f4d9efa5e11e6908fdd3b4c71943748",
".git/objects/64/21a2a4b7ba84df8dd55e52d982f1991447814f": "8ea9dfed00951a330fa875f53cbdf859",
".git/objects/64/0c6c25062828509e244db556bc9220d7fcb35c": "4431accd8ae75510edf16e2d26d34304",
".git/objects/64/ff3d2443f1d3e6c7e06b93d5dfcd94ceb34175": "6c746f88341d7de33561ddc8dfc1c0bf",
".git/objects/d4/ebda839a3700c22e97254289db88c8b32ff002": "c1e2f7822e980cc13a47d6b01a81749c",
".git/objects/b8/a46cc8633b81e390afe21502bc31ba32bcca72": "908bb47f8b7baae85b0f10ffeab13e8a",
".git/objects/b8/6872b30f017b4c8d9ee6319e0e2e8746c818b0": "2a54784803b0890f5754c05bddf16057",
".git/objects/b1/1cac6591d8bcf29350db8060e431ce1eab7c7b": "5ab7f761af7616c322f2b5bb7d0b9237",
".git/objects/dd/4f39c531fbc5e3a250293d063f078726a4b9bb": "d369eed99029fd7480e453b31efed3ec",
".git/objects/dc/4501168c6c79c870320d1bfa9b09475e6133d9": "411bc41e416827b6ffcd2afa3bd19079",
".git/objects/dc/cc8a9ce61ab7f4522c43fb07e0e525e84e5b8b": "104b422d7be292e73d52d8f7290467b6",
".git/objects/a9/51c2553aef4959bf157593e9d1f48993fe2b25": "f911c973f1258e12f4d18a2402352326",
".git/objects/d5/0b4fea4581e8e26f433e4a30d6848cbafe2ee3": "9775b0d4519b81f1a96753fad84b8e33",
".git/objects/aa/c9ee52232fedb3d64478f8fb9f76e11bcb42d5": "86329b7561f20baa0982fd6c5454f4c4",
".git/objects/af/3c00d48a9c5e9df26521b2b8e4f6ad6cab4c4f": "bef6f21a6df099e4e5e856482c14f948",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/800aa886031e71d791f409a036d8a5cc30fa91": "03cf8688ff13cb2ce1d13bbea083215c",
".git/objects/b7/a61a153cdf3e9866f50e02b7e615d89b9948d1": "a3dd55e364b4d991fa14e68abc34b010",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/a6/c81230b2953c78147c67d78540e60aba41efe9": "42b94393d195d101aa6c85940311ef58",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/bbdf7db0b9908b612fe3f7917eb0192fdc4e52": "a96de0ea1df07d683142c07fe48a6d0a",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/e6/e19302538ab7c2b69b16c885bcc6da0bbd33d0": "663accc219d9235655badfe55ef8d540",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/f1/6c28696f714cd4a1cce975d0e5e918eecca889": "8d8f9585dca6871d4c90c9116881deed",
".git/objects/e7/c8458da4ce6a16557a13edc48a30fd040a53c7": "7880d395a62a82261bb574d499e4caca",
".git/objects/cb/9b206c735f79b38b85e9fade6e82c8a9b937e8": "101ecdf1f9c1675bd010e0c207128520",
".git/objects/cb/ec82aacb8e8bfc747d0c229d8e57cfdbe5602c": "dd94dd3395b11095a5687d5c92c6ffb5",
".git/objects/f8/80d35dde6e695cd737b9fcc443c18b681e6807": "47867ff307f6e1623ab46efcda8ea017",
".git/objects/f8/0f4a5769274598190838f76b3cc6dedbbb3915": "324da0e2c1062b43eeef4444a730e1d3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/0fafca8d1ba46216c024f15a4a1ab3ce8d99ee": "1cdea932f1d32f6195aa7713d85180d4",
".git/objects/2d/32cd6f07ad3432ff01f0dcc59fd9783d39bc56": "98ea901111e76f85cefaa7c6d63d81fe",
".git/objects/48/c709940866f837cfe503407319287d92c6e80b": "9ae90146bbbdcf1996f5139844a4d94c",
".git/objects/1e/d929ce5f99c736957e19a5a98281bededf3dc3": "c6c10add9b954dc3231cbfe3feea248d",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/23/f9110b1a05b36d31e47cdf9376ebb5573fbd5c": "3428021322fe31697c29d7288a406ebb",
".git/objects/4f/f5d654d3f405816cbe1913c1dea1596f6ab03b": "e9d20670e40dce0beda683907d2a61b6",
".git/objects/12/1bfb06b8027179250ce2bef87befa79db26eb0": "d52bff9cdf13d1b4e24c6708b66ed156",
".git/objects/12/1c05119a647715203ef71bcff9ff1e93797388": "3e3050225e26e53d7378dceea889283f",
".git/objects/85/447ef51eae10eca298eb4167cbc75199efc40a": "2bf2529b4058b4ddd40baf5931f13a3d",
".git/objects/1d/b51758481085c56fdb9a5563a3f8a443309ed9": "821de36c87cbae6767882302f59d3863",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/40/52777caff180a39c6889ac9c99b9f5f8398143": "54459a144e8b65ee49ea28d7e2599aae",
".git/objects/2b/0089e2a65941e699a18bbf0ea6a293d7275399": "71546104255208eacb98a62cb4857b1d",
".git/objects/47/2a87e03e8b5cb69a399d391089b2e33e3c8f2e": "a67eb1e2668b9c0b9cbf3119bd4ab6a4",
".git/objects/13/dbca231a23c28a89d179a465b888e169638d1f": "a603f2ea1e57ff026a4745c1b807d61c",
".git/objects/13/dd336ce9f0f37923ca0265899ea4aa15c826ca": "92c197244619f0440d80acedcac2d124",
".git/objects/14/d798bcb6cde6c3f484aa1eba50fac52031e672": "32c6d294fb5ea87f4f6dc0b58ca0894e",
".git/objects/8e/f854ed266361e48411f7bcc7c56609d604ed98": "1359bb9582d8dee7e101e20030bd4d1e",
".git/objects/22/239187fcf4741592170a342a0c2e8e033ca6cc": "0a60901c6e320238e911f6ade782dd87",
".git/objects/22/ca9036dabe52b83ffc66e1349b28e160afbf89": "98e62f20011d6f05e099b03d283f47b0",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "783eb0a77993caefd80c5a433a9c3bd8",
".git/logs/refs/heads/master": "783eb0a77993caefd80c5a433a9c3bd8",
".git/logs/refs/heads/main": "84f6e7c9e2a18dd9085705e100462a67",
".git/logs/refs/remotes/origin/master": "d7530d688689edc08fdccc56380f41fa",
".git/logs/refs/remotes/origin/main": "e95fec920290c93e71cb1b00504c668c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "a9a5322b5b12aa398e06ef8ecc09d78c",
".git/refs/heads/main": "8b12fcaf4354b559010217a76a2d0d0c",
".git/refs/remotes/origin/master": "2a1564b9a1bd5ce24975ff75bffcc8e3",
".git/refs/remotes/origin/main": "c124638772bb55180b74404ced9c6d4b",
".git/index": "9b9e6f1391d05540312a7b0d83fc4f74",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "9c8b7227c576ae7bd083e44e7a63d918",
".git/FETCH_HEAD": "3e50fcb9852e28f8b1b2b8f2da22d011",
"assets/images/banc.png": "3349003bbaad1d3d22129569d5973e52",
"assets/images/Icon-DarkMode.png": "e73d69b5dfbfa14d091a9b33ef037b98",
"assets/images/rydr.png": "e8572290c870f797b0cff8b2848d6b0d",
"assets/images/AppLogo-LightMode.png": "9deaace8ed2c273495af965ea701ea0a",
"assets/images/Contact-DarkMode.png": "026f8146dfd79b252005540364a30654",
"assets/images/drugstore.png": "ea30081cde431b73d887687e7d693ba6",
"assets/images/Profile-LightMode.png": "9cf3c3f9a9507bc7226966338a82a246",
"assets/images/aluta.png": "c9b89e9d269012a5534817f81c392ff5",
"assets/images/Contact-LightMode.png": "7a1047101577dbb89dbecbec7d5e95b3",
"assets/images/olx.png": "66f5ea81d981d1b58a9a8b4bd098d7ea",
"assets/images/probitas_logo.png": "f239c30850932c35d7efbf5675102736",
"assets/images/AppLogo-DarkMode.png": "41435fa5eed18caaf64f9e837a0d5d5d",
"assets/images/Profile-DarkMode.png": "b69939037c2cb73480b1e593a8704a0e",
"assets/images/line.png": "dcad6f9e7f8d9ef2772e8843d6bb92f1",
"assets/images/Icon-LightMode.png": "a30905c76174df9fc0fc14826fdceb0d",
"assets/images/muvi.png": "354c41ccc2e144e5be77014e9d9a9331",
"assets/images/probitas.png": "b4256d5e0cf8391156206a83356f179b",
"assets/AssetManifest.json": "cb273bac4aaf585e72f4b5c88bfc5337",
"assets/NOTICES": "d6b7c06f409c8208ff2917b1a63abe1a",
"assets/FontManifest.json": "2f0649c520e8c48fa3b31daa43e955a0",
"assets/icons/github.svg": "d642e2c67a799221782f638699ff6706",
"assets/icons/arrow-right.svg": "fd8de73e9e0a3a998b14da069454aae4",
"assets/icons/dribble.svg": "042e4325ed920b7ec24074cdf44cb511",
"assets/icons/arrow-right-side.svg": "bc522f83a987220512f0baa519060152",
"assets/icons/linkedin.svg": "2acadcf0b873d9e51030696097772976",
"assets/icons/twitter.svg": "9ebfb9989899d90294154db938fda922",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "c96dc22ca29a082af83cce866d35cebc",
"assets/packages/feather_icons/fonts/feather.ttf": "ad5435302c3c2d1f23f275d0f22d36c6",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
