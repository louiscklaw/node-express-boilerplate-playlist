const { getObjectId, getObjectIds } = require('../../helpers/index');

console.log('seeding 004-customers  ');

const customers = [
  {
    id: getObjectId('customer_1'),
    firstName: 'Ashlynn',
    lastName: 'Harris',
    fullName: 'Ashlynn Harris',
    gender: 'Male',
    gsm: '(659) 681-4003',
    createdAt: '2024-06-12T20:35:03.275Z',
    isActive: true,
    avatar: [
      {
        name: '054a1397-df6b-413a-bc9b-5094b26fa46c',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '73f7b6ed-2453-4c4a-9609-2445f785df63',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/671.jpg',
      },
    ],
    addresses: [
      {
        text: '11451 Beahan Hill, Massapequa, NY 11967',
        coordinate: ['40.820067735758684', '-73.93981529222577'],
      },
      {
        text: '11797 Lorenzo Locks, Brooklyn, NY 11347',
        coordinate: ['40.747277718986986', '-73.99578762620561'],
      },
      {
        text: '11056 Doyle Station, Massapequa, NY 11606',
        coordinate: ['40.85931338640661', '-73.92812829680183'],
      },
    ],
  },
  {
    id: getObjectId('customer_2'),
    firstName: 'Yolanda',
    lastName: 'Hills',
    fullName: 'Yolanda Hills',
    gender: 'Male',
    gsm: '(500) 107-6029',
    createdAt: '2024-06-26T01:18:14.707Z',
    isActive: true,
    avatar: [
      {
        name: '9bd4a6ff-35f0-4256-863a-3568a5f7d366',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '9a96b795-280a-4126-a4c3-8ec3b0c3ccf5',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/968.jpg',
      },
    ],
    addresses: [
      {
        text: '11174 Wilkinson Locks, Lindenhurst, NY 11527',
        coordinate: ['40.696832261046126', '-73.94037102754282'],
      },
      {
        text: '11143 Ortiz Mill, Brooklyn, NY 11207',
        coordinate: ['40.6645385558063', '-73.90402732990448'],
      },
      {
        text: '11060 Pacocha Path, Massapequa, NY 11383',
        coordinate: ['40.712642654476035', '-74.01303533708099'],
      },
    ],
  },
  {
    id: getObjectId('customer_3'),
    firstName: 'Mona',
    lastName: 'Rath',
    fullName: 'Mona Rath',
    gender: 'Female',
    gsm: '(726) 341-0163',
    createdAt: '2024-06-18T18:40:27.364Z',
    isActive: false,
    avatar: [
      {
        name: 'cbe636df-f8c7-4f95-b8c2-14fb6365eb21',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '31f26f7d-e3b9-4a24-9b16-43a1e080e40a',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1149.jpg',
      },
    ],
    addresses: [
      {
        text: '11456 Federico Freeway, Lindenhurst, NY 11390',
        coordinate: ['40.73636731561727', '-73.87880380035317'],
      },
      {
        text: '11329 Itzel Loop, Lindenhurst, NY 11460',
        coordinate: ['40.84746079339391', '-73.88588719908685'],
      },
      {
        text: '11699 Lilly Hill, Lindenhurst, NY 11615',
        coordinate: ['40.85988139787965', '-73.85921533859519'],
      },
    ],
  },
  {
    id: getObjectId('customer_4'),
    firstName: 'Evangeline',
    lastName: 'Hand',
    fullName: 'Evangeline Hand',
    gender: 'Female',
    gsm: '(716) 504-9728',
    createdAt: '2024-06-25T15:35:58.879Z',
    isActive: true,
    avatar: [
      {
        name: 'c1f7779d-bd2c-44a9-a60b-d2f3bda4a17a',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '269085a6-976c-4fc4-9456-fc022f8795a1',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1209.jpg',
      },
    ],
    addresses: [
      {
        text: '11270 Littel Drive, Lindenhurst, NY 11968',
        coordinate: ['40.689013432473764', '-73.91000786387228'],
      },
      {
        text: '11231 Bergstrom Wall, Massapequa, NY 11734',
        coordinate: ['40.605313216714116', '-73.87661395404614'],
      },
      {
        text: '11958 Hintz Light, Massapequa, NY 11935',
        coordinate: ['40.875917577275104', '-73.82848174189849'],
      },
    ],
  },
  {
    id: getObjectId('customer_5'),
    firstName: 'Constantin',
    lastName: 'Gleichner',
    fullName: 'Constantin Gleichner',
    gender: 'Female',
    gsm: '(224) 816-0800',
    createdAt: '2024-06-08T11:20:14.631Z',
    isActive: true,
    avatar: [
      {
        name: '72e6ddcd-0930-456b-b548-b8a04badc907',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'f3bbdd8c-acb2-492f-9386-cbdc12a6dafe',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1143.jpg',
      },
    ],
    addresses: [
      {
        text: '11293 Waelchi Path, Lindenhurst, NY 11005',
        coordinate: ['40.50330485234582', '-74.2344363479454'],
      },
      {
        text: '11384 Waelchi Rapid, Massapequa, NY 11796',
        coordinate: ['40.84590139880644', '-73.8928291967851'],
      },
      {
        text: '11085 Lenora Crossroad, Massapequa, NY 11054',
        coordinate: ['40.6717882500396', '-73.8952881573647'],
      },
    ],
  },
  {
    id: getObjectId('customer_6'),
    firstName: 'Frieda',
    lastName: 'Lang',
    fullName: 'Frieda Lang',
    gender: 'Female',
    gsm: '(619) 267-4197',
    createdAt: '2024-06-12T17:14:34.042Z',
    isActive: false,
    avatar: [
      {
        name: '6477faa0-6270-4725-ab5f-14b5971e82d5',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'eada1c30-6b55-4cf6-b6d3-de726412ac9c',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/395.jpg',
      },
    ],
    addresses: [
      {
        text: '11812 Uriah Islands, Massapequa, NY 11134',
        coordinate: ['40.76936591609023', '-73.97395465473141'],
      },
      {
        text: '11881 Wilton Fields, Lindenhurst, NY 11176',
        coordinate: ['40.787915583564256', '-73.84583413474485'],
      },
      {
        text: '11408 Labadie Hollow, Lindenhurst, NY 11527',
        coordinate: ['40.68730915595523', '-73.94908167902258'],
      },
    ],
  },
  {
    id: getObjectId('customer_7'),
    firstName: 'Dejuan',
    lastName: 'Lockman',
    fullName: 'Dejuan Lockman',
    gender: 'Male',
    gsm: '(487) 311-2531',
    createdAt: '2024-06-24T16:00:24.294Z',
    isActive: true,
    avatar: [
      {
        name: '985d4926-4aa7-48d9-8203-ee7ea77f1769',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '8638a934-a9ff-4afd-99f1-42850fff452f',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1082.jpg',
      },
    ],
    addresses: [
      {
        text: "11960 O'Conner Forest, Lindenhurst, NY 11163",
        coordinate: ['40.89309118725139', '-73.89752941514372'],
      },
      {
        text: '11774 Koss Mission, Brooklyn, NY 11540',
        coordinate: ['40.73032437088068', '-73.99512821335122'],
      },
      {
        text: '11474 Dickens Lodge, Massapequa, NY 11199',
        coordinate: ['40.75587993188085', '-73.7894709790709'],
      },
    ],
  },
  {
    id: getObjectId('customer_8'),
    firstName: 'Yoshiko',
    lastName: 'McClure',
    fullName: 'Yoshiko McClure',
    gender: 'Female',
    gsm: '(852) 661-5483',
    createdAt: '2024-06-20T12:20:45.067Z',
    isActive: true,
    avatar: [
      {
        name: '5a601b40-c04f-4e9b-acc7-cacd102564ce',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '4885eb3f-fc3c-4a94-bfa0-143a4a613f6b',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/11.jpg',
      },
    ],
    addresses: [
      {
        text: '11781 Maiya Valley, Brooklyn, NY 11844',
        coordinate: ['40.817646237824896', '-73.95265264832331'],
      },
      {
        text: '11434 Daniel Meadows, Massapequa, NY 11452',
        coordinate: ['40.687024663944904', '-73.87836555031981'],
      },
      {
        text: '11599 Wolf Lock, Brooklyn, NY 11792',
        coordinate: ['40.7042912677296', '-74.01395408433967'],
      },
    ],
  },
  {
    id: getObjectId('customer_9'),
    firstName: 'Name',
    lastName: 'Marks',
    fullName: 'Name Marks',
    gender: 'Female',
    gsm: '(114) 526-4816',
    createdAt: '2024-06-09T15:27:07.562Z',
    isActive: true,
    avatar: [
      {
        name: 'f77f6fc4-ac81-4049-a377-008db095075d',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '3a3ec123-9d77-47bd-b75e-310acb59a55a',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/85.jpg',
      },
    ],
    addresses: [
      {
        text: '11772 Toy Row, Lindenhurst, NY 11384',
        coordinate: ['40.811873397132395', '-73.94826902574404'],
      },
      {
        text: '11693 Hartmann Park, Brooklyn, NY 11251',
        coordinate: ['40.705101590541354', '-73.98948018281791'],
      },
      {
        text: '11513 Predovic Ville, Massapequa, NY 11323',
        coordinate: ['40.67469479700506', '-73.86371925992556'],
      },
    ],
  },
  {
    id: getObjectId('customer_10'),
    firstName: 'Arthur',
    lastName: 'Sawayn',
    fullName: 'Arthur Sawayn',
    gender: 'Female',
    gsm: '(090) 614-7015',
    createdAt: '2024-07-06T19:09:18.402Z',
    isActive: false,
    avatar: [
      {
        name: '2f0130f1-a2d8-48b1-8fa5-dc3d6bf7f902',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '6cbf55ef-0e97-42d9-b959-b66a2d1fe832',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1022.jpg',
      },
    ],
    addresses: [
      {
        text: '11367 Ansley Stravenue, Massapequa, NY 11350',
        coordinate: ['40.81730470420681', '-73.94741458340314'],
      },
      {
        text: '11733 Walker Cove, Massapequa, NY 11322',
        coordinate: ['40.56648613912078', '-73.87751470966245'],
      },
      {
        text: '11927 Lemke Forges, Brooklyn, NY 11658',
        coordinate: ['40.730915473354905', '-73.95608227774139'],
      },
    ],
  },
  {
    id: getObjectId('customer_11'),
    firstName: 'Gwendolyn',
    lastName: 'Hane',
    fullName: 'Gwendolyn Hane',
    gender: 'Female',
    gsm: '(270) 974-6921',
    createdAt: '2024-07-06T03:39:48.312Z',
    isActive: false,
    avatar: [
      {
        name: 'f4426db2-8709-4808-83a9-0e17b8138a2e',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'de3857c8-583a-44e9-b79d-1a601c4fc951',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/720.jpg',
      },
    ],
    addresses: [
      {
        text: '11097 Naomie Mountain, Brooklyn, NY 11492',
        coordinate: ['40.67369096200763', '-73.92525141581397'],
      },
      {
        text: '11762 Schinner Garden, Lindenhurst, NY 11487',
        coordinate: ['40.50954831912203', '-74.24409344591764'],
      },
      {
        text: '11125 Strosin Curve, Lindenhurst, NY 11467',
        coordinate: ['40.732100034726514', '-73.9767183060347'],
      },
    ],
  },
  {
    id: getObjectId('customer_12'),
    firstName: 'Tomasa',
    lastName: 'Wilkinson',
    fullName: 'Tomasa Wilkinson',
    gender: 'Female',
    gsm: '(600) 672-6865',
    createdAt: '2024-06-26T04:52:35.946Z',
    isActive: true,
    avatar: [
      {
        name: '8709f4ae-a673-4b86-b1e3-ee175ae28418',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '16100b7e-bac8-4172-878f-4bc9a7d11f58',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/940.jpg',
      },
    ],
    addresses: [
      {
        text: '11693 Hartmann Park, Brooklyn, NY 11251',
        coordinate: ['40.705101590541354', '-73.98948018281791'],
      },
      {
        text: '11085 Oswaldo Harbor, Brooklyn, NY 11546',
        coordinate: ['40.85125313575545', '-73.91436091292005'],
      },
      {
        text: '11359 Weissnat Shore, Lindenhurst, NY 11530',
        coordinate: ['40.7318003523917', '-73.81115496631985'],
      },
    ],
  },
  {
    id: getObjectId('customer_13'),
    firstName: 'Napoleon',
    lastName: 'Grady',
    fullName: 'Napoleon Grady',
    gender: 'Male',
    gsm: '(709) 540-7607',
    createdAt: '2024-06-08T08:49:32.012Z',
    isActive: false,
    avatar: [
      {
        name: '09f6c53f-5797-4208-88c8-262eb88c2c42',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'f3573468-c0b4-48ff-a23b-d913e2a0d39e',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1006.jpg',
      },
    ],
    addresses: [
      {
        text: '11439 Aglae Radial, Brooklyn, NY 11205',
        coordinate: ['40.83247202632326', '-73.91406031894931'],
      },
      {
        text: '11693 Hartmann Park, Brooklyn, NY 11251',
        coordinate: ['40.705101590541354', '-73.98948018281791'],
      },
      {
        text: '11774 Koss Mission, Brooklyn, NY 11540',
        coordinate: ['40.73032437088068', '-73.99512821335122'],
      },
    ],
  },
  {
    id: getObjectId('customer_14'),
    firstName: 'Laron',
    lastName: 'Emmerich',
    fullName: 'Laron Emmerich',
    gender: 'Female',
    gsm: '(198) 572-1216',
    createdAt: '2024-06-09T04:48:59.104Z',
    isActive: true,
    avatar: [
      {
        name: 'efbf43fb-25d6-4206-b2b8-9947c7e207df',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '51594118-417b-4efe-858a-29945d68fecf',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/224.jpg',
      },
    ],
    addresses: [
      {
        text: '11851 Swift Glen, Lindenhurst, NY 11624',
        coordinate: ['40.51158309370173', '-74.22091326797245'],
      },
      {
        text: '11955 Cali Plaza, Massapequa, NY 11892',
        coordinate: ['40.832985445011836', '-73.90333101877235'],
      },
      {
        text: '11576 Kerluke Summit, Massapequa, NY 11417',
        coordinate: ['40.59210466006108', '-73.99582650996682'],
      },
    ],
  },
  {
    id: getObjectId('customer_15'),
    firstName: 'Leopoldo',
    lastName: 'Mann',
    fullName: 'Leopoldo Mann',
    gender: 'Female',
    gsm: '(827) 593-1953',
    createdAt: '2024-06-25T02:44:24.409Z',
    isActive: true,
    avatar: [
      {
        name: '4434e224-8b93-4b3f-adce-66a7ebd7c045',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'b5919685-3df5-400d-95a6-3b3a0bb5d24c',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1043.jpg',
      },
    ],
    addresses: [
      {
        text: '11618 Hoeger Lights, Massapequa, NY 11449',
        coordinate: ['40.627049675070175', '-73.98253459810051'],
      },
      {
        text: '11120 Royal Coves, Lindenhurst, NY 11520',
        coordinate: ['40.63410088148846', '-73.99688826750287'],
      },
      {
        text: '11367 Ansley Stravenue, Massapequa, NY 11350',
        coordinate: ['40.81730470420681', '-73.94741458340314'],
      },
    ],
  },
  {
    id: getObjectId('customer_16'),
    firstName: 'General',
    lastName: 'Larson',
    fullName: 'General Larson',
    gender: 'Male',
    gsm: '(518) 854-3556',
    createdAt: '2024-06-26T11:23:23.859Z',
    isActive: true,
    avatar: [
      {
        name: '39b1e02c-4afa-45ab-a36d-60843d4d2934',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '4eea92f4-78c9-4930-8340-cf819daf1ce1',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/71.jpg',
      },
    ],
    addresses: [
      {
        text: '11374 Daniella Courts, Lindenhurst, NY 11722',
        coordinate: ['40.692405303311446', '-74.00069759444021'],
      },
      {
        text: '11186 Nolan Crest, Lindenhurst, NY 11296',
        coordinate: ['40.59649847049655', '-74.18222476116168'],
      },
      {
        text: '11216 Rosina Fork, Lindenhurst, NY 11508',
        coordinate: ['40.745419155079155', '-73.71294596495262'],
      },
    ],
  },
  {
    id: getObjectId('customer_17'),
    firstName: 'Zelda',
    lastName: 'Leffler',
    fullName: 'Zelda Leffler',
    gender: 'Female',
    gsm: '(858) 561-6200',
    createdAt: '2024-06-08T17:04:16.562Z',
    isActive: false,
    avatar: [
      {
        name: '2ac050d7-c45b-4db3-989e-3120d028649a',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '3d346a8e-5526-400f-a933-35d7fe6f7f19',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/606.jpg',
      },
    ],
    addresses: [
      {
        text: '11057 Roberts Plaza, Lindenhurst, NY 11697',
        coordinate: ['40.64678681484174', '-74.08826976320468'],
      },
      {
        text: '11120 Royal Coves, Lindenhurst, NY 11520',
        coordinate: ['40.63410088148846', '-73.99688826750287'],
      },
      {
        text: '11107 Elnora Hills, Brooklyn, NY 11824',
        coordinate: ['40.60236204486041', '-74.00232304200087'],
      },
    ],
  },
  {
    id: getObjectId('customer_18'),
    firstName: 'Aida',
    lastName: 'Deckow',
    fullName: 'Aida Deckow',
    gender: 'Female',
    gsm: '(360) 150-6248',
    createdAt: '2024-06-28T18:59:14.056Z',
    isActive: false,
    avatar: [
      {
        name: '8f5a51ec-76e2-4214-9d69-61165fc67920',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '1014ff69-c910-437f-8186-27ec4f750ca2',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/881.jpg',
      },
    ],
    addresses: [
      {
        text: '11055 Schuster Gardens, Massapequa, NY 11732',
        coordinate: ['40.6365034810973', '-73.98578000769199'],
      },
      {
        text: '11108 Bauch Trail, Massapequa, NY 11355',
        coordinate: ['40.81991419971737', '-73.84577566721931'],
      },
      {
        text: '11816 Althea Loop, Brooklyn, NY 11851',
        coordinate: ['40.87000167958251', '-73.82689736629037'],
      },
    ],
  },
  {
    id: getObjectId('customer_19'),
    firstName: 'Chesley',
    lastName: 'Daniel',
    fullName: 'Chesley Daniel',
    gender: 'Female',
    gsm: '(283) 734-7840',
    createdAt: '2024-06-20T04:21:25.889Z',
    isActive: true,
    avatar: [
      {
        name: 'ed89530b-d591-4d64-ae55-5d135c652863',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '196b0270-6a31-4cff-ba94-33190ee4c6d9',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/363.jpg',
      },
    ],
    addresses: [
      {
        text: '11974 Harold Ports, Brooklyn, NY 11963',
        coordinate: ['40.674179744645684', '-73.98876832456823'],
      },
      {
        text: '11036 Joaquin Circle, Massapequa, NY 11502',
        coordinate: ['40.70119015066914', '-73.99645145905747'],
      },
      {
        text: '11038 Paolo Pines, Lindenhurst, NY 11735',
        coordinate: ['40.64023177236674', '-74.00186934411859'],
      },
    ],
  },
  {
    id: getObjectId('customer_20'),
    firstName: 'Alexzander',
    lastName: 'Schinner',
    fullName: 'Alexzander Schinner',
    gender: 'Male',
    gsm: '(649) 086-3249',
    createdAt: '2024-06-27T09:29:27.186Z',
    isActive: true,
    avatar: [
      {
        name: '7151aa58-f41b-4b0c-a72f-47741f09815e',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'a5e7afc0-8b43-467c-9b3d-c729b8ee431c',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/874.jpg',
      },
    ],
    addresses: [
      {
        text: '11418 Schumm Lock, Lindenhurst, NY 11340',
        coordinate: ['40.788028545449976', '-73.90529902987166'],
      },
      {
        text: '11434 Daniel Meadows, Massapequa, NY 11452',
        coordinate: ['40.687024663944904', '-73.87836555031981'],
      },
      {
        text: '11024 Gerald Pike, Brooklyn, NY 11160',
        coordinate: ['40.58348466152282', '-73.93320807895984'],
      },
    ],
  },
  {
    id: getObjectId('customer_21'),
    firstName: 'Kennedi',
    lastName: 'Ortiz',
    fullName: 'Kennedi Ortiz',
    gender: 'Female',
    gsm: '(961) 222-1047',
    createdAt: '2024-06-18T12:23:01.776Z',
    isActive: false,
    avatar: [
      {
        name: '998b74f5-b7e3-448b-abaa-357a3e7546bf',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '367f212e-7a67-46a8-a7e4-3b11092cf7c2',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/708.jpg',
      },
    ],
    addresses: [
      {
        text: '11456 Federico Freeway, Lindenhurst, NY 11390',
        coordinate: ['40.73636731561727', '-73.87880380035317'],
      },
      {
        text: '11760 Cynthia Dam, Brooklyn, NY 11589',
        coordinate: ['40.805598122229355', '-73.96654850238752'],
      },
      {
        text: '11922 Halvorson Terrace, Brooklyn, NY 11104',
        coordinate: ['40.863466423461276', '-73.88157667321018'],
      },
    ],
  },
  {
    id: getObjectId('customer_22'),
    firstName: 'Otis',
    lastName: 'Klein',
    fullName: 'Otis Klein',
    gender: 'Female',
    gsm: '(583) 591-1675',
    createdAt: '2024-06-15T20:00:47.900Z',
    isActive: true,
    avatar: [
      {
        name: 'af4463fe-e068-4d5c-8cd2-6fa34bbe1cd1',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '6b1d0fbc-413d-4a9b-b82f-5366a8f7773d',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/810.jpg',
      },
    ],
    addresses: [
      {
        text: '11998 Valentin Pike, Massapequa, NY 11868',
        coordinate: ['40.71608376674422', '-73.79906715920882'],
      },
      {
        text: '11264 Pauline Knolls, Brooklyn, NY 11384',
        coordinate: ['40.85195030781291', '-73.93088781078077'],
      },
      {
        text: '11764 Roberts Centers, Lindenhurst, NY 11071',
        coordinate: ['40.707840293833634', '-73.75019856878251'],
      },
    ],
  },
  {
    id: getObjectId('customer_23'),
    firstName: 'Melyssa',
    lastName: 'Ryan',
    fullName: 'Melyssa Ryan',
    gender: 'Male',
    gsm: '(113) 883-7364',
    createdAt: '2024-06-18T07:54:17.351Z',
    isActive: true,
    avatar: [
      {
        name: '6a70e87b-07a7-4483-9b33-28a8ea4294dd',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'b00d7c09-7cf0-47bf-9c71-58ce33325fdf',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/119.jpg',
      },
    ],
    addresses: [
      {
        text: '11318 Sipes Harbors, Lindenhurst, NY 11120',
        coordinate: ['40.70101970449942', '-73.98238357202935'],
      },
      {
        text: '11107 Hickle Ranch, Lindenhurst, NY 11515',
        coordinate: ['40.61088151832268', '-74.08690487977938'],
      },
      {
        text: '11111 Meggie Passage, Massapequa, NY 11269',
        coordinate: ['40.815307692811984', '-73.9079705593338'],
      },
    ],
  },
  {
    id: getObjectId('customer_24'),
    firstName: 'Nicole',
    lastName: 'Klocko',
    fullName: 'Nicole Klocko',
    gender: 'Male',
    gsm: '(171) 149-9999',
    createdAt: '2024-06-09T11:58:14.930Z',
    isActive: false,
    avatar: [
      {
        name: 'aaa1f710-a5ab-42fc-807e-370403fe61ff',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'a58a1b28-0328-40ed-a3fc-70d471f2213d',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/192.jpg',
      },
    ],
    addresses: [
      {
        text: '11728 Earlene Garden, Brooklyn, NY 11259',
        coordinate: ['40.61541451352046', '-73.9512235195281'],
      },
      {
        text: '11871 Merlin Forest, Massapequa, NY 11300',
        coordinate: ['40.63107778793004', '-73.95671041614891'],
      },
      {
        text: '11180 Thompson Circle, Massapequa, NY 11460',
        coordinate: ['40.52879780292704', '-74.16599356445849'],
      },
    ],
  },
  {
    id: getObjectId('customer_25'),
    firstName: 'Ana',
    lastName: 'Bahringer',
    fullName: 'Ana Bahringer',
    gender: 'Female',
    gsm: '(422) 937-4827',
    createdAt: '2024-06-24T08:11:09.940Z',
    isActive: true,
    avatar: [
      {
        name: '521dac87-099e-4f1e-bd5b-15ac27266105',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '58548aae-331d-456b-84c1-51a097feff27',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/258.jpg',
      },
    ],
    addresses: [
      {
        text: '11642 Alberta Junction, Lindenhurst, NY 11370',
        coordinate: ['40.782269303154564', '-73.92799108814602'],
      },
      {
        text: '11148 Jon Island, Lindenhurst, NY 11812',
        coordinate: ['40.86514358177516', '-73.88437348485921'],
      },
      {
        text: '11097 Naomie Mountain, Brooklyn, NY 11492',
        coordinate: ['40.67369096200763', '-73.92525141581397'],
      },
    ],
  },
  {
    id: getObjectId('customer_26'),
    firstName: 'Timmy',
    lastName: 'Hyatt',
    fullName: 'Timmy Hyatt',
    gender: 'Male',
    gsm: '(453) 389-0763',
    createdAt: '2024-06-13T13:05:46.312Z',
    isActive: true,
    avatar: [
      {
        name: '0f2d6ae0-8060-4b04-98cf-79d4cd83d8d4',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '0d04a298-f586-4184-b72f-657f99233244',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/337.jpg',
      },
    ],
    addresses: [
      {
        text: '11398 Lynch Tunnel, Brooklyn, NY 11949',
        coordinate: ['40.87235326033911', '-73.92513057262607'],
      },
      {
        text: '11456 Federico Freeway, Lindenhurst, NY 11390',
        coordinate: ['40.73636731561727', '-73.87880380035317'],
      },
      {
        text: '11922 Halvorson Terrace, Brooklyn, NY 11104',
        coordinate: ['40.863466423461276', '-73.88157667321018'],
      },
    ],
  },
  {
    id: getObjectId('customer_27'),
    firstName: 'Cecil',
    lastName: 'Gutmann',
    fullName: 'Cecil Gutmann',
    gender: 'Male',
    gsm: '(050) 682-4175',
    createdAt: '2024-06-24T01:05:18.192Z',
    isActive: true,
    avatar: [
      {
        name: 'b5885f61-13c2-4be4-ba79-63476df386df',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'eb719f58-a5f2-4c3c-8fb7-829eae74f093',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/637.jpg',
      },
    ],
    addresses: [
      {
        text: '11537 Albin Way, Massapequa, NY 11704',
        coordinate: ['40.76684204696888', '-73.93807668888226'],
      },
      {
        text: '11918 Becker Fort, Massapequa, NY 11466',
        coordinate: ['40.69980932047403', '-73.98458488957945'],
      },
      {
        text: '11715 Eloisa Summit, Lindenhurst, NY 11203',
        coordinate: ['40.813987220087206', '-73.9460629373589'],
      },
    ],
  },
  {
    id: getObjectId('customer_28'),
    firstName: 'Andre',
    lastName: 'Jakubowski',
    fullName: 'Andre Jakubowski',
    gender: 'Female',
    gsm: '(064) 341-7236',
    createdAt: '2024-06-24T16:22:48.449Z',
    isActive: true,
    avatar: [
      {
        name: 'cc97fe9e-0921-4c34-8972-4da3c90fccac',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'c4b4d449-0b00-4e83-b699-530b15be38b4',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/396.jpg',
      },
    ],
    addresses: [
      {
        text: '11143 Ortiz Mill, Brooklyn, NY 11207',
        coordinate: ['40.6645385558063', '-73.90402732990448'],
      },
      {
        text: '11923 Legros Divide, Brooklyn, NY 11072',
        coordinate: ['40.75081540048207', '-73.84366030192892'],
      },
      {
        text: '11060 Pacocha Path, Massapequa, NY 11383',
        coordinate: ['40.712642654476035', '-74.01303533708099'],
      },
    ],
  },
  {
    id: getObjectId('customer_29'),
    firstName: 'Missouri',
    lastName: 'Stiedemann',
    fullName: 'Missouri Stiedemann',
    gender: 'Female',
    gsm: '(271) 861-0530',
    createdAt: '2024-07-01T10:46:29.937Z',
    isActive: false,
    avatar: [
      {
        name: '21a90e70-a2bd-4aa9-8871-c919ce414663',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'abbb9c54-ef0e-432f-b73b-ab53585e8242',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/692.jpg',
      },
    ],
    addresses: [
      {
        text: '11881 Wilton Fields, Lindenhurst, NY 11176',
        coordinate: ['40.787915583564256', '-73.84583413474485'],
      },
      {
        text: '11655 Shanie Route, Brooklyn, NY 11072',
        coordinate: ['40.706302943986636', '-73.79962362002236'],
      },
      {
        text: "11683 D'Amore Summit, Massapequa, NY 11567",
        coordinate: ['40.8048782862543', '-73.94804034964574'],
      },
    ],
  },
  {
    id: getObjectId('customer_30'),
    firstName: 'Annalise',
    lastName: 'Huels',
    fullName: 'Annalise Huels',
    gender: 'Male',
    gsm: '(617) 574-7600',
    createdAt: '2024-06-30T12:13:54.526Z',
    isActive: true,
    avatar: [
      {
        name: '544e0f5d-2037-4331-ba98-4fc6d5aea114',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'e45fe44e-80d1-474f-9663-0eee1651356a',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/140.jpg',
      },
    ],
    addresses: [
      {
        text: '11647 Khalil Freeway, Massapequa, NY 11799',
        coordinate: ['40.73552798165039', '-73.99701720039775'],
      },
      {
        text: '11719 Buckridge Center, Brooklyn, NY 11760',
        coordinate: ['40.71127832019916', '-73.72859237968323'],
      },
      {
        text: '11701 Rusty Lights, Massapequa, NY 11840',
        coordinate: ['40.74921391148173', '-73.88745667351822'],
      },
    ],
  },
  {
    id: getObjectId('customer_31'),
    firstName: 'Donna',
    lastName: 'Kassulke',
    fullName: 'Donna Kassulke',
    gender: 'Female',
    gsm: '(081) 662-9177',
    createdAt: '2024-07-06T18:57:25.607Z',
    isActive: false,
    avatar: [
      {
        name: 'a35fc52b-0392-4e84-80a5-b047d1d76bd7',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '08141542-1559-4f68-a61c-0104122e4bf4',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/860.jpg',
      },
    ],
    addresses: [
      {
        text: '11175 Kieran Curve, Massapequa, NY 11322',
        coordinate: ['40.60976233898883', '-74.1028092626307'],
      },
      {
        text: '11733 Walker Cove, Massapequa, NY 11322',
        coordinate: ['40.56648613912078', '-73.87751470966245'],
      },
      {
        text: '11451 Beahan Hill, Massapequa, NY 11967',
        coordinate: ['40.820067735758684', '-73.93981529222577'],
      },
    ],
  },
  {
    id: getObjectId('customer_32'),
    firstName: 'Alford',
    lastName: 'Vandervort',
    fullName: 'Alford Vandervort',
    gender: 'Male',
    gsm: '(104) 970-9970',
    createdAt: '2024-06-30T19:07:38.949Z',
    isActive: true,
    avatar: [
      {
        name: '9dd87332-df40-4cde-868d-7c3814cb4a03',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '7c931ead-c402-4a64-aca0-3d0c30c6adc2',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/689.jpg',
      },
    ],
    addresses: [
      {
        text: '11435 Theodore Grove, Lindenhurst, NY 11899',
        coordinate: ['40.58985851813696', '-73.98005929565423'],
      },
      {
        text: '11023 Reilly Freeway, Brooklyn, NY 11304',
        coordinate: ['40.708836427424856', '-73.95736505455008'],
      },
      {
        text: '11228 Paucek Islands, Massapequa, NY 11666',
        coordinate: ['40.782861173910526', '-73.92808660964148'],
      },
    ],
  },
  {
    id: getObjectId('customer_33'),
    firstName: 'Eriberto',
    lastName: 'Terry',
    fullName: 'Eriberto Terry',
    gender: 'Female',
    gsm: '(755) 093-3983',
    createdAt: '2024-06-18T08:34:40.905Z',
    isActive: false,
    avatar: [
      {
        name: '57669ce6-226e-42f1-a7a4-6da34c54c1b7',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'cd0ac0c6-4179-4b48-a8f6-2f119eb06039',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/728.jpg',
      },
    ],
    addresses: [
      {
        text: '11928 Zemlak Terrace, Brooklyn, NY 11083',
        coordinate: ['40.5861219668654', '-73.96563797373686'],
      },
      {
        text: '11228 Stiedemann Valley, Brooklyn, NY 11949',
        coordinate: ['40.81821649698436', '-73.86826310670972'],
      },
      {
        text: '11096 Wehner Road, Brooklyn, NY 11769',
        coordinate: ['40.772541352269656', '-73.96458491444952'],
      },
    ],
  },
  {
    id: getObjectId('customer_34'),
    firstName: 'Nat',
    lastName: "O'Hara",
    fullName: "Nat O'Hara",
    gender: 'Male',
    gsm: '(061) 379-0230',
    createdAt: '2024-07-03T13:29:11.604Z',
    isActive: true,
    avatar: [
      {
        name: '68a175b9-6796-4715-bcc5-8942fbd65c1e',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '525e8900-c052-429e-b507-7a619ac949a3',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/809.jpg',
      },
    ],
    addresses: [
      {
        text: "11846 O'Hara Rapid, Brooklyn, NY 11231",
        coordinate: ['40.87355454025907', '-73.92984534052623'],
      },
      {
        text: '11021 Waelchi Crossing, Brooklyn, NY 11306',
        coordinate: ['40.77751176704511', '-73.97279729093525'],
      },
      {
        text: '11269 Stokes Valley, Lindenhurst, NY 11154',
        coordinate: ['40.67540078261772', '-73.81703727480193'],
      },
    ],
  },
  {
    id: getObjectId('customer_35'),
    firstName: 'Jerod',
    lastName: 'Zemlak',
    fullName: 'Jerod Zemlak',
    gender: 'Male',
    gsm: '(519) 639-7889',
    createdAt: '2024-06-10T08:58:23.180Z',
    isActive: true,
    avatar: [
      {
        name: 'e21445f2-e9e7-4d76-ad53-e7a286524c50',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'd25f8502-6400-4c8d-8ad9-8803fc987650',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/8.jpg',
      },
    ],
    addresses: [
      {
        text: '11851 Swift Glen, Lindenhurst, NY 11624',
        coordinate: ['40.51158309370173', '-74.22091326797245'],
      },
      {
        text: '11693 Hartmann Park, Brooklyn, NY 11251',
        coordinate: ['40.705101590541354', '-73.98948018281791'],
      },
      {
        text: '11762 Schinner Garden, Lindenhurst, NY 11487',
        coordinate: ['40.50954831912203', '-74.24409344591764'],
      },
    ],
  },
  {
    id: getObjectId('customer_36'),
    firstName: 'Irwin',
    lastName: 'Lang',
    fullName: 'Irwin Lang',
    gender: 'Male',
    gsm: '(705) 564-6618',
    createdAt: '2024-07-06T14:05:54.729Z',
    isActive: false,
    avatar: [
      {
        name: 'f1922791-9075-407f-bfd3-ed1e8c2a0fd8',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '77637488-d200-40ae-9574-f63194a741af',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/864.jpg',
      },
    ],
    addresses: [
      {
        text: '11928 Zemlak Terrace, Brooklyn, NY 11083',
        coordinate: ['40.5861219668654', '-73.96563797373686'],
      },
      {
        text: '11955 Cali Plaza, Massapequa, NY 11892',
        coordinate: ['40.832985445011836', '-73.90333101877235'],
      },
      {
        text: '11835 Powlowski Extension, Brooklyn, NY 11150',
        coordinate: ['40.76245015151365', '-73.87061296246294'],
      },
    ],
  },
  {
    id: getObjectId('customer_37'),
    firstName: 'Mollie',
    lastName: 'Reichert',
    fullName: 'Mollie Reichert',
    gender: 'Female',
    gsm: '(408) 340-1764',
    createdAt: '2024-06-21T18:29:53.642Z',
    isActive: false,
    avatar: [
      {
        name: 'a49b1142-8de0-48dd-be9b-433591eeaae3',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '77c607a4-2242-4efe-b2c1-cfda6486aaeb',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/933.jpg',
      },
    ],
    addresses: [
      {
        text: '11045 Johnston Key, Lindenhurst, NY 11539',
        coordinate: ['40.84398642270739', '-73.83864402262044'],
      },
      {
        text: '11867 Kling Coves, Brooklyn, NY 11655',
        coordinate: ['40.72425809826063', '-74.0076193098343'],
      },
      {
        text: '11335 Greyson Mission, Lindenhurst, NY 11507',
        coordinate: ['40.89110181872506', '-73.8938991544214'],
      },
    ],
  },
  {
    id: getObjectId('customer_38'),
    firstName: 'London',
    lastName: 'Armstrong',
    fullName: 'London Armstrong',
    gender: 'Male',
    gsm: '(799) 790-0179',
    createdAt: '2024-07-02T08:40:24.339Z',
    isActive: true,
    avatar: [
      {
        name: '9080331f-e8b1-446c-b025-2e9caee6d276',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '97d08430-3880-4fec-a714-66d3f756095e',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/671.jpg',
      },
    ],
    addresses: [
      {
        text: '11143 Ortiz Mill, Brooklyn, NY 11207',
        coordinate: ['40.6645385558063', '-73.90402732990448'],
      },
      {
        text: '11251 Bertram Extensions, Lindenhurst, NY 11057',
        coordinate: ['40.598106469646424', '-73.77487508395032'],
      },
      {
        text: '11816 Althea Loop, Brooklyn, NY 11851',
        coordinate: ['40.87000167958251', '-73.82689736629037'],
      },
    ],
  },
  {
    id: getObjectId('customer_39'),
    firstName: 'Macy',
    lastName: 'Lemke',
    fullName: 'Macy Lemke',
    gender: 'Female',
    gsm: '(659) 311-1812',
    createdAt: '2024-06-14T00:20:38.741Z',
    isActive: false,
    avatar: [
      {
        name: '11dd9baf-e718-46aa-b1bd-f6eda617f761',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'e02c9d2a-ebc2-4d4c-9807-7de0f0dae616',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/782.jpg',
      },
    ],
    addresses: [
      {
        text: '11623 Darien Cliffs, Lindenhurst, NY 11575',
        coordinate: ['40.70056831070206', '-73.9853693094361'],
      },
      {
        text: '11647 Khalil Freeway, Massapequa, NY 11799',
        coordinate: ['40.73552798165039', '-73.99701720039775'],
      },
      {
        text: '11774 Koss Mission, Brooklyn, NY 11540',
        coordinate: ['40.73032437088068', '-73.99512821335122'],
      },
    ],
  },
  {
    id: getObjectId('customer_40'),
    firstName: 'Adolphus',
    lastName: 'Tillman',
    fullName: 'Adolphus Tillman',
    gender: 'Male',
    gsm: '(636) 426-9756',
    createdAt: '2024-06-19T05:30:03.929Z',
    isActive: false,
    avatar: [
      {
        name: '78a4b9a4-e46a-48f5-a4e2-6925a0ef63ef',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '52fd0b8a-3f9b-45b9-a5e5-44f004907635',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/524.jpg',
      },
    ],
    addresses: [
      {
        text: '11864 Leonora Stream, Brooklyn, NY 11957',
        coordinate: ['40.832201142470986', '-73.9018035427564'],
      },
      {
        text: '11797 Bart Valley, Lindenhurst, NY 11117',
        coordinate: ['40.669777801118656', '-73.92802454968135'],
      },
      {
        text: '11727 Schaefer Inlet, Lindenhurst, NY 11036',
        coordinate: ['40.68715261156324', '-74.00526659632791'],
      },
    ],
  },
  {
    id: getObjectId('customer_41'),
    firstName: 'Lessie',
    lastName: 'Conn',
    fullName: 'Lessie Conn',
    gender: 'Female',
    gsm: '(507) 355-9974',
    createdAt: '2024-06-09T12:26:08.481Z',
    isActive: true,
    avatar: [
      {
        name: '480ac9aa-1bd7-4db6-86f5-94bb1070cc94',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '59f79182-a467-4267-9fbb-3f7d27f9d40d',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1101.jpg',
      },
    ],
    addresses: [
      {
        text: '11946 Little Isle, Massapequa, NY 11319',
        coordinate: ['40.81821649698436', '-73.86826310670972'],
      },
      {
        text: '11316 Goodwin Curve, Brooklyn, NY 11183',
        coordinate: ['40.72331641705996', '-73.8392178094307'],
      },
      {
        text: '11599 Wolf Lock, Brooklyn, NY 11792',
        coordinate: ['40.7042912677296', '-74.01395408433967'],
      },
    ],
  },
  {
    id: getObjectId('customer_42'),
    firstName: 'Bernardo',
    lastName: 'Okuneva',
    fullName: 'Bernardo Okuneva',
    gender: 'Male',
    gsm: '(302) 398-9465',
    createdAt: '2024-06-24T03:54:38.524Z',
    isActive: true,
    avatar: [
      {
        name: 'c8bcab32-78dc-4916-9707-e6947bfc48bc',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '9e0076c5-0d9c-4056-9220-0feec5dd72ef',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/244.jpg',
      },
    ],
    addresses: [
      {
        text: '11898 Chelsea Plain, Lindenhurst, NY 11735',
        coordinate: ['40.875525570218045', '-73.86179079437676'],
      },
      {
        text: '11655 Shanie Route, Brooklyn, NY 11072',
        coordinate: ['40.706302943986636', '-73.79962362002236'],
      },
      {
        text: '11598 Curt Shoals, Lindenhurst, NY 11514',
        coordinate: ['40.802597877430756', '-73.93849763295711'],
      },
    ],
  },
  {
    id: getObjectId('customer_43'),
    firstName: 'Carolina',
    lastName: 'Konopelski',
    fullName: 'Carolina Konopelski',
    gender: 'Male',
    gsm: '(505) 814-5300',
    createdAt: '2024-06-28T18:04:43.146Z',
    isActive: false,
    avatar: [
      {
        name: 'aaae96f7-b059-4b12-b4e8-12bd758691c6',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '9edcaccf-2a5e-4d76-8550-5d7ed000db36',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/557.jpg',
      },
    ],
    addresses: [
      {
        text: '11618 Hoeger Lights, Massapequa, NY 11449',
        coordinate: ['40.627049675070175', '-73.98253459810051'],
      },
      {
        text: '11335 Greyson Mission, Lindenhurst, NY 11507',
        coordinate: ['40.89110181872506', '-73.8938991544214'],
      },
      {
        text: '11719 Buckridge Center, Brooklyn, NY 11760',
        coordinate: ['40.71127832019916', '-73.72859237968323'],
      },
    ],
  },
  {
    id: getObjectId('customer_44'),
    firstName: 'Jairo',
    lastName: 'Koch',
    fullName: 'Jairo Koch',
    gender: 'Female',
    gsm: '(317) 087-4951',
    createdAt: '2024-06-19T01:09:01.368Z',
    isActive: true,
    avatar: [
      {
        name: 'c62efe2a-3f2d-4167-93d9-41a9ad38369d',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '96591262-29c0-4a6f-aebe-a0d2d14cc85e',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/111.jpg',
      },
    ],
    addresses: [
      {
        text: '11264 Pauline Knolls, Brooklyn, NY 11384',
        coordinate: ['40.85195030781291', '-73.93088781078077'],
      },
      {
        text: '11359 Weissnat Shore, Lindenhurst, NY 11530',
        coordinate: ['40.7318003523917', '-73.81115496631985'],
      },
      {
        text: '11097 Naomie Mountain, Brooklyn, NY 11492',
        coordinate: ['40.67369096200763', '-73.92525141581397'],
      },
    ],
  },
  {
    id: getObjectId('customer_45'),
    firstName: 'Tamia',
    lastName: 'Wolff',
    fullName: 'Tamia Wolff',
    gender: 'Female',
    gsm: '(823) 251-0162',
    createdAt: '2024-06-13T06:00:59.523Z',
    isActive: true,
    avatar: [
      {
        name: 'a6a0e8a2-08d8-49f1-826e-4e9327ecadca',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'cb0d30dc-64d5-4019-986c-6084a71cbc62',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/908.jpg',
      },
    ],
    addresses: [
      {
        text: '11489 Schoen Throughway, Lindenhurst, NY 11849',
        coordinate: ['40.69130748551876', '-73.97542925623603'],
      },
      {
        text: '11776 Wilderman Prairie, Lindenhurst, NY 11562',
        coordinate: ['40.66945134822127', '-73.93551047298159'],
      },
      {
        text: '11251 Bertram Extensions, Lindenhurst, NY 11057',
        coordinate: ['40.598106469646424', '-73.77487508395032'],
      },
    ],
  },
  {
    id: getObjectId('customer_46'),
    firstName: 'Robyn',
    lastName: 'Wiegand',
    fullName: 'Robyn Wiegand',
    gender: 'Male',
    gsm: '(919) 232-4191',
    createdAt: '2024-06-25T06:36:59.099Z',
    isActive: false,
    avatar: [
      {
        name: '1a30bcef-a569-4313-9cc8-d43da25577bf',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '3a4b38f2-9231-4d87-9259-5b78192ecc01',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/641.jpg',
      },
    ],
    addresses: [
      {
        text: '11946 Little Isle, Massapequa, NY 11319',
        coordinate: ['40.81821649698436', '-73.86826310670972'],
      },
      {
        text: '11606 Mariana Keys, Lindenhurst, NY 11071',
        coordinate: ['40.60227925020982', '-73.91362606675423'],
      },
      {
        text: '11628 Treutel Mills, Brooklyn, NY 11018',
        coordinate: ['40.71348020110573', '-73.99808008629375'],
      },
    ],
  },
  {
    id: getObjectId('customer_47'),
    firstName: 'Missouri',
    lastName: 'Mosciski',
    fullName: 'Missouri Mosciski',
    gender: 'Male',
    gsm: '(166) 787-1729',
    createdAt: '2024-06-24T13:36:20.378Z',
    isActive: true,
    avatar: [
      {
        name: 'f21c1867-233d-494c-bc4d-61a93059580a',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'a26bd6fc-ab07-41dc-b11d-9fe7e5b4df6f',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1026.jpg',
      },
    ],
    addresses: [
      {
        text: '11435 Theodore Grove, Lindenhurst, NY 11899',
        coordinate: ['40.58985851813696', '-73.98005929565423'],
      },
      {
        text: '11251 Bertram Extensions, Lindenhurst, NY 11057',
        coordinate: ['40.598106469646424', '-73.77487508395032'],
      },
      {
        text: '11878 Dudley Pike, Lindenhurst, NY 11604',
        coordinate: ['40.64716080488486', '-74.0073656851469'],
      },
    ],
  },
  {
    id: getObjectId('customer_48'),
    firstName: 'Elliot',
    lastName: 'Ullrich',
    fullName: 'Elliot Ullrich',
    gender: 'Male',
    gsm: '(516) 436-5120',
    createdAt: '2024-06-24T19:48:30.973Z',
    isActive: false,
    avatar: [
      {
        name: '6344cd26-133a-4c3f-bb0f-bf0a92ffe809',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'ee159f2f-50d9-47ce-a8d1-5f1fd27be63e',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1202.jpg',
      },
    ],
    addresses: [
      {
        text: '11293 Waelchi Path, Lindenhurst, NY 11005',
        coordinate: ['40.50330485234582', '-74.2344363479454'],
      },
      {
        text: '11881 Wilton Fields, Lindenhurst, NY 11176',
        coordinate: ['40.787915583564256', '-73.84583413474485'],
      },
      {
        text: '11384 Waelchi Rapid, Massapequa, NY 11796',
        coordinate: ['40.84590139880644', '-73.8928291967851'],
      },
    ],
  },
  {
    id: getObjectId('customer_49'),
    firstName: 'Ocie',
    lastName: 'Brekke',
    fullName: 'Ocie Brekke',
    gender: 'Male',
    gsm: '(169) 959-2280',
    createdAt: '2024-06-30T15:17:54.224Z',
    isActive: false,
    avatar: [
      {
        name: 'd981cf0c-13ef-4d28-bb82-a053cbcdc622',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '5e994eb1-ab89-4902-bcbf-372415277255',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/387.jpg',
      },
    ],
    addresses: [
      {
        text: '11772 Toy Row, Lindenhurst, NY 11384',
        coordinate: ['40.811873397132395', '-73.94826902574404'],
      },
      {
        text: '11624 Jairo Road, Lindenhurst, NY 11160',
        coordinate: ['40.823376279414674', '-73.93960148270892'],
      },
      {
        text: '11021 Waelchi Crossing, Brooklyn, NY 11306',
        coordinate: ['40.77751176704511', '-73.97279729093525'],
      },
    ],
  },
  {
    id: getObjectId('customer_50'),
    firstName: 'Antwon',
    lastName: 'Herman',
    fullName: 'Antwon Herman',
    gender: 'Male',
    gsm: '(978) 039-8070',
    createdAt: '2024-07-06T16:29:01.833Z',
    isActive: true,
    avatar: [
      {
        name: '695845cf-639f-4db8-bbb9-55d1f38c6db1',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '5ad5dce8-c48e-4cf6-91c1-a9f35cf90b2e',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1197.jpg',
      },
    ],
    addresses: [
      {
        text: '11812 Uriah Islands, Massapequa, NY 11134',
        coordinate: ['40.76936591609023', '-73.97395465473141'],
      },
      {
        text: '11031 Feil Crossing, Lindenhurst, NY 11251',
        coordinate: ['40.83451001107047', '-73.91770528927904'],
      },
      {
        text: '11426 Denesik Courts, Brooklyn, NY 11954',
        coordinate: ['40.622273685700655', '-74.07883292358069'],
      },
    ],
  },
  {
    id: getObjectId('customer_51'),
    firstName: 'Dino',
    lastName: 'Barton',
    fullName: 'Dino Barton',
    gender: 'Female',
    gsm: '(450) 827-4076',
    createdAt: '2024-06-08T13:56:38.202Z',
    isActive: true,
    avatar: [
      {
        name: '30748938-c88a-4f9c-8091-eed7143873b4',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'affa9f85-9f0e-4d66-9418-71bcf7cc7379',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/852.jpg',
      },
    ],
    addresses: [
      {
        text: '11073 Wuckert Lake, Massapequa, NY 11688',
        coordinate: ['40.80679767187204', '-73.94678301233309'],
      },
      {
        text: '11958 Hintz Light, Massapequa, NY 11935',
        coordinate: ['40.875917577275104', '-73.82848174189849'],
      },
      {
        text: '11576 Kerluke Summit, Massapequa, NY 11417',
        coordinate: ['40.59210466006108', '-73.99582650996682'],
      },
    ],
  },
  {
    id: getObjectId('customer_52'),
    firstName: 'Aileen',
    lastName: 'Erdman',
    fullName: 'Aileen Erdman',
    gender: 'Female',
    gsm: '(266) 326-9310',
    createdAt: '2024-06-24T22:09:23.155Z',
    isActive: false,
    avatar: [
      {
        name: '948c8818-abb4-48c7-bf97-f4c2f51a4026',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'c0f9f620-1e8f-4e4b-8d4a-679e665a6de0',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/932.jpg',
      },
    ],
    addresses: [
      {
        text: '11714 Cole Prairie, Lindenhurst, NY 11787',
        coordinate: ['40.779621755520346', '-73.9653953538533'],
      },
      {
        text: '11489 Schoen Throughway, Lindenhurst, NY 11849',
        coordinate: ['40.69130748551876', '-73.97542925623603'],
      },
      {
        text: '11367 Ansley Stravenue, Massapequa, NY 11350',
        coordinate: ['40.81730470420681', '-73.94741458340314'],
      },
    ],
  },
  {
    id: getObjectId('customer_53'),
    firstName: 'Aniya',
    lastName: 'Satterfield',
    fullName: 'Aniya Satterfield',
    gender: 'Male',
    gsm: '(105) 949-0736',
    createdAt: '2024-06-19T12:37:14.627Z',
    isActive: false,
    avatar: [
      {
        name: 'b0432cc6-94c1-4a57-a9ff-87faaf59b089',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '742f2274-ac8c-4a9d-a774-133162ce5685',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/260.jpg',
      },
    ],
    addresses: [
      {
        text: '11509 Donna Canyon, Brooklyn, NY 11024',
        coordinate: ['40.85330068757448', '-73.93352262256185'],
      },
      {
        text: '11523 Fritsch Flat, Massapequa, NY 11101',
        coordinate: ['40.80097139543108', '-73.93878498911884'],
      },
      {
        text: '11107 Elnora Hills, Brooklyn, NY 11824',
        coordinate: ['40.60236204486041', '-74.00232304200087'],
      },
    ],
  },
  {
    id: getObjectId('customer_54'),
    firstName: 'Rigoberto',
    lastName: 'Ondricka',
    fullName: 'Rigoberto Ondricka',
    gender: 'Female',
    gsm: '(728) 394-4965',
    createdAt: '2024-06-22T08:48:52.008Z',
    isActive: false,
    avatar: [
      {
        name: '48d6dbb1-a3e1-4fcb-8dc2-a06e90a48d27',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'a8cb1a7c-f4fb-4d13-bad6-4ca31eabc1f8',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/777.jpg',
      },
    ],
    addresses: [
      {
        text: '11495 Waters Green, Brooklyn, NY 11190',
        coordinate: ['40.6957041527947', '-73.74115440500046'],
      },
      {
        text: '11776 Wilderman Prairie, Lindenhurst, NY 11562',
        coordinate: ['40.66945134822127', '-73.93551047298159'],
      },
      {
        text: '11727 Schaefer Inlet, Lindenhurst, NY 11036',
        coordinate: ['40.68715261156324', '-74.00526659632791'],
      },
    ],
  },
  {
    id: getObjectId('customer_55'),
    firstName: 'Frankie',
    lastName: 'Hayes',
    fullName: 'Frankie Hayes',
    gender: 'Male',
    gsm: '(954) 722-9332',
    createdAt: '2024-06-14T05:05:49.510Z',
    isActive: false,
    avatar: [
      {
        name: 'c5508cea-bb25-4a38-a21c-956baf42a164',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'ad592594-c795-4362-824a-c4b4d13f0e4c',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/898.jpg',
      },
    ],
    addresses: [
      {
        text: '11269 Stokes Valley, Lindenhurst, NY 11154',
        coordinate: ['40.67540078261772', '-73.81703727480193'],
      },
      {
        text: '11456 Federico Freeway, Lindenhurst, NY 11390',
        coordinate: ['40.73636731561727', '-73.87880380035317'],
      },
      {
        text: '11335 Greyson Mission, Lindenhurst, NY 11507',
        coordinate: ['40.89110181872506', '-73.8938991544214'],
      },
    ],
  },
  {
    id: getObjectId('customer_56'),
    firstName: 'Rachael',
    lastName: 'Kuvalis',
    fullName: 'Rachael Kuvalis',
    gender: 'Female',
    gsm: '(609) 761-1569',
    createdAt: '2024-07-06T03:19:32.434Z',
    isActive: false,
    avatar: [
      {
        name: '89c67b4a-cbd8-4d3a-a14c-eda5b8dbb123',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'bcc0da4a-a1d2-4008-b671-9b87320af213',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1163.jpg',
      },
    ],
    addresses: [
      {
        text: '11928 Zemlak Terrace, Brooklyn, NY 11083',
        coordinate: ['40.5861219668654', '-73.96563797373686'],
      },
      {
        text: '11031 Feil Crossing, Lindenhurst, NY 11251',
        coordinate: ['40.83451001107047', '-73.91770528927904'],
      },
      {
        text: '11335 Greyson Mission, Lindenhurst, NY 11507',
        coordinate: ['40.89110181872506', '-73.8938991544214'],
      },
    ],
  },
  {
    id: getObjectId('customer_57'),
    firstName: 'Jolie',
    lastName: 'Littel',
    fullName: 'Jolie Littel',
    gender: 'Male',
    gsm: '(181) 564-2718',
    createdAt: '2024-06-20T19:58:35.392Z',
    isActive: false,
    avatar: [
      {
        name: '8af7b1ba-682e-48cc-8bfe-226cef3658a9',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '0f67b52b-d3a0-45a9-b384-3e7dc7d61530',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/801.jpg',
      },
    ],
    addresses: [
      {
        text: '11045 Johnston Key, Lindenhurst, NY 11539',
        coordinate: ['40.84398642270739', '-73.83864402262044'],
      },
      {
        text: '11498 Cale Crest, Lindenhurst, NY 11537',
        coordinate: ['40.75657150685255', '-73.98892437948754'],
      },
      {
        text: '11263 Solon Stream, Lindenhurst, NY 11007',
        coordinate: ['40.63674069980736', '-73.91978780874902'],
      },
    ],
  },
  {
    id: getObjectId('customer_58'),
    firstName: 'Maud',
    lastName: 'Labadie',
    fullName: 'Maud Labadie',
    gender: 'Female',
    gsm: '(736) 806-8180',
    createdAt: '2024-06-19T02:23:56.991Z',
    isActive: false,
    avatar: [
      {
        name: '16419a59-50d1-4b02-b9a4-32fdb07fd662',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '5bf47b12-0f0b-4760-bab9-65c1b1741ccf',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/211.jpg',
      },
    ],
    addresses: [
      {
        text: '11837 Ferry Corners, Brooklyn, NY 11749',
        coordinate: ['40.83762046059387', '-73.87537910005294'],
      },
      {
        text: '11359 Weissnat Shore, Lindenhurst, NY 11530',
        coordinate: ['40.7318003523917', '-73.81115496631985'],
      },
      {
        text: '11036 Hartmann Islands, Massapequa, NY 11273',
        coordinate: ['40.80648728921871', '-73.94602283563091'],
      },
    ],
  },
  {
    id: getObjectId('customer_59'),
    firstName: 'Noel',
    lastName: 'Beier',
    fullName: 'Noel Beier',
    gender: 'Female',
    gsm: '(549) 182-8666',
    createdAt: '2024-07-05T00:42:33.666Z',
    isActive: true,
    avatar: [
      {
        name: 'e39d70bb-5082-43f8-afd4-257032e525a0',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '1cd3f800-66ee-44fa-95b7-de49d1f58423',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1205.jpg',
      },
    ],
    addresses: [
      {
        text: '11898 Chelsea Plain, Lindenhurst, NY 11735',
        coordinate: ['40.875525570218045', '-73.86179079437676'],
      },
      {
        text: '11928 Zemlak Terrace, Brooklyn, NY 11083',
        coordinate: ['40.5861219668654', '-73.96563797373686'],
      },
      {
        text: '11922 Halvorson Terrace, Brooklyn, NY 11104',
        coordinate: ['40.863466423461276', '-73.88157667321018'],
      },
    ],
  },
  {
    id: getObjectId('customer_60'),
    firstName: 'Kiera',
    lastName: 'Dare',
    fullName: 'Kiera Dare',
    gender: 'Female',
    gsm: '(419) 802-6751',
    createdAt: '2024-06-27T13:15:17.840Z',
    isActive: true,
    avatar: [
      {
        name: 'f3d4d3e7-752b-4760-b1f1-086c3b75459f',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '7d62a231-6b3b-449b-9067-afd655aabe70',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/706.jpg',
      },
    ],
    addresses: [
      {
        text: '11495 Waters Green, Brooklyn, NY 11190',
        coordinate: ['40.6957041527947', '-73.74115440500046'],
      },
      {
        text: '11760 Cynthia Dam, Brooklyn, NY 11589',
        coordinate: ['40.805598122229355', '-73.96654850238752'],
      },
      {
        text: '11195 Lysanne Estates, Brooklyn, NY 11779',
        coordinate: ['40.88524705779494', '-73.84462210652717'],
      },
    ],
  },
  {
    id: getObjectId('customer_61'),
    firstName: 'Mable',
    lastName: 'Sipes',
    fullName: 'Mable Sipes',
    gender: 'Male',
    gsm: '(571) 563-2047',
    createdAt: '2024-06-27T19:48:37.300Z',
    isActive: true,
    avatar: [
      {
        name: 'f3e9487e-bea4-4558-b3dc-a0e94e732d4c',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '01ab7e02-0114-4248-af36-83b82230f3d6',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1216.jpg',
      },
    ],
    addresses: [
      {
        text: '11430 Leuschke Via, Brooklyn, NY 11727',
        coordinate: ['40.82687191092169', '-73.93860406015271'],
      },
      {
        text: '11509 Donna Canyon, Brooklyn, NY 11024',
        coordinate: ['40.85330068757448', '-73.93352262256185'],
      },
      {
        text: '11598 Curt Shoals, Lindenhurst, NY 11514',
        coordinate: ['40.802597877430756', '-73.93849763295711'],
      },
    ],
  },
  {
    id: getObjectId('customer_62'),
    firstName: 'Domenick',
    lastName: 'Emmerich',
    fullName: 'Domenick Emmerich',
    gender: 'Male',
    gsm: '(297) 625-5204',
    createdAt: '2024-06-15T20:00:42.405Z',
    isActive: true,
    avatar: [
      {
        name: '8836a588-72ef-41d9-ad45-66c0dca735c6',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '3eaf0084-2d8b-40a5-8fc9-70145fbff466',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/483.jpg',
      },
    ],
    addresses: [
      {
        text: '11367 Ansley Stravenue, Massapequa, NY 11350',
        coordinate: ['40.81730470420681', '-73.94741458340314'],
      },
      {
        text: '11264 Pauline Knolls, Brooklyn, NY 11384',
        coordinate: ['40.85195030781291', '-73.93088781078077'],
      },
      {
        text: '11715 Eloisa Summit, Lindenhurst, NY 11203',
        coordinate: ['40.813987220087206', '-73.9460629373589'],
      },
    ],
  },
  {
    id: getObjectId('customer_63'),
    firstName: 'Harvey',
    lastName: 'Homenick',
    fullName: 'Harvey Homenick',
    gender: 'Male',
    gsm: '(258) 969-4290',
    createdAt: '2024-06-15T00:11:35.357Z',
    isActive: true,
    avatar: [
      {
        name: '8cb89eb7-42b8-48d9-8c73-db6b4cc29f6d',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '04d8ff64-726c-47e0-9e64-e70d97fc811d',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/215.jpg',
      },
    ],
    addresses: [
      {
        text: '11991 Feest Court, Brooklyn, NY 11595',
        coordinate: ['40.7380915670452', '-73.99525100532993'],
      },
      {
        text: '11384 Waelchi Rapid, Massapequa, NY 11796',
        coordinate: ['40.84590139880644', '-73.8928291967851'],
      },
      {
        text: '11898 Chelsea Plain, Lindenhurst, NY 11735',
        coordinate: ['40.875525570218045', '-73.86179079437676'],
      },
    ],
  },
  {
    id: getObjectId('customer_64'),
    firstName: 'Lowell',
    lastName: 'Bergstrom',
    fullName: 'Lowell Bergstrom',
    gender: 'Male',
    gsm: '(112) 669-8369',
    createdAt: '2024-06-28T04:03:25.780Z',
    isActive: true,
    avatar: [
      {
        name: 'd83b7ad5-1c0b-411e-8227-f31c999e1767',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'f6233ee0-2eef-4225-9ebd-2455f8df54d7',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/87.jpg',
      },
    ],
    addresses: [
      {
        text: '11269 Stokes Valley, Lindenhurst, NY 11154',
        coordinate: ['40.67540078261772', '-73.81703727480193'],
      },
      {
        text: '11974 Harold Ports, Brooklyn, NY 11963',
        coordinate: ['40.674179744645684', '-73.98876832456823'],
      },
      {
        text: '11835 Powlowski Extension, Brooklyn, NY 11150',
        coordinate: ['40.76245015151365', '-73.87061296246294'],
      },
    ],
  },
  {
    id: getObjectId('customer_65'),
    firstName: 'Ayana',
    lastName: 'Mraz',
    fullName: 'Ayana Mraz',
    gender: 'Male',
    gsm: '(955) 260-9077',
    createdAt: '2024-06-26T05:16:53.031Z',
    isActive: true,
    avatar: [
      {
        name: 'b5053e45-6da9-4412-85c6-c711868a57bc',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'e6e3b543-e78c-44ed-a0c5-ee0aa3cf7b0d',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/10.jpg',
      },
    ],
    addresses: [
      {
        text: '11719 Buckridge Center, Brooklyn, NY 11760',
        coordinate: ['40.71127832019916', '-73.72859237968323'],
      },
      {
        text: '11728 Earlene Garden, Brooklyn, NY 11259',
        coordinate: ['40.61541451352046', '-73.9512235195281'],
      },
      {
        text: '11474 Dickens Lodge, Massapequa, NY 11199',
        coordinate: ['40.75587993188085', '-73.7894709790709'],
      },
    ],
  },
  {
    id: getObjectId('customer_66'),
    firstName: 'Sammie',
    lastName: 'Berge',
    fullName: 'Sammie Berge',
    gender: 'Male',
    gsm: '(734) 968-8763',
    createdAt: '2024-06-22T10:54:58.688Z',
    isActive: true,
    avatar: [
      {
        name: '12a4b11c-fd9f-40c0-b3d8-4dc97d30a222',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '587628e7-02f6-445c-a962-4c1a481b610c',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/516.jpg',
      },
    ],
    addresses: [
      {
        text: '11727 Schaefer Inlet, Lindenhurst, NY 11036',
        coordinate: ['40.68715261156324', '-74.00526659632791'],
      },
      {
        text: '11762 Schinner Garden, Lindenhurst, NY 11487',
        coordinate: ['40.50954831912203', '-74.24409344591764'],
      },
      {
        text: '11335 Greyson Mission, Lindenhurst, NY 11507',
        coordinate: ['40.89110181872506', '-73.8938991544214'],
      },
    ],
  },
  {
    id: getObjectId('customer_67'),
    firstName: 'Zoie',
    lastName: 'Collins',
    fullName: 'Zoie Collins',
    gender: 'Male',
    gsm: '(896) 441-2008',
    createdAt: '2024-06-10T18:55:51.105Z',
    isActive: false,
    avatar: [
      {
        name: 'db6f7a5f-a24e-4a78-bc47-969902ccb641',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '57dbb70a-a57d-41f5-82ec-703c78565e7f',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/122.jpg',
      },
    ],
    addresses: [
      {
        text: '11471 Ransom Parkway, Massapequa, NY 11941',
        coordinate: ['40.70408980199366', '-73.9930806087735'],
      },
      {
        text: '11530 Mueller Port, Massapequa, NY 11184',
        coordinate: ['40.76449980110699', '-73.96908694706285'],
      },
      {
        text: '11927 Lemke Forges, Brooklyn, NY 11658',
        coordinate: ['40.730915473354905', '-73.95608227774139'],
      },
    ],
  },
  {
    id: getObjectId('customer_68'),
    firstName: 'Hillary',
    lastName: 'Rodriguez',
    fullName: 'Hillary Rodriguez',
    gender: 'Female',
    gsm: '(364) 910-9951',
    createdAt: '2024-06-28T06:28:54.370Z',
    isActive: true,
    avatar: [
      {
        name: '6e00de8c-3aa3-448a-9daf-19743a6308b9',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '1c140504-86ca-4dc5-8982-5798f97e484f',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1162.jpg',
      },
    ],
    addresses: [
      {
        text: '11727 Schaefer Inlet, Lindenhurst, NY 11036',
        coordinate: ['40.68715261156324', '-74.00526659632791'],
      },
      {
        text: '11264 Pauline Knolls, Brooklyn, NY 11384',
        coordinate: ['40.85195030781291', '-73.93088781078077'],
      },
      {
        text: '11799 Mayert Plaza, Lindenhurst, NY 11934',
        coordinate: ['40.65389146392323', '-73.78928677609493'],
      },
    ],
  },
  {
    id: getObjectId('customer_69'),
    firstName: 'Anderson',
    lastName: 'Torp',
    fullName: 'Anderson Torp',
    gender: 'Female',
    gsm: '(051) 488-6095',
    createdAt: '2024-06-27T14:01:01.438Z',
    isActive: true,
    avatar: [
      {
        name: '296a7c2d-ad8a-45bc-9a4c-35d0872f36fb',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '85d82352-0dfa-44c0-877f-e0918ea7e36c',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/490.jpg',
      },
    ],
    addresses: [
      {
        text: '11148 Jon Island, Lindenhurst, NY 11812',
        coordinate: ['40.86514358177516', '-73.88437348485921'],
      },
      {
        text: '11120 Royal Coves, Lindenhurst, NY 11520',
        coordinate: ['40.63410088148846', '-73.99688826750287'],
      },
      {
        text: '11228 Stiedemann Valley, Brooklyn, NY 11949',
        coordinate: ['40.81821649698436', '-73.86826310670972'],
      },
    ],
  },
  {
    id: getObjectId('customer_70'),
    firstName: 'Lenna',
    lastName: 'Hodkiewicz',
    fullName: 'Lenna Hodkiewicz',
    gender: 'Male',
    gsm: '(065) 929-4003',
    createdAt: '2024-06-18T20:43:28.974Z',
    isActive: false,
    avatar: [
      {
        name: '7c1f325a-68ac-4448-ac57-baadb86a6330',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '52d2cef1-ecee-4440-b7b8-be5481c7722b',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/867.jpg',
      },
    ],
    addresses: [
      {
        text: '11374 Daniella Courts, Lindenhurst, NY 11722',
        coordinate: ['40.692405303311446', '-74.00069759444021'],
      },
      {
        text: '11642 Alberta Junction, Lindenhurst, NY 11370',
        coordinate: ['40.782269303154564', '-73.92799108814602'],
      },
      {
        text: '11862 Ward Glen, Massapequa, NY 11885',
        coordinate: ['40.87823216032764', '-73.91814523246967'],
      },
    ],
  },
  {
    id: getObjectId('customer_71'),
    firstName: 'Kailyn',
    lastName: 'Bogan',
    fullName: 'Kailyn Bogan',
    gender: 'Male',
    gsm: '(068) 595-8714',
    createdAt: '2024-06-18T12:28:55.707Z',
    isActive: true,
    avatar: [
      {
        name: 'e4c1552b-f0ce-44a2-8fb8-bf1f071e49e3',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '712300d8-5e31-4f43-967d-05740345ad92',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/608.jpg',
      },
    ],
    addresses: [
      {
        text: '11456 Federico Freeway, Lindenhurst, NY 11390',
        coordinate: ['40.73636731561727', '-73.87880380035317'],
      },
      {
        text: '11186 Nolan Crest, Lindenhurst, NY 11296',
        coordinate: ['40.59649847049655', '-74.18222476116168'],
      },
      {
        text: '11898 Chelsea Plain, Lindenhurst, NY 11735',
        coordinate: ['40.875525570218045', '-73.86179079437676'],
      },
    ],
  },
  {
    id: getObjectId('customer_72'),
    firstName: 'Brigitte',
    lastName: 'Goldner',
    fullName: 'Brigitte Goldner',
    gender: 'Male',
    gsm: '(901) 023-2656',
    createdAt: '2024-06-11T11:55:32.374Z',
    isActive: true,
    avatar: [
      {
        name: 'd0e76b04-98cc-4232-b4b3-41dddd3ccad5',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'be354127-48fc-46b3-977f-ce5d099fa27a',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/953.jpg',
      },
    ],
    addresses: [
      {
        text: '11045 Johnston Key, Lindenhurst, NY 11539',
        coordinate: ['40.84398642270739', '-73.83864402262044'],
      },
      {
        text: '11680 Georgette Junctions, Massapequa, NY 11411',
        coordinate: ['40.702102706281686', '-73.80945836885176'],
      },
      {
        text: '11576 Kerluke Summit, Massapequa, NY 11417',
        coordinate: ['40.59210466006108', '-73.99582650996682'],
      },
    ],
  },
  {
    id: getObjectId('customer_73'),
    firstName: 'Cornell',
    lastName: 'Cormier',
    fullName: 'Cornell Cormier',
    gender: 'Male',
    gsm: '(145) 591-1426',
    createdAt: '2024-07-07T03:52:36.446Z',
    isActive: true,
    avatar: [
      {
        name: '7033ed80-0302-4cea-9259-0b55120cbd26',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'e23ba795-d4c8-44af-8a5e-72b6f26bf1cb',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1158.jpg',
      },
    ],
    addresses: [
      {
        text: '11318 Sipes Harbors, Lindenhurst, NY 11120',
        coordinate: ['40.70101970449942', '-73.98238357202935'],
      },
      {
        text: '11367 Ansley Stravenue, Massapequa, NY 11350',
        coordinate: ['40.81730470420681', '-73.94741458340314'],
      },
      {
        text: '11715 Eloisa Summit, Lindenhurst, NY 11203',
        coordinate: ['40.813987220087206', '-73.9460629373589'],
      },
    ],
  },
  {
    id: getObjectId('customer_74'),
    firstName: 'Anna',
    lastName: 'Kautzer',
    fullName: 'Anna Kautzer',
    gender: 'Female',
    gsm: '(265) 446-3272',
    createdAt: '2024-06-09T18:11:27.744Z',
    isActive: false,
    avatar: [
      {
        name: '658f59f1-dc69-42e9-b56e-0fbbe3c28174',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '34ae6229-bbc6-4b5f-9902-d8b619fbf38c',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/210.jpg',
      },
    ],
    addresses: [
      {
        text: '11143 Ortiz Mill, Brooklyn, NY 11207',
        coordinate: ['40.6645385558063', '-73.90402732990448'],
      },
      {
        text: '11434 Daniel Meadows, Massapequa, NY 11452',
        coordinate: ['40.687024663944904', '-73.87836555031981'],
      },
      {
        text: '11148 Susie Oval, Brooklyn, NY 11640',
        coordinate: ['40.6814054925542', '-73.99657415385126'],
      },
    ],
  },
  {
    id: getObjectId('customer_75'),
    firstName: 'Jarret',
    lastName: 'Howe',
    fullName: 'Jarret Howe',
    gender: 'Female',
    gsm: '(119) 516-8066',
    createdAt: '2024-06-26T12:54:56.093Z',
    isActive: false,
    avatar: [
      {
        name: '6e55d8ee-5b90-4463-ba95-3b25b65624bc',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '4e907311-ce67-4ed5-b6fe-4569c3ad8bee',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/257.jpg',
      },
    ],
    addresses: [
      {
        text: '11077 Gerardo Mountain, Lindenhurst, NY 11372',
        coordinate: ['40.70883839875818', '-73.93976069363174'],
      },
      {
        text: '11107 Hickle Ranch, Lindenhurst, NY 11515',
        coordinate: ['40.61088151832268', '-74.08690487977938'],
      },
      {
        text: '11733 Walker Cove, Massapequa, NY 11322',
        coordinate: ['40.56648613912078', '-73.87751470966245'],
      },
    ],
  },
  {
    id: getObjectId('customer_76'),
    firstName: 'Dena',
    lastName: 'Swaniawski',
    fullName: 'Dena Swaniawski',
    gender: 'Male',
    gsm: '(254) 138-7832',
    createdAt: '2024-06-23T14:44:03.099Z',
    isActive: false,
    avatar: [
      {
        name: 'eab7a89b-7482-461f-96ad-e0301f9678ef',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '04a3604e-9f2b-4ec5-ab83-c3fd8ae3d5b7',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/390.jpg',
      },
    ],
    addresses: [
      {
        text: '11085 Lenora Crossroad, Massapequa, NY 11054',
        coordinate: ['40.6717882500396', '-73.8952881573647'],
      },
      {
        text: '11148 Jon Island, Lindenhurst, NY 11812',
        coordinate: ['40.86514358177516', '-73.88437348485921'],
      },
      {
        text: '11774 Koss Mission, Brooklyn, NY 11540',
        coordinate: ['40.73032437088068', '-73.99512821335122'],
      },
    ],
  },
  {
    id: getObjectId('customer_77'),
    firstName: 'Fredy',
    lastName: 'Shanahan',
    fullName: 'Fredy Shanahan',
    gender: 'Female',
    gsm: '(267) 056-4699',
    createdAt: '2024-06-08T18:13:54.112Z',
    isActive: true,
    avatar: [
      {
        name: 'a7d88539-5ac2-4033-b973-6a91ac0247c5',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '7a1eb76c-900d-4ba7-b54a-ae20b290c7e1',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1146.jpg',
      },
    ],
    addresses: [
      {
        text: '11946 Little Isle, Massapequa, NY 11319',
        coordinate: ['40.81821649698436', '-73.86826310670972'],
      },
      {
        text: '11023 Reilly Freeway, Brooklyn, NY 11304',
        coordinate: ['40.708836427424856', '-73.95736505455008'],
      },
      {
        text: '11878 Pagac Trail, Lindenhurst, NY 11876',
        coordinate: ['40.71114281327269', '-74.01648182914843'],
      },
    ],
  },
  {
    id: getObjectId('customer_78'),
    firstName: 'Zella',
    lastName: 'Kuhlman',
    fullName: 'Zella Kuhlman',
    gender: 'Male',
    gsm: '(017) 340-2272',
    createdAt: '2024-07-07T20:14:40.439Z',
    isActive: false,
    avatar: [
      {
        name: '7ac25f27-bd51-46f7-a68f-9f556b7ac66a',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'e1524969-196b-4ffd-958f-2a587c20e324',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1071.jpg',
      },
    ],
    addresses: [
      {
        text: '11148 Jon Island, Lindenhurst, NY 11812',
        coordinate: ['40.86514358177516', '-73.88437348485921'],
      },
      {
        text: '11263 Solon Stream, Lindenhurst, NY 11007',
        coordinate: ['40.63674069980736', '-73.91978780874902'],
      },
      {
        text: '11927 Lemke Forges, Brooklyn, NY 11658',
        coordinate: ['40.730915473354905', '-73.95608227774139'],
      },
    ],
  },
  {
    id: getObjectId('customer_79'),
    firstName: 'Katarina',
    lastName: 'Gusikowski',
    fullName: 'Katarina Gusikowski',
    gender: 'Female',
    gsm: '(595) 908-1432',
    createdAt: '2024-06-28T18:21:34.312Z',
    isActive: true,
    avatar: [
      {
        name: '4b4d5794-a5e6-4aba-9731-61731b4c9f44',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'fe53acf6-4105-46f9-bfa8-3320fb6e882f',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/451.jpg',
      },
    ],
    addresses: [
      {
        text: '11772 Toy Row, Lindenhurst, NY 11384',
        coordinate: ['40.811873397132395', '-73.94826902574404'],
      },
      {
        text: '11135 Reichert Course, Brooklyn, NY 11720',
        coordinate: ['40.737206062011865', '-73.84886438595831'],
      },
      {
        text: '11180 Thompson Circle, Massapequa, NY 11460',
        coordinate: ['40.52879780292704', '-74.16599356445849'],
      },
    ],
  },
  {
    id: getObjectId('customer_80'),
    firstName: 'Annabel',
    lastName: 'Kuvalis',
    fullName: 'Annabel Kuvalis',
    gender: 'Male',
    gsm: '(236) 495-3374',
    createdAt: '2024-06-28T10:17:14.385Z',
    isActive: false,
    avatar: [
      {
        name: 'fbeb64f1-f828-4328-a81f-7ad1865990b4',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '2d5bd3fc-454e-4803-aa38-8ebf96cca995',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/771.jpg',
      },
    ],
    addresses: [
      {
        text: '11618 Hoeger Lights, Massapequa, NY 11449',
        coordinate: ['40.627049675070175', '-73.98253459810051'],
      },
      {
        text: '11108 Bauch Trail, Massapequa, NY 11355',
        coordinate: ['40.81991419971737', '-73.84577566721931'],
      },
      {
        text: '11021 Waelchi Crossing, Brooklyn, NY 11306',
        coordinate: ['40.77751176704511', '-73.97279729093525'],
      },
    ],
  },
  {
    id: getObjectId('customer_81'),
    firstName: 'Eula',
    lastName: 'Kshlerin',
    fullName: 'Eula Kshlerin',
    gender: 'Male',
    gsm: '(000) 513-7966',
    createdAt: '2024-06-09T04:07:24.632Z',
    isActive: false,
    avatar: [
      {
        name: '57c1e87f-360b-43a9-a588-0195e7746f6f',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '7d4ce77e-475f-4109-9cec-b4e5abc0c020',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/557.jpg',
      },
    ],
    addresses: [
      {
        text: '11878 Dudley Pike, Lindenhurst, NY 11604',
        coordinate: ['40.64716080488486', '-74.0073656851469'],
      },
      {
        text: '11647 Khalil Freeway, Massapequa, NY 11799',
        coordinate: ['40.73552798165039', '-73.99701720039775'],
      },
      {
        text: '11097 Naomie Mountain, Brooklyn, NY 11492',
        coordinate: ['40.67369096200763', '-73.92525141581397'],
      },
    ],
  },
  {
    id: getObjectId('customer_82'),
    firstName: 'Jodie',
    lastName: 'Ernser',
    fullName: 'Jodie Ernser',
    gender: 'Female',
    gsm: '(897) 185-0572',
    createdAt: '2024-06-11T20:02:53.024Z',
    isActive: false,
    avatar: [
      {
        name: 'f09ee1a9-4bf1-420b-8b9d-b1f1755ac0d1',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'f93e9554-b498-45e0-ab50-4af0f818a11b',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/278.jpg',
      },
    ],
    addresses: [
      {
        text: '11864 Leonora Stream, Brooklyn, NY 11957',
        coordinate: ['40.832201142470986', '-73.9018035427564'],
      },
      {
        text: '11851 Swift Glen, Lindenhurst, NY 11624',
        coordinate: ['40.51158309370173', '-74.22091326797245'],
      },
      {
        text: '11228 Stiedemann Valley, Brooklyn, NY 11949',
        coordinate: ['40.81821649698436', '-73.86826310670972'],
      },
    ],
  },
  {
    id: getObjectId('customer_83'),
    firstName: 'Coy',
    lastName: 'West',
    fullName: 'Coy West',
    gender: 'Male',
    gsm: '(682) 622-8142',
    createdAt: '2024-06-23T19:05:19.102Z',
    isActive: true,
    avatar: [
      {
        name: 'a8fe7ed5-8584-402a-8ae6-c19fecdf7a7b',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'd6a6fc9f-489b-4914-b726-c0347a2fe52d',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/100.jpg',
      },
    ],
    addresses: [
      {
        text: '11618 Hoeger Lights, Massapequa, NY 11449',
        coordinate: ['40.627049675070175', '-73.98253459810051'],
      },
      {
        text: '11143 Ortiz Mill, Brooklyn, NY 11207',
        coordinate: ['40.6645385558063', '-73.90402732990448'],
      },
      {
        text: '11269 Stokes Valley, Lindenhurst, NY 11154',
        coordinate: ['40.67540078261772', '-73.81703727480193'],
      },
    ],
  },
  {
    id: getObjectId('customer_84'),
    firstName: 'Felipe',
    lastName: 'Gleichner',
    fullName: 'Felipe Gleichner',
    gender: 'Male',
    gsm: '(722) 813-3845',
    createdAt: '2024-07-02T14:25:00.601Z',
    isActive: false,
    avatar: [
      {
        name: 'b783a4b0-cbc4-471d-a241-6ae00ab555df',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'efecf220-d9b7-4168-b745-8bdb5adda445',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/591.jpg',
      },
    ],
    addresses: [
      {
        text: '11082 Davonte Loop, Brooklyn, NY 11055',
        coordinate: ['40.698260804649976', '-73.91788218792928'],
      },
      {
        text: '11642 Alberta Junction, Lindenhurst, NY 11370',
        coordinate: ['40.782269303154564', '-73.92799108814602'],
      },
      {
        text: '11907 Okuneva Ville, Massapequa, NY 11534',
        coordinate: ['40.83473164454386', '-73.87357573718195'],
      },
    ],
  },
  {
    id: getObjectId('customer_85'),
    firstName: 'Gunner',
    lastName: 'Buckridge',
    fullName: 'Gunner Buckridge',
    gender: 'Male',
    gsm: '(770) 663-8385',
    createdAt: '2024-06-22T13:29:51.225Z',
    isActive: false,
    avatar: [
      {
        name: 'b8e7c278-ad35-4d5c-8d3b-58b93eef948b',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'c4017d37-96cd-44cf-a087-720f99167d89',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1051.jpg',
      },
    ],
    addresses: [
      {
        text: '11055 Schuster Gardens, Massapequa, NY 11732',
        coordinate: ['40.6365034810973', '-73.98578000769199'],
      },
      {
        text: '11085 Lenora Crossroad, Massapequa, NY 11054',
        coordinate: ['40.6717882500396', '-73.8952881573647'],
      },
      {
        text: '11097 Naomie Mountain, Brooklyn, NY 11492',
        coordinate: ['40.67369096200763', '-73.92525141581397'],
      },
    ],
  },
  {
    id: getObjectId('customer_86'),
    firstName: 'Hank',
    lastName: 'Koss',
    fullName: 'Hank Koss',
    gender: 'Male',
    gsm: '(555) 398-2763',
    createdAt: '2024-06-15T22:31:38.736Z',
    isActive: true,
    avatar: [
      {
        name: '31c441a4-e669-4fde-a633-01f20a2dc48c',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '6c2541e2-e11f-4030-a1f1-5994e35470a0',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/561.jpg',
      },
    ],
    addresses: [
      {
        text: '11851 Swift Glen, Lindenhurst, NY 11624',
        coordinate: ['40.51158309370173', '-74.22091326797245'],
      },
      {
        text: '11719 Buckridge Center, Brooklyn, NY 11760',
        coordinate: ['40.71127832019916', '-73.72859237968323'],
      },
      {
        text: '11961 Wilfred Terrace, Brooklyn, NY 11580',
        coordinate: ['40.675225426976645', '-73.91483721590403'],
      },
    ],
  },
  {
    id: getObjectId('customer_87'),
    firstName: 'Michel',
    lastName: 'Stoltenberg',
    fullName: 'Michel Stoltenberg',
    gender: 'Female',
    gsm: '(164) 521-3988',
    createdAt: '2024-06-14T15:34:42.160Z',
    isActive: false,
    avatar: [
      {
        name: 'f543d9af-672c-41ef-b9d4-d134ef72c30e',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '543f5a16-6dab-4adb-be70-398f6db4d696',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/704.jpg',
      },
    ],
    addresses: [
      {
        text: '11230 Zander Curve, Lindenhurst, NY 11912',
        coordinate: ['40.87080816088552', '-73.83213503852586'],
      },
      {
        text: '11044 Ezekiel Lodge, Brooklyn, NY 11912',
        coordinate: ['40.66138138796998', '-73.88034206938977'],
      },
      {
        text: '11195 Lysanne Estates, Brooklyn, NY 11779',
        coordinate: ['40.88524705779494', '-73.84462210652717'],
      },
    ],
  },
  {
    id: getObjectId('customer_88'),
    firstName: 'Yessenia',
    lastName: 'Yundt',
    fullName: 'Yessenia Yundt',
    gender: 'Male',
    gsm: '(915) 617-2854',
    createdAt: '2024-06-25T12:02:41.449Z',
    isActive: false,
    avatar: [
      {
        name: '1f7fa341-63c9-43e1-9b0e-7dbe88739754',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '1cade591-0b80-413e-9a2f-c8738c69197a',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1209.jpg',
      },
    ],
    addresses: [
      {
        text: '11374 Daniella Courts, Lindenhurst, NY 11722',
        coordinate: ['40.692405303311446', '-74.00069759444021'],
      },
      {
        text: '11263 Solon Stream, Lindenhurst, NY 11007',
        coordinate: ['40.63674069980736', '-73.91978780874902'],
      },
      {
        text: '11195 Lysanne Estates, Brooklyn, NY 11779',
        coordinate: ['40.88524705779494', '-73.84462210652717'],
      },
    ],
  },
  {
    id: getObjectId('customer_89'),
    firstName: 'Jarod',
    lastName: 'Braun',
    fullName: 'Jarod Braun',
    gender: 'Female',
    gsm: '(927) 652-5103',
    createdAt: '2024-06-16T12:08:35.810Z',
    isActive: true,
    avatar: [
      {
        name: '5f8a97a8-65a7-4b31-ba36-adef7ff35ce6',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'e0a2d78b-f34f-4d5f-bebc-c908ba12466c',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/620.jpg',
      },
    ],
    addresses: [
      {
        text: '11998 Valentin Pike, Massapequa, NY 11868',
        coordinate: ['40.71608376674422', '-73.79906715920882'],
      },
      {
        text: '11812 Raphael Corner, Massapequa, NY 11877',
        coordinate: ['40.72366717557525', '-73.99207275678724'],
      },
      {
        text: '11156 Hoppe Run, Lindenhurst, NY 11165',
        coordinate: ['40.65688875879231', '-73.88404087891976'],
      },
    ],
  },
  {
    id: getObjectId('customer_90'),
    firstName: 'Lottie',
    lastName: 'Lakin',
    fullName: 'Lottie Lakin',
    gender: 'Female',
    gsm: '(128) 373-3472',
    createdAt: '2024-06-28T08:35:00.745Z',
    isActive: false,
    avatar: [
      {
        name: '3a0d1ea5-3a57-4f6b-9113-6a3a4f97ce0d',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '8dc86ba3-681b-43a7-8ea2-df73f113fde6',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/634.jpg',
      },
    ],
    addresses: [
      {
        text: '11082 Davonte Loop, Brooklyn, NY 11055',
        coordinate: ['40.698260804649976', '-73.91788218792928'],
      },
      {
        text: '11166 Cormier Plaza, Lindenhurst, NY 11278',
        coordinate: ['40.86255321747302', '-73.8648318412901'],
      },
      {
        text: '11384 Waelchi Rapid, Massapequa, NY 11796',
        coordinate: ['40.84590139880644', '-73.8928291967851'],
      },
    ],
  },
  {
    id: getObjectId('customer_91'),
    firstName: 'Bethel',
    lastName: 'Schaefer',
    fullName: 'Bethel Schaefer',
    gender: 'Male',
    gsm: '(342) 068-2323',
    createdAt: '2024-06-08T13:21:14.930Z',
    isActive: false,
    avatar: [
      {
        name: 'e93fac59-2b31-483b-bad0-0e7fdeb50955',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '2a6d8cab-5886-4bf1-b8b1-da10a64e0257',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/389.jpg',
      },
    ],
    addresses: [
      {
        text: '11044 Ezekiel Lodge, Brooklyn, NY 11912',
        coordinate: ['40.66138138796998', '-73.88034206938977'],
      },
      {
        text: '11728 Earlene Garden, Brooklyn, NY 11259',
        coordinate: ['40.61541451352046', '-73.9512235195281'],
      },
      {
        text: '11426 Denesik Courts, Brooklyn, NY 11954',
        coordinate: ['40.622273685700655', '-74.07883292358069'],
      },
    ],
  },
  {
    id: getObjectId('customer_92'),
    firstName: 'Hillard',
    lastName: 'Bradtke',
    fullName: 'Hillard Bradtke',
    gender: 'Female',
    gsm: '(999) 353-8331',
    createdAt: '2024-06-20T00:01:56.122Z',
    isActive: false,
    avatar: [
      {
        name: '9bd567ae-570e-408c-b2c0-6314a60878f0',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'e0e478c2-c781-4439-8358-b4d5506b57f3',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/467.jpg',
      },
    ],
    addresses: [
      {
        text: '11642 Alberta Junction, Lindenhurst, NY 11370',
        coordinate: ['40.782269303154564', '-73.92799108814602'],
      },
      {
        text: '11097 Naomie Mountain, Brooklyn, NY 11492',
        coordinate: ['40.67369096200763', '-73.92525141581397'],
      },
      {
        text: '11107 Hickle Ranch, Lindenhurst, NY 11515',
        coordinate: ['40.61088151832268', '-74.08690487977938'],
      },
    ],
  },
  {
    id: getObjectId('customer_93'),
    firstName: 'Elta',
    lastName: 'Turcotte',
    fullName: 'Elta Turcotte',
    gender: 'Male',
    gsm: '(492) 943-5512',
    createdAt: '2024-06-19T22:21:17.673Z',
    isActive: false,
    avatar: [
      {
        name: 'ea1c7b30-c887-424f-9b40-eb01febb1e00',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '9dd1149d-8b0d-451e-9ee9-ae488298cd31',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/186.jpg',
      },
    ],
    addresses: [
      {
        text: '11044 Ezekiel Lodge, Brooklyn, NY 11912',
        coordinate: ['40.66138138796998', '-73.88034206938977'],
      },
      {
        text: '11027 Cruickshank Village, Massapequa, NY 11947',
        coordinate: ['40.63550895730017', '-73.91944128289579'],
      },
      {
        text: '11181 Batz Corners, Lindenhurst, NY 11904',
        coordinate: ['40.74455702716755', '-73.93501800516812'],
      },
    ],
  },
  {
    id: getObjectId('customer_94'),
    firstName: 'Bradly',
    lastName: 'Stoltenberg',
    fullName: 'Bradly Stoltenberg',
    gender: 'Female',
    gsm: '(672) 658-7991',
    createdAt: '2024-06-11T19:02:55.094Z',
    isActive: false,
    avatar: [
      {
        name: 'd5e593a7-7e47-4fef-8bcb-68996bc02efd',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'd74a7eff-ab4e-4947-941f-24e3b991524f',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1132.jpg',
      },
    ],
    addresses: [
      {
        text: '11877 Franecki Isle, Lindenhurst, NY 11625',
        coordinate: ['40.62829175498013', '-74.18137586483954'],
      },
      {
        text: '11505 Raynor Walk, Massapequa, NY 11815',
        coordinate: ['40.75598474475542', '-73.9358398855354'],
      },
      {
        text: '11598 Curt Shoals, Lindenhurst, NY 11514',
        coordinate: ['40.802597877430756', '-73.93849763295711'],
      },
    ],
  },
  {
    id: getObjectId('customer_95'),
    firstName: 'Dominic',
    lastName: 'Stamm',
    fullName: 'Dominic Stamm',
    gender: 'Male',
    gsm: '(973) 160-1997',
    createdAt: '2024-06-08T17:40:49.468Z',
    isActive: false,
    avatar: [
      {
        name: '04b407ec-f75c-4600-9bf6-81b9fdfc99ff',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '020d201c-6321-46ca-bcb1-0782c0c3e58b',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/635.jpg',
      },
    ],
    addresses: [
      {
        text: '11693 Hartmann Park, Brooklyn, NY 11251',
        coordinate: ['40.705101590541354', '-73.98948018281791'],
      },
      {
        text: '11031 Feil Crossing, Lindenhurst, NY 11251',
        coordinate: ['40.83451001107047', '-73.91770528927904'],
      },
      {
        text: '11263 Osinski Forks, Lindenhurst, NY 11884',
        coordinate: ['40.86213206940792', '-73.82618292669638'],
      },
    ],
  },
  {
    id: getObjectId('customer_96'),
    firstName: 'Hubert',
    lastName: 'Monahan',
    fullName: 'Hubert Monahan',
    gender: 'Male',
    gsm: '(725) 035-5091',
    createdAt: '2024-07-05T15:53:51.251Z',
    isActive: true,
    avatar: [
      {
        name: 'e66bca3c-89d6-4ca5-8054-5bd2f2d5dab4',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '51aa7ee5-2d20-45af-9fb7-3779734a9195',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/467.jpg',
      },
    ],
    addresses: [
      {
        text: '11367 Ansley Stravenue, Massapequa, NY 11350',
        coordinate: ['40.81730470420681', '-73.94741458340314'],
      },
      {
        text: '11902 Leuschke Square, Lindenhurst, NY 11156',
        coordinate: ['40.86491116139669', '-73.82210287568375'],
      },
      {
        text: '11719 Buckridge Center, Brooklyn, NY 11760',
        coordinate: ['40.71127832019916', '-73.72859237968323'],
      },
    ],
  },
  {
    id: getObjectId('customer_97'),
    firstName: 'Damian',
    lastName: 'Nienow',
    fullName: 'Damian Nienow',
    gender: 'Male',
    gsm: '(246) 477-9638',
    createdAt: '2024-06-18T16:04:42.934Z',
    isActive: true,
    avatar: [
      {
        name: '79e7b915-24eb-4b71-a9e6-52d676dd0b74',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '5d6c2423-ca8a-4c86-9890-eff8d7809566',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1190.jpg',
      },
    ],
    addresses: [
      {
        text: '11412 Spencer Skyway, Lindenhurst, NY 11312',
        coordinate: ['40.615431898170364', '-73.92934453739576'],
      },
      {
        text: '11027 Jarod Walk, Lindenhurst, NY 11106',
        coordinate: ['40.54687170809551', '-74.15712690617478'],
      },
      {
        text: '11367 Ansley Stravenue, Massapequa, NY 11350',
        coordinate: ['40.81730470420681', '-73.94741458340314'],
      },
    ],
  },
  {
    id: getObjectId('customer_98'),
    firstName: 'Frances',
    lastName: 'Kreiger',
    fullName: 'Frances Kreiger',
    gender: 'Female',
    gsm: '(792) 783-2555',
    createdAt: '2024-06-24T07:27:45.761Z',
    isActive: false,
    avatar: [
      {
        name: '623faef1-1408-4393-aec6-8d21f3d2e14d',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '7ff93114-ba2d-4204-bb92-00d634021b87',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1184.jpg',
      },
    ],
    addresses: [
      {
        text: '11609 Carolanne Islands, Massapequa, NY 11138',
        coordinate: ['40.75935689417804', '-73.97485861044613'],
      },
      {
        text: '11316 Goodwin Curve, Brooklyn, NY 11183',
        coordinate: ['40.72331641705996', '-73.8392178094307'],
      },
      {
        text: '11606 Mariana Keys, Lindenhurst, NY 11071',
        coordinate: ['40.60227925020982', '-73.91362606675423'],
      },
    ],
  },
  {
    id: getObjectId('customer_99'),
    firstName: 'Krista',
    lastName: 'Pagac',
    fullName: 'Krista Pagac',
    gender: 'Female',
    gsm: '(557) 036-1192',
    createdAt: '2024-06-30T14:20:56.475Z',
    isActive: true,
    avatar: [
      {
        name: '1d83078b-cc50-44ce-b179-f1831bee626c',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '9a20783b-55e1-4d78-ba29-c0308a32a164',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/67.jpg',
      },
    ],
    addresses: [
      {
        text: '11812 Uriah Islands, Massapequa, NY 11134',
        coordinate: ['40.76936591609023', '-73.97395465473141'],
      },
      {
        text: '11727 Schaefer Inlet, Lindenhurst, NY 11036',
        coordinate: ['40.68715261156324', '-74.00526659632791'],
      },
      {
        text: '11606 Mariana Keys, Lindenhurst, NY 11071',
        coordinate: ['40.60227925020982', '-73.91362606675423'],
      },
    ],
  },
  {
    id: getObjectId('customer_100'),
    firstName: 'Minerva',
    lastName: 'Weissnat',
    fullName: 'Minerva Weissnat',
    gender: 'Female',
    gsm: '(223) 856-5840',
    createdAt: '2024-06-18T09:49:07.394Z',
    isActive: true,
    avatar: [
      {
        name: '3e0d6ed3-59db-4927-91f3-3be92eaf770c',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '25e2a80a-ea0e-4452-9d39-be21c0709e69',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/236.jpg',
      },
    ],
    addresses: [
      {
        text: '11374 Daniella Courts, Lindenhurst, NY 11722',
        coordinate: ['40.692405303311446', '-74.00069759444021'],
      },
      {
        text: '11264 Pauline Knolls, Brooklyn, NY 11384',
        coordinate: ['40.85195030781291', '-73.93088781078077'],
      },
      {
        text: '11834 MacGyver Junctions, Brooklyn, NY 11452',
        coordinate: ['40.78979623682202', '-73.94537926050417'],
      },
    ],
  },
  {
    id: getObjectId('customer_101'),
    firstName: 'Bonnie',
    lastName: 'Wunsch',
    fullName: 'Bonnie Wunsch',
    gender: 'Male',
    gsm: '(979) 263-8246',
    createdAt: '2024-07-04T09:22:36.467Z',
    isActive: false,
    avatar: [
      {
        name: '85f8c8da-8183-4103-91eb-0abec1dc92db',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '50df67ee-04f3-482d-bb6e-cfaf25d16d12',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/539.jpg',
      },
    ],
    addresses: [
      {
        text: '11439 Aglae Radial, Brooklyn, NY 11205',
        coordinate: ['40.83247202632326', '-73.91406031894931'],
      },
      {
        text: '11680 Georgette Junctions, Massapequa, NY 11411',
        coordinate: ['40.702102706281686', '-73.80945836885176'],
      },
      {
        text: '11337 Harry Brook, Brooklyn, NY 11820',
        coordinate: ['40.82365881189533', '-73.90978994398685'],
      },
    ],
  },
  {
    id: getObjectId('customer_102'),
    firstName: 'Kira',
    lastName: 'Will',
    fullName: 'Kira Will',
    gender: 'Male',
    gsm: '(621) 080-7807',
    createdAt: '2024-07-06T20:27:10.242Z',
    isActive: false,
    avatar: [
      {
        name: '9ca53a95-6979-453f-9501-f35f2ca17b67',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '2e6da4ed-b70b-4488-8c05-05328c739418',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/182.jpg',
      },
    ],
    addresses: [
      {
        text: '11923 Legros Divide, Brooklyn, NY 11072',
        coordinate: ['40.75081540048207', '-73.84366030192892'],
      },
      {
        text: '11263 Solon Stream, Lindenhurst, NY 11007',
        coordinate: ['40.63674069980736', '-73.91978780874902'],
      },
      {
        text: '11108 Bauch Trail, Massapequa, NY 11355',
        coordinate: ['40.81991419971737', '-73.84577566721931'],
      },
    ],
  },
  {
    id: getObjectId('customer_103'),
    firstName: 'Wilfred',
    lastName: 'Wuckert',
    fullName: 'Wilfred Wuckert',
    gender: 'Female',
    gsm: '(415) 108-6234',
    createdAt: '2024-06-28T19:19:50.031Z',
    isActive: false,
    avatar: [
      {
        name: '572567e9-f8bf-41c8-a683-f4de672ae39c',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'd0a41dbd-ca20-4f08-911b-11e9d8844f23',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/906.jpg',
      },
    ],
    addresses: [
      {
        text: '11175 Kieran Curve, Massapequa, NY 11322',
        coordinate: ['40.60976233898883', '-74.1028092626307'],
      },
      {
        text: '11456 Federico Freeway, Lindenhurst, NY 11390',
        coordinate: ['40.73636731561727', '-73.87880380035317'],
      },
      {
        text: '11863 Schuppe Lake, Massapequa, NY 11711',
        coordinate: ['40.5870337210884', '-74.00229002432485'],
      },
    ],
  },
  {
    id: getObjectId('customer_104'),
    firstName: 'Elisa',
    lastName: 'Romaguera',
    fullName: 'Elisa Romaguera',
    gender: 'Male',
    gsm: '(958) 972-0848',
    createdAt: '2024-06-13T17:22:29.118Z',
    isActive: true,
    avatar: [
      {
        name: '7714d37d-2e53-4935-822f-eec3b78a88bb',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '2ee8dd43-066b-4b30-9bbe-022a59cf48e3',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1136.jpg',
      },
    ],
    addresses: [
      {
        text: '11374 Daniella Courts, Lindenhurst, NY 11722',
        coordinate: ['40.692405303311446', '-74.00069759444021'],
      },
      {
        text: '11027 Jarod Walk, Lindenhurst, NY 11106',
        coordinate: ['40.54687170809551', '-74.15712690617478'],
      },
      {
        text: '11898 Chelsea Plain, Lindenhurst, NY 11735',
        coordinate: ['40.875525570218045', '-73.86179079437676'],
      },
    ],
  },
  {
    id: getObjectId('customer_105'),
    firstName: 'Darron',
    lastName: 'Wunsch',
    fullName: 'Darron Wunsch',
    gender: 'Male',
    gsm: '(228) 679-1459',
    createdAt: '2024-07-07T04:06:49.075Z',
    isActive: false,
    avatar: [
      {
        name: '79a73f8a-d13f-47dd-a713-fb04761be698',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'dada0867-a791-4ae9-ac50-9c6be8f5e601',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/880.jpg',
      },
    ],
    addresses: [
      {
        text: '11918 Becker Fort, Massapequa, NY 11466',
        coordinate: ['40.69980932047403', '-73.98458488957945'],
      },
      {
        text: '11269 Stokes Valley, Lindenhurst, NY 11154',
        coordinate: ['40.67540078261772', '-73.81703727480193'],
      },
      {
        text: '11115 Else Valleys, Brooklyn, NY 11770',
        coordinate: ['40.674384416687445', '-73.88542328715191'],
      },
    ],
  },
  {
    id: getObjectId('customer_106'),
    firstName: 'Santino',
    lastName: 'Mayert',
    fullName: 'Santino Mayert',
    gender: 'Female',
    gsm: '(787) 242-8793',
    createdAt: '2024-06-09T05:28:19.647Z',
    isActive: false,
    avatar: [
      {
        name: '458a0865-1b74-4d29-b6e6-1d2339b9e013',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '46abfb84-a120-4a0c-9df5-f23b4b17405a',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/469.jpg',
      },
    ],
    addresses: [
      {
        text: '11045 Johnston Key, Lindenhurst, NY 11539',
        coordinate: ['40.84398642270739', '-73.83864402262044'],
      },
      {
        text: '11384 Waelchi Rapid, Massapequa, NY 11796',
        coordinate: ['40.84590139880644', '-73.8928291967851'],
      },
      {
        text: '11418 Jewel Vista, Massapequa, NY 11932',
        coordinate: ['40.82014327346224', '-73.82407376717762'],
      },
    ],
  },
  {
    id: getObjectId('customer_107'),
    firstName: 'Wilber',
    lastName: 'Lueilwitz',
    fullName: 'Wilber Lueilwitz',
    gender: 'Female',
    gsm: '(046) 539-0536',
    createdAt: '2024-06-10T15:10:22.323Z',
    isActive: true,
    avatar: [
      {
        name: 'e7016f35-d63b-4e47-98c4-9c6facb62773',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'ceda1248-3a91-412b-828d-88db04bbfce2',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/239.jpg',
      },
    ],
    addresses: [
      {
        text: '11815 Misty Ville, Massapequa, NY 11565',
        coordinate: ['40.658349139669525', '-73.88511259693168'],
      },
      {
        text: '11923 Legros Divide, Brooklyn, NY 11072',
        coordinate: ['40.75081540048207', '-73.84366030192892'],
      },
      {
        text: '11958 Hintz Light, Massapequa, NY 11935',
        coordinate: ['40.875917577275104', '-73.82848174189849'],
      },
    ],
  },
  {
    id: getObjectId('customer_108'),
    firstName: 'Rozella',
    lastName: 'Christiansen',
    fullName: 'Rozella Christiansen',
    gender: 'Male',
    gsm: '(126) 757-2416',
    createdAt: '2024-06-16T07:36:18.524Z',
    isActive: true,
    avatar: [
      {
        name: '89d6eb7f-d97e-43a5-947e-4d18bf9b6163',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '713ce2f0-3664-474c-b4ac-68e408fedbe3',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/834.jpg',
      },
    ],
    addresses: [
      {
        text: '11928 Zemlak Terrace, Brooklyn, NY 11083',
        coordinate: ['40.5861219668654', '-73.96563797373686'],
      },
      {
        text: '11209 Koelpin Mission, Massapequa, NY 11226',
        coordinate: ['40.69572890173205', '-73.9970705051839'],
      },
      {
        text: '11156 Hoppe Run, Lindenhurst, NY 11165',
        coordinate: ['40.65688875879231', '-73.88404087891976'],
      },
    ],
  },
  {
    id: getObjectId('customer_109'),
    firstName: 'Eldridge',
    lastName: 'Howell',
    fullName: 'Eldridge Howell',
    gender: 'Female',
    gsm: '(360) 889-1787',
    createdAt: '2024-06-14T21:44:53.375Z',
    isActive: false,
    avatar: [
      {
        name: 'e724e724-e71f-4fc9-a082-2e0c203e56ad',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '01bf5a43-8b04-4099-a63f-87ea0f7592a5',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/575.jpg',
      },
    ],
    addresses: [
      {
        text: '11655 Treutel Keys, Lindenhurst, NY 11251',
        coordinate: ['40.581383694926494', '-73.8457803791904'],
      },
      {
        text: '11776 Wilderman Prairie, Lindenhurst, NY 11562',
        coordinate: ['40.66945134822127', '-73.93551047298159'],
      },
      {
        text: '11180 Thompson Circle, Massapequa, NY 11460',
        coordinate: ['40.52879780292704', '-74.16599356445849'],
      },
    ],
  },
  {
    id: getObjectId('customer_110'),
    firstName: 'Charles',
    lastName: 'Rodriguez',
    fullName: 'Charles Rodriguez',
    gender: 'Male',
    gsm: '(431) 984-7849',
    createdAt: '2024-06-20T10:26:53.761Z',
    isActive: false,
    avatar: [
      {
        name: 'decb5f8d-c198-4c0b-8955-02a9f4bcc41d',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'ac70a4f0-6275-449e-bf8d-9de77141fd72',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1054.jpg',
      },
    ],
    addresses: [
      {
        text: '11096 Breanne Divide, Brooklyn, NY 11640',
        coordinate: ['40.718270507252825', '-73.90150746815962'],
      },
      {
        text: '11451 Beahan Hill, Massapequa, NY 11967',
        coordinate: ['40.820067735758684', '-73.93981529222577'],
      },
      {
        text: '11249 Ashleigh Points, Massapequa, NY 11750',
        coordinate: ['40.70464764330371', '-73.95245354438998'],
      },
    ],
  },
  {
    id: getObjectId('customer_111'),
    firstName: 'Emely',
    lastName: 'Rosenbaum',
    fullName: 'Emely Rosenbaum',
    gender: 'Male',
    gsm: '(952) 626-6204',
    createdAt: '2024-06-18T22:39:25.850Z',
    isActive: true,
    avatar: [
      {
        name: '81f5417a-004f-42cb-85e7-2eb1551c3de0',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '00ba08f8-c728-4f34-89bf-d79640e9fdb2',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/270.jpg',
      },
    ],
    addresses: [
      {
        text: '11471 Ransom Parkway, Massapequa, NY 11941',
        coordinate: ['40.70408980199366', '-73.9930806087735'],
      },
      {
        text: '11166 Cormier Plaza, Lindenhurst, NY 11278',
        coordinate: ['40.86255321747302', '-73.8648318412901'],
      },
      {
        text: '11263 Solon Stream, Lindenhurst, NY 11007',
        coordinate: ['40.63674069980736', '-73.91978780874902'],
      },
    ],
  },
  {
    id: getObjectId('customer_112'),
    firstName: 'Watson',
    lastName: 'Yundt',
    fullName: 'Watson Yundt',
    gender: 'Male',
    gsm: '(120) 671-6533',
    createdAt: '2024-06-22T19:07:52.114Z',
    isActive: false,
    avatar: [
      {
        name: '82130ae5-1f0f-40e1-aba4-dbb90a27490f',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '4dd6478c-bc0b-4e1f-962f-736de2e7b2c7',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1122.jpg',
      },
    ],
    addresses: [
      {
        text: '11096 Breanne Divide, Brooklyn, NY 11640',
        coordinate: ['40.718270507252825', '-73.90150746815962'],
      },
      {
        text: '11797 Lorenzo Locks, Brooklyn, NY 11347',
        coordinate: ['40.747277718986986', '-73.99578762620561'],
      },
      {
        text: '11467 Mario Mountain, Lindenhurst, NY 11330',
        coordinate: ['40.711932851090424', '-73.9577614020571'],
      },
    ],
  },
  {
    id: getObjectId('customer_113'),
    firstName: 'Karelle',
    lastName: 'Price',
    fullName: 'Karelle Price',
    gender: 'Male',
    gsm: '(511) 330-3946',
    createdAt: '2024-06-10T12:13:05.010Z',
    isActive: true,
    avatar: [
      {
        name: 'eb0dc063-6721-40cf-be96-2ee96d29fdbc',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '1807679e-247e-4cf4-a779-659a7bc5073e',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/313.jpg',
      },
    ],
    addresses: [
      {
        text: '11143 Ortiz Mill, Brooklyn, NY 11207',
        coordinate: ['40.6645385558063', '-73.90402732990448'],
      },
      {
        text: '11329 Itzel Loop, Lindenhurst, NY 11460',
        coordinate: ['40.84746079339391', '-73.88588719908685'],
      },
      {
        text: '11181 Batz Corners, Lindenhurst, NY 11904',
        coordinate: ['40.74455702716755', '-73.93501800516812'],
      },
    ],
  },
  {
    id: getObjectId('customer_114'),
    firstName: 'Muriel',
    lastName: 'Schmitt',
    fullName: 'Muriel Schmitt',
    gender: 'Female',
    gsm: '(471) 526-5654',
    createdAt: '2024-06-15T02:52:28.411Z',
    isActive: false,
    avatar: [
      {
        name: '9c978747-7a3b-419f-a072-1c86a4e34806',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '6a026bf0-d45c-4722-b4fd-298fe8ca7d4a',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/233.jpg',
      },
    ],
    addresses: [
      {
        text: '11045 Johnston Key, Lindenhurst, NY 11539',
        coordinate: ['40.84398642270739', '-73.83864402262044'],
      },
      {
        text: '11097 Naomie Mountain, Brooklyn, NY 11492',
        coordinate: ['40.67369096200763', '-73.92525141581397'],
      },
      {
        text: '11543 Judah Rapid, Massapequa, NY 11819',
        coordinate: ['40.66995340328846', '-73.91410255815497'],
      },
    ],
  },
  {
    id: getObjectId('customer_115'),
    firstName: 'Brad',
    lastName: 'Tillman',
    fullName: 'Brad Tillman',
    gender: 'Male',
    gsm: '(351) 523-0603',
    createdAt: '2024-07-04T22:21:33.074Z',
    isActive: true,
    avatar: [
      {
        name: '52517ce9-315c-4c4d-8792-fbfcccb3d7d4',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '9fc43ea7-0e38-4c93-abe6-3dae8ed97882',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/148.jpg',
      },
    ],
    addresses: [
      {
        text: '11108 Bauch Trail, Massapequa, NY 11355',
        coordinate: ['40.81991419971737', '-73.84577566721931'],
      },
      {
        text: '11023 Reilly Freeway, Brooklyn, NY 11304',
        coordinate: ['40.708836427424856', '-73.95736505455008'],
      },
      {
        text: '11181 Batz Corners, Lindenhurst, NY 11904',
        coordinate: ['40.74455702716755', '-73.93501800516812'],
      },
    ],
  },
  {
    id: getObjectId('customer_116'),
    firstName: 'Dino',
    lastName: 'Barrows',
    fullName: 'Dino Barrows',
    gender: 'Female',
    gsm: '(211) 796-2733',
    createdAt: '2024-07-01T20:36:41.737Z',
    isActive: true,
    avatar: [
      {
        name: 'c072f0e5-ad33-4ea5-a0db-2f8b0e9dbcc9',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '90c942ab-aced-4da1-b0e6-d093ed14cb17',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/632.jpg',
      },
    ],
    addresses: [
      {
        text: '11318 Sipes Harbors, Lindenhurst, NY 11120',
        coordinate: ['40.70101970449942', '-73.98238357202935'],
      },
      {
        text: '11877 Nyasia Plains, Lindenhurst, NY 11970',
        coordinate: ['40.76021384556489', '-74.00722225239753'],
      },
      {
        text: '11878 Pagac Trail, Lindenhurst, NY 11876',
        coordinate: ['40.71114281327269', '-74.01648182914843'],
      },
    ],
  },
  {
    id: getObjectId('customer_117'),
    firstName: 'Kiera',
    lastName: 'Prosacco',
    fullName: 'Kiera Prosacco',
    gender: 'Female',
    gsm: '(278) 242-1783',
    createdAt: '2024-06-23T04:46:20.972Z',
    isActive: false,
    avatar: [
      {
        name: '3d203283-7ac6-494a-b002-51f886823eeb',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '60d4fe73-3f1e-4eef-bb2b-8041e82fff2b',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1159.jpg',
      },
    ],
    addresses: [
      {
        text: '11998 Valentin Pike, Massapequa, NY 11868',
        coordinate: ['40.71608376674422', '-73.79906715920882'],
      },
      {
        text: '11021 Waelchi Crossing, Brooklyn, NY 11306',
        coordinate: ['40.77751176704511', '-73.97279729093525'],
      },
      {
        text: '11878 Dudley Pike, Lindenhurst, NY 11604',
        coordinate: ['40.64716080488486', '-74.0073656851469'],
      },
    ],
  },
  {
    id: getObjectId('customer_118'),
    firstName: 'Jay',
    lastName: 'Brekke',
    fullName: 'Jay Brekke',
    gender: 'Male',
    gsm: '(574) 570-8877',
    createdAt: '2024-07-07T07:54:44.136Z',
    isActive: false,
    avatar: [
      {
        name: '16477d51-4d51-4952-9aa4-82119dc3da9f',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '57eff202-45ff-4bd6-954d-4ffa60a68832',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/991.jpg',
      },
    ],
    addresses: [
      {
        text: '11085 Oswaldo Harbor, Brooklyn, NY 11546',
        coordinate: ['40.85125313575545', '-73.91436091292005'],
      },
      {
        text: '11367 Ansley Stravenue, Massapequa, NY 11350',
        coordinate: ['40.81730470420681', '-73.94741458340314'],
      },
      {
        text: '11228 Paucek Islands, Massapequa, NY 11666',
        coordinate: ['40.782861173910526', '-73.92808660964148'],
      },
    ],
  },
  {
    id: getObjectId('customer_119'),
    firstName: 'Colten',
    lastName: 'Daugherty',
    fullName: 'Colten Daugherty',
    gender: 'Female',
    gsm: '(156) 330-2194',
    createdAt: '2024-06-16T11:43:04.357Z',
    isActive: true,
    avatar: [
      {
        name: '7ee25057-1df0-4ad9-87a4-54858671a63a',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '480e54c3-627d-41ea-bdce-cf1fe68efeea',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/685.jpg',
      },
    ],
    addresses: [
      {
        text: '11881 Wilton Fields, Lindenhurst, NY 11176',
        coordinate: ['40.787915583564256', '-73.84583413474485'],
      },
      {
        text: '11045 Johnston Key, Lindenhurst, NY 11539',
        coordinate: ['40.84398642270739', '-73.83864402262044'],
      },
      {
        text: '11513 Predovic Ville, Massapequa, NY 11323',
        coordinate: ['40.67469479700506', '-73.86371925992556'],
      },
    ],
  },
  {
    id: getObjectId('customer_120'),
    firstName: 'Uriah',
    lastName: 'Reinger',
    fullName: 'Uriah Reinger',
    gender: 'Female',
    gsm: '(735) 719-4280',
    createdAt: '2024-07-07T20:36:16.846Z',
    isActive: false,
    avatar: [
      {
        name: 'c4cbe090-0e9c-4b16-8fbd-8b371c4a9593',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '7c12538b-f26e-4b74-b2da-c32e6f6b980d',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/403.jpg',
      },
    ],
    addresses: [
      {
        text: '11269 Stokes Valley, Lindenhurst, NY 11154',
        coordinate: ['40.67540078261772', '-73.81703727480193'],
      },
      {
        text: '11898 Chelsea Plain, Lindenhurst, NY 11735',
        coordinate: ['40.875525570218045', '-73.86179079437676'],
      },
      {
        text: '11797 Bart Valley, Lindenhurst, NY 11117',
        coordinate: ['40.669777801118656', '-73.92802454968135'],
      },
    ],
  },
  {
    id: getObjectId('customer_121'),
    firstName: 'Boyd',
    lastName: 'Nolan',
    fullName: 'Boyd Nolan',
    gender: 'Female',
    gsm: '(234) 652-0251',
    createdAt: '2024-07-05T19:44:03.153Z',
    isActive: false,
    avatar: [
      {
        name: '27d0772e-afe2-4b05-abfa-6c061a09bca8',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '147ebadf-820b-4624-bb68-b03a1d3cae62',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/474.jpg',
      },
    ],
    addresses: [
      {
        text: '11456 Federico Freeway, Lindenhurst, NY 11390',
        coordinate: ['40.73636731561727', '-73.87880380035317'],
      },
      {
        text: '11430 Leuschke Via, Brooklyn, NY 11727',
        coordinate: ['40.82687191092169', '-73.93860406015271'],
      },
      {
        text: '11816 Althea Loop, Brooklyn, NY 11851',
        coordinate: ['40.87000167958251', '-73.82689736629037'],
      },
    ],
  },
  {
    id: getObjectId('customer_122'),
    firstName: 'Rocky',
    lastName: 'Olson',
    fullName: 'Rocky Olson',
    gender: 'Female',
    gsm: '(452) 341-4026',
    createdAt: '2024-06-20T14:21:36.618Z',
    isActive: false,
    avatar: [
      {
        name: '58010858-d36c-4692-8677-922a85e83bc9',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'dd840abf-7e1c-4941-85e7-03faf59c9503',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/998.jpg',
      },
    ],
    addresses: [
      {
        text: '11471 Ransom Parkway, Massapequa, NY 11941',
        coordinate: ['40.70408980199366', '-73.9930806087735'],
      },
      {
        text: '11821 Ryan Throughway, Brooklyn, NY 11863',
        coordinate: ['40.824547968663495', '-73.9087967521559'],
      },
      {
        text: '11246 Heathcote Crescent, Brooklyn, NY 11164',
        coordinate: ['40.70264295688686', '-73.85781194108168'],
      },
    ],
  },
  {
    id: getObjectId('customer_123'),
    firstName: 'Nils',
    lastName: 'Gleason',
    fullName: 'Nils Gleason',
    gender: 'Female',
    gsm: '(730) 073-3235',
    createdAt: '2024-06-22T02:42:48.673Z',
    isActive: true,
    avatar: [
      {
        name: '511730ce-23fd-4e99-b0d2-9f5370616972',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '2d0aebb8-55fb-424b-897c-aee4b5b5e77b',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/828.jpg',
      },
    ],
    addresses: [
      {
        text: '11073 Wuckert Lake, Massapequa, NY 11688',
        coordinate: ['40.80679767187204', '-73.94678301233309'],
      },
      {
        text: '11624 Jairo Road, Lindenhurst, NY 11160',
        coordinate: ['40.823376279414674', '-73.93960148270892'],
      },
      {
        text: '11776 Wilderman Prairie, Lindenhurst, NY 11562',
        coordinate: ['40.66945134822127', '-73.93551047298159'],
      },
    ],
  },
  {
    id: getObjectId('customer_124'),
    firstName: 'Leif',
    lastName: 'Kuhn',
    fullName: 'Leif Kuhn',
    gender: 'Female',
    gsm: '(554) 573-0430',
    createdAt: '2024-06-10T07:27:01.195Z',
    isActive: true,
    avatar: [
      {
        name: 'faa83886-36ce-4026-95b0-37edfec9e9d3',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '77c0e929-429d-40d2-a539-245cbf290940',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/294.jpg',
      },
    ],
    addresses: [
      {
        text: '11055 Schuster Gardens, Massapequa, NY 11732',
        coordinate: ['40.6365034810973', '-73.98578000769199'],
      },
      {
        text: '11143 Ortiz Mill, Brooklyn, NY 11207',
        coordinate: ['40.6645385558063', '-73.90402732990448'],
      },
      {
        text: '11128 Shayna Motorway, Lindenhurst, NY 11101',
        coordinate: ['40.70373038121957', '-73.99378591068276'],
      },
    ],
  },
  {
    id: getObjectId('customer_125'),
    firstName: 'Peggie',
    lastName: 'Hand',
    fullName: 'Peggie Hand',
    gender: 'Male',
    gsm: '(376) 874-3528',
    createdAt: '2024-06-19T09:15:10.924Z',
    isActive: true,
    avatar: [
      {
        name: '58da7786-5e47-4fca-b836-8c0a2fda8772',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '7ed3d481-8891-450e-b91a-a5968058d0aa',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/240.jpg',
      },
    ],
    addresses: [
      {
        text: '11825 Chelsey Springs, Brooklyn, NY 11928',
        coordinate: ['40.64393181276535', '-74.10229104074979'],
      },
      {
        text: '11023 Reilly Freeway, Brooklyn, NY 11304',
        coordinate: ['40.708836427424856', '-73.95736505455008'],
      },
      {
        text: '11038 Paolo Pines, Lindenhurst, NY 11735',
        coordinate: ['40.64023177236674', '-74.00186934411859'],
      },
    ],
  },
  {
    id: getObjectId('customer_126'),
    firstName: 'Beverly',
    lastName: 'Kreiger',
    fullName: 'Beverly Kreiger',
    gender: 'Male',
    gsm: '(480) 278-0184',
    createdAt: '2024-06-13T14:19:13.956Z',
    isActive: true,
    avatar: [
      {
        name: '22f89850-5ac7-4f34-8d95-b9cf3a2e649a',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '3673cfe8-5191-43fc-8d32-2066f46d4047',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/603.jpg',
      },
    ],
    addresses: [
      {
        text: '11433 Lakin Ridge, Massapequa, NY 11717',
        coordinate: ['40.72132523792435', '-73.98639367151328'],
      },
      {
        text: '11647 Khalil Freeway, Massapequa, NY 11799',
        coordinate: ['40.73552798165039', '-73.99701720039775'],
      },
      {
        text: '11107 Hickle Ranch, Lindenhurst, NY 11515',
        coordinate: ['40.61088151832268', '-74.08690487977938'],
      },
    ],
  },
  {
    id: getObjectId('customer_127'),
    firstName: 'Desmond',
    lastName: 'Harris',
    fullName: 'Desmond Harris',
    gender: 'Female',
    gsm: '(725) 159-7293',
    createdAt: '2024-06-21T17:06:41.425Z',
    isActive: false,
    avatar: [
      {
        name: '6ff1f00c-77c0-4a1d-9a4a-085c17f2644b',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '5185b8dd-d825-4989-860e-b3cc8f2ce4d3',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/941.jpg',
      },
    ],
    addresses: [
      {
        text: '11456 Federico Freeway, Lindenhurst, NY 11390',
        coordinate: ['40.73636731561727', '-73.87880380035317'],
      },
      {
        text: '11797 Lorenzo Locks, Brooklyn, NY 11347',
        coordinate: ['40.747277718986986', '-73.99578762620561'],
      },
      {
        text: '11958 Hintz Light, Massapequa, NY 11935',
        coordinate: ['40.875917577275104', '-73.82848174189849'],
      },
    ],
  },
  {
    id: getObjectId('customer_128'),
    firstName: 'Melvin',
    lastName: 'Deckow',
    fullName: 'Melvin Deckow',
    gender: 'Female',
    gsm: '(575) 342-7156',
    createdAt: '2024-06-08T18:13:48.073Z',
    isActive: true,
    avatar: [
      {
        name: '6459dcd2-bf75-43d0-8a50-667ee83211ae',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '753cd0a1-a731-4d1f-8fe8-70e2cdb502eb',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1043.jpg',
      },
    ],
    addresses: [
      {
        text: '11642 Alberta Junction, Lindenhurst, NY 11370',
        coordinate: ['40.782269303154564', '-73.92799108814602'],
      },
      {
        text: '11195 Nader Road, Massapequa, NY 11615',
        coordinate: ['40.62678964983104', '-73.98952500781843'],
      },
      {
        text: '11927 Lemke Forges, Brooklyn, NY 11658',
        coordinate: ['40.730915473354905', '-73.95608227774139'],
      },
    ],
  },
  {
    id: getObjectId('customer_129'),
    firstName: 'Audra',
    lastName: 'Bartoletti',
    fullName: 'Audra Bartoletti',
    gender: 'Female',
    gsm: '(723) 604-5048',
    createdAt: '2024-06-22T03:13:40.482Z',
    isActive: true,
    avatar: [
      {
        name: '8123dc40-2591-4c6a-9902-9fa64e19fabc',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '1be24b15-3676-45ca-99a1-d30a7ae98f2e',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/230.jpg',
      },
    ],
    addresses: [
      {
        text: '11143 Ortiz Mill, Brooklyn, NY 11207',
        coordinate: ['40.6645385558063', '-73.90402732990448'],
      },
      {
        text: '11680 Georgette Junctions, Massapequa, NY 11411',
        coordinate: ['40.702102706281686', '-73.80945836885176'],
      },
      {
        text: '11036 Hartmann Islands, Massapequa, NY 11273',
        coordinate: ['40.80648728921871', '-73.94602283563091'],
      },
    ],
  },
  {
    id: getObjectId('customer_130'),
    firstName: 'River',
    lastName: 'Marquardt',
    fullName: 'River Marquardt',
    gender: 'Female',
    gsm: '(094) 038-7734',
    createdAt: '2024-06-10T07:54:58.499Z',
    isActive: true,
    avatar: [
      {
        name: '87c23e5f-8bd1-4768-9a4d-84836eb91786',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '06759c19-8627-4cb4-a68e-de42d4694b38',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/871.jpg',
      },
    ],
    addresses: [
      {
        text: '11618 Hoeger Lights, Massapequa, NY 11449',
        coordinate: ['40.627049675070175', '-73.98253459810051'],
      },
      {
        text: '11812 Raphael Corner, Massapequa, NY 11877',
        coordinate: ['40.72366717557525', '-73.99207275678724'],
      },
      {
        text: '11922 Halvorson Terrace, Brooklyn, NY 11104',
        coordinate: ['40.863466423461276', '-73.88157667321018'],
      },
    ],
  },
  {
    id: getObjectId('customer_131'),
    firstName: 'Heaven',
    lastName: 'Becker',
    fullName: 'Heaven Becker',
    gender: 'Female',
    gsm: '(193) 782-7994',
    createdAt: '2024-07-08T04:06:17.293Z',
    isActive: false,
    avatar: [
      {
        name: '8e003686-633a-4368-930c-fcbc7bd255f6',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '824b252b-85c4-49c7-b68f-57c1a65bbc4b',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/589.jpg',
      },
    ],
    addresses: [
      {
        text: '11655 Joany Course, Brooklyn, NY 11802',
        coordinate: ['40.75627707172136', '-73.97723552936826'],
      },
      {
        text: '11120 Royal Coves, Lindenhurst, NY 11520',
        coordinate: ['40.63410088148846', '-73.99688826750287'],
      },
      {
        text: '11913 Veum Spring, Massapequa, NY 11303',
        coordinate: ['40.66164200865502', '-74.00754412065884'],
      },
    ],
  },
  {
    id: getObjectId('customer_132'),
    firstName: 'Ofelia',
    lastName: 'Renner',
    fullName: 'Ofelia Renner',
    gender: 'Male',
    gsm: '(127) 955-0651',
    createdAt: '2024-06-13T06:14:25.767Z',
    isActive: false,
    avatar: [
      {
        name: '5e9cdf9f-c225-4691-b1a5-9a6c3ebc3483',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '7387c535-b01d-4063-aae3-20ee01ff4424',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/705.jpg',
      },
    ],
    addresses: [
      {
        text: '11318 Sipes Harbors, Lindenhurst, NY 11120',
        coordinate: ['40.70101970449942', '-73.98238357202935'],
      },
      {
        text: '11036 Joaquin Circle, Massapequa, NY 11502',
        coordinate: ['40.70119015066914', '-73.99645145905747'],
      },
      {
        text: '11797 Bart Valley, Lindenhurst, NY 11117',
        coordinate: ['40.669777801118656', '-73.92802454968135'],
      },
    ],
  },
  {
    id: getObjectId('customer_133'),
    firstName: 'Nelson',
    lastName: 'Daniel',
    fullName: 'Nelson Daniel',
    gender: 'Male',
    gsm: '(766) 035-4314',
    createdAt: '2024-06-16T06:13:46.610Z',
    isActive: false,
    avatar: [
      {
        name: '25624d77-3f58-4a1b-af6e-30e286f2dcd4',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '0ddd910a-a7a1-4c9f-96a3-65d691a44915',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/907.jpg',
      },
    ],
    addresses: [
      {
        text: '11230 Zander Curve, Lindenhurst, NY 11912',
        coordinate: ['40.87080816088552', '-73.83213503852586'],
      },
      {
        text: '11955 Cali Plaza, Massapequa, NY 11892',
        coordinate: ['40.832985445011836', '-73.90333101877235'],
      },
      {
        text: '11701 Rusty Lights, Massapequa, NY 11840',
        coordinate: ['40.74921391148173', '-73.88745667351822'],
      },
    ],
  },
  {
    id: getObjectId('customer_134'),
    firstName: 'Osvaldo',
    lastName: 'Sipes',
    fullName: 'Osvaldo Sipes',
    gender: 'Female',
    gsm: '(185) 926-0758',
    createdAt: '2024-07-05T12:24:42.840Z',
    isActive: false,
    avatar: [
      {
        name: '0ba00ef5-c654-4712-aef9-215cb85f0266',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'ba3c479c-3139-4853-a7ee-31850c593316',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1082.jpg',
      },
    ],
    addresses: [
      {
        text: '11295 Quitzon Drives, Massapequa, NY 11937',
        coordinate: ['40.69795402619539', '-73.93395502854624'],
      },
      {
        text: '11418 Schumm Lock, Lindenhurst, NY 11340',
        coordinate: ['40.788028545449976', '-73.90529902987166'],
      },
      {
        text: '11038 Paolo Pines, Lindenhurst, NY 11735',
        coordinate: ['40.64023177236674', '-74.00186934411859'],
      },
    ],
  },
  {
    id: getObjectId('customer_135'),
    firstName: 'Nathan',
    lastName: 'Glover',
    fullName: 'Nathan Glover',
    gender: 'Female',
    gsm: '(098) 060-9376',
    createdAt: '2024-06-30T14:57:35.902Z',
    isActive: true,
    avatar: [
      {
        name: '431c1fd3-112e-475d-81b0-e714fd1320f1',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '57d0d966-fa65-4509-a030-e8af80756009',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/12.jpg',
      },
    ],
    addresses: [
      {
        text: '11642 Alberta Junction, Lindenhurst, NY 11370',
        coordinate: ['40.782269303154564', '-73.92799108814602'],
      },
      {
        text: "11846 O'Hara Rapid, Brooklyn, NY 11231",
        coordinate: ['40.87355454025907', '-73.92984534052623'],
      },
      {
        text: '11879 Larry Drives, Massapequa, NY 11339',
        coordinate: ['40.66416374763622', '-73.90697071032429'],
      },
    ],
  },
  {
    id: getObjectId('customer_136'),
    firstName: 'Clementine',
    lastName: 'Vandervort',
    fullName: 'Clementine Vandervort',
    gender: 'Male',
    gsm: '(809) 049-3733',
    createdAt: '2024-06-12T06:32:45.525Z',
    isActive: true,
    avatar: [
      {
        name: '2864441d-200d-444e-80be-cc78adf2f08c',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '82652837-b4a3-47d8-b70f-fde2b9327c56',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/934.jpg',
      },
    ],
    addresses: [
      {
        text: '11318 Sipes Harbors, Lindenhurst, NY 11120',
        coordinate: ['40.70101970449942', '-73.98238357202935'],
      },
      {
        text: '11451 Beahan Hill, Massapequa, NY 11967',
        coordinate: ['40.820067735758684', '-73.93981529222577'],
      },
      {
        text: '11251 Bertram Extensions, Lindenhurst, NY 11057',
        coordinate: ['40.598106469646424', '-73.77487508395032'],
      },
    ],
  },
  {
    id: getObjectId('customer_137'),
    firstName: 'Katelyn',
    lastName: 'Tremblay',
    fullName: 'Katelyn Tremblay',
    gender: 'Female',
    gsm: '(129) 919-5815',
    createdAt: '2024-06-29T00:25:55.111Z',
    isActive: false,
    avatar: [
      {
        name: 'd15b1f2b-772e-40b0-8029-e20825a0cdc7',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '4df9efdc-6690-4c18-9c9c-48da369543a8',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/975.jpg',
      },
    ],
    addresses: [
      {
        text: '11693 Hartmann Park, Brooklyn, NY 11251',
        coordinate: ['40.705101590541354', '-73.98948018281791'],
      },
      {
        text: '11607 Reinger Parkways, Brooklyn, NY 11042',
        coordinate: ['40.590737386781605', '-74.07660361955186'],
      },
      {
        text: '11426 Denesik Courts, Brooklyn, NY 11954',
        coordinate: ['40.622273685700655', '-74.07883292358069'],
      },
    ],
  },
  {
    id: getObjectId('customer_138'),
    firstName: 'Mariane',
    lastName: 'Moen',
    fullName: 'Mariane Moen',
    gender: 'Male',
    gsm: '(278) 655-5408',
    createdAt: '2024-07-02T17:56:38.287Z',
    isActive: true,
    avatar: [
      {
        name: '53fcd896-d346-4d5e-a30c-621e4cb59359',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'a5fac2a8-9d3c-4c19-8b4f-cf1f87edfc54',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/374.jpg',
      },
    ],
    addresses: [
      {
        text: '11335 Greyson Mission, Lindenhurst, NY 11507',
        coordinate: ['40.89110181872506', '-73.8938991544214'],
      },
      {
        text: '11624 Jairo Road, Lindenhurst, NY 11160',
        coordinate: ['40.823376279414674', '-73.93960148270892'],
      },
      {
        text: '11451 Beahan Hill, Massapequa, NY 11967',
        coordinate: ['40.820067735758684', '-73.93981529222577'],
      },
    ],
  },
  {
    id: getObjectId('customer_139'),
    firstName: 'Annalise',
    lastName: 'Leffler',
    fullName: 'Annalise Leffler',
    gender: 'Female',
    gsm: '(580) 844-2011',
    createdAt: '2024-06-11T08:10:17.974Z',
    isActive: false,
    avatar: [
      {
        name: 'b8ff7b32-ae8c-4ce1-8308-5c8d7f33bba6',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'dd09998d-848f-4998-9638-92b4a4e5deec',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/653.jpg',
      },
    ],
    addresses: [
      {
        text: '11837 Ferry Corners, Brooklyn, NY 11749',
        coordinate: ['40.83762046059387', '-73.87537910005294'],
      },
      {
        text: '11898 Chelsea Plain, Lindenhurst, NY 11735',
        coordinate: ['40.875525570218045', '-73.86179079437676'],
      },
      {
        text: '11922 Halvorson Terrace, Brooklyn, NY 11104',
        coordinate: ['40.863466423461276', '-73.88157667321018'],
      },
    ],
  },
  {
    id: getObjectId('customer_140'),
    firstName: 'Tia',
    lastName: 'Howell',
    fullName: 'Tia Howell',
    gender: 'Female',
    gsm: '(162) 238-5668',
    createdAt: '2024-06-20T10:56:11.386Z',
    isActive: true,
    avatar: [
      {
        name: '10834572-fe6a-4c1e-ac9d-6fe2e08422af',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '5b191593-8f04-404e-b20a-b230a37c7f83',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/703.jpg',
      },
    ],
    addresses: [
      {
        text: '11511 Keeling Courts, Lindenhurst, NY 11662',
        coordinate: ['40.827562039798345', '-73.88823656144815'],
      },
      {
        text: '11044 Ezekiel Lodge, Brooklyn, NY 11912',
        coordinate: ['40.66138138796998', '-73.88034206938977'],
      },
      {
        text: '11181 Rice Corners, Massapequa, NY 11016',
        coordinate: ['40.85995458193837', '-73.81034233663169'],
      },
    ],
  },
  {
    id: getObjectId('customer_141'),
    firstName: 'Jeffrey',
    lastName: 'Marks',
    fullName: 'Jeffrey Marks',
    gender: 'Female',
    gsm: '(276) 171-6106',
    createdAt: '2024-07-02T12:55:58.317Z',
    isActive: false,
    avatar: [
      {
        name: '161b5ff6-c864-43d4-bc02-f9df847858d5',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'cd8321be-72c0-462b-8130-a11de1443977',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/698.jpg',
      },
    ],
    addresses: [
      {
        text: '11877 Franecki Isle, Lindenhurst, NY 11625',
        coordinate: ['40.62829175498013', '-74.18137586483954'],
      },
      {
        text: '11036 Hartmann Islands, Massapequa, NY 11273',
        coordinate: ['40.80648728921871', '-73.94602283563091'],
      },
      {
        text: '11263 Osinski Forks, Lindenhurst, NY 11884',
        coordinate: ['40.86213206940792', '-73.82618292669638'],
      },
    ],
  },
  {
    id: getObjectId('customer_142'),
    firstName: 'Kenyon',
    lastName: 'Farrell',
    fullName: 'Kenyon Farrell',
    gender: 'Female',
    gsm: '(445) 459-8971',
    createdAt: '2024-06-27T21:38:56.143Z',
    isActive: false,
    avatar: [
      {
        name: 'a0e0f260-e00a-4ea4-8a01-353396475922',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'e910e8e0-af57-44c5-be1e-a502ed685519',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/816.jpg',
      },
    ],
    addresses: [
      {
        text: '11998 Valentin Pike, Massapequa, NY 11868',
        coordinate: ['40.71608376674422', '-73.79906715920882'],
      },
      {
        text: '11316 Goodwin Curve, Brooklyn, NY 11183',
        coordinate: ['40.72331641705996', '-73.8392178094307'],
      },
      {
        text: '11451 Beahan Hill, Massapequa, NY 11967',
        coordinate: ['40.820067735758684', '-73.93981529222577'],
      },
    ],
  },
  {
    id: getObjectId('customer_143'),
    firstName: 'Jaida',
    lastName: 'Herzog',
    fullName: 'Jaida Herzog',
    gender: 'Female',
    gsm: '(472) 209-6953',
    createdAt: '2024-06-21T13:16:58.341Z',
    isActive: true,
    avatar: [
      {
        name: '91b8aeed-2303-415f-843c-ad9ff97f9b6c',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'ed73b239-4192-40e5-9325-bdc67c6369dc',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/693.jpg',
      },
    ],
    addresses: [
      {
        text: '11619 Runte Light, Massapequa, NY 11870',
        coordinate: ['40.68993727602666', '-73.93919799724745'],
      },
      {
        text: '11434 Daniel Meadows, Massapequa, NY 11452',
        coordinate: ['40.687024663944904', '-73.87836555031981'],
      },
      {
        text: '11180 Thompson Circle, Massapequa, NY 11460',
        coordinate: ['40.52879780292704', '-74.16599356445849'],
      },
    ],
  },
  {
    id: getObjectId('customer_144'),
    firstName: 'Joaquin',
    lastName: 'Simonis',
    fullName: 'Joaquin Simonis',
    gender: 'Male',
    gsm: '(408) 280-6867',
    createdAt: '2024-06-15T13:22:12.834Z',
    isActive: false,
    avatar: [
      {
        name: '60e72171-67c7-402a-8756-2fef91677743',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'a31d5098-17db-42d7-bcc6-b1de7e4f7834',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/575.jpg',
      },
    ],
    addresses: [
      {
        text: '11693 Hartmann Park, Brooklyn, NY 11251',
        coordinate: ['40.705101590541354', '-73.98948018281791'],
      },
      {
        text: '11120 Royal Coves, Lindenhurst, NY 11520',
        coordinate: ['40.63410088148846', '-73.99688826750287'],
      },
      {
        text: '11293 Jacey Rapids, Lindenhurst, NY 11158',
        coordinate: ['40.8148615016701', '-73.93975836591103'],
      },
    ],
  },
  {
    id: getObjectId('customer_145'),
    firstName: 'Kathryn',
    lastName: 'Wisoky',
    fullName: 'Kathryn Wisoky',
    gender: 'Male',
    gsm: '(740) 745-8619',
    createdAt: '2024-06-15T22:15:48.303Z',
    isActive: true,
    avatar: [
      {
        name: '2f324ee9-a882-4d85-a73c-5bf772494dd0',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '6e8d3096-ddf5-4884-af7b-93d9fca4611a',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/673.jpg',
      },
    ],
    addresses: [
      {
        text: '11418 Schumm Lock, Lindenhurst, NY 11340',
        coordinate: ['40.788028545449976', '-73.90529902987166'],
      },
      {
        text: "11960 O'Conner Forest, Lindenhurst, NY 11163",
        coordinate: ['40.89309118725139', '-73.89752941514372'],
      },
      {
        text: '11727 Schaefer Inlet, Lindenhurst, NY 11036',
        coordinate: ['40.68715261156324', '-74.00526659632791'],
      },
    ],
  },
  {
    id: getObjectId('customer_146'),
    firstName: 'Charity',
    lastName: 'Hessel',
    fullName: 'Charity Hessel',
    gender: 'Female',
    gsm: '(804) 833-5964',
    createdAt: '2024-07-06T19:25:45.551Z',
    isActive: false,
    avatar: [
      {
        name: '8c708766-c2d9-49f3-bdd4-2f21925d59ce',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '34420539-c0d4-4346-a296-dfc7406bb04d',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/891.jpg',
      },
    ],
    addresses: [
      {
        text: '11623 Darien Cliffs, Lindenhurst, NY 11575',
        coordinate: ['40.70056831070206', '-73.9853693094361'],
      },
      {
        text: '11045 Johnston Key, Lindenhurst, NY 11539',
        coordinate: ['40.84398642270739', '-73.83864402262044'],
      },
      {
        text: '11701 Rusty Lights, Massapequa, NY 11840',
        coordinate: ['40.74921391148173', '-73.88745667351822'],
      },
    ],
  },
  {
    id: getObjectId('customer_147'),
    firstName: 'Judy',
    lastName: 'Abbott',
    fullName: 'Judy Abbott',
    gender: 'Female',
    gsm: '(340) 434-6495',
    createdAt: '2024-06-11T13:22:49.235Z',
    isActive: false,
    avatar: [
      {
        name: 'd4ebcb08-4f60-4902-b195-2a22d4d013be',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '6e559a46-e587-44ae-bd6c-3ca69ffd5847',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/604.jpg',
      },
    ],
    addresses: [
      {
        text: '11718 Beatty Motorway, Lindenhurst, NY 11314',
        coordinate: ['40.69281598660577', '-73.82908131481418'],
      },
      {
        text: '11418 Schumm Lock, Lindenhurst, NY 11340',
        coordinate: ['40.788028545449976', '-73.90529902987166'],
      },
      {
        text: '11719 Buckridge Center, Brooklyn, NY 11760',
        coordinate: ['40.71127832019916', '-73.72859237968323'],
      },
    ],
  },
  {
    id: getObjectId('customer_148'),
    firstName: 'Brisa',
    lastName: 'Stehr',
    fullName: 'Brisa Stehr',
    gender: 'Male',
    gsm: '(656) 323-6507',
    createdAt: '2024-06-19T10:27:06.095Z',
    isActive: false,
    avatar: [
      {
        name: 'c703e10e-24b0-42e7-91bf-cd3691503eb8',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '1be74bf5-8821-4445-a768-8b18f8fc6498',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/795.jpg',
      },
    ],
    addresses: [
      {
        text: '11898 Chelsea Plain, Lindenhurst, NY 11735',
        coordinate: ['40.875525570218045', '-73.86179079437676'],
      },
      {
        text: '11877 Nyasia Plains, Lindenhurst, NY 11970',
        coordinate: ['40.76021384556489', '-74.00722225239753'],
      },
      {
        text: '11269 Stokes Valley, Lindenhurst, NY 11154',
        coordinate: ['40.67540078261772', '-73.81703727480193'],
      },
    ],
  },
  {
    id: getObjectId('customer_149'),
    firstName: 'Jerod',
    lastName: 'Conn',
    fullName: 'Jerod Conn',
    gender: 'Female',
    gsm: '(997) 277-3636',
    createdAt: '2024-06-12T02:51:08.760Z',
    isActive: true,
    avatar: [
      {
        name: '882a8d78-0be5-40a5-9aee-5c5ac4060718',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'a46a63bf-c157-49f3-adbf-59de95ae7e69',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/901.jpg',
      },
    ],
    addresses: [
      {
        text: '11772 Toy Row, Lindenhurst, NY 11384',
        coordinate: ['40.811873397132395', '-73.94826902574404'],
      },
      {
        text: "11960 O'Conner Forest, Lindenhurst, NY 11163",
        coordinate: ['40.89309118725139', '-73.89752941514372'],
      },
      {
        text: '11878 Pagac Trail, Lindenhurst, NY 11876',
        coordinate: ['40.71114281327269', '-74.01648182914843'],
      },
    ],
  },
  {
    id: getObjectId('customer_150'),
    firstName: 'Declan',
    lastName: 'McClure',
    fullName: 'Declan McClure',
    gender: 'Male',
    gsm: '(922) 282-3570',
    createdAt: '2024-06-19T10:50:59.436Z',
    isActive: true,
    avatar: [
      {
        name: '61a07917-6610-4a94-9d31-3494f96156c5',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '55a7ff5a-c04d-4687-a489-1a99705ed33b',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/688.jpg',
      },
    ],
    addresses: [
      {
        text: '11367 Ansley Stravenue, Massapequa, NY 11350',
        coordinate: ['40.81730470420681', '-73.94741458340314'],
      },
      {
        text: '11036 Hartmann Islands, Massapequa, NY 11273',
        coordinate: ['40.80648728921871', '-73.94602283563091'],
      },
      {
        text: '11947 Ernser Ferry, Lindenhurst, NY 11234',
        coordinate: ['40.750136329510546', '-73.88507636312373'],
      },
    ],
  },
  {
    id: getObjectId('customer_151'),
    firstName: 'Ottilie',
    lastName: 'Daugherty',
    fullName: 'Ottilie Daugherty',
    gender: 'Female',
    gsm: '(524) 948-4833',
    createdAt: '2024-06-28T19:08:18.899Z',
    isActive: true,
    avatar: [
      {
        name: 'd8bd56bd-9a3b-4e9e-8f63-78ffcd9e2537',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'dfc1c141-6c08-4a4c-974e-ae29a0488db2',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/763.jpg',
      },
    ],
    addresses: [
      {
        text: '11174 Wilkinson Locks, Lindenhurst, NY 11527',
        coordinate: ['40.696832261046126', '-73.94037102754282'],
      },
      {
        text: '11125 Strosin Curve, Lindenhurst, NY 11467',
        coordinate: ['40.732100034726514', '-73.9767183060347'],
      },
      {
        text: '11115 Else Valleys, Brooklyn, NY 11770',
        coordinate: ['40.674384416687445', '-73.88542328715191'],
      },
    ],
  },
  {
    id: getObjectId('customer_152'),
    firstName: 'Rod',
    lastName: 'Thiel',
    fullName: 'Rod Thiel',
    gender: 'Male',
    gsm: '(349) 237-5576',
    createdAt: '2024-06-09T01:42:45.851Z',
    isActive: false,
    avatar: [
      {
        name: 'b06f27c3-f685-48fa-9cbf-0d2525ca50c2',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '9c902c1b-d360-4c2a-95aa-d55e394a9268',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1071.jpg',
      },
    ],
    addresses: [
      {
        text: '11461 Remington Mews, Lindenhurst, NY 11244',
        coordinate: ['40.63232866257922', '-73.92392166069966'],
      },
      {
        text: '11727 Schaefer Inlet, Lindenhurst, NY 11036',
        coordinate: ['40.68715261156324', '-74.00526659632791'],
      },
      {
        text: '11835 Powlowski Extension, Brooklyn, NY 11150',
        coordinate: ['40.76245015151365', '-73.87061296246294'],
      },
    ],
  },
  {
    id: getObjectId('customer_153'),
    firstName: 'Nyasia',
    lastName: 'Carter',
    fullName: 'Nyasia Carter',
    gender: 'Female',
    gsm: '(378) 487-7856',
    createdAt: '2024-07-08T07:38:33.103Z',
    isActive: false,
    avatar: [
      {
        name: '8d4d8135-378b-429c-a6d0-fc6365e83cc5',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '85b60b74-c162-478c-8604-e76662983ec2',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1009.jpg',
      },
    ],
    addresses: [
      {
        text: '11655 Joany Course, Brooklyn, NY 11802',
        coordinate: ['40.75627707172136', '-73.97723552936826'],
      },
      {
        text: '11867 Kling Coves, Brooklyn, NY 11655',
        coordinate: ['40.72425809826063', '-74.0076193098343'],
      },
      {
        text: '11384 Waelchi Rapid, Massapequa, NY 11796',
        coordinate: ['40.84590139880644', '-73.8928291967851'],
      },
    ],
  },
  {
    id: getObjectId('customer_154'),
    firstName: 'Jayden',
    lastName: 'Ratke',
    fullName: 'Jayden Ratke',
    gender: 'Female',
    gsm: '(254) 662-0052',
    createdAt: '2024-06-23T14:30:03.632Z',
    isActive: false,
    avatar: [
      {
        name: '886ed2c2-858f-4ac7-97b9-ac1c1f308a1c',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '5b28db7d-ad9e-4daf-b8ab-cbc439e58f66',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/258.jpg',
      },
    ],
    addresses: [
      {
        text: '11175 Kieran Curve, Massapequa, NY 11322',
        coordinate: ['40.60976233898883', '-74.1028092626307'],
      },
      {
        text: '11195 Nader Road, Massapequa, NY 11615',
        coordinate: ['40.62678964983104', '-73.98952500781843'],
      },
      {
        text: '11263 Osinski Forks, Lindenhurst, NY 11884',
        coordinate: ['40.86213206940792', '-73.82618292669638'],
      },
    ],
  },
  {
    id: getObjectId('customer_155'),
    firstName: 'River',
    lastName: 'Lindgren',
    fullName: 'River Lindgren',
    gender: 'Female',
    gsm: '(743) 267-6225',
    createdAt: '2024-06-23T20:52:23.834Z',
    isActive: false,
    avatar: [
      {
        name: '20bd465b-ec48-4375-b4c4-42315e40349c',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '6816e175-6a30-4aea-b509-db32bd4de3ad',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/558.jpg',
      },
    ],
    addresses: [
      {
        text: '11859 Abbie Station, Brooklyn, NY 11161',
        coordinate: ['40.68771299502717', '-74.04721511862215'],
      },
      {
        text: '11059 Randy Locks, Lindenhurst, NY 11667',
        coordinate: ['40.855052258679024', '-73.90331823302245'],
      },
      {
        text: '11248 Kuhlman Crossroad, Massapequa, NY 11810',
        coordinate: ['40.64939023071356', '-73.95553621385756'],
      },
    ],
  },
  {
    id: getObjectId('customer_156'),
    firstName: 'Casimir',
    lastName: 'Schroeder',
    fullName: 'Casimir Schroeder',
    gender: 'Female',
    gsm: '(309) 418-4663',
    createdAt: '2024-06-14T01:07:30.115Z',
    isActive: false,
    avatar: [
      {
        name: 'f1b70924-8cab-4ab6-81c1-861a6d92f8c7',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'dd9ba58c-b714-49bb-b135-1b2671e9d0e0',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/935.jpg',
      },
    ],
    addresses: [
      {
        text: '11036 Hartmann Islands, Massapequa, NY 11273',
        coordinate: ['40.80648728921871', '-73.94602283563091'],
      },
      {
        text: '11269 Stokes Valley, Lindenhurst, NY 11154',
        coordinate: ['40.67540078261772', '-73.81703727480193'],
      },
      {
        text: '11128 Shayna Motorway, Lindenhurst, NY 11101',
        coordinate: ['40.70373038121957', '-73.99378591068276'],
      },
    ],
  },
  {
    id: getObjectId('customer_157'),
    firstName: 'Ariel',
    lastName: 'Dach',
    fullName: 'Ariel Dach',
    gender: 'Male',
    gsm: '(380) 551-9890',
    createdAt: '2024-07-05T10:53:31.800Z',
    isActive: false,
    avatar: [
      {
        name: '7ede08de-a107-428d-ae7f-417967e856e1',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'b5afcdc0-f03b-4212-a243-95b5e16ace2d',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1109.jpg',
      },
    ],
    addresses: [
      {
        text: '11203 Pfannerstill Stravenue, Lindenhurst, NY 11362',
        coordinate: ['40.81887624266896', '-73.93779180668098'],
      },
      {
        text: '11023 Reilly Freeway, Brooklyn, NY 11304',
        coordinate: ['40.708836427424856', '-73.95736505455008'],
      },
      {
        text: '11085 Lenora Crossroad, Massapequa, NY 11054',
        coordinate: ['40.6717882500396', '-73.8952881573647'],
      },
    ],
  },
  {
    id: getObjectId('customer_158'),
    firstName: 'Elwyn',
    lastName: 'Parker',
    fullName: 'Elwyn Parker',
    gender: 'Female',
    gsm: '(074) 491-1329',
    createdAt: '2024-06-15T02:33:20.137Z',
    isActive: false,
    avatar: [
      {
        name: 'c626a15f-0fdb-4460-9e4a-ef5df68888cc',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'b67f3408-a404-47b0-9897-6aa735d4ec7c',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/653.jpg',
      },
    ],
    addresses: [
      {
        text: '11427 Huel Route, Massapequa, NY 11751',
        coordinate: ['40.73210823178464', '-73.99785822334118'],
      },
      {
        text: '11195 Nader Road, Massapequa, NY 11615',
        coordinate: ['40.62678964983104', '-73.98952500781843'],
      },
      {
        text: '11505 Raynor Walk, Massapequa, NY 11815',
        coordinate: ['40.75598474475542', '-73.9358398855354'],
      },
    ],
  },
  {
    id: getObjectId('customer_159'),
    firstName: 'Lottie',
    lastName: 'Jast',
    fullName: 'Lottie Jast',
    gender: 'Female',
    gsm: '(882) 586-8404',
    createdAt: '2024-06-16T22:19:45.366Z',
    isActive: false,
    avatar: [
      {
        name: '7f5a86e0-42a2-4171-8dbd-eb18f09e4c50',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '95674a17-4387-45a3-9042-a4670c03ec5f',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/41.jpg',
      },
    ],
    addresses: [
      {
        text: '11655 Joany Course, Brooklyn, NY 11802',
        coordinate: ['40.75627707172136', '-73.97723552936826'],
      },
      {
        text: '11928 Zemlak Terrace, Brooklyn, NY 11083',
        coordinate: ['40.5861219668654', '-73.96563797373686'],
      },
      {
        text: '11056 Doyle Station, Massapequa, NY 11606',
        coordinate: ['40.85931338640661', '-73.92812829680183'],
      },
    ],
  },
  {
    id: getObjectId('customer_160'),
    firstName: 'Ewald',
    lastName: 'Friesen',
    fullName: 'Ewald Friesen',
    gender: 'Female',
    gsm: '(794) 715-9603',
    createdAt: '2024-06-09T07:22:22.428Z',
    isActive: true,
    avatar: [
      {
        name: '21134b0e-e59f-4e2a-994e-1de78b91891a',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '25d84521-05ee-4405-9545-7cd6ce001686',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/908.jpg',
      },
    ],
    addresses: [
      {
        text: '11461 Remington Mews, Lindenhurst, NY 11244',
        coordinate: ['40.63232866257922', '-73.92392166069966'],
      },
      {
        text: '11451 Beahan Hill, Massapequa, NY 11967',
        coordinate: ['40.820067735758684', '-73.93981529222577'],
      },
      {
        text: '11418 Jewel Vista, Massapequa, NY 11932',
        coordinate: ['40.82014327346224', '-73.82407376717762'],
      },
    ],
  },
  {
    id: getObjectId('customer_161'),
    firstName: 'Marcelle',
    lastName: 'Koepp',
    fullName: 'Marcelle Koepp',
    gender: 'Male',
    gsm: '(346) 325-9372',
    createdAt: '2024-06-15T05:41:48.005Z',
    isActive: false,
    avatar: [
      {
        name: '59ac6f24-1da6-4e68-82b9-324e2c315ef5',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'ec4b798e-63f5-4fcf-bb2f-80b6b34c6a77',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/584.jpg',
      },
    ],
    addresses: [
      {
        text: '11663 Gusikowski Extensions, Massapequa, NY 11108',
        coordinate: ['40.705174543564866', '-74.01519738145755'],
      },
      {
        text: '11418 Alena Branch, Massapequa, NY 11197',
        coordinate: ['40.7831303248025', '-73.96435879895469'],
      },
      {
        text: '11216 Rosina Fork, Lindenhurst, NY 11508',
        coordinate: ['40.745419155079155', '-73.71294596495262'],
      },
    ],
  },
  {
    id: getObjectId('customer_162'),
    firstName: 'Silas',
    lastName: 'Sauer',
    fullName: 'Silas Sauer',
    gender: 'Female',
    gsm: '(681) 617-7779',
    createdAt: '2024-06-28T22:40:52.472Z',
    isActive: true,
    avatar: [
      {
        name: '9f6f1459-2d5f-4e3a-8e6c-1ea2cde3f908',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '4b58742b-43fc-4d95-be35-45cb9ffad71f',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/556.jpg',
      },
    ],
    addresses: [
      {
        text: '11203 Pfannerstill Stravenue, Lindenhurst, NY 11362',
        coordinate: ['40.81887624266896', '-73.93779180668098'],
      },
      {
        text: '11059 Randy Locks, Lindenhurst, NY 11667',
        coordinate: ['40.855052258679024', '-73.90331823302245'],
      },
      {
        text: '11451 Beahan Hill, Massapequa, NY 11967',
        coordinate: ['40.820067735758684', '-73.93981529222577'],
      },
    ],
  },
  {
    id: getObjectId('customer_163'),
    firstName: 'Ceasar',
    lastName: 'Gibson',
    fullName: 'Ceasar Gibson',
    gender: 'Male',
    gsm: '(759) 632-9101',
    createdAt: '2024-06-27T00:26:16.373Z',
    isActive: true,
    avatar: [
      {
        name: '4744dbd7-f4f0-4163-9f5a-b17c455b3a6a',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'f9374462-e516-4c49-abb0-9511b823d90b',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1089.jpg',
      },
    ],
    addresses: [
      {
        text: '11120 Royal Coves, Lindenhurst, NY 11520',
        coordinate: ['40.63410088148846', '-73.99688826750287'],
      },
      {
        text: '11923 Legros Divide, Brooklyn, NY 11072',
        coordinate: ['40.75081540048207', '-73.84366030192892'],
      },
      {
        text: '11606 Mariana Keys, Lindenhurst, NY 11071',
        coordinate: ['40.60227925020982', '-73.91362606675423'],
      },
    ],
  },
  {
    id: getObjectId('customer_164'),
    firstName: 'Korbin',
    lastName: 'Reilly',
    fullName: 'Korbin Reilly',
    gender: 'Female',
    gsm: '(674) 523-7470',
    createdAt: '2024-07-03T17:55:11.550Z',
    isActive: false,
    avatar: [
      {
        name: '21a72524-eee2-4b3d-b733-365114da7381',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '6652135a-ac53-4878-8478-20e6fbf77b4e',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/84.jpg',
      },
    ],
    addresses: [
      {
        text: '11418 Schumm Lock, Lindenhurst, NY 11340',
        coordinate: ['40.788028545449976', '-73.90529902987166'],
      },
      {
        text: '11143 Ortiz Mill, Brooklyn, NY 11207',
        coordinate: ['40.6645385558063', '-73.90402732990448'],
      },
      {
        text: '11701 Rusty Lights, Massapequa, NY 11840',
        coordinate: ['40.74921391148173', '-73.88745667351822'],
      },
    ],
  },
  {
    id: getObjectId('customer_165'),
    firstName: 'Chanelle',
    lastName: 'Fay',
    fullName: 'Chanelle Fay',
    gender: 'Male',
    gsm: '(747) 876-7117',
    createdAt: '2024-06-13T18:53:03.916Z',
    isActive: true,
    avatar: [
      {
        name: '5bec298f-33c8-4e56-b484-c139d13b7963',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'd7c9a5a4-9e6c-4c5e-80b9-2c85d40720e9',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/6.jpg',
      },
    ],
    addresses: [
      {
        text: '11718 Beatty Motorway, Lindenhurst, NY 11314',
        coordinate: ['40.69281598660577', '-73.82908131481418'],
      },
      {
        text: '11898 Chelsea Plain, Lindenhurst, NY 11735',
        coordinate: ['40.875525570218045', '-73.86179079437676'],
      },
      {
        text: '11474 Dickens Lodge, Massapequa, NY 11199',
        coordinate: ['40.75587993188085', '-73.7894709790709'],
      },
    ],
  },
  {
    id: getObjectId('customer_166'),
    firstName: 'Coty',
    lastName: 'Harris',
    fullName: 'Coty Harris',
    gender: 'Female',
    gsm: '(678) 304-8649',
    createdAt: '2024-06-26T14:49:21.440Z',
    isActive: false,
    avatar: [
      {
        name: 'b6836b1c-11a6-4143-bc12-216ad213f56f',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'e7df6a25-0237-41c5-a1fe-811a2fca8889',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/957.jpg',
      },
    ],
    addresses: [
      {
        text: '11107 Hickle Ranch, Lindenhurst, NY 11515',
        coordinate: ['40.61088151832268', '-74.08690487977938'],
      },
      {
        text: '11898 Chelsea Plain, Lindenhurst, NY 11735',
        coordinate: ['40.875525570218045', '-73.86179079437676'],
      },
      {
        text: '11701 Rusty Lights, Massapequa, NY 11840',
        coordinate: ['40.74921391148173', '-73.88745667351822'],
      },
    ],
  },
  {
    id: getObjectId('customer_167'),
    firstName: 'Shany',
    lastName: 'Moore',
    fullName: 'Shany Moore',
    gender: 'Male',
    gsm: '(457) 300-1688',
    createdAt: '2024-06-21T08:15:43.377Z',
    isActive: true,
    avatar: [
      {
        name: '0d6a89bd-8182-4c0f-af56-aced363aa577',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'a50860cb-fac3-4bcb-b3b6-d118bab7b5c7',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/29.jpg',
      },
    ],
    addresses: [
      {
        text: '11335 Greyson Mission, Lindenhurst, NY 11507',
        coordinate: ['40.89110181872506', '-73.8938991544214'],
      },
      {
        text: '11384 Waelchi Rapid, Massapequa, NY 11796',
        coordinate: ['40.84590139880644', '-73.8928291967851'],
      },
      {
        text: '11797 Bart Valley, Lindenhurst, NY 11117',
        coordinate: ['40.669777801118656', '-73.92802454968135'],
      },
    ],
  },
  {
    id: getObjectId('customer_168'),
    firstName: 'Scottie',
    lastName: 'Douglas',
    fullName: 'Scottie Douglas',
    gender: 'Male',
    gsm: '(094) 156-1745',
    createdAt: '2024-06-28T09:12:11.574Z',
    isActive: false,
    avatar: [
      {
        name: '0ee31715-2186-44d1-870f-d81b3ff683f4',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'd6f7708a-247e-40a6-9f85-fd58447bb209',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/334.jpg',
      },
    ],
    addresses: [
      {
        text: '11537 Albin Way, Massapequa, NY 11704',
        coordinate: ['40.76684204696888', '-73.93807668888226'],
      },
      {
        text: '11059 Randy Locks, Lindenhurst, NY 11667',
        coordinate: ['40.855052258679024', '-73.90331823302245'],
      },
      {
        text: '11156 Hoppe Run, Lindenhurst, NY 11165',
        coordinate: ['40.65688875879231', '-73.88404087891976'],
      },
    ],
  },
  {
    id: getObjectId('customer_169'),
    firstName: 'Santina',
    lastName: 'Bins',
    fullName: 'Santina Bins',
    gender: 'Male',
    gsm: '(671) 346-1898',
    createdAt: '2024-06-21T08:03:01.143Z',
    isActive: true,
    avatar: [
      {
        name: '7b859b46-0f05-4e8f-8b03-a3869cee8d59',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '2c727c44-d5d3-48e8-8233-998c0a654537',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/814.jpg',
      },
    ],
    addresses: [
      {
        text: '11374 Daniella Courts, Lindenhurst, NY 11722',
        coordinate: ['40.692405303311446', '-74.00069759444021'],
      },
      {
        text: '11143 Ortiz Mill, Brooklyn, NY 11207',
        coordinate: ['40.6645385558063', '-73.90402732990448'],
      },
      {
        text: '11961 Wilfred Terrace, Brooklyn, NY 11580',
        coordinate: ['40.675225426976645', '-73.91483721590403'],
      },
    ],
  },
  {
    id: getObjectId('customer_170'),
    firstName: 'Edyth',
    lastName: 'Wintheiser',
    fullName: 'Edyth Wintheiser',
    gender: 'Female',
    gsm: '(211) 146-4426',
    createdAt: '2024-06-19T17:12:53.747Z',
    isActive: true,
    avatar: [
      {
        name: '20cddbb5-741e-4a6d-955b-ba81852c404c',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '3023dcf3-0702-4cc2-a8d7-5cbb7d2f1260',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/485.jpg',
      },
    ],
    addresses: [
      {
        text: '11489 Schoen Throughway, Lindenhurst, NY 11849',
        coordinate: ['40.69130748551876', '-73.97542925623603'],
      },
      {
        text: '11728 Earlene Garden, Brooklyn, NY 11259',
        coordinate: ['40.61541451352046', '-73.9512235195281'],
      },
      {
        text: '11907 Okuneva Ville, Massapequa, NY 11534',
        coordinate: ['40.83473164454386', '-73.87357573718195'],
      },
    ],
  },
  {
    id: getObjectId('customer_171'),
    firstName: 'Trever',
    lastName: 'Lehner',
    fullName: 'Trever Lehner',
    gender: 'Male',
    gsm: '(718) 017-1524',
    createdAt: '2024-07-04T14:20:03.207Z',
    isActive: true,
    avatar: [
      {
        name: '21463801-16f1-4636-97ae-a9df79281cd3',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'dacd365d-fe88-4a9e-bab9-d0becc89f866',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1086.jpg',
      },
    ],
    addresses: [
      {
        text: '11877 Franecki Isle, Lindenhurst, NY 11625',
        coordinate: ['40.62829175498013', '-74.18137586483954'],
      },
      {
        text: '11680 Georgette Junctions, Massapequa, NY 11411',
        coordinate: ['40.702102706281686', '-73.80945836885176'],
      },
      {
        text: '11701 Rusty Lights, Massapequa, NY 11840',
        coordinate: ['40.74921391148173', '-73.88745667351822'],
      },
    ],
  },
  {
    id: getObjectId('customer_172'),
    firstName: 'Liza',
    lastName: 'Lang',
    fullName: 'Liza Lang',
    gender: 'Male',
    gsm: '(369) 428-5791',
    createdAt: '2024-06-14T19:15:02.815Z',
    isActive: false,
    avatar: [
      {
        name: 'bf384e8e-4028-4ac7-8be4-9c67ced885ad',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'bef12eaf-ca67-4d6f-a214-9ab219937872',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/5.jpg',
      },
    ],
    addresses: [
      {
        text: "11960 O'Conner Forest, Lindenhurst, NY 11163",
        coordinate: ['40.89309118725139', '-73.89752941514372'],
      },
      {
        text: '11898 Chelsea Plain, Lindenhurst, NY 11735',
        coordinate: ['40.875525570218045', '-73.86179079437676'],
      },
      {
        text: '11505 Raynor Walk, Massapequa, NY 11815',
        coordinate: ['40.75598474475542', '-73.9358398855354'],
      },
    ],
  },
  {
    id: getObjectId('customer_173'),
    firstName: 'Alberto',
    lastName: 'Dooley',
    fullName: 'Alberto Dooley',
    gender: 'Female',
    gsm: '(652) 495-5524',
    createdAt: '2024-06-08T21:35:13.067Z',
    isActive: false,
    avatar: [
      {
        name: '34ff3947-6c32-4146-a435-8c9c9ddbf759',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '758b5e95-0b4a-4125-8d89-a525dd4d9726',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/741.jpg',
      },
    ],
    addresses: [
      {
        text: '11991 Feest Court, Brooklyn, NY 11595',
        coordinate: ['40.7380915670452', '-73.99525100532993'],
      },
      {
        text: '11523 Fritsch Flat, Massapequa, NY 11101',
        coordinate: ['40.80097139543108', '-73.93878498911884'],
      },
      {
        text: '11359 Weissnat Shore, Lindenhurst, NY 11530',
        coordinate: ['40.7318003523917', '-73.81115496631985'],
      },
    ],
  },
  {
    id: getObjectId('customer_174'),
    firstName: 'Laurianne',
    lastName: 'Murphy',
    fullName: 'Laurianne Murphy',
    gender: 'Male',
    gsm: '(951) 021-6247',
    createdAt: '2024-07-06T20:29:01.671Z',
    isActive: false,
    avatar: [
      {
        name: 'c56aa272-6205-4e7d-8888-2b7cd96f16ac',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '4bf0efba-3f62-418f-b5d0-3c8ba00032b2',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/212.jpg',
      },
    ],
    addresses: [
      {
        text: '11511 Keeling Courts, Lindenhurst, NY 11662',
        coordinate: ['40.827562039798345', '-73.88823656144815'],
      },
      {
        text: '11624 Jairo Road, Lindenhurst, NY 11160',
        coordinate: ['40.823376279414674', '-73.93960148270892'],
      },
      {
        text: '11913 Veum Spring, Massapequa, NY 11303',
        coordinate: ['40.66164200865502', '-74.00754412065884'],
      },
    ],
  },
  {
    id: getObjectId('customer_175'),
    firstName: 'Edgar',
    lastName: 'Russel',
    fullName: 'Edgar Russel',
    gender: 'Female',
    gsm: '(301) 510-5692',
    createdAt: '2024-06-20T17:10:53.045Z',
    isActive: true,
    avatar: [
      {
        name: '580e2a47-9732-4a47-883f-c5645e7648ea',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '183dd470-aeed-4cfa-a60b-70080804d511',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/417.jpg',
      },
    ],
    addresses: [
      {
        text: '11642 Alberta Junction, Lindenhurst, NY 11370',
        coordinate: ['40.782269303154564', '-73.92799108814602'],
      },
      {
        text: '11512 Jenkins Lights, Massapequa, NY 11737',
        coordinate: ['40.71003074009839', '-73.94229615777373'],
      },
      {
        text: '11628 Treutel Mills, Brooklyn, NY 11018',
        coordinate: ['40.71348020110573', '-73.99808008629375'],
      },
    ],
  },
  {
    id: getObjectId('customer_176'),
    firstName: 'Lauryn',
    lastName: 'Grady',
    fullName: 'Lauryn Grady',
    gender: 'Male',
    gsm: '(362) 756-1270',
    createdAt: '2024-06-28T22:59:00.313Z',
    isActive: false,
    avatar: [
      {
        name: '4815838a-9720-474b-b077-5ffa879603bc',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '96283433-b258-4e3b-b5b4-a8236091817e',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/954.jpg',
      },
    ],
    addresses: [
      {
        text: '11898 Chelsea Plain, Lindenhurst, NY 11735',
        coordinate: ['40.875525570218045', '-73.86179079437676'],
      },
      {
        text: '11693 Hartmann Park, Brooklyn, NY 11251',
        coordinate: ['40.705101590541354', '-73.98948018281791'],
      },
      {
        text: '11474 Dickens Lodge, Massapequa, NY 11199',
        coordinate: ['40.75587993188085', '-73.7894709790709'],
      },
    ],
  },
  {
    id: getObjectId('customer_177'),
    firstName: 'Omer',
    lastName: 'Schaden',
    fullName: 'Omer Schaden',
    gender: 'Female',
    gsm: '(008) 463-4460',
    createdAt: '2024-07-05T01:22:15.048Z',
    isActive: true,
    avatar: [
      {
        name: '3fecb636-89fb-4a39-9477-3e453b3ad4bd',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '78395e48-4200-49aa-8dc9-33950c59a5ea',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/787.jpg',
      },
    ],
    addresses: [
      {
        text: '11264 Pauline Knolls, Brooklyn, NY 11384',
        coordinate: ['40.85195030781291', '-73.93088781078077'],
      },
      {
        text: '11772 Toy Row, Lindenhurst, NY 11384',
        coordinate: ['40.811873397132395', '-73.94826902574404'],
      },
      {
        text: '11438 Otilia Valleys, Brooklyn, NY 11215',
        coordinate: ['40.804396260981164', '-73.79231266832804'],
      },
    ],
  },
  {
    id: getObjectId('customer_178'),
    firstName: 'Glennie',
    lastName: 'Rau',
    fullName: 'Glennie Rau',
    gender: 'Female',
    gsm: '(909) 495-7860',
    createdAt: '2024-06-19T23:04:21.336Z',
    isActive: false,
    avatar: [
      {
        name: '26585bb7-1139-48a1-b0aa-66b291bfdc9f',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '801fca81-1ff8-485d-b999-90f357782baa',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/571.jpg',
      },
    ],
    addresses: [
      {
        text: '11230 Zander Curve, Lindenhurst, NY 11912',
        coordinate: ['40.87080816088552', '-73.83213503852586'],
      },
      {
        text: '11877 Nyasia Plains, Lindenhurst, NY 11970',
        coordinate: ['40.76021384556489', '-74.00722225239753'],
      },
      {
        text: '11085 Lenora Crossroad, Massapequa, NY 11054',
        coordinate: ['40.6717882500396', '-73.8952881573647'],
      },
    ],
  },
  {
    id: getObjectId('customer_179'),
    firstName: 'Stephon',
    lastName: 'Goodwin',
    fullName: 'Stephon Goodwin',
    gender: 'Male',
    gsm: '(745) 868-6275',
    createdAt: '2024-07-05T08:27:04.644Z',
    isActive: true,
    avatar: [
      {
        name: 'fea69ba9-f809-4069-a511-2de241afc8a7',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'cf746003-a1d2-425e-b823-a883d0fd081b',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
      },
    ],
    addresses: [
      {
        text: '11057 Roberts Plaza, Lindenhurst, NY 11697',
        coordinate: ['40.64678681484174', '-74.08826976320468'],
      },
      {
        text: '11923 Legros Divide, Brooklyn, NY 11072',
        coordinate: ['40.75081540048207', '-73.84366030192892'],
      },
      {
        text: '11599 Wolf Lock, Brooklyn, NY 11792',
        coordinate: ['40.7042912677296', '-74.01395408433967'],
      },
    ],
  },
  {
    id: getObjectId('customer_180'),
    firstName: 'Willard',
    lastName: 'Raynor',
    fullName: 'Willard Raynor',
    gender: 'Female',
    gsm: '(555) 740-7227',
    createdAt: '2024-06-08T17:05:55.538Z',
    isActive: true,
    avatar: [
      {
        name: '05925574-6574-4d59-8ec8-5c6450d17e93',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '3961df58-9fdb-4cfd-b5df-ab9c92f924e9',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/293.jpg',
      },
    ],
    addresses: [
      {
        text: '11085 Oswaldo Harbor, Brooklyn, NY 11546',
        coordinate: ['40.85125313575545', '-73.91436091292005'],
      },
      {
        text: '11762 Schinner Garden, Lindenhurst, NY 11487',
        coordinate: ['40.50954831912203', '-74.24409344591764'],
      },
      {
        text: '11056 Doyle Station, Massapequa, NY 11606',
        coordinate: ['40.85931338640661', '-73.92812829680183'],
      },
    ],
  },
  {
    id: getObjectId('customer_181'),
    firstName: 'Tony',
    lastName: 'Watsica',
    fullName: 'Tony Watsica',
    gender: 'Female',
    gsm: '(146) 253-3764',
    createdAt: '2024-06-11T09:40:34.969Z',
    isActive: false,
    avatar: [
      {
        name: '73cfe440-174a-4d1f-89c5-de39e2c075d6',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '50fe77ea-21c1-4aa4-81a4-4244371cfd99',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/495.jpg',
      },
    ],
    addresses: [
      {
        text: '11293 Waelchi Path, Lindenhurst, NY 11005',
        coordinate: ['40.50330485234582', '-74.2344363479454'],
      },
      {
        text: '11867 Kling Coves, Brooklyn, NY 11655',
        coordinate: ['40.72425809826063', '-74.0076193098343'],
      },
      {
        text: '11120 Royal Coves, Lindenhurst, NY 11520',
        coordinate: ['40.63410088148846', '-73.99688826750287'],
      },
    ],
  },
  {
    id: getObjectId('customer_182'),
    firstName: 'Philip',
    lastName: 'Schumm',
    fullName: 'Philip Schumm',
    gender: 'Male',
    gsm: '(214) 059-4353',
    createdAt: '2024-06-27T02:42:15.224Z',
    isActive: true,
    avatar: [
      {
        name: '60ad6f75-40fd-45f2-b6dc-c9f59538e5d1',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'ce3786ee-2417-40d6-ba77-70087f8ad516',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1073.jpg',
      },
    ],
    addresses: [
      {
        text: '11769 Sally Villages, Massapequa, NY 11393',
        coordinate: ['40.79438834815965', '-73.9479240645321'],
      },
      {
        text: '11680 Georgette Junctions, Massapequa, NY 11411',
        coordinate: ['40.702102706281686', '-73.80945836885176'],
      },
      {
        text: '11384 Waelchi Rapid, Massapequa, NY 11796',
        coordinate: ['40.84590139880644', '-73.8928291967851'],
      },
    ],
  },
  {
    id: getObjectId('customer_183'),
    firstName: 'Alexandra',
    lastName: 'Fisher',
    fullName: 'Alexandra Fisher',
    gender: 'Female',
    gsm: '(572) 266-6435',
    createdAt: '2024-06-14T21:45:14.160Z',
    isActive: true,
    avatar: [
      {
        name: '9304e894-6f1b-47e5-a4ce-6d306ebfacaa',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '8b4e1116-8b4f-4275-b5e6-91fb93e0c857',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/759.jpg',
      },
    ],
    addresses: [
      {
        text: '11418 Schumm Lock, Lindenhurst, NY 11340',
        coordinate: ['40.788028545449976', '-73.90529902987166'],
      },
      {
        text: '11851 Swift Glen, Lindenhurst, NY 11624',
        coordinate: ['40.51158309370173', '-74.22091326797245'],
      },
      {
        text: '11882 Oceane Islands, Brooklyn, NY 11755',
        coordinate: ['40.711735188982935', '-73.9020610486226'],
      },
    ],
  },
  {
    id: getObjectId('customer_184'),
    firstName: 'Cary',
    lastName: 'Herman',
    fullName: 'Cary Herman',
    gender: 'Female',
    gsm: '(999) 658-6044',
    createdAt: '2024-07-03T13:28:06.782Z',
    isActive: true,
    avatar: [
      {
        name: '2245a772-7e0b-46d7-a990-929ed5a32a11',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'cd47c56c-9461-415e-bea3-1fea65fc1c58',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/230.jpg',
      },
    ],
    addresses: [
      {
        text: '11085 Oswaldo Harbor, Brooklyn, NY 11546',
        coordinate: ['40.85125313575545', '-73.91436091292005'],
      },
      {
        text: '11384 Waelchi Rapid, Massapequa, NY 11796',
        coordinate: ['40.84590139880644', '-73.8928291967851'],
      },
      {
        text: '11228 Paucek Islands, Massapequa, NY 11666',
        coordinate: ['40.782861173910526', '-73.92808660964148'],
      },
    ],
  },
  {
    id: getObjectId('customer_185'),
    firstName: 'Bennett',
    lastName: 'Grimes',
    fullName: 'Bennett Grimes',
    gender: 'Female',
    gsm: '(966) 326-7654',
    createdAt: '2024-06-27T08:04:56.626Z',
    isActive: true,
    avatar: [
      {
        name: '9dea3d51-6baa-431b-9a82-0a7f5a3b9f12',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'e9210593-5b90-4546-a6df-863d3e642695',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/598.jpg',
      },
    ],
    addresses: [
      {
        text: '11045 Johnston Key, Lindenhurst, NY 11539',
        coordinate: ['40.84398642270739', '-73.83864402262044'],
      },
      {
        text: "11960 O'Conner Forest, Lindenhurst, NY 11163",
        coordinate: ['40.89309118725139', '-73.89752941514372'],
      },
      {
        text: '11879 Larry Drives, Massapequa, NY 11339',
        coordinate: ['40.66416374763622', '-73.90697071032429'],
      },
    ],
  },
  {
    id: getObjectId('customer_186'),
    firstName: 'Jackie',
    lastName: 'Flatley',
    fullName: 'Jackie Flatley',
    gender: 'Female',
    gsm: '(018) 526-5060',
    createdAt: '2024-07-07T07:30:40.822Z',
    isActive: true,
    avatar: [
      {
        name: '017f4fd2-15e6-4e2b-91fe-6582d038f806',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '0c6d83ca-8ba0-4711-be74-fafd0dc46962',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/740.jpg',
      },
    ],
    addresses: [
      {
        text: '11693 Hartmann Park, Brooklyn, NY 11251',
        coordinate: ['40.705101590541354', '-73.98948018281791'],
      },
      {
        text: '11728 Earlene Garden, Brooklyn, NY 11259',
        coordinate: ['40.61541451352046', '-73.9512235195281'],
      },
      {
        text: '11096 Wehner Road, Brooklyn, NY 11769',
        coordinate: ['40.772541352269656', '-73.96458491444952'],
      },
    ],
  },
  {
    id: getObjectId('customer_187'),
    firstName: 'Matilde',
    lastName: 'Schowalter',
    fullName: 'Matilde Schowalter',
    gender: 'Female',
    gsm: '(243) 891-5781',
    createdAt: '2024-06-18T01:49:31.458Z',
    isActive: true,
    avatar: [
      {
        name: 'a75553fd-2131-4029-9ad8-02b2570eeb35',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'aabb6efc-4464-49bd-a4de-e8454a7de9b5',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1102.jpg',
      },
    ],
    addresses: [
      {
        text: '11772 Toy Row, Lindenhurst, NY 11384',
        coordinate: ['40.811873397132395', '-73.94826902574404'],
      },
      {
        text: '11923 Legros Divide, Brooklyn, NY 11072',
        coordinate: ['40.75081540048207', '-73.84366030192892'],
      },
      {
        text: '11760 Cynthia Dam, Brooklyn, NY 11589',
        coordinate: ['40.805598122229355', '-73.96654850238752'],
      },
    ],
  },
  {
    id: getObjectId('customer_188'),
    firstName: 'Juwan',
    lastName: 'Johnston',
    fullName: 'Juwan Johnston',
    gender: 'Female',
    gsm: '(561) 443-0385',
    createdAt: '2024-06-22T01:35:28.871Z',
    isActive: true,
    avatar: [
      {
        name: 'dbe610cf-1a77-4923-bcf6-0a86e06b4af8',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '5bb6e235-4245-4fe6-b043-49ca59d36ced',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/626.jpg',
      },
    ],
    addresses: [
      {
        text: '11031 Feil Crossing, Lindenhurst, NY 11251',
        coordinate: ['40.83451001107047', '-73.91770528927904'],
      },
      {
        text: '11719 Buckridge Center, Brooklyn, NY 11760',
        coordinate: ['40.71127832019916', '-73.72859237968323'],
      },
      {
        text: '11797 Lorenzo Locks, Brooklyn, NY 11347',
        coordinate: ['40.747277718986986', '-73.99578762620561'],
      },
    ],
  },
  {
    id: getObjectId('customer_189'),
    firstName: 'Griffin',
    lastName: "O'Hara",
    fullName: "Griffin O'Hara",
    gender: 'Male',
    gsm: '(940) 252-2655',
    createdAt: '2024-06-18T09:31:21.756Z',
    isActive: false,
    avatar: [
      {
        name: '30e325b5-e46d-4051-9d18-4ffe79f17329',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '937f61c4-6f17-4c8f-a8bb-e6f692bd60e4',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/728.jpg',
      },
    ],
    addresses: [
      {
        text: '11073 Wuckert Lake, Massapequa, NY 11688',
        coordinate: ['40.80679767187204', '-73.94678301233309'],
      },
      {
        text: '11512 Jenkins Lights, Massapequa, NY 11737',
        coordinate: ['40.71003074009839', '-73.94229615777373'],
      },
      {
        text: '11024 Gerald Pike, Brooklyn, NY 11160',
        coordinate: ['40.58348466152282', '-73.93320807895984'],
      },
    ],
  },
  {
    id: getObjectId('customer_190'),
    firstName: 'Lessie',
    lastName: 'Robel',
    fullName: 'Lessie Robel',
    gender: 'Male',
    gsm: '(294) 193-7765',
    createdAt: '2024-06-19T03:40:06.080Z',
    isActive: false,
    avatar: [
      {
        name: '5c197ef3-fde8-47a4-ace3-974af413afaa',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '33192928-d6fc-4f8f-8e3f-86b2dcefd080',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1191.jpg',
      },
    ],
    addresses: [
      {
        text: '11451 Beahan Hill, Massapequa, NY 11967',
        coordinate: ['40.820067735758684', '-73.93981529222577'],
      },
      {
        text: '11209 Koelpin Mission, Massapequa, NY 11226',
        coordinate: ['40.69572890173205', '-73.9970705051839'],
      },
      {
        text: '11024 Gerald Pike, Brooklyn, NY 11160',
        coordinate: ['40.58348466152282', '-73.93320807895984'],
      },
    ],
  },
  {
    id: getObjectId('customer_191'),
    firstName: 'Rolando',
    lastName: 'Pfannerstill',
    fullName: 'Rolando Pfannerstill',
    gender: 'Male',
    gsm: '(257) 296-9009',
    createdAt: '2024-06-29T13:43:54.711Z',
    isActive: false,
    avatar: [
      {
        name: '94d0dd1f-ed8c-47e2-8b71-32d11e001c1e',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '4b9deda8-5871-41ac-bca7-9161953bbdfd',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/420.jpg',
      },
    ],
    addresses: [
      {
        text: '11918 Becker Fort, Massapequa, NY 11466',
        coordinate: ['40.69980932047403', '-73.98458488957945'],
      },
      {
        text: '11044 Ezekiel Lodge, Brooklyn, NY 11912',
        coordinate: ['40.66138138796998', '-73.88034206938977'],
      },
      {
        text: '11958 Hintz Light, Massapequa, NY 11935',
        coordinate: ['40.875917577275104', '-73.82848174189849'],
      },
    ],
  },
  {
    id: getObjectId('customer_192'),
    firstName: 'Max',
    lastName: 'Bahringer',
    fullName: 'Max Bahringer',
    gender: 'Female',
    gsm: '(944) 817-4104',
    createdAt: '2024-07-06T00:07:12.811Z',
    isActive: true,
    avatar: [
      {
        name: '85a86e66-6bc9-432b-8196-114dbad3f96a',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '484a2826-c102-44c7-a311-fabdca22ce1b',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/533.jpg',
      },
    ],
    addresses: [
      {
        text: '11203 Pfannerstill Stravenue, Lindenhurst, NY 11362',
        coordinate: ['40.81887624266896', '-73.93779180668098'],
      },
      {
        text: '11509 Donna Canyon, Brooklyn, NY 11024',
        coordinate: ['40.85330068757448', '-73.93352262256185'],
      },
      {
        text: '11947 Ernser Ferry, Lindenhurst, NY 11234',
        coordinate: ['40.750136329510546', '-73.88507636312373'],
      },
    ],
  },
  {
    id: getObjectId('customer_193'),
    firstName: 'Margaretta',
    lastName: 'Lesch',
    fullName: 'Margaretta Lesch',
    gender: 'Female',
    gsm: '(334) 013-8989',
    createdAt: '2024-07-01T10:58:19.481Z',
    isActive: false,
    avatar: [
      {
        name: 'a8ebd12a-550c-4f76-8676-b18614dc3006',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'cc464dc7-635c-43d4-a4c5-0a934f87f2b8',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/271.jpg',
      },
    ],
    addresses: [
      {
        text: '11451 Beahan Hill, Massapequa, NY 11967',
        coordinate: ['40.820067735758684', '-73.93981529222577'],
      },
      {
        text: '11418 Alena Branch, Massapequa, NY 11197',
        coordinate: ['40.7831303248025', '-73.96435879895469'],
      },
      {
        text: '11195 Lysanne Estates, Brooklyn, NY 11779',
        coordinate: ['40.88524705779494', '-73.84462210652717'],
      },
    ],
  },
  {
    id: getObjectId('customer_194'),
    firstName: 'Joany',
    lastName: 'Hyatt',
    fullName: 'Joany Hyatt',
    gender: 'Female',
    gsm: '(594) 040-6325',
    createdAt: '2024-06-10T13:28:39.269Z',
    isActive: false,
    avatar: [
      {
        name: '792c6bdb-2761-4c74-8b33-dc6f5be83e87',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'fd7d390d-c005-484e-ab1d-898644d0f014',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/925.jpg',
      },
    ],
    addresses: [
      {
        text: '11270 Littel Drive, Lindenhurst, NY 11968',
        coordinate: ['40.689013432473764', '-73.91000786387228'],
      },
      {
        text: '11027 Cruickshank Village, Massapequa, NY 11947',
        coordinate: ['40.63550895730017', '-73.91944128289579'],
      },
      {
        text: '11085 Lenora Crossroad, Massapequa, NY 11054',
        coordinate: ['40.6717882500396', '-73.8952881573647'],
      },
    ],
  },
  {
    id: getObjectId('customer_195'),
    firstName: 'Clifford',
    lastName: 'Sanford',
    fullName: 'Clifford Sanford',
    gender: 'Male',
    gsm: '(618) 397-8065',
    createdAt: '2024-06-15T02:36:05.072Z',
    isActive: false,
    avatar: [
      {
        name: '1a56df14-3784-494f-ae59-8d287e738f99',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '0d890497-ffae-4d96-9977-ce7ad715a3e6',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1190.jpg',
      },
    ],
    addresses: [
      {
        text: '11108 Bauch Trail, Massapequa, NY 11355',
        coordinate: ['40.81991419971737', '-73.84577566721931'],
      },
      {
        text: '11867 Kling Coves, Brooklyn, NY 11655',
        coordinate: ['40.72425809826063', '-74.0076193098343'],
      },
      {
        text: '11426 Durgan Neck, Lindenhurst, NY 11404',
        coordinate: ['40.70361562231717', '-73.99338696768561'],
      },
    ],
  },
  {
    id: getObjectId('customer_196'),
    firstName: 'Della',
    lastName: 'Haley',
    fullName: 'Della Haley',
    gender: 'Male',
    gsm: '(647) 481-5360',
    createdAt: '2024-07-05T15:08:15.297Z',
    isActive: false,
    avatar: [
      {
        name: '804fb0b6-2468-493a-85d1-4544f3771017',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '8d4e03d3-631a-42e7-971c-726d92301514',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1213.jpg',
      },
    ],
    addresses: [
      {
        text: '11203 Pfannerstill Stravenue, Lindenhurst, NY 11362',
        coordinate: ['40.81887624266896', '-73.93779180668098'],
      },
      {
        text: '11384 Waelchi Rapid, Massapequa, NY 11796',
        coordinate: ['40.84590139880644', '-73.8928291967851'],
      },
      {
        text: '11359 Weissnat Shore, Lindenhurst, NY 11530',
        coordinate: ['40.7318003523917', '-73.81115496631985'],
      },
    ],
  },
  {
    id: getObjectId('customer_197'),
    firstName: 'Austin',
    lastName: 'Luettgen',
    fullName: 'Austin Luettgen',
    gender: 'Female',
    gsm: '(521) 165-8335',
    createdAt: '2024-06-25T20:05:05.759Z',
    isActive: true,
    avatar: [
      {
        name: '10a757c4-2626-4f2d-b09b-2bb9cc61166a',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '18fd58fe-9d2c-4f31-b4e7-2177232742be',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/18.jpg',
      },
    ],
    addresses: [
      {
        text: '11693 Hartmann Park, Brooklyn, NY 11251',
        coordinate: ['40.705101590541354', '-73.98948018281791'],
      },
      {
        text: '11647 Khalil Freeway, Massapequa, NY 11799',
        coordinate: ['40.73552798165039', '-73.99701720039775'],
      },
      {
        text: '11947 Ernser Ferry, Lindenhurst, NY 11234',
        coordinate: ['40.750136329510546', '-73.88507636312373'],
      },
    ],
  },
  {
    id: getObjectId('customer_198'),
    firstName: 'Letitia',
    lastName: 'Cummings',
    fullName: 'Letitia Cummings',
    gender: 'Male',
    gsm: '(526) 306-0893',
    createdAt: '2024-06-23T19:56:48.647Z',
    isActive: false,
    avatar: [
      {
        name: '8c670b31-1dc4-431a-8f73-f0ee8428fc2a',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '0c753f06-b34e-4a00-9b56-032305ddad5f',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/611.jpg',
      },
    ],
    addresses: [
      {
        text: '11108 Bauch Trail, Massapequa, NY 11355',
        coordinate: ['40.81991419971737', '-73.84577566721931'],
      },
      {
        text: '11456 Federico Freeway, Lindenhurst, NY 11390',
        coordinate: ['40.73636731561727', '-73.87880380035317'],
      },
      {
        text: '11606 Mariana Keys, Lindenhurst, NY 11071',
        coordinate: ['40.60227925020982', '-73.91362606675423'],
      },
    ],
  },
  {
    id: getObjectId('customer_199'),
    firstName: 'Domingo',
    lastName: 'Osinski',
    fullName: 'Domingo Osinski',
    gender: 'Female',
    gsm: '(422) 363-3513',
    createdAt: '2024-07-01T11:28:33.912Z',
    isActive: false,
    avatar: [
      {
        name: '78a4c96a-b42e-4ae6-906d-1f180a6a71b0',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'ec2627c3-a056-45be-87b1-bcdaa4708715',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/547.jpg',
      },
    ],
    addresses: [
      {
        text: '11730 Geovanni Haven, Lindenhurst, NY 11532',
        coordinate: ['40.88804885054674', '-73.8648764779807'],
      },
      {
        text: '11675 Bashirian Views, Massapequa, NY 11729',
        coordinate: ['40.65381263231815', '-73.93397585955978'],
      },
      {
        text: '11451 Beahan Hill, Massapequa, NY 11967',
        coordinate: ['40.820067735758684', '-73.93981529222577'],
      },
    ],
  },
  {
    id: getObjectId('customer_200'),
    firstName: 'Margaretta',
    lastName: 'Glover',
    fullName: 'Margaretta Glover',
    gender: 'Male',
    gsm: '(316) 708-0665',
    createdAt: '2024-06-24T04:37:36.703Z',
    isActive: true,
    avatar: [
      {
        name: 'c0e7e16d-2b55-41b9-8be1-129e28539a10',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '6f6cf543-4034-4067-b9d2-2249ced360fe',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/396.jpg',
      },
    ],
    addresses: [
      {
        text: '11335 Greyson Mission, Lindenhurst, NY 11507',
        coordinate: ['40.89110181872506', '-73.8938991544214'],
      },
      {
        text: '11647 Khalil Freeway, Massapequa, NY 11799',
        coordinate: ['40.73552798165039', '-73.99701720039775'],
      },
      {
        text: '11961 Wilfred Terrace, Brooklyn, NY 11580',
        coordinate: ['40.675225426976645', '-73.91483721590403'],
      },
    ],
  },
  {
    id: getObjectId('customer_201'),
    firstName: 'Neoma',
    lastName: 'Kessler',
    fullName: 'Neoma Kessler',
    gender: 'Female',
    gsm: '(186) 489-5785',
    createdAt: '2024-06-26T03:05:16.166Z',
    isActive: false,
    avatar: [
      {
        name: 'f7e6a953-8084-42a5-9c0b-589e081dab23',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'bf443270-60a3-4667-9c36-8c8dfd795b1e',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/938.jpg',
      },
    ],
    addresses: [
      {
        text: '11107 Hickle Ranch, Lindenhurst, NY 11515',
        coordinate: ['40.61088151832268', '-74.08690487977938'],
      },
      {
        text: "11846 O'Hara Rapid, Brooklyn, NY 11231",
        coordinate: ['40.87355454025907', '-73.92984534052623'],
      },
      {
        text: '11037 Dannie Ridges, Massapequa, NY 11151',
        coordinate: ['40.786868905289985', '-73.91380687271686'],
      },
    ],
  },
  {
    id: getObjectId('customer_202'),
    firstName: 'Jaquelin',
    lastName: 'Hirthe',
    fullName: 'Jaquelin Hirthe',
    gender: 'Male',
    gsm: '(815) 739-2661',
    createdAt: '2024-06-25T19:33:00.977Z',
    isActive: true,
    avatar: [
      {
        name: 'd0d504ca-fd12-4fe9-8712-a07276a6ee46',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '9578f7b1-ab3d-4e59-abc4-a1c226e394f5',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/358.jpg',
      },
    ],
    addresses: [
      {
        text: '11082 Davonte Loop, Brooklyn, NY 11055',
        coordinate: ['40.698260804649976', '-73.91788218792928'],
      },
      {
        text: '11186 Nolan Crest, Lindenhurst, NY 11296',
        coordinate: ['40.59649847049655', '-74.18222476116168'],
      },
      {
        text: '11359 Weissnat Shore, Lindenhurst, NY 11530',
        coordinate: ['40.7318003523917', '-73.81115496631985'],
      },
    ],
  },
  {
    id: getObjectId('customer_203'),
    firstName: 'Rae',
    lastName: 'Steuber',
    fullName: 'Rae Steuber',
    gender: 'Male',
    gsm: '(518) 796-2595',
    createdAt: '2024-06-15T17:53:26.728Z',
    isActive: true,
    avatar: [
      {
        name: '97a56a2c-3c03-42ac-ba87-4a5afae9f767',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'ac6c96a2-ea00-40ce-abbe-89b83a5e1ee7',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/405.jpg',
      },
    ],
    addresses: [
      {
        text: '11293 Waelchi Path, Lindenhurst, NY 11005',
        coordinate: ['40.50330485234582', '-74.2344363479454'],
      },
      {
        text: '11958 Hintz Light, Massapequa, NY 11935',
        coordinate: ['40.875917577275104', '-73.82848174189849'],
      },
      {
        text: '11774 Koss Mission, Brooklyn, NY 11540',
        coordinate: ['40.73032437088068', '-73.99512821335122'],
      },
    ],
  },
  {
    id: getObjectId('customer_204'),
    firstName: 'Gregg',
    lastName: 'Crona',
    fullName: 'Gregg Crona',
    gender: 'Male',
    gsm: '(324) 810-1712',
    createdAt: '2024-07-02T12:14:56.159Z',
    isActive: false,
    avatar: [
      {
        name: '622cf46e-0f5e-4c28-8c57-efdfe1f641b1',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '897c715d-c840-444f-9922-1a4b9e6fe735',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/205.jpg',
      },
    ],
    addresses: [
      {
        text: '11451 Beahan Hill, Massapequa, NY 11967',
        coordinate: ['40.820067735758684', '-73.93981529222577'],
      },
      {
        text: '11418 Alena Branch, Massapequa, NY 11197',
        coordinate: ['40.7831303248025', '-73.96435879895469'],
      },
      {
        text: '11249 Ashleigh Points, Massapequa, NY 11750',
        coordinate: ['40.70464764330371', '-73.95245354438998'],
      },
    ],
  },
  {
    id: getObjectId('customer_205'),
    firstName: 'Garland',
    lastName: 'Hartmann',
    fullName: 'Garland Hartmann',
    gender: 'Female',
    gsm: '(213) 540-5376',
    createdAt: '2024-06-25T20:31:32.184Z',
    isActive: true,
    avatar: [
      {
        name: '9447a058-d836-45b9-82c8-3d60d90f0ad2',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '394fd912-069a-4549-89f5-749f0612554f',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/898.jpg',
      },
    ],
    addresses: [
      {
        text: '11077 Gerardo Mountain, Lindenhurst, NY 11372',
        coordinate: ['40.70883839875818', '-73.93976069363174'],
      },
      {
        text: '11085 Oswaldo Harbor, Brooklyn, NY 11546',
        coordinate: ['40.85125313575545', '-73.91436091292005'],
      },
      {
        text: '11879 Larry Drives, Massapequa, NY 11339',
        coordinate: ['40.66416374763622', '-73.90697071032429'],
      },
    ],
  },
  {
    id: getObjectId('customer_206'),
    firstName: 'Allen',
    lastName: 'Ziemann',
    fullName: 'Allen Ziemann',
    gender: 'Female',
    gsm: '(270) 502-2888',
    createdAt: '2024-07-04T07:42:49.022Z',
    isActive: false,
    avatar: [
      {
        name: 'daab5fe4-847d-4358-a92b-b9cd64d1370d',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'aef36bdc-4ac9-4fcc-93e1-8b2d3fb1820e',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/146.jpg',
      },
    ],
    addresses: [
      {
        text: '11812 Uriah Islands, Massapequa, NY 11134',
        coordinate: ['40.76936591609023', '-73.97395465473141'],
      },
      {
        text: '11107 Hickle Ranch, Lindenhurst, NY 11515',
        coordinate: ['40.61088151832268', '-74.08690487977938'],
      },
      {
        text: '11249 Ashleigh Points, Massapequa, NY 11750',
        coordinate: ['40.70464764330371', '-73.95245354438998'],
      },
    ],
  },
  {
    id: getObjectId('customer_207'),
    firstName: 'Godfrey',
    lastName: 'Erdman',
    fullName: 'Godfrey Erdman',
    gender: 'Male',
    gsm: '(434) 848-6827',
    createdAt: '2024-06-13T08:02:54.451Z',
    isActive: true,
    avatar: [
      {
        name: '90fa6c3c-f116-4b7c-b11a-8abc77ad3f29',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'b4a0540d-7524-4f59-8e0b-e2d4e7eea63b',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/41.jpg',
      },
    ],
    addresses: [
      {
        text: '11318 Sipes Harbors, Lindenhurst, NY 11120',
        coordinate: ['40.70101970449942', '-73.98238357202935'],
      },
      {
        text: '11947 Ernser Ferry, Lindenhurst, NY 11234',
        coordinate: ['40.750136329510546', '-73.88507636312373'],
      },
      {
        text: '11701 Rusty Lights, Massapequa, NY 11840',
        coordinate: ['40.74921391148173', '-73.88745667351822'],
      },
    ],
  },
  {
    id: getObjectId('customer_208'),
    firstName: 'Gianni',
    lastName: 'Shanahan',
    fullName: 'Gianni Shanahan',
    gender: 'Male',
    gsm: '(243) 727-3225',
    createdAt: '2024-06-24T21:12:54.608Z',
    isActive: true,
    avatar: [
      {
        name: '99697713-a824-41ff-860c-ef9ff95c8ac5',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '31d6ab95-8630-4af1-9e32-bdb25d3ffddb',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/759.jpg',
      },
    ],
    addresses: [
      {
        text: '11085 Oswaldo Harbor, Brooklyn, NY 11546',
        coordinate: ['40.85125313575545', '-73.91436091292005'],
      },
      {
        text: '11412 Spencer Skyway, Lindenhurst, NY 11312',
        coordinate: ['40.615431898170364', '-73.92934453739576'],
      },
      {
        text: '11961 Wilfred Terrace, Brooklyn, NY 11580',
        coordinate: ['40.675225426976645', '-73.91483721590403'],
      },
    ],
  },
  {
    id: getObjectId('customer_209'),
    firstName: 'Rupert',
    lastName: 'Gerlach',
    fullName: 'Rupert Gerlach',
    gender: 'Female',
    gsm: '(251) 182-4623',
    createdAt: '2024-07-01T03:18:39.886Z',
    isActive: true,
    avatar: [
      {
        name: '6b032572-89b2-4fbd-8c6a-d726d78350c5',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '5c18b1eb-f065-4830-87e4-bd5b8e22aaa8',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1118.jpg',
      },
    ],
    addresses: [
      {
        text: '11435 Theodore Grove, Lindenhurst, NY 11899',
        coordinate: ['40.58985851813696', '-73.98005929565423'],
      },
      {
        text: '11384 Waelchi Rapid, Massapequa, NY 11796',
        coordinate: ['40.84590139880644', '-73.8928291967851'],
      },
      {
        text: '11115 Else Valleys, Brooklyn, NY 11770',
        coordinate: ['40.674384416687445', '-73.88542328715191'],
      },
    ],
  },
  {
    id: getObjectId('customer_210'),
    firstName: 'Izabella',
    lastName: 'Halvorson',
    fullName: 'Izabella Halvorson',
    gender: 'Male',
    gsm: '(786) 959-9726',
    createdAt: '2024-06-28T17:35:26.229Z',
    isActive: true,
    avatar: [
      {
        name: '34582086-c50c-4654-a1bb-0e0b78ea72f0',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '4e3aa98c-3fcb-4a1c-b159-bdc43dda9220',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/545.jpg',
      },
    ],
    addresses: [
      {
        text: '11230 Zander Curve, Lindenhurst, NY 11912',
        coordinate: ['40.87080816088552', '-73.83213503852586'],
      },
      {
        text: '11451 Beahan Hill, Massapequa, NY 11967',
        coordinate: ['40.820067735758684', '-73.93981529222577'],
      },
      {
        text: '11797 Bart Valley, Lindenhurst, NY 11117',
        coordinate: ['40.669777801118656', '-73.92802454968135'],
      },
    ],
  },
  {
    id: getObjectId('customer_211'),
    firstName: 'Kaylee',
    lastName: 'Kohler',
    fullName: 'Kaylee Kohler',
    gender: 'Male',
    gsm: '(033) 104-3706',
    createdAt: '2024-06-29T18:12:42.312Z',
    isActive: false,
    avatar: [
      {
        name: '64af8262-102f-446a-937b-5a4b2fa08c3c',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '57f348f2-c9e8-4353-bdb1-0648393a819d',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/555.jpg',
      },
    ],
    addresses: [
      {
        text: '11735 Kailee Shoals, Brooklyn, NY 11393',
        coordinate: ['40.84785614227491', '-73.90130203986932'],
      },
      {
        text: '11598 Curt Shoals, Lindenhurst, NY 11514',
        coordinate: ['40.802597877430756', '-73.93849763295711'],
      },
      {
        text: '11426 Denesik Courts, Brooklyn, NY 11954',
        coordinate: ['40.622273685700655', '-74.07883292358069'],
      },
    ],
  },
  {
    id: getObjectId('customer_212'),
    firstName: 'Adriel',
    lastName: 'Ratke',
    fullName: 'Adriel Ratke',
    gender: 'Male',
    gsm: '(832) 498-4662',
    createdAt: '2024-06-27T12:53:37.070Z',
    isActive: false,
    avatar: [
      {
        name: 'bf8b7c97-19ae-45dd-bb83-3d3074db889c',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'c89d4157-5362-4390-81d6-171de1e25608',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/699.jpg',
      },
    ],
    addresses: [
      {
        text: '11772 Toy Row, Lindenhurst, NY 11384',
        coordinate: ['40.811873397132395', '-73.94826902574404'],
      },
      {
        text: '11097 Naomie Mountain, Brooklyn, NY 11492',
        coordinate: ['40.67369096200763', '-73.92525141581397'],
      },
      {
        text: '11513 Predovic Ville, Massapequa, NY 11323',
        coordinate: ['40.67469479700506', '-73.86371925992556'],
      },
    ],
  },
  {
    id: getObjectId('customer_213'),
    firstName: 'Gage',
    lastName: 'DuBuque',
    fullName: 'Gage DuBuque',
    gender: 'Male',
    gsm: '(435) 748-2360',
    createdAt: '2024-06-10T04:47:11.738Z',
    isActive: false,
    avatar: [
      {
        name: '1ebe15a2-2753-43ba-8a51-360ca0256105',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '41067b1a-dcbb-4c24-a976-179e83e00e4c',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/502.jpg',
      },
    ],
    addresses: [
      {
        text: '11864 Leonora Stream, Brooklyn, NY 11957',
        coordinate: ['40.832201142470986', '-73.9018035427564'],
      },
      {
        text: '11489 Schoen Throughway, Lindenhurst, NY 11849',
        coordinate: ['40.69130748551876', '-73.97542925623603'],
      },
      {
        text: '11816 Althea Loop, Brooklyn, NY 11851',
        coordinate: ['40.87000167958251', '-73.82689736629037'],
      },
    ],
  },
  {
    id: getObjectId('customer_214'),
    firstName: 'Vicenta',
    lastName: 'Cummerata',
    fullName: 'Vicenta Cummerata',
    gender: 'Female',
    gsm: '(968) 350-7510',
    createdAt: '2024-06-17T15:36:02.389Z',
    isActive: false,
    avatar: [
      {
        name: '450d99c9-fb49-4a92-a381-973b72e950de',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '2849ab88-1ecf-4402-b1ea-523ea426b2f9',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1048.jpg',
      },
    ],
    addresses: [
      {
        text: '11781 Maiya Valley, Brooklyn, NY 11844',
        coordinate: ['40.817646237824896', '-73.95265264832331'],
      },
      {
        text: '11867 Kling Coves, Brooklyn, NY 11655',
        coordinate: ['40.72425809826063', '-74.0076193098343'],
      },
      {
        text: "11683 D'Amore Summit, Massapequa, NY 11567",
        coordinate: ['40.8048782862543', '-73.94804034964574'],
      },
    ],
  },
  {
    id: getObjectId('customer_215'),
    firstName: 'Joy',
    lastName: 'Gaylord',
    fullName: 'Joy Gaylord',
    gender: 'Female',
    gsm: '(013) 262-7038',
    createdAt: '2024-06-30T05:43:51.784Z',
    isActive: true,
    avatar: [
      {
        name: '7c4f4796-c2df-471b-af02-cb863b77d113',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'cd1d5343-9db4-4b37-93c2-31ab44d0d6d6',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/55.jpg',
      },
    ],
    addresses: [
      {
        text: '11727 Schaefer Inlet, Lindenhurst, NY 11036',
        coordinate: ['40.68715261156324', '-74.00526659632791'],
      },
      {
        text: '11044 Ezekiel Lodge, Brooklyn, NY 11912',
        coordinate: ['40.66138138796998', '-73.88034206938977'],
      },
      {
        text: '11715 Eloisa Summit, Lindenhurst, NY 11203',
        coordinate: ['40.813987220087206', '-73.9460629373589'],
      },
    ],
  },
  {
    id: getObjectId('customer_216'),
    firstName: 'Marcia',
    lastName: 'Mraz',
    fullName: 'Marcia Mraz',
    gender: 'Male',
    gsm: '(405) 559-8526',
    createdAt: '2024-06-12T15:31:00.922Z',
    isActive: false,
    avatar: [
      {
        name: '5a84018f-ce8e-4cb8-a369-6e643b824191',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '78fefd95-7583-42df-a5b1-c620a8a9f0cd',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/325.jpg',
      },
    ],
    addresses: [
      {
        text: '11166 Cormier Plaza, Lindenhurst, NY 11278',
        coordinate: ['40.86255321747302', '-73.8648318412901'],
      },
      {
        text: '11624 Jairo Road, Lindenhurst, NY 11160',
        coordinate: ['40.823376279414674', '-73.93960148270892'],
      },
      {
        text: '11927 Lemke Forges, Brooklyn, NY 11658',
        coordinate: ['40.730915473354905', '-73.95608227774139'],
      },
    ],
  },
  {
    id: getObjectId('customer_217'),
    firstName: 'Destany',
    lastName: 'Bauch',
    fullName: 'Destany Bauch',
    gender: 'Male',
    gsm: '(695) 068-9438',
    createdAt: '2024-06-28T13:11:02.347Z',
    isActive: true,
    avatar: [
      {
        name: '4993bfa7-3345-427d-bc4f-231f3e3ed3f6',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'c43abc43-4e43-4580-ae1f-44e17ca8b4ad',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/798.jpg',
      },
    ],
    addresses: [
      {
        text: '11045 Johnston Key, Lindenhurst, NY 11539',
        coordinate: ['40.84398642270739', '-73.83864402262044'],
      },
      {
        text: '11914 Conn Valleys, Brooklyn, NY 11530',
        coordinate: ['40.86840746742311', '-73.87019173405666'],
      },
      {
        text: '11878 Pagac Trail, Lindenhurst, NY 11876',
        coordinate: ['40.71114281327269', '-74.01648182914843'],
      },
    ],
  },
  {
    id: getObjectId('customer_218'),
    firstName: 'Andre',
    lastName: 'Wehner',
    fullName: 'Andre Wehner',
    gender: 'Male',
    gsm: '(748) 784-5776',
    createdAt: '2024-07-04T16:19:31.223Z',
    isActive: true,
    avatar: [
      {
        name: 'e3f68325-93ca-457b-80c9-4b90c8fdfe59',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'f28c0ac4-6831-4e45-ba2f-f909a944cf06',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/493.jpg',
      },
    ],
    addresses: [
      {
        text: '11898 Chelsea Plain, Lindenhurst, NY 11735',
        coordinate: ['40.875525570218045', '-73.86179079437676'],
      },
      {
        text: '11486 Cartwright Fords, Lindenhurst, NY 11597',
        coordinate: ['40.833969332695936', '-73.94231035241494'],
      },
      {
        text: '11143 Ortiz Mill, Brooklyn, NY 11207',
        coordinate: ['40.6645385558063', '-73.90402732990448'],
      },
    ],
  },
  {
    id: getObjectId('customer_219'),
    firstName: 'Beth',
    lastName: 'Hamill',
    fullName: 'Beth Hamill',
    gender: 'Male',
    gsm: '(485) 097-3314',
    createdAt: '2024-06-14T12:25:57.889Z',
    isActive: true,
    avatar: [
      {
        name: '69f5b8b7-48a0-47d1-9eb2-7fcc2f3ad60d',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '758d8200-e3aa-41d2-9bbb-f3ed707efb6d',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1056.jpg',
      },
    ],
    addresses: [
      {
        text: '11923 Legros Divide, Brooklyn, NY 11072',
        coordinate: ['40.75081540048207', '-73.84366030192892'],
      },
      {
        text: '11148 Jon Island, Lindenhurst, NY 11812',
        coordinate: ['40.86514358177516', '-73.88437348485921'],
      },
      {
        text: '11097 Naomie Mountain, Brooklyn, NY 11492',
        coordinate: ['40.67369096200763', '-73.92525141581397'],
      },
    ],
  },
  {
    id: getObjectId('customer_220'),
    firstName: 'Vern',
    lastName: 'Nikolaus',
    fullName: 'Vern Nikolaus',
    gender: 'Male',
    gsm: '(104) 374-8686',
    createdAt: '2024-06-26T15:46:21.574Z',
    isActive: true,
    avatar: [
      {
        name: '88634a4c-0f20-4330-a402-f143d627dbe0',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '70187b30-f838-4289-a450-b9277c6b4156',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/425.jpg',
      },
    ],
    addresses: [
      {
        text: '11367 Ansley Stravenue, Massapequa, NY 11350',
        coordinate: ['40.81730470420681', '-73.94741458340314'],
      },
      {
        text: '11928 Zemlak Terrace, Brooklyn, NY 11083',
        coordinate: ['40.5861219668654', '-73.96563797373686'],
      },
      {
        text: '11947 Ernser Ferry, Lindenhurst, NY 11234',
        coordinate: ['40.750136329510546', '-73.88507636312373'],
      },
    ],
  },
  {
    id: getObjectId('customer_221'),
    firstName: 'Kennedy',
    lastName: 'Wisoky',
    fullName: 'Kennedy Wisoky',
    gender: 'Male',
    gsm: '(840) 211-6727',
    createdAt: '2024-07-02T16:01:53.100Z',
    isActive: true,
    avatar: [
      {
        name: '2c91d6e8-2dc8-473e-88d3-9b0a6e508071',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '79f6ce08-84e2-43f2-8a7a-5e3e06b7d310',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/271.jpg',
      },
    ],
    addresses: [
      {
        text: '11451 Beahan Hill, Massapequa, NY 11967',
        coordinate: ['40.820067735758684', '-73.93981529222577'],
      },
      {
        text: '11512 Jenkins Lights, Massapequa, NY 11737',
        coordinate: ['40.71003074009839', '-73.94229615777373'],
      },
      {
        text: '11263 Osinski Forks, Lindenhurst, NY 11884',
        coordinate: ['40.86213206940792', '-73.82618292669638'],
      },
    ],
  },
  {
    id: getObjectId('customer_222'),
    firstName: 'Prudence',
    lastName: 'Ernser',
    fullName: 'Prudence Ernser',
    gender: 'Female',
    gsm: '(010) 034-9304',
    createdAt: '2024-06-26T20:12:28.967Z',
    isActive: true,
    avatar: [
      {
        name: 'f69f3ee1-0652-45fa-9d61-9e8aac7668b1',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '6813f951-4a2e-4ebd-a892-128f8403c5f6',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1183.jpg',
      },
    ],
    addresses: [
      {
        text: '11772 Toy Row, Lindenhurst, NY 11384',
        coordinate: ['40.811873397132395', '-73.94826902574404'],
      },
      {
        text: '11439 Aglae Radial, Brooklyn, NY 11205',
        coordinate: ['40.83247202632326', '-73.91406031894931'],
      },
      {
        text: '11799 Mayert Plaza, Lindenhurst, NY 11934',
        coordinate: ['40.65389146392323', '-73.78928677609493'],
      },
    ],
  },
  {
    id: getObjectId('customer_223'),
    firstName: 'Evan',
    lastName: 'Conn',
    fullName: 'Evan Conn',
    gender: 'Male',
    gsm: '(571) 388-2624',
    createdAt: '2024-06-27T06:00:10.336Z',
    isActive: true,
    avatar: [
      {
        name: '0af2ad1c-5afd-4de8-977c-ea2674311266',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'e2415963-b8e4-41b2-b35f-df36143f04b4',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/512.jpg',
      },
    ],
    addresses: [
      {
        text: '11174 Wilkinson Locks, Lindenhurst, NY 11527',
        coordinate: ['40.696832261046126', '-73.94037102754282'],
      },
      {
        text: '11598 Curt Shoals, Lindenhurst, NY 11514',
        coordinate: ['40.802597877430756', '-73.93849763295711'],
      },
      {
        text: '11862 Ward Glen, Massapequa, NY 11885',
        coordinate: ['40.87823216032764', '-73.91814523246967'],
      },
    ],
  },
  {
    id: getObjectId('customer_224'),
    firstName: 'Ivah',
    lastName: 'Schneider',
    fullName: 'Ivah Schneider',
    gender: 'Male',
    gsm: '(581) 455-6232',
    createdAt: '2024-07-05T11:17:21.788Z',
    isActive: false,
    avatar: [
      {
        name: '98eeaec9-e61e-4d85-93a6-ac6489d15158',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'a6b8c6ee-e083-4e12-ba36-ed4a5fec5093',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/47.jpg',
      },
    ],
    addresses: [
      {
        text: '11663 Schmeler Rapids, Lindenhurst, NY 11976',
        coordinate: ['40.83095813827255', '-73.91366352822456'],
      },
      {
        text: '11023 Reilly Freeway, Brooklyn, NY 11304',
        coordinate: ['40.708836427424856', '-73.95736505455008'],
      },
      {
        text: '11293 Jacey Rapids, Lindenhurst, NY 11158',
        coordinate: ['40.8148615016701', '-73.93975836591103'],
      },
    ],
  },
  {
    id: getObjectId('customer_225'),
    firstName: 'Melissa',
    lastName: 'Paucek',
    fullName: 'Melissa Paucek',
    gender: 'Male',
    gsm: '(930) 241-5854',
    createdAt: '2024-06-21T10:20:39.747Z',
    isActive: true,
    avatar: [
      {
        name: '1215d09b-3285-4e29-a2fe-aa28ff760cab',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'b5173d84-2f14-4947-8ac3-1fa81775c618',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/572.jpg',
      },
    ],
    addresses: [
      {
        text: '11471 Ransom Parkway, Massapequa, NY 11941',
        coordinate: ['40.70408980199366', '-73.9930806087735'],
      },
      {
        text: '11668 Hane Common, Brooklyn, NY 11295',
        coordinate: ['40.79714029516044', '-73.93690255000283'],
      },
      {
        text: '11186 Nolan Crest, Lindenhurst, NY 11296',
        coordinate: ['40.59649847049655', '-74.18222476116168'],
      },
    ],
  },
  {
    id: getObjectId('customer_226'),
    firstName: 'Shania',
    lastName: 'Jacobson',
    fullName: 'Shania Jacobson',
    gender: 'Female',
    gsm: '(823) 971-2130',
    createdAt: '2024-06-12T08:40:13.460Z',
    isActive: true,
    avatar: [
      {
        name: '5f56953c-f830-4fe9-a791-7fa81253adfd',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'f98ab2bb-f3d8-4b76-8c45-be9776dc17f7',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/337.jpg',
      },
    ],
    addresses: [
      {
        text: '11055 Schuster Gardens, Massapequa, NY 11732',
        coordinate: ['40.6365034810973', '-73.98578000769199'],
      },
      {
        text: '11045 Johnston Key, Lindenhurst, NY 11539',
        coordinate: ['40.84398642270739', '-73.83864402262044'],
      },
      {
        text: '11922 Halvorson Terrace, Brooklyn, NY 11104',
        coordinate: ['40.863466423461276', '-73.88157667321018'],
      },
    ],
  },
  {
    id: getObjectId('customer_227'),
    firstName: 'Horacio',
    lastName: 'Tromp',
    fullName: 'Horacio Tromp',
    gender: 'Female',
    gsm: '(778) 324-7273',
    createdAt: '2024-06-28T19:21:49.857Z',
    isActive: false,
    avatar: [
      {
        name: 'b27aee2f-9386-4f79-ae43-22f3dc99095d',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '5b2269fe-e6f2-4f00-91f7-ac43cbd6e5ef',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1148.jpg',
      },
    ],
    addresses: [
      {
        text: '11781 Maiya Valley, Brooklyn, NY 11844',
        coordinate: ['40.817646237824896', '-73.95265264832331'],
      },
      {
        text: '11228 Stiedemann Valley, Brooklyn, NY 11949',
        coordinate: ['40.81821649698436', '-73.86826310670972'],
      },
      {
        text: '11248 Kuhlman Crossroad, Massapequa, NY 11810',
        coordinate: ['40.64939023071356', '-73.95553621385756'],
      },
    ],
  },
  {
    id: getObjectId('customer_228'),
    firstName: 'Chelsea',
    lastName: 'Russel',
    fullName: 'Chelsea Russel',
    gender: 'Female',
    gsm: '(961) 289-8746',
    createdAt: '2024-06-21T03:46:26.766Z',
    isActive: true,
    avatar: [
      {
        name: 'e515675f-38db-4ea1-8f37-4717a9eb6c64',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '2ee24d73-eff7-4d9b-8ff7-46a255a5def7',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1053.jpg',
      },
    ],
    addresses: [
      {
        text: '11618 Hoeger Lights, Massapequa, NY 11449',
        coordinate: ['40.627049675070175', '-73.98253459810051'],
      },
      {
        text: '11246 Heathcote Crescent, Brooklyn, NY 11164',
        coordinate: ['40.70264295688686', '-73.85781194108168'],
      },
      {
        text: '11195 Lysanne Estates, Brooklyn, NY 11779',
        coordinate: ['40.88524705779494', '-73.84462210652717'],
      },
    ],
  },
  {
    id: getObjectId('customer_229'),
    firstName: 'Darien',
    lastName: 'Kirlin',
    fullName: 'Darien Kirlin',
    gender: 'Female',
    gsm: '(092) 068-8470',
    createdAt: '2024-06-30T03:18:04.544Z',
    isActive: true,
    avatar: [
      {
        name: '57f87a38-9210-4a9e-8b00-ab5cdd6d0123',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '29830614-a8af-4a13-be8b-da842673a211',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/142.jpg',
      },
    ],
    addresses: [
      {
        text: '11730 Geovanni Haven, Lindenhurst, NY 11532',
        coordinate: ['40.88804885054674', '-73.8648764779807'],
      },
      {
        text: '11693 Hartmann Park, Brooklyn, NY 11251',
        coordinate: ['40.705101590541354', '-73.98948018281791'],
      },
      {
        text: '11882 Oceane Islands, Brooklyn, NY 11755',
        coordinate: ['40.711735188982935', '-73.9020610486226'],
      },
    ],
  },
  {
    id: getObjectId('customer_230'),
    firstName: 'Angelita',
    lastName: 'Paucek',
    fullName: 'Angelita Paucek',
    gender: 'Female',
    gsm: '(575) 277-2904',
    createdAt: '2024-07-05T19:48:36.236Z',
    isActive: true,
    avatar: [
      {
        name: '370be73a-aced-4962-b6f0-46d946b44ac8',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '0cfc1a93-79f0-4649-b1aa-8fcbd05a7cf0',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/867.jpg',
      },
    ],
    addresses: [
      {
        text: '11663 Gusikowski Extensions, Massapequa, NY 11108',
        coordinate: ['40.705174543564866', '-74.01519738145755'],
      },
      {
        text: '11031 Feil Crossing, Lindenhurst, NY 11251',
        coordinate: ['40.83451001107047', '-73.91770528927904'],
      },
      {
        text: '11245 Myrl Loop, Massapequa, NY 11390',
        coordinate: ['40.757834840940724', '-73.9538537606329'],
      },
    ],
  },
  {
    id: getObjectId('customer_231'),
    firstName: 'Marcelo',
    lastName: 'Emmerich',
    fullName: 'Marcelo Emmerich',
    gender: 'Male',
    gsm: '(013) 031-4546',
    createdAt: '2024-06-23T20:39:02.637Z',
    isActive: false,
    avatar: [
      {
        name: '0272ae79-3bc7-42ee-81c9-cb63b9094370',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '6deb1077-c02b-447d-af31-336976184856',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/157.jpg',
      },
    ],
    addresses: [
      {
        text: '11859 Abbie Station, Brooklyn, NY 11161',
        coordinate: ['40.68771299502717', '-74.04721511862215'],
      },
      {
        text: '11642 Alberta Junction, Lindenhurst, NY 11370',
        coordinate: ['40.782269303154564', '-73.92799108814602'],
      },
      {
        text: '11505 Raynor Walk, Massapequa, NY 11815',
        coordinate: ['40.75598474475542', '-73.9358398855354'],
      },
    ],
  },
  {
    id: getObjectId('customer_232'),
    firstName: 'Ramon',
    lastName: 'Marquardt',
    fullName: 'Ramon Marquardt',
    gender: 'Female',
    gsm: '(524) 458-9210',
    createdAt: '2024-06-26T15:31:23.707Z',
    isActive: true,
    avatar: [
      {
        name: 'b9c666e0-e3d0-4408-8d23-3b624fdbb7ca',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '7de41282-9727-41d3-a19b-f959cab15104',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/679.jpg',
      },
    ],
    addresses: [
      {
        text: '11728 Earlene Garden, Brooklyn, NY 11259',
        coordinate: ['40.61541451352046', '-73.9512235195281'],
      },
      {
        text: '11096 Breanne Divide, Brooklyn, NY 11640',
        coordinate: ['40.718270507252825', '-73.90150746815962'],
      },
      {
        text: '11125 Strosin Curve, Lindenhurst, NY 11467',
        coordinate: ['40.732100034726514', '-73.9767183060347'],
      },
    ],
  },
  {
    id: getObjectId('customer_233'),
    firstName: 'Agustina',
    lastName: 'Kreiger',
    fullName: 'Agustina Kreiger',
    gender: 'Female',
    gsm: '(740) 456-4610',
    createdAt: '2024-07-03T18:42:12.137Z',
    isActive: false,
    avatar: [
      {
        name: '43bb6300-71e2-411b-a3c8-5408e6529814',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '506ff795-3f60-4d75-80fe-94527aeb62c1',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/101.jpg',
      },
    ],
    addresses: [
      {
        text: '11618 Hoeger Lights, Massapequa, NY 11449',
        coordinate: ['40.627049675070175', '-73.98253459810051'],
      },
      {
        text: '11607 Reinger Parkways, Brooklyn, NY 11042',
        coordinate: ['40.590737386781605', '-74.07660361955186'],
      },
      {
        text: '11907 Okuneva Ville, Massapequa, NY 11534',
        coordinate: ['40.83473164454386', '-73.87357573718195'],
      },
    ],
  },
  {
    id: getObjectId('customer_234'),
    firstName: 'Tomas',
    lastName: 'Kohler',
    fullName: 'Tomas Kohler',
    gender: 'Male',
    gsm: '(497) 929-7142',
    createdAt: '2024-06-22T20:07:53.962Z',
    isActive: false,
    avatar: [
      {
        name: 'f9e65a9e-437e-4712-98bc-80cc81d89b90',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '47b4f6a2-bd41-4a84-aef5-59ccae21e33c',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/685.jpg',
      },
    ],
    addresses: [
      {
        text: '11537 Albin Way, Massapequa, NY 11704',
        coordinate: ['40.76684204696888', '-73.93807668888226'],
      },
      {
        text: '11776 Wilderman Prairie, Lindenhurst, NY 11562',
        coordinate: ['40.66945134822127', '-73.93551047298159'],
      },
      {
        text: '11774 Koss Mission, Brooklyn, NY 11540',
        coordinate: ['40.73032437088068', '-73.99512821335122'],
      },
    ],
  },
  {
    id: getObjectId('customer_235'),
    firstName: 'Margret',
    lastName: 'Keeling',
    fullName: 'Margret Keeling',
    gender: 'Female',
    gsm: '(985) 707-6865',
    createdAt: '2024-07-07T12:29:00.212Z',
    isActive: false,
    avatar: [
      {
        name: '7be8694c-5e4a-45c4-b1f6-1ba97f8d417e',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'e0f60303-84c4-421b-b2aa-0cab675be98c',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1229.jpg',
      },
    ],
    addresses: [
      {
        text: '11427 Huel Route, Massapequa, NY 11751',
        coordinate: ['40.73210823178464', '-73.99785822334118'],
      },
      {
        text: '11898 Chelsea Plain, Lindenhurst, NY 11735',
        coordinate: ['40.875525570218045', '-73.86179079437676'],
      },
      {
        text: '11474 Dickens Lodge, Massapequa, NY 11199',
        coordinate: ['40.75587993188085', '-73.7894709790709'],
      },
    ],
  },
  {
    id: getObjectId('customer_236'),
    firstName: 'Sydni',
    lastName: 'DuBuque',
    fullName: 'Sydni DuBuque',
    gender: 'Female',
    gsm: '(445) 920-5583',
    createdAt: '2024-06-16T04:49:04.850Z',
    isActive: true,
    avatar: [
      {
        name: '6aab66aa-5b38-4b3f-b455-59c7c6741d62',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '422792d3-839a-485c-b9cb-99b084844ab5',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/608.jpg',
      },
    ],
    addresses: [
      {
        text: '11663 Gusikowski Extensions, Massapequa, NY 11108',
        coordinate: ['40.705174543564866', '-74.01519738145755'],
      },
      {
        text: '11418 Schumm Lock, Lindenhurst, NY 11340',
        coordinate: ['40.788028545449976', '-73.90529902987166'],
      },
      {
        text: '11922 Halvorson Terrace, Brooklyn, NY 11104',
        coordinate: ['40.863466423461276', '-73.88157667321018'],
      },
    ],
  },
  {
    id: getObjectId('customer_237'),
    firstName: 'Murl',
    lastName: 'Roberts',
    fullName: 'Murl Roberts',
    gender: 'Female',
    gsm: '(472) 071-9465',
    createdAt: '2024-06-12T19:31:38.984Z',
    isActive: true,
    avatar: [
      {
        name: '28a10c64-9847-4657-ba7d-b704ce76bab8',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '07725b20-4fec-41db-be06-80ad1db21103',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/743.jpg',
      },
    ],
    addresses: [
      {
        text: '11923 Legros Divide, Brooklyn, NY 11072',
        coordinate: ['40.75081540048207', '-73.84366030192892'],
      },
      {
        text: '11776 Wilderman Prairie, Lindenhurst, NY 11562',
        coordinate: ['40.66945134822127', '-73.93551047298159'],
      },
      {
        text: '11913 Veum Spring, Massapequa, NY 11303',
        coordinate: ['40.66164200865502', '-74.00754412065884'],
      },
    ],
  },
  {
    id: getObjectId('customer_238'),
    firstName: 'Hellen',
    lastName: 'Kessler',
    fullName: 'Hellen Kessler',
    gender: 'Male',
    gsm: '(753) 926-1066',
    createdAt: '2024-06-26T03:55:07.329Z',
    isActive: false,
    avatar: [
      {
        name: 'af31419c-f7d9-48f3-bd16-779cc893e22c',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'd61009d6-7663-4ef5-b8c9-54498dce13e6',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/299.jpg',
      },
    ],
    addresses: [
      {
        text: '11719 Buckridge Center, Brooklyn, NY 11760',
        coordinate: ['40.71127832019916', '-73.72859237968323'],
      },
      {
        text: '11624 Jairo Road, Lindenhurst, NY 11160',
        coordinate: ['40.823376279414674', '-73.93960148270892'],
      },
      {
        text: '11958 Hintz Light, Massapequa, NY 11935',
        coordinate: ['40.875917577275104', '-73.82848174189849'],
      },
    ],
  },
  {
    id: getObjectId('customer_239'),
    firstName: 'Harrison',
    lastName: 'Kiehn',
    fullName: 'Harrison Kiehn',
    gender: 'Male',
    gsm: '(244) 585-8794',
    createdAt: '2024-06-11T07:06:41.213Z',
    isActive: true,
    avatar: [
      {
        name: '021d857a-cbc7-497d-a9a2-dcf134454da4',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '6b82cfd7-805f-464c-a121-43e4b23df04c',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/118.jpg',
      },
    ],
    addresses: [
      {
        text: '11618 Hoeger Lights, Massapequa, NY 11449',
        coordinate: ['40.627049675070175', '-73.98253459810051'],
      },
      {
        text: '11143 Ortiz Mill, Brooklyn, NY 11207',
        coordinate: ['40.6645385558063', '-73.90402732990448'],
      },
      {
        text: '11733 Walker Cove, Massapequa, NY 11322',
        coordinate: ['40.56648613912078', '-73.87751470966245'],
      },
    ],
  },
  {
    id: getObjectId('customer_240'),
    firstName: 'Amaya',
    lastName: 'Rohan',
    fullName: 'Amaya Rohan',
    gender: 'Male',
    gsm: '(152) 256-1267',
    createdAt: '2024-06-09T19:38:02.433Z',
    isActive: true,
    avatar: [
      {
        name: 'c7bdb686-7518-496f-a0fd-0f755b61e994',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '3bb50b67-9ec8-46d9-a1cc-0f7b404726a1',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1160.jpg',
      },
    ],
    addresses: [
      {
        text: '11293 Waelchi Path, Lindenhurst, NY 11005',
        coordinate: ['40.50330485234582', '-74.2344363479454'],
      },
      {
        text: '11384 Waelchi Rapid, Massapequa, NY 11796',
        coordinate: ['40.84590139880644', '-73.8928291967851'],
      },
      {
        text: '11107 Elnora Hills, Brooklyn, NY 11824',
        coordinate: ['40.60236204486041', '-74.00232304200087'],
      },
    ],
  },
  {
    id: getObjectId('customer_241'),
    firstName: 'Neoma',
    lastName: 'Pagac',
    fullName: 'Neoma Pagac',
    gender: 'Male',
    gsm: '(569) 753-8533',
    createdAt: '2024-06-12T02:46:29.518Z',
    isActive: false,
    avatar: [
      {
        name: '4c662e40-0f79-4410-81ce-1fa6f2bf8f22',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'ba14afea-f8a5-4225-809b-a2dc80e10764',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/335.jpg',
      },
    ],
    addresses: [
      {
        text: '11148 Jon Island, Lindenhurst, NY 11812',
        coordinate: ['40.86514358177516', '-73.88437348485921'],
      },
      {
        text: '11719 Buckridge Center, Brooklyn, NY 11760',
        coordinate: ['40.71127832019916', '-73.72859237968323'],
      },
      {
        text: '11628 Treutel Mills, Brooklyn, NY 11018',
        coordinate: ['40.71348020110573', '-73.99808008629375'],
      },
    ],
  },
  {
    id: getObjectId('customer_242'),
    firstName: 'Janessa',
    lastName: 'Rau',
    fullName: 'Janessa Rau',
    gender: 'Male',
    gsm: '(632) 692-3931',
    createdAt: '2024-06-30T07:49:53.622Z',
    isActive: false,
    avatar: [
      {
        name: 'a114dc73-b099-476e-b7ed-33307b7bc630',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '50942021-5f14-4acf-8aec-63c8a05909e2',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/764.jpg',
      },
    ],
    addresses: [
      {
        text: '11718 Beatty Motorway, Lindenhurst, NY 11314',
        coordinate: ['40.69281598660577', '-73.82908131481418'],
      },
      {
        text: '11772 Toy Row, Lindenhurst, NY 11384',
        coordinate: ['40.811873397132395', '-73.94826902574404'],
      },
      {
        text: '11156 Hoppe Run, Lindenhurst, NY 11165',
        coordinate: ['40.65688875879231', '-73.88404087891976'],
      },
    ],
  },
  {
    id: getObjectId('customer_243'),
    firstName: 'Armando',
    lastName: 'Wintheiser',
    fullName: 'Armando Wintheiser',
    gender: 'Female',
    gsm: '(919) 749-5210',
    createdAt: '2024-06-28T20:24:33.109Z',
    isActive: true,
    avatar: [
      {
        name: '65af6389-8d8d-46d6-a5b2-a50f27abf808',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '1f3b2776-9e68-4c4d-9b91-dffb11a6b43c',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/994.jpg',
      },
    ],
    addresses: [
      {
        text: '11427 Huel Route, Massapequa, NY 11751',
        coordinate: ['40.73210823178464', '-73.99785822334118'],
      },
      {
        text: '11264 Pauline Knolls, Brooklyn, NY 11384',
        coordinate: ['40.85195030781291', '-73.93088781078077'],
      },
      {
        text: '11111 Meggie Passage, Massapequa, NY 11269',
        coordinate: ['40.815307692811984', '-73.9079705593338'],
      },
    ],
  },
  {
    id: getObjectId('customer_244'),
    firstName: 'Lexie',
    lastName: 'Howe',
    fullName: 'Lexie Howe',
    gender: 'Female',
    gsm: '(526) 957-1152',
    createdAt: '2024-07-05T18:55:30.264Z',
    isActive: true,
    avatar: [
      {
        name: '4e0b4e1c-9959-4261-b3c8-e069cfe1824e',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '9f988b41-2a7e-4bd2-aff1-4519c644c6dc',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/913.jpg',
      },
    ],
    addresses: [
      {
        text: '11107 Hickle Ranch, Lindenhurst, NY 11515',
        coordinate: ['40.61088151832268', '-74.08690487977938'],
      },
      {
        text: '11434 Daniel Meadows, Massapequa, NY 11452',
        coordinate: ['40.687024663944904', '-73.87836555031981'],
      },
      {
        text: '11834 MacGyver Junctions, Brooklyn, NY 11452',
        coordinate: ['40.78979623682202', '-73.94537926050417'],
      },
    ],
  },
  {
    id: getObjectId('customer_245'),
    firstName: 'Gina',
    lastName: 'Schinner',
    fullName: 'Gina Schinner',
    gender: 'Male',
    gsm: '(063) 774-8476',
    createdAt: '2024-06-19T02:00:07.910Z',
    isActive: false,
    avatar: [
      {
        name: '85966a4b-6cec-4a76-be53-a63f5faffcd1',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '16c69598-81d9-43bf-a3c1-a5e8aaaa1a2a',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/736.jpg',
      },
    ],
    addresses: [
      {
        text: '11096 Breanne Divide, Brooklyn, NY 11640',
        coordinate: ['40.718270507252825', '-73.90150746815962'],
      },
      {
        text: '11624 Jairo Road, Lindenhurst, NY 11160',
        coordinate: ['40.823376279414674', '-73.93960148270892'],
      },
      {
        text: '11107 Hickle Ranch, Lindenhurst, NY 11515',
        coordinate: ['40.61088151832268', '-74.08690487977938'],
      },
    ],
  },
  {
    id: getObjectId('customer_246'),
    firstName: 'Melany',
    lastName: 'Okuneva',
    fullName: 'Melany Okuneva',
    gender: 'Female',
    gsm: '(398) 663-0672',
    createdAt: '2024-06-10T19:40:59.000Z',
    isActive: false,
    avatar: [
      {
        name: '51e93bb7-6aab-456f-bf94-0c9832771062',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '6d4bb22e-a1f3-4bcd-b3ac-f59e90b71c7c',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/489.jpg',
      },
    ],
    addresses: [
      {
        text: '11120 Royal Coves, Lindenhurst, NY 11520',
        coordinate: ['40.63410088148846', '-73.99688826750287'],
      },
      {
        text: '11439 Aglae Radial, Brooklyn, NY 11205',
        coordinate: ['40.83247202632326', '-73.91406031894931'],
      },
      {
        text: '11408 Labadie Hollow, Lindenhurst, NY 11527',
        coordinate: ['40.68730915595523', '-73.94908167902258'],
      },
    ],
  },
  {
    id: getObjectId('customer_247'),
    firstName: 'Nolan',
    lastName: 'Labadie',
    fullName: 'Nolan Labadie',
    gender: 'Female',
    gsm: '(423) 945-4770',
    createdAt: '2024-06-17T17:36:52.499Z',
    isActive: false,
    avatar: [
      {
        name: 'e0b0ac96-d81f-49c4-9da8-6894573221e4',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'd0dc5d9b-727a-45a2-85b1-f52b5fe989ad',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/987.jpg',
      },
    ],
    addresses: [
      {
        text: '11418 Schumm Lock, Lindenhurst, NY 11340',
        coordinate: ['40.788028545449976', '-73.90529902987166'],
      },
      {
        text: '11186 Nolan Crest, Lindenhurst, NY 11296',
        coordinate: ['40.59649847049655', '-74.18222476116168'],
      },
      {
        text: '11797 Lorenzo Locks, Brooklyn, NY 11347',
        coordinate: ['40.747277718986986', '-73.99578762620561'],
      },
    ],
  },
  {
    id: getObjectId('customer_248'),
    firstName: 'Deon',
    lastName: 'Kuhlman',
    fullName: 'Deon Kuhlman',
    gender: 'Female',
    gsm: '(027) 992-9635',
    createdAt: '2024-07-03T05:08:49.660Z',
    isActive: false,
    avatar: [
      {
        name: '939e76bf-3f06-4a8b-8e13-1b44c1f7689e',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '44ae40a2-068f-41cf-93f8-121700349ae4',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/347.jpg',
      },
    ],
    addresses: [
      {
        text: '11270 Littel Drive, Lindenhurst, NY 11968',
        coordinate: ['40.689013432473764', '-73.91000786387228'],
      },
      {
        text: '11036 Hartmann Islands, Massapequa, NY 11273',
        coordinate: ['40.80648728921871', '-73.94602283563091'],
      },
      {
        text: '11181 Batz Corners, Lindenhurst, NY 11904',
        coordinate: ['40.74455702716755', '-73.93501800516812'],
      },
    ],
  },
  {
    id: getObjectId('customer_249'),
    firstName: 'Bailey',
    lastName: 'Jacobson',
    fullName: 'Bailey Jacobson',
    gender: 'Female',
    gsm: '(665) 296-4295',
    createdAt: '2024-07-04T10:43:31.240Z',
    isActive: false,
    avatar: [
      {
        name: '2a357e53-284b-4494-84de-27a4677b188a',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '263c6e5c-89a1-4d65-b3ae-792339322111',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/546.jpg',
      },
    ],
    addresses: [
      {
        text: '11057 Roberts Plaza, Lindenhurst, NY 11697',
        coordinate: ['40.64678681484174', '-74.08826976320468'],
      },
      {
        text: '11877 Nyasia Plains, Lindenhurst, NY 11970',
        coordinate: ['40.76021384556489', '-74.00722225239753'],
      },
      {
        text: '11121 Ledner Islands, Massapequa, NY 11687',
        coordinate: ['40.667502035176184', '-73.89399724199065'],
      },
    ],
  },
  {
    id: getObjectId('customer_250'),
    firstName: 'Hassan',
    lastName: 'Cronin',
    fullName: 'Hassan Cronin',
    gender: 'Female',
    gsm: '(505) 782-1027',
    createdAt: '2024-06-19T20:01:17.831Z',
    isActive: false,
    avatar: [
      {
        name: 'aab13b2a-25fb-4567-9812-1ddf6672b79f',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'f8b6f427-dd10-4ab4-b59d-e0b7600bba2b',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/308.jpg',
      },
    ],
    addresses: [
      {
        text: '11663 Gusikowski Extensions, Massapequa, NY 11108',
        coordinate: ['40.705174543564866', '-74.01519738145755'],
      },
      {
        text: '11776 Wilderman Prairie, Lindenhurst, NY 11562',
        coordinate: ['40.66945134822127', '-73.93551047298159'],
      },
      {
        text: '11863 Schuppe Lake, Massapequa, NY 11711',
        coordinate: ['40.5870337210884', '-74.00229002432485'],
      },
    ],
  },
  {
    id: getObjectId('customer_251'),
    firstName: 'Evie',
    lastName: 'Simonis',
    fullName: 'Evie Simonis',
    gender: 'Female',
    gsm: '(452) 615-7737',
    createdAt: '2024-06-10T02:27:25.284Z',
    isActive: true,
    avatar: [
      {
        name: 'a2697a25-96d1-4545-8716-8ddaa1ff55de',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '2f734ba4-2a84-49ee-aa5d-22e1eea61171',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/707.jpg',
      },
    ],
    addresses: [
      {
        text: '11316 Goodwin Curve, Brooklyn, NY 11183',
        coordinate: ['40.72331641705996', '-73.8392178094307'],
      },
      {
        text: '11505 Raynor Walk, Massapequa, NY 11815',
        coordinate: ['40.75598474475542', '-73.9358398855354'],
      },
      {
        text: '11111 Meggie Passage, Massapequa, NY 11269',
        coordinate: ['40.815307692811984', '-73.9079705593338'],
      },
    ],
  },
  {
    id: getObjectId('customer_252'),
    firstName: 'Jerome',
    lastName: "O'Reilly",
    fullName: "Jerome O'Reilly",
    gender: 'Male',
    gsm: '(781) 522-5302',
    createdAt: '2024-06-19T15:49:08.383Z',
    isActive: true,
    avatar: [
      {
        name: 'e41f454d-2be2-46f4-becd-d5af0bfe86a0',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'a3ac22ca-ada5-4d6f-95fb-cdb731fb37a5',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/43.jpg',
      },
    ],
    addresses: [
      {
        text: '11203 Pfannerstill Stravenue, Lindenhurst, NY 11362',
        coordinate: ['40.81887624266896', '-73.93779180668098'],
      },
      {
        text: '11871 Merlin Forest, Massapequa, NY 11300',
        coordinate: ['40.63107778793004', '-73.95671041614891'],
      },
      {
        text: '11762 Schinner Garden, Lindenhurst, NY 11487',
        coordinate: ['40.50954831912203', '-74.24409344591764'],
      },
    ],
  },
  {
    id: getObjectId('customer_253'),
    firstName: 'Arlene',
    lastName: 'Doyle',
    fullName: 'Arlene Doyle',
    gender: 'Male',
    gsm: '(001) 322-7246',
    createdAt: '2024-06-10T00:40:39.862Z',
    isActive: true,
    avatar: [
      {
        name: '96fb5d49-126b-44bf-9068-6af3854a0825',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '4ffda5c4-b733-4889-99b0-1dc315395bc5',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1124.jpg',
      },
    ],
    addresses: [
      {
        text: '11719 Buckridge Center, Brooklyn, NY 11760',
        coordinate: ['40.71127832019916', '-73.72859237968323'],
      },
      {
        text: '11881 Wilton Fields, Lindenhurst, NY 11176',
        coordinate: ['40.787915583564256', '-73.84583413474485'],
      },
      {
        text: '11762 Schinner Garden, Lindenhurst, NY 11487',
        coordinate: ['40.50954831912203', '-74.24409344591764'],
      },
    ],
  },
  {
    id: getObjectId('customer_254'),
    firstName: 'Brendon',
    lastName: 'Kub',
    fullName: 'Brendon Kub',
    gender: 'Male',
    gsm: '(742) 543-8985',
    createdAt: '2024-07-05T14:31:52.693Z',
    isActive: false,
    avatar: [
      {
        name: '4d681355-f5ce-4c8d-a0cd-697a731315aa',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'a358d292-8ee0-41aa-92f6-ce136910281e',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1088.jpg',
      },
    ],
    addresses: [
      {
        text: '11378 Ellie Spring, Lindenhurst, NY 11784',
        coordinate: ['40.77936951467395', '-73.97694544805309'],
      },
      {
        text: '11246 Heathcote Crescent, Brooklyn, NY 11164',
        coordinate: ['40.70264295688686', '-73.85781194108168'],
      },
      {
        text: '11148 Susie Oval, Brooklyn, NY 11640',
        coordinate: ['40.6814054925542', '-73.99657415385126'],
      },
    ],
  },
  {
    id: getObjectId('customer_255'),
    firstName: 'Billie',
    lastName: 'Herman',
    fullName: 'Billie Herman',
    gender: 'Female',
    gsm: '(070) 444-4698',
    createdAt: '2024-06-17T05:41:48.158Z',
    isActive: false,
    avatar: [
      {
        name: '5d6675e0-5c28-4046-bfeb-87a31915318d',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '459dd791-5d8c-482f-aa82-e8324a90c7b3',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/620.jpg',
      },
    ],
    addresses: [
      {
        text: '11655 Treutel Keys, Lindenhurst, NY 11251',
        coordinate: ['40.581383694926494', '-73.8457803791904'],
      },
      {
        text: '11728 Earlene Garden, Brooklyn, NY 11259',
        coordinate: ['40.61541451352046', '-73.9512235195281'],
      },
      {
        text: '11384 Waelchi Rapid, Massapequa, NY 11796',
        coordinate: ['40.84590139880644', '-73.8928291967851'],
      },
    ],
  },
  {
    id: getObjectId('customer_256'),
    firstName: 'Celine',
    lastName: 'Kautzer',
    fullName: 'Celine Kautzer',
    gender: 'Female',
    gsm: '(994) 154-6224',
    createdAt: '2024-06-20T17:47:28.234Z',
    isActive: true,
    avatar: [
      {
        name: 'eb0814cd-3d69-4418-be17-69a5f7360ad0',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '0df5ab56-7a3a-4e0f-b446-f77c6e0804f3',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/405.jpg',
      },
    ],
    addresses: [
      {
        text: '11085 Oswaldo Harbor, Brooklyn, NY 11546',
        coordinate: ['40.85125313575545', '-73.91436091292005'],
      },
      {
        text: '11509 Donna Canyon, Brooklyn, NY 11024',
        coordinate: ['40.85330068757448', '-73.93352262256185'],
      },
      {
        text: '11543 Judah Rapid, Massapequa, NY 11819',
        coordinate: ['40.66995340328846', '-73.91410255815497'],
      },
    ],
  },
  {
    id: getObjectId('customer_257'),
    firstName: 'Odie',
    lastName: 'Casper',
    fullName: 'Odie Casper',
    gender: 'Female',
    gsm: '(193) 331-7454',
    createdAt: '2024-06-27T17:57:12.641Z',
    isActive: true,
    avatar: [
      {
        name: 'e79537ed-f813-408f-a82e-2c7092ab6580',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '6abaed7e-5f07-4ea2-ae37-077ad6e29a09',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/166.jpg',
      },
    ],
    addresses: [
      {
        text: '11714 Cole Prairie, Lindenhurst, NY 11787',
        coordinate: ['40.779621755520346', '-73.9653953538533'],
      },
      {
        text: '11231 Bergstrom Wall, Massapequa, NY 11734',
        coordinate: ['40.605313216714116', '-73.87661395404614'],
      },
      {
        text: '11228 Stiedemann Valley, Brooklyn, NY 11949',
        coordinate: ['40.81821649698436', '-73.86826310670972'],
      },
    ],
  },
  {
    id: getObjectId('customer_258'),
    firstName: 'Ima',
    lastName: 'Berge',
    fullName: 'Ima Berge',
    gender: 'Female',
    gsm: '(076) 846-6880',
    createdAt: '2024-07-07T14:44:05.005Z',
    isActive: true,
    avatar: [
      {
        name: 'e9ada8c2-42f0-4e80-b0c8-8ca3c683dc54',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '10294c44-3f37-487e-8d7e-854b6b2788f0',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/171.jpg',
      },
    ],
    addresses: [
      {
        text: '11439 Aglae Radial, Brooklyn, NY 11205',
        coordinate: ['40.83247202632326', '-73.91406031894931'],
      },
      {
        text: '11120 Royal Coves, Lindenhurst, NY 11520',
        coordinate: ['40.63410088148846', '-73.99688826750287'],
      },
      {
        text: '11037 Dannie Ridges, Massapequa, NY 11151',
        coordinate: ['40.786868905289985', '-73.91380687271686'],
      },
    ],
  },
  {
    id: getObjectId('customer_259'),
    firstName: 'Emmitt',
    lastName: 'Pagac',
    fullName: 'Emmitt Pagac',
    gender: 'Male',
    gsm: '(838) 850-6940',
    createdAt: '2024-06-13T02:52:18.855Z',
    isActive: true,
    avatar: [
      {
        name: '1b334f81-3312-46f4-ad35-74eeaf949dc2',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'c0d1446d-46af-47ce-a12b-17e4e93d92a3',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/93.jpg',
      },
    ],
    addresses: [
      {
        text: '11439 Aglae Radial, Brooklyn, NY 11205',
        coordinate: ['40.83247202632326', '-73.91406031894931'],
      },
      {
        text: '11108 Bauch Trail, Massapequa, NY 11355',
        coordinate: ['40.81991419971737', '-73.84577566721931'],
      },
      {
        text: "11683 D'Amore Summit, Massapequa, NY 11567",
        coordinate: ['40.8048782862543', '-73.94804034964574'],
      },
    ],
  },
  {
    id: getObjectId('customer_260'),
    firstName: 'Shaylee',
    lastName: 'Doyle',
    fullName: 'Shaylee Doyle',
    gender: 'Female',
    gsm: '(667) 700-6898',
    createdAt: '2024-07-05T00:21:47.687Z',
    isActive: true,
    avatar: [
      {
        name: '68178c26-efcb-416e-9843-8a390b661b62',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'dfd6e6ee-b8a4-4dce-87b1-591e92eeea30',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/964.jpg',
      },
    ],
    addresses: [
      {
        text: '11203 Pfannerstill Stravenue, Lindenhurst, NY 11362',
        coordinate: ['40.81887624266896', '-73.93779180668098'],
      },
      {
        text: '11974 Harold Ports, Brooklyn, NY 11963',
        coordinate: ['40.674179744645684', '-73.98876832456823'],
      },
      {
        text: '11776 Wilderman Prairie, Lindenhurst, NY 11562',
        coordinate: ['40.66945134822127', '-73.93551047298159'],
      },
    ],
  },
  {
    id: getObjectId('customer_261'),
    firstName: 'Benny',
    lastName: 'Collins',
    fullName: 'Benny Collins',
    gender: 'Female',
    gsm: '(273) 853-9416',
    createdAt: '2024-07-06T00:32:01.329Z',
    isActive: true,
    avatar: [
      {
        name: '76f2a3e2-ae21-4de7-a352-0cad16c2eec0',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '800f7b05-2b57-4ae0-9131-259848de354d',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/643.jpg',
      },
    ],
    addresses: [
      {
        text: '11057 Roberts Plaza, Lindenhurst, NY 11697',
        coordinate: ['40.64678681484174', '-74.08826976320468'],
      },
      {
        text: '11125 Strosin Curve, Lindenhurst, NY 11467',
        coordinate: ['40.732100034726514', '-73.9767183060347'],
      },
      {
        text: '11862 Ward Glen, Massapequa, NY 11885',
        coordinate: ['40.87823216032764', '-73.91814523246967'],
      },
    ],
  },
  {
    id: getObjectId('customer_262'),
    firstName: 'Mathew',
    lastName: 'Bayer',
    fullName: 'Mathew Bayer',
    gender: 'Female',
    gsm: '(635) 550-9912',
    createdAt: '2024-06-21T08:00:20.277Z',
    isActive: true,
    avatar: [
      {
        name: '5fb10688-acf0-4d41-a3b4-ba0a4545e230',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '3cf3f8a4-8a00-48de-9806-d862f8b4b875',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1088.jpg',
      },
    ],
    addresses: [
      {
        text: '11928 Zemlak Terrace, Brooklyn, NY 11083',
        coordinate: ['40.5861219668654', '-73.96563797373686'],
      },
      {
        text: '11418 Alena Branch, Massapequa, NY 11197',
        coordinate: ['40.7831303248025', '-73.96435879895469'],
      },
      {
        text: '11599 Wolf Lock, Brooklyn, NY 11792',
        coordinate: ['40.7042912677296', '-74.01395408433967'],
      },
    ],
  },
  {
    id: getObjectId('customer_263'),
    firstName: 'Elvie',
    lastName: 'Mohr',
    fullName: 'Elvie Mohr',
    gender: 'Female',
    gsm: '(744) 224-5482',
    createdAt: '2024-06-13T05:23:44.333Z',
    isActive: true,
    avatar: [
      {
        name: '65fe7840-df88-48f1-ae68-d45b62b9f593',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'c590133a-cf54-45d6-806b-314b40f78cae',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/635.jpg',
      },
    ],
    addresses: [
      {
        text: '11881 Wilton Fields, Lindenhurst, NY 11176',
        coordinate: ['40.787915583564256', '-73.84583413474485'],
      },
      {
        text: '11434 Daniel Meadows, Massapequa, NY 11452',
        coordinate: ['40.687024663944904', '-73.87836555031981'],
      },
      {
        text: '11606 Mariana Keys, Lindenhurst, NY 11071',
        coordinate: ['40.60227925020982', '-73.91362606675423'],
      },
    ],
  },
  {
    id: getObjectId('customer_264'),
    firstName: 'Quincy',
    lastName: 'Rogahn',
    fullName: 'Quincy Rogahn',
    gender: 'Male',
    gsm: '(997) 325-0715',
    createdAt: '2024-06-12T01:20:23.873Z',
    isActive: false,
    avatar: [
      {
        name: '6863d0e4-124d-463c-9736-2c76f59c12ab',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '6537fcd7-75ac-4942-bf93-96db710b2895',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/259.jpg',
      },
    ],
    addresses: [
      {
        text: '11923 Legros Divide, Brooklyn, NY 11072',
        coordinate: ['40.75081540048207', '-73.84366030192892'],
      },
      {
        text: '11693 Hartmann Park, Brooklyn, NY 11251',
        coordinate: ['40.705101590541354', '-73.98948018281791'],
      },
      {
        text: '11922 Halvorson Terrace, Brooklyn, NY 11104',
        coordinate: ['40.863466423461276', '-73.88157667321018'],
      },
    ],
  },
  {
    id: getObjectId('customer_265'),
    firstName: 'Brown',
    lastName: 'Huel',
    fullName: 'Brown Huel',
    gender: 'Male',
    gsm: '(302) 509-7350',
    createdAt: '2024-06-12T07:15:58.607Z',
    isActive: false,
    avatar: [
      {
        name: '30afa0f3-b3e1-46c4-94ec-f566429f8694',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'f9de9711-c9c2-4d64-ae83-32817134ed5b',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/667.jpg',
      },
    ],
    addresses: [
      {
        text: '11878 Dudley Pike, Lindenhurst, NY 11604',
        coordinate: ['40.64716080488486', '-74.0073656851469'],
      },
      {
        text: '11359 Weissnat Shore, Lindenhurst, NY 11530',
        coordinate: ['40.7318003523917', '-73.81115496631985'],
      },
      {
        text: '11774 Koss Mission, Brooklyn, NY 11540',
        coordinate: ['40.73032437088068', '-73.99512821335122'],
      },
    ],
  },
  {
    id: getObjectId('customer_266'),
    firstName: 'Ellie',
    lastName: 'Daniel',
    fullName: 'Ellie Daniel',
    gender: 'Female',
    gsm: '(584) 813-7392',
    createdAt: '2024-06-14T21:41:11.277Z',
    isActive: true,
    avatar: [
      {
        name: '75f1f24e-db94-4d27-bb6d-6d22a31353c4',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'd406b66d-c06f-46c7-bf91-ce39f242778a',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/791.jpg',
      },
    ],
    addresses: [
      {
        text: '11230 Zander Curve, Lindenhurst, NY 11912',
        coordinate: ['40.87080816088552', '-73.83213503852586'],
      },
      {
        text: '11418 Alena Branch, Massapequa, NY 11197',
        coordinate: ['40.7831303248025', '-73.96435879895469'],
      },
      {
        text: '11056 Doyle Station, Massapequa, NY 11606',
        coordinate: ['40.85931338640661', '-73.92812829680183'],
      },
    ],
  },
  {
    id: getObjectId('customer_267'),
    firstName: 'Alek',
    lastName: 'Adams',
    fullName: 'Alek Adams',
    gender: 'Male',
    gsm: '(347) 128-6797',
    createdAt: '2024-06-25T21:51:28.135Z',
    isActive: false,
    avatar: [
      {
        name: 'e34b0ce5-687d-449f-988c-8ac551c85f3b',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'b915d4ec-93f8-4e6c-bf5c-acea47b8d08a',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/99.jpg',
      },
    ],
    addresses: [
      {
        text: '11727 Schaefer Inlet, Lindenhurst, NY 11036',
        coordinate: ['40.68715261156324', '-74.00526659632791'],
      },
      {
        text: '11958 Hintz Light, Massapequa, NY 11935',
        coordinate: ['40.875917577275104', '-73.82848174189849'],
      },
      {
        text: '11085 Lenora Crossroad, Massapequa, NY 11054',
        coordinate: ['40.6717882500396', '-73.8952881573647'],
      },
    ],
  },
  {
    id: getObjectId('customer_268'),
    firstName: 'Vern',
    lastName: 'Goodwin',
    fullName: 'Vern Goodwin',
    gender: 'Female',
    gsm: '(751) 508-1904',
    createdAt: '2024-06-25T17:32:14.348Z',
    isActive: false,
    avatar: [
      {
        name: 'f27cb124-1e5f-42ae-9587-fc48f4a71f06',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '6267abe0-b535-4f55-8709-7e480ad34627',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/452.jpg',
      },
    ],
    addresses: [
      {
        text: '11769 Sally Villages, Massapequa, NY 11393',
        coordinate: ['40.79438834815965', '-73.9479240645321'],
      },
      {
        text: '11871 Merlin Forest, Massapequa, NY 11300',
        coordinate: ['40.63107778793004', '-73.95671041614891'],
      },
      {
        text: '11882 Oceane Islands, Brooklyn, NY 11755',
        coordinate: ['40.711735188982935', '-73.9020610486226'],
      },
    ],
  },
  {
    id: getObjectId('customer_269'),
    firstName: 'Emelie',
    lastName: 'Mayert',
    fullName: 'Emelie Mayert',
    gender: 'Female',
    gsm: '(162) 089-4711',
    createdAt: '2024-07-04T19:24:18.708Z',
    isActive: true,
    avatar: [
      {
        name: 'd5be76e2-80bd-4ebe-a930-723c06f9b81f',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '4b8ea36a-e805-4703-a588-144090de27f9',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/665.jpg',
      },
    ],
    addresses: [
      {
        text: '11085 Oswaldo Harbor, Brooklyn, NY 11546',
        coordinate: ['40.85125313575545', '-73.91436091292005'],
      },
      {
        text: '11509 Donna Canyon, Brooklyn, NY 11024',
        coordinate: ['40.85330068757448', '-73.93352262256185'],
      },
      {
        text: '11111 Meggie Passage, Massapequa, NY 11269',
        coordinate: ['40.815307692811984', '-73.9079705593338'],
      },
    ],
  },
  {
    id: getObjectId('customer_270'),
    firstName: 'Domenica',
    lastName: 'Brakus',
    fullName: 'Domenica Brakus',
    gender: 'Male',
    gsm: '(786) 219-2750',
    createdAt: '2024-06-20T23:09:20.518Z',
    isActive: false,
    avatar: [
      {
        name: '5afdabd9-ebcd-4950-90ae-43ff1635cb68',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '9c5b3a4c-4d73-4bed-b7c2-a427fdeaa8c7',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/63.jpg',
      },
    ],
    addresses: [
      {
        text: '11781 Maiya Valley, Brooklyn, NY 11844',
        coordinate: ['40.817646237824896', '-73.95265264832331'],
      },
      {
        text: '11166 Cormier Plaza, Lindenhurst, NY 11278',
        coordinate: ['40.86255321747302', '-73.8648318412901'],
      },
      {
        text: '11149 Cruickshank Burg, Lindenhurst, NY 11019',
        coordinate: ['40.78731753673706', '-73.9144110734691'],
      },
    ],
  },
  {
    id: getObjectId('customer_271'),
    firstName: 'Florian',
    lastName: 'Rutherford',
    fullName: 'Florian Rutherford',
    gender: 'Female',
    gsm: '(718) 612-7295',
    createdAt: '2024-07-01T19:24:52.187Z',
    isActive: false,
    avatar: [
      {
        name: 'e5be4139-6fc7-448e-8789-f9cc5c50b9c9',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'bbcafddb-f130-487f-9303-87d012e54c2a',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/43.jpg',
      },
    ],
    addresses: [
      {
        text: '11619 Runte Light, Massapequa, NY 11870',
        coordinate: ['40.68993727602666', '-73.93919799724745'],
      },
      {
        text: '11149 Cruickshank Burg, Lindenhurst, NY 11019',
        coordinate: ['40.78731753673706', '-73.9144110734691'],
      },
      {
        text: '11576 Kerluke Summit, Massapequa, NY 11417',
        coordinate: ['40.59210466006108', '-73.99582650996682'],
      },
    ],
  },
  {
    id: getObjectId('customer_272'),
    firstName: 'Carmine',
    lastName: 'Labadie',
    fullName: 'Carmine Labadie',
    gender: 'Female',
    gsm: '(355) 798-4520',
    createdAt: '2024-06-30T03:20:39.495Z',
    isActive: true,
    avatar: [
      {
        name: '5d031876-e2a8-43f5-9609-44929391b07c',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '61d84ef0-349b-484f-9f84-91f75e7b00f1',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/966.jpg',
      },
    ],
    addresses: [
      {
        text: '11647 Khalil Freeway, Massapequa, NY 11799',
        coordinate: ['40.73552798165039', '-73.99701720039775'],
      },
      {
        text: '11958 Hintz Light, Massapequa, NY 11935',
        coordinate: ['40.875917577275104', '-73.82848174189849'],
      },
      {
        text: '11834 MacGyver Junctions, Brooklyn, NY 11452',
        coordinate: ['40.78979623682202', '-73.94537926050417'],
      },
    ],
  },
  {
    id: getObjectId('customer_273'),
    firstName: 'Billy',
    lastName: 'Shanahan',
    fullName: 'Billy Shanahan',
    gender: 'Female',
    gsm: '(285) 920-1019',
    createdAt: '2024-06-23T03:01:58.687Z',
    isActive: false,
    avatar: [
      {
        name: '3dc0fdb8-a619-46a8-9f6e-2c62a17c53ae',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '8b8af470-00de-4d19-a40a-0d18c6269d3e',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/428.jpg',
      },
    ],
    addresses: [
      {
        text: '11435 Theodore Grove, Lindenhurst, NY 11899',
        coordinate: ['40.58985851813696', '-73.98005929565423'],
      },
      {
        text: '11958 Hintz Light, Massapequa, NY 11935',
        coordinate: ['40.875917577275104', '-73.82848174189849'],
      },
      {
        text: '11335 Greyson Mission, Lindenhurst, NY 11507',
        coordinate: ['40.89110181872506', '-73.8938991544214'],
      },
    ],
  },
  {
    id: getObjectId('customer_274'),
    firstName: 'Milton',
    lastName: 'Romaguera',
    fullName: 'Milton Romaguera',
    gender: 'Male',
    gsm: '(129) 157-5180',
    createdAt: '2024-06-17T08:41:35.245Z',
    isActive: false,
    avatar: [
      {
        name: 'c596abd0-f58d-4e59-be74-69b94fa9abdf',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'f6011b5d-87c8-450b-a3ab-180963b5c6d3',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1244.jpg',
      },
    ],
    addresses: [
      {
        text: '11097 Naomie Mountain, Brooklyn, NY 11492',
        coordinate: ['40.67369096200763', '-73.92525141581397'],
      },
      {
        text: '11512 Jenkins Lights, Massapequa, NY 11737',
        coordinate: ['40.71003074009839', '-73.94229615777373'],
      },
      {
        text: '11764 Roberts Centers, Lindenhurst, NY 11071',
        coordinate: ['40.707840293833634', '-73.75019856878251'],
      },
    ],
  },
  {
    id: getObjectId('customer_275'),
    firstName: 'Lottie',
    lastName: 'Thiel',
    fullName: 'Lottie Thiel',
    gender: 'Female',
    gsm: '(034) 414-8453',
    createdAt: '2024-06-18T14:09:50.122Z',
    isActive: true,
    avatar: [
      {
        name: '824c7ea0-4d1e-4cb6-864e-5cb03acde09e',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'a6ee7d9c-8245-48d7-bde4-2417205f555c',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/343.jpg',
      },
    ],
    addresses: [
      {
        text: '11837 Ferry Corners, Brooklyn, NY 11749',
        coordinate: ['40.83762046059387', '-73.87537910005294'],
      },
      {
        text: '11264 Pauline Knolls, Brooklyn, NY 11384',
        coordinate: ['40.85195030781291', '-73.93088781078077'],
      },
      {
        text: '11797 Bart Valley, Lindenhurst, NY 11117',
        coordinate: ['40.669777801118656', '-73.92802454968135'],
      },
    ],
  },
  {
    id: getObjectId('customer_276'),
    firstName: 'Caroline',
    lastName: 'Ferry',
    fullName: 'Caroline Ferry',
    gender: 'Female',
    gsm: '(848) 902-7587',
    createdAt: '2024-06-14T10:58:03.359Z',
    isActive: true,
    avatar: [
      {
        name: '44f8ce30-4543-4ccc-a9a9-52a62f6e6fe8',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '8eb530af-6e45-45ed-8f63-9f2fe6d32d18',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/969.jpg',
      },
    ],
    addresses: [
      {
        text: '11877 Franecki Isle, Lindenhurst, NY 11625',
        coordinate: ['40.62829175498013', '-74.18137586483954'],
      },
      {
        text: '11430 Leuschke Via, Brooklyn, NY 11727',
        coordinate: ['40.82687191092169', '-73.93860406015271'],
      },
      {
        text: '11599 Wolf Lock, Brooklyn, NY 11792',
        coordinate: ['40.7042912677296', '-74.01395408433967'],
      },
    ],
  },
  {
    id: getObjectId('customer_277'),
    firstName: 'Bernita',
    lastName: 'Boyer',
    fullName: 'Bernita Boyer',
    gender: 'Male',
    gsm: '(557) 561-8519',
    createdAt: '2024-06-12T15:14:00.131Z',
    isActive: true,
    avatar: [
      {
        name: '1996f5dc-0ed4-40bb-84bb-8b1fd439b4fa',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '3a954ed6-a77a-43e8-816d-aa7e5f09c14e',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/987.jpg',
      },
    ],
    addresses: [
      {
        text: '11619 Runte Light, Massapequa, NY 11870',
        coordinate: ['40.68993727602666', '-73.93919799724745'],
      },
      {
        text: '11928 Zemlak Terrace, Brooklyn, NY 11083',
        coordinate: ['40.5861219668654', '-73.96563797373686'],
      },
      {
        text: '11913 Veum Spring, Massapequa, NY 11303',
        coordinate: ['40.66164200865502', '-74.00754412065884'],
      },
    ],
  },
  {
    id: getObjectId('customer_278'),
    firstName: 'Lorenz',
    lastName: 'Zieme',
    fullName: 'Lorenz Zieme',
    gender: 'Male',
    gsm: '(674) 598-9409',
    createdAt: '2024-07-02T01:19:59.351Z',
    isActive: true,
    avatar: [
      {
        name: '9a21debd-4ae2-45ba-b361-70a6218b6e79',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'e3628f81-caeb-46d7-9dfd-e0aa6edd361f',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1237.jpg',
      },
    ],
    addresses: [
      {
        text: '11108 Bauch Trail, Massapequa, NY 11355',
        coordinate: ['40.81991419971737', '-73.84577566721931'],
      },
      {
        text: '11675 Bashirian Views, Massapequa, NY 11729',
        coordinate: ['40.65381263231815', '-73.93397585955978'],
      },
      {
        text: '11718 Beatty Motorway, Lindenhurst, NY 11314',
        coordinate: ['40.69281598660577', '-73.82908131481418'],
      },
    ],
  },
  {
    id: getObjectId('customer_279'),
    firstName: 'Romaine',
    lastName: 'Quitzon',
    fullName: 'Romaine Quitzon',
    gender: 'Female',
    gsm: '(809) 592-1206',
    createdAt: '2024-06-29T11:09:25.344Z',
    isActive: true,
    avatar: [
      {
        name: '14d4a42c-7a17-43b3-b941-3ccd1d8d3752',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '90686d62-ce8d-4670-89dc-f96d45dbde66',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/248.jpg',
      },
    ],
    addresses: [
      {
        text: '11511 Keeling Courts, Lindenhurst, NY 11662',
        coordinate: ['40.827562039798345', '-73.88823656144815'],
      },
      {
        text: '11642 Alberta Junction, Lindenhurst, NY 11370',
        coordinate: ['40.782269303154564', '-73.92799108814602'],
      },
      {
        text: '11195 Lysanne Estates, Brooklyn, NY 11779',
        coordinate: ['40.88524705779494', '-73.84462210652717'],
      },
    ],
  },
  {
    id: getObjectId('customer_280'),
    firstName: 'Stephan',
    lastName: 'Hilll',
    fullName: 'Stephan Hilll',
    gender: 'Male',
    gsm: '(755) 915-8678',
    createdAt: '2024-06-15T13:48:54.877Z',
    isActive: false,
    avatar: [
      {
        name: 'f79b39f0-dd40-4671-a855-608e1f07d046',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'dd3d2106-820c-4bcc-8cb0-a8ff2abaae6f',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/941.jpg',
      },
    ],
    addresses: [
      {
        text: '11642 Alberta Junction, Lindenhurst, NY 11370',
        coordinate: ['40.782269303154564', '-73.92799108814602'],
      },
      {
        text: '11027 Cruickshank Village, Massapequa, NY 11947',
        coordinate: ['40.63550895730017', '-73.91944128289579'],
      },
      {
        text: '11505 Raynor Walk, Massapequa, NY 11815',
        coordinate: ['40.75598474475542', '-73.9358398855354'],
      },
    ],
  },
  {
    id: getObjectId('customer_281'),
    firstName: 'Zula',
    lastName: 'Moore',
    fullName: 'Zula Moore',
    gender: 'Female',
    gsm: '(804) 215-1474',
    createdAt: '2024-06-21T09:17:44.991Z',
    isActive: true,
    avatar: [
      {
        name: '07565f43-3401-4cbc-942a-8846420f3c80',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'd6240d7e-8754-4ef3-9379-8006f91bf689',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1116.jpg',
      },
    ],
    addresses: [
      {
        text: '11316 Goodwin Curve, Brooklyn, NY 11183',
        coordinate: ['40.72331641705996', '-73.8392178094307'],
      },
      {
        text: '11881 Wilton Fields, Lindenhurst, NY 11176',
        coordinate: ['40.787915583564256', '-73.84583413474485'],
      },
      {
        text: '11701 Rusty Lights, Massapequa, NY 11840',
        coordinate: ['40.74921391148173', '-73.88745667351822'],
      },
    ],
  },
  {
    id: getObjectId('customer_282'),
    firstName: 'Webster',
    lastName: 'Little',
    fullName: 'Webster Little',
    gender: 'Female',
    gsm: '(053) 356-4437',
    createdAt: '2024-06-26T08:01:24.082Z',
    isActive: false,
    avatar: [
      {
        name: '74bb5279-6636-4f28-a2fb-54d8b66d49f4',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '5312d2cb-a4c0-4130-b859-2cc05bcb9a6a',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/960.jpg',
      },
    ],
    addresses: [
      {
        text: '11108 Bauch Trail, Massapequa, NY 11355',
        coordinate: ['40.81991419971737', '-73.84577566721931'],
      },
      {
        text: '11509 Donna Canyon, Brooklyn, NY 11024',
        coordinate: ['40.85330068757448', '-73.93352262256185'],
      },
      {
        text: '11418 Schumm Lock, Lindenhurst, NY 11340',
        coordinate: ['40.788028545449976', '-73.90529902987166'],
      },
    ],
  },
  {
    id: getObjectId('customer_283'),
    firstName: 'Pasquale',
    lastName: 'Kautzer',
    fullName: 'Pasquale Kautzer',
    gender: 'Male',
    gsm: '(679) 568-8394',
    createdAt: '2024-06-20T23:52:07.049Z',
    isActive: true,
    avatar: [
      {
        name: '141f8f29-6674-44e5-a538-2283a1e7c827',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '8c24809c-1196-4255-8b43-9c15a137c948',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/727.jpg',
      },
    ],
    addresses: [
      {
        text: '11655 Treutel Keys, Lindenhurst, NY 11251',
        coordinate: ['40.581383694926494', '-73.8457803791904'],
      },
      {
        text: '11186 Nolan Crest, Lindenhurst, NY 11296',
        coordinate: ['40.59649847049655', '-74.18222476116168'],
      },
      {
        text: '11060 Pacocha Path, Massapequa, NY 11383',
        coordinate: ['40.712642654476035', '-74.01303533708099'],
      },
    ],
  },
  {
    id: getObjectId('customer_284'),
    firstName: 'Chelsie',
    lastName: 'Crona',
    fullName: 'Chelsie Crona',
    gender: 'Female',
    gsm: '(587) 588-8573',
    createdAt: '2024-07-03T10:46:39.115Z',
    isActive: false,
    avatar: [
      {
        name: 'c905785b-7c83-493c-9dc5-2fed4896cf82',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'a9f3f1d5-ca2a-453b-a665-526e537b02ae',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1053.jpg',
      },
    ],
    addresses: [
      {
        text: '11045 Johnston Key, Lindenhurst, NY 11539',
        coordinate: ['40.84398642270739', '-73.83864402262044'],
      },
      {
        text: '11209 Koelpin Mission, Massapequa, NY 11226',
        coordinate: ['40.69572890173205', '-73.9970705051839'],
      },
      {
        text: '11862 Ward Glen, Massapequa, NY 11885',
        coordinate: ['40.87823216032764', '-73.91814523246967'],
      },
    ],
  },
  {
    id: getObjectId('customer_285'),
    firstName: 'Dorcas',
    lastName: 'Senger',
    fullName: 'Dorcas Senger',
    gender: 'Male',
    gsm: '(060) 616-6397',
    createdAt: '2024-06-09T16:40:37.884Z',
    isActive: true,
    avatar: [
      {
        name: '3300e539-35dc-4bcb-982c-fa30a20b06b8',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'e6c92285-e8ba-4c0f-b9c5-67da2ef30746',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1208.jpg',
      },
    ],
    addresses: [
      {
        text: '11057 Roberts Plaza, Lindenhurst, NY 11697',
        coordinate: ['40.64678681484174', '-74.08826976320468'],
      },
      {
        text: '11871 Merlin Forest, Massapequa, NY 11300',
        coordinate: ['40.63107778793004', '-73.95671041614891'],
      },
      {
        text: '11776 Wilderman Prairie, Lindenhurst, NY 11562',
        coordinate: ['40.66945134822127', '-73.93551047298159'],
      },
    ],
  },
  {
    id: getObjectId('customer_286'),
    firstName: 'Darius',
    lastName: 'Ondricka',
    fullName: 'Darius Ondricka',
    gender: 'Male',
    gsm: '(404) 658-6014',
    createdAt: '2024-07-01T00:03:30.021Z',
    isActive: true,
    avatar: [
      {
        name: '45213107-5ebd-46f5-90e5-8931446cee41',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '4e63d2ed-1e5c-4048-b5c9-15cd439c3089',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/802.jpg',
      },
    ],
    addresses: [
      {
        text: '11135 Reichert Course, Brooklyn, NY 11720',
        coordinate: ['40.737206062011865', '-73.84886438595831'],
      },
      {
        text: '11774 Koss Mission, Brooklyn, NY 11540',
        coordinate: ['40.73032437088068', '-73.99512821335122'],
      },
      {
        text: '11898 Chelsea Plain, Lindenhurst, NY 11735',
        coordinate: ['40.875525570218045', '-73.86179079437676'],
      },
    ],
  },
  {
    id: getObjectId('customer_287'),
    firstName: 'Terry',
    lastName: 'Lockman',
    fullName: 'Terry Lockman',
    gender: 'Female',
    gsm: '(990) 571-1460',
    createdAt: '2024-06-30T19:42:42.607Z',
    isActive: true,
    avatar: [
      {
        name: '251e1656-e953-4fca-a8c7-822978bb3260',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'c0e1836e-8ac7-42eb-85df-b37253827b44',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/498.jpg',
      },
    ],
    addresses: [
      {
        text: '11974 Harold Ports, Brooklyn, NY 11963',
        coordinate: ['40.674179744645684', '-73.98876832456823'],
      },
      {
        text: '11456 Federico Freeway, Lindenhurst, NY 11390',
        coordinate: ['40.73636731561727', '-73.87880380035317'],
      },
      {
        text: '11367 Ansley Stravenue, Massapequa, NY 11350',
        coordinate: ['40.81730470420681', '-73.94741458340314'],
      },
    ],
  },
  {
    id: getObjectId('customer_288'),
    firstName: 'Emilio',
    lastName: 'Heathcote',
    fullName: 'Emilio Heathcote',
    gender: 'Male',
    gsm: '(794) 919-8311',
    createdAt: '2024-06-22T18:41:56.899Z',
    isActive: true,
    avatar: [
      {
        name: '4fece87d-f255-47fa-907a-5c4d5743c311',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '15871bcb-7af9-40ec-ac2f-12b18bbf4e10',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/599.jpg',
      },
    ],
    addresses: [
      {
        text: '11112 Delaney Harbor, Massapequa, NY 11829',
        coordinate: ['40.652031760121595', '-74.00733653133325'],
      },
      {
        text: '11036 Joaquin Circle, Massapequa, NY 11502',
        coordinate: ['40.70119015066914', '-73.99645145905747'],
      },
      {
        text: '11337 Harry Brook, Brooklyn, NY 11820',
        coordinate: ['40.82365881189533', '-73.90978994398685'],
      },
    ],
  },
  {
    id: getObjectId('customer_289'),
    firstName: 'Kyra',
    lastName: 'McClure',
    fullName: 'Kyra McClure',
    gender: 'Female',
    gsm: '(047) 288-5830',
    createdAt: '2024-07-06T04:21:22.442Z',
    isActive: false,
    avatar: [
      {
        name: '80156f8d-2f95-4825-9a12-3a05a8325704',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '1506ccca-101c-45d8-9e54-d2046c433735',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/41.jpg',
      },
    ],
    addresses: [
      {
        text: '11486 Cartwright Fords, Lindenhurst, NY 11597',
        coordinate: ['40.833969332695936', '-73.94231035241494'],
      },
      {
        text: '11762 Schinner Garden, Lindenhurst, NY 11487',
        coordinate: ['40.50954831912203', '-74.24409344591764'],
      },
      {
        text: '11451 Beahan Hill, Massapequa, NY 11967',
        coordinate: ['40.820067735758684', '-73.93981529222577'],
      },
    ],
  },
  {
    id: getObjectId('customer_290'),
    firstName: 'Jared',
    lastName: 'Schiller',
    fullName: 'Jared Schiller',
    gender: 'Female',
    gsm: '(291) 143-9970',
    createdAt: '2024-06-26T09:24:41.885Z',
    isActive: true,
    avatar: [
      {
        name: 'e8842f52-4a5b-4bc7-8c51-42d5abed4bda',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'ff8e72b5-0dbf-461c-ac5f-72ddbd8ae7fc',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/313.jpg',
      },
    ],
    addresses: [
      {
        text: '11082 Davonte Loop, Brooklyn, NY 11055',
        coordinate: ['40.698260804649976', '-73.91788218792928'],
      },
      {
        text: '11812 Raphael Corner, Massapequa, NY 11877',
        coordinate: ['40.72366717557525', '-73.99207275678724'],
      },
      {
        text: '11181 Rice Corners, Massapequa, NY 11016',
        coordinate: ['40.85995458193837', '-73.81034233663169'],
      },
    ],
  },
  {
    id: getObjectId('customer_291'),
    firstName: 'Quinton',
    lastName: 'Spinka',
    fullName: 'Quinton Spinka',
    gender: 'Female',
    gsm: '(893) 316-6357',
    createdAt: '2024-06-16T07:45:35.972Z',
    isActive: false,
    avatar: [
      {
        name: '2bff7b0e-42d1-4d8a-bd0c-ff956efb8df1',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '0f39b228-edf5-4cc9-8c65-15ab87457ef0',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1106.jpg',
      },
    ],
    addresses: [
      {
        text: '11316 Goodwin Curve, Brooklyn, NY 11183',
        coordinate: ['40.72331641705996', '-73.8392178094307'],
      },
      {
        text: '11231 Bergstrom Wall, Massapequa, NY 11734',
        coordinate: ['40.605313216714116', '-73.87661395404614'],
      },
      {
        text: '11195 Lysanne Estates, Brooklyn, NY 11779',
        coordinate: ['40.88524705779494', '-73.84462210652717'],
      },
    ],
  },
  {
    id: getObjectId('customer_292'),
    firstName: 'Floyd',
    lastName: 'Upton',
    fullName: 'Floyd Upton',
    gender: 'Female',
    gsm: '(401) 225-4137',
    createdAt: '2024-06-12T18:00:04.792Z',
    isActive: false,
    avatar: [
      {
        name: '0f464d08-b77e-4dda-9eaa-7e4902ff2963',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'e4a549b5-6686-407e-a1a6-cde39ae36f62',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/513.jpg',
      },
    ],
    addresses: [
      {
        text: '11427 Huel Route, Massapequa, NY 11751',
        coordinate: ['40.73210823178464', '-73.99785822334118'],
      },
      {
        text: '11432 Frieda Skyway, Massapequa, NY 11462',
        coordinate: ['40.65344817141194', '-73.97791519886054'],
      },
      {
        text: '11474 Dickens Lodge, Massapequa, NY 11199',
        coordinate: ['40.75587993188085', '-73.7894709790709'],
      },
    ],
  },
  {
    id: getObjectId('customer_293'),
    firstName: 'Tianna',
    lastName: 'Littel',
    fullName: 'Tianna Littel',
    gender: 'Male',
    gsm: '(651) 286-3949',
    createdAt: '2024-06-08T10:21:32.314Z',
    isActive: true,
    avatar: [
      {
        name: '354e9b07-b894-4466-8d1a-28866c1e51ed',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '5fd3e63a-f22d-4155-abdc-63089b30051d',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1130.jpg',
      },
    ],
    addresses: [
      {
        text: '11293 Waelchi Path, Lindenhurst, NY 11005',
        coordinate: ['40.50330485234582', '-74.2344363479454'],
      },
      {
        text: '11797 Lorenzo Locks, Brooklyn, NY 11347',
        coordinate: ['40.747277718986986', '-73.99578762620561'],
      },
      {
        text: '11762 Schinner Garden, Lindenhurst, NY 11487',
        coordinate: ['40.50954831912203', '-74.24409344591764'],
      },
    ],
  },
  {
    id: getObjectId('customer_294'),
    firstName: 'Rowan',
    lastName: 'Farrell',
    fullName: 'Rowan Farrell',
    gender: 'Male',
    gsm: '(204) 696-9553',
    createdAt: '2024-06-16T04:10:53.407Z',
    isActive: true,
    avatar: [
      {
        name: '908ebeb6-3fc6-4205-ac90-5030c99b5d08',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'a66ac73d-02e6-4caf-b191-b9a198843e43',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/858.jpg',
      },
    ],
    addresses: [
      {
        text: '11398 Lynch Tunnel, Brooklyn, NY 11949',
        coordinate: ['40.87235326033911', '-73.92513057262607'],
      },
      {
        text: '11149 Cruickshank Burg, Lindenhurst, NY 11019',
        coordinate: ['40.78731753673706', '-73.9144110734691'],
      },
      {
        text: '11543 Judah Rapid, Massapequa, NY 11819',
        coordinate: ['40.66995340328846', '-73.91410255815497'],
      },
    ],
  },
  {
    id: getObjectId('customer_295'),
    firstName: 'River',
    lastName: 'Fay',
    fullName: 'River Fay',
    gender: 'Male',
    gsm: '(042) 945-2936',
    createdAt: '2024-06-15T09:25:33.952Z',
    isActive: false,
    avatar: [
      {
        name: '300d6a44-68c3-4e10-bc7e-9788167a7b7e',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '811c52f7-a1f2-4846-afba-d1ff3e6545d9',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/46.jpg',
      },
    ],
    addresses: [
      {
        text: '11203 Pfannerstill Stravenue, Lindenhurst, NY 11362',
        coordinate: ['40.81887624266896', '-73.93779180668098'],
      },
      {
        text: '11108 Bauch Trail, Massapequa, NY 11355',
        coordinate: ['40.81991419971737', '-73.84577566721931'],
      },
      {
        text: '11762 Schinner Garden, Lindenhurst, NY 11487',
        coordinate: ['40.50954831912203', '-74.24409344591764'],
      },
    ],
  },
  {
    id: getObjectId('customer_296'),
    firstName: 'Vada',
    lastName: 'Bogisich',
    fullName: 'Vada Bogisich',
    gender: 'Female',
    gsm: '(700) 456-8265',
    createdAt: '2024-07-03T16:30:25.738Z',
    isActive: false,
    avatar: [
      {
        name: '6103f7f6-8c7c-4888-8095-4c949159dc99',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'd5578f89-8379-4d6d-a868-a21ff7caf1b3',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/553.jpg',
      },
    ],
    addresses: [
      {
        text: '11057 Roberts Plaza, Lindenhurst, NY 11697',
        coordinate: ['40.64678681484174', '-74.08826976320468'],
      },
      {
        text: '11675 Bashirian Views, Massapequa, NY 11729',
        coordinate: ['40.65381263231815', '-73.93397585955978'],
      },
      {
        text: '11799 Mayert Plaza, Lindenhurst, NY 11934',
        coordinate: ['40.65389146392323', '-73.78928677609493'],
      },
    ],
  },
  {
    id: getObjectId('customer_297'),
    firstName: 'Ona',
    lastName: 'Rippin',
    fullName: 'Ona Rippin',
    gender: 'Female',
    gsm: '(804) 137-7281',
    createdAt: '2024-06-20T21:12:15.008Z',
    isActive: true,
    avatar: [
      {
        name: '275e762f-e48a-4df5-8ecd-536b5bf8a41b',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '46a3635a-01e9-4191-a20c-90e27a89ea86',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1138.jpg',
      },
    ],
    addresses: [
      {
        text: '11918 Becker Fort, Massapequa, NY 11466',
        coordinate: ['40.69980932047403', '-73.98458488957945'],
      },
      {
        text: '11451 Beahan Hill, Massapequa, NY 11967',
        coordinate: ['40.820067735758684', '-73.93981529222577'],
      },
      {
        text: '11927 Lemke Forges, Brooklyn, NY 11658',
        coordinate: ['40.730915473354905', '-73.95608227774139'],
      },
    ],
  },
  {
    id: getObjectId('customer_298'),
    firstName: 'Maiya',
    lastName: 'Streich',
    fullName: 'Maiya Streich',
    gender: 'Female',
    gsm: '(854) 955-2832',
    createdAt: '2024-06-11T06:12:31.068Z',
    isActive: true,
    avatar: [
      {
        name: 'c4bb2e28-c9df-4669-b0d9-fe4e2421a316',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '334a753e-cddd-44e0-a917-4b4bb3ecca47',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1094.jpg',
      },
    ],
    addresses: [
      {
        text: '11946 Little Isle, Massapequa, NY 11319',
        coordinate: ['40.81821649698436', '-73.86826310670972'],
      },
      {
        text: '11774 Koss Mission, Brooklyn, NY 11540',
        coordinate: ['40.73032437088068', '-73.99512821335122'],
      },
      {
        text: '11760 Cynthia Dam, Brooklyn, NY 11589',
        coordinate: ['40.805598122229355', '-73.96654850238752'],
      },
    ],
  },
  {
    id: getObjectId('customer_299'),
    firstName: 'Retta',
    lastName: 'Strosin',
    fullName: 'Retta Strosin',
    gender: 'Male',
    gsm: '(805) 484-0700',
    createdAt: '2024-07-05T16:17:38.307Z',
    isActive: true,
    avatar: [
      {
        name: '8abe8538-dcd5-4152-b61e-0c4194c11ad3',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '13fc8caf-f056-47a6-860f-1c411d117f93',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/342.jpg',
      },
    ],
    addresses: [
      {
        text: '11675 Bashirian Views, Massapequa, NY 11729',
        coordinate: ['40.65381263231815', '-73.93397585955978'],
      },
      {
        text: '11107 Hickle Ranch, Lindenhurst, NY 11515',
        coordinate: ['40.61088151832268', '-74.08690487977938'],
      },
      {
        text: '11384 Waelchi Rapid, Massapequa, NY 11796',
        coordinate: ['40.84590139880644', '-73.8928291967851'],
      },
    ],
  },
  {
    id: getObjectId('customer_300'),
    firstName: 'Presley',
    lastName: 'Hane',
    fullName: 'Presley Hane',
    gender: 'Female',
    gsm: '(858) 074-7822',
    createdAt: '2024-07-06T16:52:13.066Z',
    isActive: true,
    avatar: [
      {
        name: '0650402b-a056-4988-95d2-44cf573b0480',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '33051a44-e8a5-4cf2-83f5-c4889eb72e05',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/810.jpg',
      },
    ],
    addresses: [
      {
        text: '11269 Stokes Valley, Lindenhurst, NY 11154',
        coordinate: ['40.67540078261772', '-73.81703727480193'],
      },
      {
        text: '11451 Beahan Hill, Massapequa, NY 11967',
        coordinate: ['40.820067735758684', '-73.93981529222577'],
      },
      {
        text: '11056 Doyle Station, Massapequa, NY 11606',
        coordinate: ['40.85931338640661', '-73.92812829680183'],
      },
    ],
  },
  {
    id: getObjectId('customer_301'),
    firstName: 'Federico',
    lastName: 'Wiza',
    fullName: 'Federico Wiza',
    gender: 'Male',
    gsm: '(014) 946-1008',
    createdAt: '2024-06-25T15:37:52.277Z',
    isActive: false,
    avatar: [
      {
        name: '48dea0bd-326a-4adc-8fc6-7973fcf986ad',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'b4ff5503-cdee-42e1-af93-934366a61125',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1235.jpg',
      },
    ],
    addresses: [
      {
        text: '11044 Ezekiel Lodge, Brooklyn, NY 11912',
        coordinate: ['40.66138138796998', '-73.88034206938977'],
      },
      {
        text: '11148 Jon Island, Lindenhurst, NY 11812',
        coordinate: ['40.86514358177516', '-73.88437348485921'],
      },
      {
        text: '11718 Beatty Motorway, Lindenhurst, NY 11314',
        coordinate: ['40.69281598660577', '-73.82908131481418'],
      },
    ],
  },
  {
    id: getObjectId('customer_302'),
    firstName: 'Jennie',
    lastName: 'Weissnat',
    fullName: 'Jennie Weissnat',
    gender: 'Male',
    gsm: '(655) 685-3943',
    createdAt: '2024-06-23T15:46:45.408Z',
    isActive: true,
    avatar: [
      {
        name: '61dccda2-7649-4bb9-9f2e-820ff92eef17',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '2d8484d4-f488-4ca5-b748-35d0c1fab359',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/160.jpg',
      },
    ],
    addresses: [
      {
        text: '11433 Lakin Ridge, Massapequa, NY 11717',
        coordinate: ['40.72132523792435', '-73.98639367151328'],
      },
      {
        text: '11186 Nolan Crest, Lindenhurst, NY 11296',
        coordinate: ['40.59649847049655', '-74.18222476116168'],
      },
      {
        text: '11543 Judah Rapid, Massapequa, NY 11819',
        coordinate: ['40.66995340328846', '-73.91410255815497'],
      },
    ],
  },
  {
    id: getObjectId('customer_303'),
    firstName: 'Verna',
    lastName: 'Smitham',
    fullName: 'Verna Smitham',
    gender: 'Female',
    gsm: '(845) 829-9271',
    createdAt: '2024-06-12T21:32:22.891Z',
    isActive: false,
    avatar: [
      {
        name: '83773e08-09d3-430f-b993-ba3cd32e8910',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'e07f6259-890e-4f86-930d-60264ea2e155',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1216.jpg',
      },
    ],
    addresses: [
      {
        text: '11928 Zemlak Terrace, Brooklyn, NY 11083',
        coordinate: ['40.5861219668654', '-73.96563797373686'],
      },
      {
        text: '11143 Ortiz Mill, Brooklyn, NY 11207',
        coordinate: ['40.6645385558063', '-73.90402732990448'],
      },
      {
        text: '11156 Hoppe Run, Lindenhurst, NY 11165',
        coordinate: ['40.65688875879231', '-73.88404087891976'],
      },
    ],
  },
  {
    id: getObjectId('customer_304'),
    firstName: 'Jesse',
    lastName: 'Will',
    fullName: 'Jesse Will',
    gender: 'Female',
    gsm: '(276) 745-7470',
    createdAt: '2024-07-02T17:28:12.036Z',
    isActive: false,
    avatar: [
      {
        name: '1d9d0d25-0bde-4abb-9e6a-fad707031dd9',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'ae1851e6-a82b-4432-b35d-4b55e60db40f',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/324.jpg',
      },
    ],
    addresses: [
      {
        text: '11714 Cole Prairie, Lindenhurst, NY 11787',
        coordinate: ['40.779621755520346', '-73.9653953538533'],
      },
      {
        text: '11439 Aglae Radial, Brooklyn, NY 11205',
        coordinate: ['40.83247202632326', '-73.91406031894931'],
      },
      {
        text: '11149 Cruickshank Burg, Lindenhurst, NY 11019',
        coordinate: ['40.78731753673706', '-73.9144110734691'],
      },
    ],
  },
  {
    id: getObjectId('customer_305'),
    firstName: 'Rosalind',
    lastName: 'Hagenes',
    fullName: 'Rosalind Hagenes',
    gender: 'Male',
    gsm: '(929) 719-7717',
    createdAt: '2024-06-11T13:59:06.596Z',
    isActive: true,
    avatar: [
      {
        name: '952fc521-02cb-4868-bfc4-a60eee9259ca',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '12a1b413-16e0-406d-9483-601b8e74a71b',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/504.jpg',
      },
    ],
    addresses: [
      {
        text: '11374 Daniella Courts, Lindenhurst, NY 11722',
        coordinate: ['40.692405303311446', '-74.00069759444021'],
      },
      {
        text: '11878 Dudley Pike, Lindenhurst, NY 11604',
        coordinate: ['40.64716080488486', '-74.0073656851469'],
      },
      {
        text: '11426 Durgan Neck, Lindenhurst, NY 11404',
        coordinate: ['40.70361562231717', '-73.99338696768561'],
      },
    ],
  },
  {
    id: getObjectId('customer_306'),
    firstName: 'Heber',
    lastName: 'Davis',
    fullName: 'Heber Davis',
    gender: 'Male',
    gsm: '(877) 634-3435',
    createdAt: '2024-06-27T13:33:56.909Z',
    isActive: true,
    avatar: [
      {
        name: 'face5975-47a0-4d68-99b6-4699484dc886',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '2d47b0f3-2c9f-4b22-a09b-436452f2d06c',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/760.jpg',
      },
    ],
    addresses: [
      {
        text: '11044 Ezekiel Lodge, Brooklyn, NY 11912',
        coordinate: ['40.66138138796998', '-73.88034206938977'],
      },
      {
        text: '11149 Cruickshank Burg, Lindenhurst, NY 11019',
        coordinate: ['40.78731753673706', '-73.9144110734691'],
      },
      {
        text: '11021 Waelchi Crossing, Brooklyn, NY 11306',
        coordinate: ['40.77751176704511', '-73.97279729093525'],
      },
    ],
  },
  {
    id: getObjectId('customer_307'),
    firstName: 'Ethan',
    lastName: 'Morissette',
    fullName: 'Ethan Morissette',
    gender: 'Female',
    gsm: '(570) 989-5801',
    createdAt: '2024-06-08T16:38:57.435Z',
    isActive: true,
    avatar: [
      {
        name: 'ff542696-b574-4fd6-bb8c-b04df7625958',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '15e21caf-8f6e-4a71-a6ff-99d15ca82f7b',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1076.jpg',
      },
    ],
    addresses: [
      {
        text: '11998 Valentin Pike, Massapequa, NY 11868',
        coordinate: ['40.71608376674422', '-73.79906715920882'],
      },
      {
        text: '11881 Wilton Fields, Lindenhurst, NY 11176',
        coordinate: ['40.787915583564256', '-73.84583413474485'],
      },
      {
        text: '11961 Wilfred Terrace, Brooklyn, NY 11580',
        coordinate: ['40.675225426976645', '-73.91483721590403'],
      },
    ],
  },
  {
    id: getObjectId('customer_308'),
    firstName: 'Korey',
    lastName: 'Wiegand',
    fullName: 'Korey Wiegand',
    gender: 'Female',
    gsm: '(984) 849-3826',
    createdAt: '2024-06-14T23:34:48.261Z',
    isActive: false,
    avatar: [
      {
        name: '259b3640-0d39-4957-b3ac-5929a7652870',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '2f438715-a92f-41c6-8472-28b85d77d8b3',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/194.jpg',
      },
    ],
    addresses: [
      {
        text: '11693 Hartmann Park, Brooklyn, NY 11251',
        coordinate: ['40.705101590541354', '-73.98948018281791'],
      },
      {
        text: '11598 Curt Shoals, Lindenhurst, NY 11514',
        coordinate: ['40.802597877430756', '-73.93849763295711'],
      },
      {
        text: '11451 Beahan Hill, Massapequa, NY 11967',
        coordinate: ['40.820067735758684', '-73.93981529222577'],
      },
    ],
  },
  {
    id: getObjectId('customer_309'),
    firstName: 'Monte',
    lastName: 'Kautzer',
    fullName: 'Monte Kautzer',
    gender: 'Male',
    gsm: '(211) 832-4621',
    createdAt: '2024-06-29T01:09:07.383Z',
    isActive: false,
    avatar: [
      {
        name: '76313005-4916-4ee0-83c5-371f635c1357',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'cdf0c8b4-4561-4946-bacb-ea95ba0081eb',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/171.jpg',
      },
    ],
    addresses: [
      {
        text: '11246 Heathcote Crescent, Brooklyn, NY 11164',
        coordinate: ['40.70264295688686', '-73.85781194108168'],
      },
      {
        text: '11027 Jarod Walk, Lindenhurst, NY 11106',
        coordinate: ['40.54687170809551', '-74.15712690617478'],
      },
      {
        text: '11037 Dannie Ridges, Massapequa, NY 11151',
        coordinate: ['40.786868905289985', '-73.91380687271686'],
      },
    ],
  },
  {
    id: getObjectId('customer_310'),
    firstName: 'Dino',
    lastName: 'Champlin',
    fullName: 'Dino Champlin',
    gender: 'Male',
    gsm: '(867) 959-4174',
    createdAt: '2024-06-14T08:16:49.968Z',
    isActive: false,
    avatar: [
      {
        name: '9a5a2ede-b3cf-45e2-bc37-8962a0f1f0a0',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '24279005-27b0-4618-a8c9-e14f8dbf19ca',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/283.jpg',
      },
    ],
    addresses: [
      {
        text: '11077 Gerardo Mountain, Lindenhurst, NY 11372',
        coordinate: ['40.70883839875818', '-73.93976069363174'],
      },
      {
        text: '11624 Jairo Road, Lindenhurst, NY 11160',
        coordinate: ['40.823376279414674', '-73.93960148270892'],
      },
      {
        text: '11111 Meggie Passage, Massapequa, NY 11269',
        coordinate: ['40.815307692811984', '-73.9079705593338'],
      },
    ],
  },
  {
    id: getObjectId('customer_311'),
    firstName: 'Garrick',
    lastName: 'Stracke',
    fullName: 'Garrick Stracke',
    gender: 'Female',
    gsm: '(044) 937-6067',
    createdAt: '2024-06-14T22:33:59.632Z',
    isActive: false,
    avatar: [
      {
        name: '4620d8e1-2352-4b06-bbfb-2807c0f32e09',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '1cbb1f25-9dec-43ae-9af4-d7fee5d18402',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/570.jpg',
      },
    ],
    addresses: [
      {
        text: '11655 Joany Course, Brooklyn, NY 11802',
        coordinate: ['40.75627707172136', '-73.97723552936826'],
      },
      {
        text: '11914 Conn Valleys, Brooklyn, NY 11530',
        coordinate: ['40.86840746742311', '-73.87019173405666'],
      },
      {
        text: '11961 Wilfred Terrace, Brooklyn, NY 11580',
        coordinate: ['40.675225426976645', '-73.91483721590403'],
      },
    ],
  },
  {
    id: getObjectId('customer_312'),
    firstName: 'Tiffany',
    lastName: 'Robel',
    fullName: 'Tiffany Robel',
    gender: 'Male',
    gsm: '(355) 788-0744',
    createdAt: '2024-06-15T02:22:36.026Z',
    isActive: true,
    avatar: [
      {
        name: 'ed2c54ab-e4bf-4d57-b440-fc1e5c214aba',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '526dd82f-0557-4bfd-8125-7ef0c92087cb',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/784.jpg',
      },
    ],
    addresses: [
      {
        text: '11055 Schuster Gardens, Massapequa, NY 11732',
        coordinate: ['40.6365034810973', '-73.98578000769199'],
      },
      {
        text: '11772 Toy Row, Lindenhurst, NY 11384',
        coordinate: ['40.811873397132395', '-73.94826902574404'],
      },
      {
        text: '11249 Ashleigh Points, Massapequa, NY 11750',
        coordinate: ['40.70464764330371', '-73.95245354438998'],
      },
    ],
  },
  {
    id: getObjectId('customer_313'),
    firstName: 'Jonathan',
    lastName: "D'Amore",
    fullName: "Jonathan D'Amore",
    gender: 'Female',
    gsm: '(459) 450-9228',
    createdAt: '2024-07-01T20:52:17.456Z',
    isActive: true,
    avatar: [
      {
        name: 'f1a63cfc-8c03-4e08-9553-f4fc556c15d4',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '5fb2ff8d-54e8-40a8-8f61-c741167f0ec1',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/177.jpg',
      },
    ],
    addresses: [
      {
        text: '11120 Royal Coves, Lindenhurst, NY 11520',
        coordinate: ['40.63410088148846', '-73.99688826750287'],
      },
      {
        text: '11027 Cruickshank Village, Massapequa, NY 11947',
        coordinate: ['40.63550895730017', '-73.91944128289579'],
      },
      {
        text: '11598 Curt Shoals, Lindenhurst, NY 11514',
        coordinate: ['40.802597877430756', '-73.93849763295711'],
      },
    ],
  },
  {
    id: getObjectId('customer_314'),
    firstName: 'Felicia',
    lastName: 'Wiza',
    fullName: 'Felicia Wiza',
    gender: 'Female',
    gsm: '(174) 183-8132',
    createdAt: '2024-06-27T18:55:44.795Z',
    isActive: false,
    avatar: [
      {
        name: 'cdea0ae6-fe72-4ac1-b238-ad1d49d10984',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '014d592b-9c05-4fc3-adfd-142ada2cc241',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/231.jpg',
      },
    ],
    addresses: [
      {
        text: '11433 Lakin Ridge, Massapequa, NY 11717',
        coordinate: ['40.72132523792435', '-73.98639367151328'],
      },
      {
        text: '11668 Hane Common, Brooklyn, NY 11295',
        coordinate: ['40.79714029516044', '-73.93690255000283'],
      },
      {
        text: '11774 Koss Mission, Brooklyn, NY 11540',
        coordinate: ['40.73032437088068', '-73.99512821335122'],
      },
    ],
  },
  {
    id: getObjectId('customer_315'),
    firstName: 'Hershel',
    lastName: 'Kub',
    fullName: 'Hershel Kub',
    gender: 'Female',
    gsm: '(847) 929-8867',
    createdAt: '2024-07-07T16:35:13.900Z',
    isActive: false,
    avatar: [
      {
        name: '05f58a7a-2c89-4fe4-a409-dfb7c5ec371d',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '9aeac01d-aa1c-4aca-8f4e-70fe8640f15c',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1184.jpg',
      },
    ],
    addresses: [
      {
        text: '11718 Beatty Motorway, Lindenhurst, NY 11314',
        coordinate: ['40.69281598660577', '-73.82908131481418'],
      },
      {
        text: "11960 O'Conner Forest, Lindenhurst, NY 11163",
        coordinate: ['40.89309118725139', '-73.89752941514372'],
      },
      {
        text: '11918 Becker Fort, Massapequa, NY 11466',
        coordinate: ['40.69980932047403', '-73.98458488957945'],
      },
    ],
  },
  {
    id: getObjectId('customer_316'),
    firstName: 'Reese',
    lastName: 'Mohr',
    fullName: 'Reese Mohr',
    gender: 'Female',
    gsm: '(325) 636-9892',
    createdAt: '2024-06-11T09:07:26.632Z',
    isActive: false,
    avatar: [
      {
        name: '8768769c-6747-4eec-a69b-e8b5349b27e4',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '37a38f43-755d-42d2-ae27-404776298f45',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/272.jpg',
      },
    ],
    addresses: [
      {
        text: '11642 Alberta Junction, Lindenhurst, NY 11370',
        coordinate: ['40.782269303154564', '-73.92799108814602'],
      },
      {
        text: '11489 Schoen Throughway, Lindenhurst, NY 11849',
        coordinate: ['40.69130748551876', '-73.97542925623603'],
      },
      {
        text: '11576 Kerluke Summit, Massapequa, NY 11417',
        coordinate: ['40.59210466006108', '-73.99582650996682'],
      },
    ],
  },
  {
    id: getObjectId('customer_317'),
    firstName: 'Tremaine',
    lastName: 'Braun',
    fullName: 'Tremaine Braun',
    gender: 'Female',
    gsm: '(142) 258-8642',
    createdAt: '2024-06-17T16:49:21.152Z',
    isActive: true,
    avatar: [
      {
        name: '404daf1b-d116-431c-b49e-2863f9e5e071',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '41d97058-15e6-4b1a-8605-4ac070f4d460',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/614.jpg',
      },
    ],
    addresses: [
      {
        text: '11246 Heathcote Crescent, Brooklyn, NY 11164',
        coordinate: ['40.70264295688686', '-73.85781194108168'],
      },
      {
        text: '11108 Bauch Trail, Massapequa, NY 11355',
        coordinate: ['40.81991419971737', '-73.84577566721931'],
      },
      {
        text: '11228 Paucek Islands, Massapequa, NY 11666',
        coordinate: ['40.782861173910526', '-73.92808660964148'],
      },
    ],
  },
  {
    id: getObjectId('customer_318'),
    firstName: 'Beau',
    lastName: 'Denesik',
    fullName: 'Beau Denesik',
    gender: 'Male',
    gsm: '(212) 738-0943',
    createdAt: '2024-07-04T01:57:13.513Z',
    isActive: true,
    avatar: [
      {
        name: '7e7d1585-dbf3-4474-a6a2-34f9d15c8d08',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'ae61a8fd-30df-4afc-a6c6-cbb47442f9a4',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1099.jpg',
      },
    ],
    addresses: [
      {
        text: '11781 Maiya Valley, Brooklyn, NY 11844',
        coordinate: ['40.817646237824896', '-73.95265264832331'],
      },
      {
        text: '11264 Pauline Knolls, Brooklyn, NY 11384',
        coordinate: ['40.85195030781291', '-73.93088781078077'],
      },
      {
        text: '11036 Hartmann Islands, Massapequa, NY 11273',
        coordinate: ['40.80648728921871', '-73.94602283563091'],
      },
    ],
  },
  {
    id: getObjectId('customer_319'),
    firstName: 'Parker',
    lastName: 'Stark',
    fullName: 'Parker Stark',
    gender: 'Female',
    gsm: '(635) 133-7690',
    createdAt: '2024-06-28T18:27:31.160Z',
    isActive: false,
    avatar: [
      {
        name: 'a36439a5-71fb-436a-8e7f-7770f6c5e2bd',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'deb0a99b-7166-43a4-9ca7-88ba84de96e5',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/393.jpg',
      },
    ],
    addresses: [
      {
        text: '11815 Misty Ville, Massapequa, NY 11565',
        coordinate: ['40.658349139669525', '-73.88511259693168'],
      },
      {
        text: '11335 Greyson Mission, Lindenhurst, NY 11507',
        coordinate: ['40.89110181872506', '-73.8938991544214'],
      },
      {
        text: '11125 Strosin Curve, Lindenhurst, NY 11467',
        coordinate: ['40.732100034726514', '-73.9767183060347'],
      },
    ],
  },
  {
    id: getObjectId('customer_320'),
    firstName: 'Grayce',
    lastName: 'Becker',
    fullName: 'Grayce Becker',
    gender: 'Female',
    gsm: '(170) 708-2321',
    createdAt: '2024-06-30T12:01:12.556Z',
    isActive: false,
    avatar: [
      {
        name: '2a9c2281-dcf6-4090-95cf-146fda4683a4',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '79e39c6f-d931-4892-9987-64f265ec117c',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/378.jpg',
      },
    ],
    addresses: [
      {
        text: '11509 Donna Canyon, Brooklyn, NY 11024',
        coordinate: ['40.85330068757448', '-73.93352262256185'],
      },
      {
        text: '11097 Naomie Mountain, Brooklyn, NY 11492',
        coordinate: ['40.67369096200763', '-73.92525141581397'],
      },
      {
        text: '11513 Predovic Ville, Massapequa, NY 11323',
        coordinate: ['40.67469479700506', '-73.86371925992556'],
      },
    ],
  },
  {
    id: getObjectId('customer_321'),
    firstName: 'Priscilla',
    lastName: 'Heller',
    fullName: 'Priscilla Heller',
    gender: 'Male',
    gsm: '(377) 852-7848',
    createdAt: '2024-06-15T07:51:53.186Z',
    isActive: true,
    avatar: [
      {
        name: '7d64619d-314d-428e-beca-3438c5e158d8',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '02fcb28f-84a9-415a-ae93-137169a455e1',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/942.jpg',
      },
    ],
    addresses: [
      {
        text: '11998 Valentin Pike, Massapequa, NY 11868',
        coordinate: ['40.71608376674422', '-73.79906715920882'],
      },
      {
        text: '11923 Legros Divide, Brooklyn, NY 11072',
        coordinate: ['40.75081540048207', '-73.84366030192892'],
      },
      {
        text: '11505 Raynor Walk, Massapequa, NY 11815',
        coordinate: ['40.75598474475542', '-73.9358398855354'],
      },
    ],
  },
  {
    id: getObjectId('customer_322'),
    firstName: 'Oswald',
    lastName: 'Dickinson',
    fullName: 'Oswald Dickinson',
    gender: 'Male',
    gsm: '(779) 535-4369',
    createdAt: '2024-07-06T06:57:48.519Z',
    isActive: false,
    avatar: [
      {
        name: '6fa42a5a-88b7-4803-a309-8389ef730150',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'cbb076a9-c73a-4339-926a-531513db594e',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/240.jpg',
      },
    ],
    addresses: [
      {
        text: '11675 Bashirian Views, Massapequa, NY 11729',
        coordinate: ['40.65381263231815', '-73.93397585955978'],
      },
      {
        text: '11867 Kling Coves, Brooklyn, NY 11655',
        coordinate: ['40.72425809826063', '-74.0076193098343'],
      },
      {
        text: '11335 Greyson Mission, Lindenhurst, NY 11507',
        coordinate: ['40.89110181872506', '-73.8938991544214'],
      },
    ],
  },
  {
    id: getObjectId('customer_323'),
    firstName: 'Gwen',
    lastName: 'Weimann',
    fullName: 'Gwen Weimann',
    gender: 'Male',
    gsm: '(549) 678-0680',
    createdAt: '2024-06-19T11:20:52.032Z',
    isActive: false,
    avatar: [
      {
        name: '9759586b-9bdf-44af-816b-0c2a79e4f03b',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '0df43651-5de4-48b1-b5cd-8a544b3dca34',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/178.jpg',
      },
    ],
    addresses: [
      {
        text: '11735 Kailee Shoals, Brooklyn, NY 11393',
        coordinate: ['40.84785614227491', '-73.90130203986932'],
      },
      {
        text: '11270 Littel Drive, Lindenhurst, NY 11968',
        coordinate: ['40.689013432473764', '-73.91000786387228'],
      },
      {
        text: '11719 Buckridge Center, Brooklyn, NY 11760',
        coordinate: ['40.71127832019916', '-73.72859237968323'],
      },
    ],
  },
  {
    id: getObjectId('customer_324'),
    firstName: 'Afton',
    lastName: 'Runte',
    fullName: 'Afton Runte',
    gender: 'Female',
    gsm: '(881) 110-6989',
    createdAt: '2024-07-03T09:18:31.777Z',
    isActive: true,
    avatar: [
      {
        name: '792d8f4c-4cc0-41e2-8f21-117e51b7de3b',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '1943a6bc-76ce-42d2-9405-42d098fd6ba3',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1157.jpg',
      },
    ],
    addresses: [
      {
        text: '11367 Ansley Stravenue, Massapequa, NY 11350',
        coordinate: ['40.81730470420681', '-73.94741458340314'],
      },
      {
        text: "11960 O'Conner Forest, Lindenhurst, NY 11163",
        coordinate: ['40.89309118725139', '-73.89752941514372'],
      },
      {
        text: '11699 Lilly Hill, Lindenhurst, NY 11615',
        coordinate: ['40.85988139787965', '-73.85921533859519'],
      },
    ],
  },
  {
    id: getObjectId('customer_325'),
    firstName: 'Letitia',
    lastName: 'Watsica',
    fullName: 'Letitia Watsica',
    gender: 'Male',
    gsm: '(961) 077-6844',
    createdAt: '2024-06-16T16:30:43.680Z',
    isActive: true,
    avatar: [
      {
        name: 'a028f194-4816-4ea3-b51f-3095ad5dad7f',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'ae93fc1c-719c-45df-acce-eb1e3d554284',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/605.jpg',
      },
    ],
    addresses: [
      {
        text: '11367 Ansley Stravenue, Massapequa, NY 11350',
        coordinate: ['40.81730470420681', '-73.94741458340314'],
      },
      {
        text: '11675 Bashirian Views, Massapequa, NY 11729',
        coordinate: ['40.65381263231815', '-73.93397585955978'],
      },
      {
        text: '11186 Nolan Crest, Lindenhurst, NY 11296',
        coordinate: ['40.59649847049655', '-74.18222476116168'],
      },
    ],
  },
  {
    id: getObjectId('customer_326'),
    firstName: 'Vivianne',
    lastName: 'Ledner',
    fullName: 'Vivianne Ledner',
    gender: 'Male',
    gsm: '(629) 312-1039',
    createdAt: '2024-06-16T05:56:50.592Z',
    isActive: false,
    avatar: [
      {
        name: 'b5bd0716-afc9-45eb-bb44-149c1dd69ae2',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'bfbf600a-1ae2-4825-bece-7d137be690e0',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/858.jpg',
      },
    ],
    addresses: [
      {
        text: '11036 Hartmann Islands, Massapequa, NY 11273',
        coordinate: ['40.80648728921871', '-73.94602283563091'],
      },
      {
        text: '11451 Beahan Hill, Massapequa, NY 11967',
        coordinate: ['40.820067735758684', '-73.93981529222577'],
      },
      {
        text: '11879 Larry Drives, Massapequa, NY 11339',
        coordinate: ['40.66416374763622', '-73.90697071032429'],
      },
    ],
  },
  {
    id: getObjectId('customer_327'),
    firstName: 'Ayana',
    lastName: 'Baumbach',
    fullName: 'Ayana Baumbach',
    gender: 'Female',
    gsm: '(482) 150-0651',
    createdAt: '2024-06-29T21:25:23.634Z',
    isActive: true,
    avatar: [
      {
        name: 'b7d68213-cf63-4755-89cc-604bb131e6f7',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'cd63b3f6-3a7e-40b4-b3e6-bb09d31ee225',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/957.jpg',
      },
    ],
    addresses: [
      {
        text: '11085 Lenora Crossroad, Massapequa, NY 11054',
        coordinate: ['40.6717882500396', '-73.8952881573647'],
      },
      {
        text: '11384 Waelchi Rapid, Massapequa, NY 11796',
        coordinate: ['40.84590139880644', '-73.8928291967851'],
      },
      {
        text: '11913 Veum Spring, Massapequa, NY 11303',
        coordinate: ['40.66164200865502', '-74.00754412065884'],
      },
    ],
  },
  {
    id: getObjectId('customer_328'),
    firstName: 'Darron',
    lastName: "O'Kon",
    fullName: "Darron O'Kon",
    gender: 'Male',
    gsm: '(102) 959-6071',
    createdAt: '2024-07-07T03:37:56.414Z',
    isActive: false,
    avatar: [
      {
        name: 'bc84e3c6-3ca6-4cb8-96c5-ce4ac8909748',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'c98e0f78-03f4-480c-b38b-b39793ceba51',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/764.jpg',
      },
    ],
    addresses: [
      {
        text: '11096 Breanne Divide, Brooklyn, NY 11640',
        coordinate: ['40.718270507252825', '-73.90150746815962'],
      },
      {
        text: '11228 Stiedemann Valley, Brooklyn, NY 11949',
        coordinate: ['40.81821649698436', '-73.86826310670972'],
      },
      {
        text: '11961 Wilfred Terrace, Brooklyn, NY 11580',
        coordinate: ['40.675225426976645', '-73.91483721590403'],
      },
    ],
  },
  {
    id: getObjectId('customer_329'),
    firstName: 'Krystina',
    lastName: 'Jones',
    fullName: 'Krystina Jones',
    gender: 'Male',
    gsm: '(486) 807-7657',
    createdAt: '2024-06-09T09:11:25.328Z',
    isActive: false,
    avatar: [
      {
        name: '263beb0a-5d0d-49ec-a292-3a2835301be9',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '3c4f7da0-2233-498f-bbf6-d35e1f21f3f6',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/280.jpg',
      },
    ],
    addresses: [
      {
        text: '11769 Sally Villages, Massapequa, NY 11393',
        coordinate: ['40.79438834815965', '-73.9479240645321'],
      },
      {
        text: '11489 Schoen Throughway, Lindenhurst, NY 11849',
        coordinate: ['40.69130748551876', '-73.97542925623603'],
      },
      {
        text: '11228 Paucek Islands, Massapequa, NY 11666',
        coordinate: ['40.782861173910526', '-73.92808660964148'],
      },
    ],
  },
  {
    id: getObjectId('customer_330'),
    firstName: 'Emma',
    lastName: 'Heaney',
    fullName: 'Emma Heaney',
    gender: 'Female',
    gsm: '(774) 362-9105',
    createdAt: '2024-06-30T18:59:53.041Z',
    isActive: false,
    avatar: [
      {
        name: '2a24f613-0f24-4df6-85a0-d9aee829c763',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'caf40c21-d678-44eb-ab64-6294b7cd9d3f',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/684.jpg',
      },
    ],
    addresses: [
      {
        text: '11439 Aglae Radial, Brooklyn, NY 11205',
        coordinate: ['40.83247202632326', '-73.91406031894931'],
      },
      {
        text: '11149 Cruickshank Burg, Lindenhurst, NY 11019',
        coordinate: ['40.78731753673706', '-73.9144110734691'],
      },
      {
        text: '11251 Bertram Extensions, Lindenhurst, NY 11057',
        coordinate: ['40.598106469646424', '-73.77487508395032'],
      },
    ],
  },
  {
    id: getObjectId('customer_331'),
    firstName: 'Alphonso',
    lastName: 'Renner',
    fullName: 'Alphonso Renner',
    gender: 'Female',
    gsm: '(410) 702-3247',
    createdAt: '2024-07-05T16:56:27.552Z',
    isActive: false,
    avatar: [
      {
        name: '232c4c46-19d6-4531-a50c-7985b3eb591e',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'fc4dc273-23a5-4248-8b8c-76e394eb9a17',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/483.jpg',
      },
    ],
    addresses: [
      {
        text: '11269 Stokes Valley, Lindenhurst, NY 11154',
        coordinate: ['40.67540078261772', '-73.81703727480193'],
      },
      {
        text: '11693 Hartmann Park, Brooklyn, NY 11251',
        coordinate: ['40.705101590541354', '-73.98948018281791'],
      },
      {
        text: '11922 Halvorson Terrace, Brooklyn, NY 11104',
        coordinate: ['40.863466423461276', '-73.88157667321018'],
      },
    ],
  },
  {
    id: getObjectId('customer_332'),
    firstName: 'Reyes',
    lastName: 'Trantow',
    fullName: 'Reyes Trantow',
    gender: 'Male',
    gsm: '(113) 542-1838',
    createdAt: '2024-06-15T19:50:58.641Z',
    isActive: false,
    avatar: [
      {
        name: '0ac99666-9bc8-4206-95f9-e4231c599f22',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '08d8b3c7-dba3-401a-9609-3a3aeb80564c',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/840.jpg',
      },
    ],
    addresses: [
      {
        text: '11509 Donna Canyon, Brooklyn, NY 11024',
        coordinate: ['40.85330068757448', '-73.93352262256185'],
      },
      {
        text: '11918 Becker Fort, Massapequa, NY 11466',
        coordinate: ['40.69980932047403', '-73.98458488957945'],
      },
      {
        text: '11335 Greyson Mission, Lindenhurst, NY 11507',
        coordinate: ['40.89110181872506', '-73.8938991544214'],
      },
    ],
  },
  {
    id: getObjectId('customer_333'),
    firstName: 'Addison',
    lastName: 'Prosacco',
    fullName: 'Addison Prosacco',
    gender: 'Male',
    gsm: '(930) 993-9290',
    createdAt: '2024-06-17T01:06:34.756Z',
    isActive: false,
    avatar: [
      {
        name: '4b59ade1-ba31-449f-9934-532d9f6b1663',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '01a6a380-dc4c-4130-ab28-0b1ba7febf4e',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/294.jpg',
      },
    ],
    addresses: [
      {
        text: '11096 Breanne Divide, Brooklyn, NY 11640',
        coordinate: ['40.718270507252825', '-73.90150746815962'],
      },
      {
        text: '11027 Cruickshank Village, Massapequa, NY 11947',
        coordinate: ['40.63550895730017', '-73.91944128289579'],
      },
      {
        text: '11426 Durgan Neck, Lindenhurst, NY 11404',
        coordinate: ['40.70361562231717', '-73.99338696768561'],
      },
    ],
  },
  {
    id: getObjectId('customer_334'),
    firstName: 'Torey',
    lastName: 'Gerlach',
    fullName: 'Torey Gerlach',
    gender: 'Female',
    gsm: '(459) 703-3233',
    createdAt: '2024-06-21T20:03:11.867Z',
    isActive: true,
    avatar: [
      {
        name: 'e040a7cc-c5bd-4821-aeef-8b076317c732',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '4571a201-e253-4a45-ae0c-e0b1aedd3cf0',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/572.jpg',
      },
    ],
    addresses: [
      {
        text: '11812 Uriah Islands, Massapequa, NY 11134',
        coordinate: ['40.76936591609023', '-73.97395465473141'],
      },
      {
        text: '11655 Shanie Route, Brooklyn, NY 11072',
        coordinate: ['40.706302943986636', '-73.79962362002236'],
      },
      {
        text: '11269 Stokes Valley, Lindenhurst, NY 11154',
        coordinate: ['40.67540078261772', '-73.81703727480193'],
      },
    ],
  },
  {
    id: getObjectId('customer_335'),
    firstName: 'Newton',
    lastName: 'Cummerata',
    fullName: 'Newton Cummerata',
    gender: 'Male',
    gsm: '(974) 347-0840',
    createdAt: '2024-06-24T07:42:40.948Z',
    isActive: true,
    avatar: [
      {
        name: '457a86a7-ed34-4d06-86b1-64a175ad4487',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '97f7e624-069e-44ca-8f2f-aa8232600fc5',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/774.jpg',
      },
    ],
    addresses: [
      {
        text: '11797 Bart Valley, Lindenhurst, NY 11117',
        coordinate: ['40.669777801118656', '-73.92802454968135'],
      },
      {
        text: '11851 Swift Glen, Lindenhurst, NY 11624',
        coordinate: ['40.51158309370173', '-74.22091326797245'],
      },
      {
        text: '11701 Rusty Lights, Massapequa, NY 11840',
        coordinate: ['40.74921391148173', '-73.88745667351822'],
      },
    ],
  },
  {
    id: getObjectId('customer_336'),
    firstName: 'Billie',
    lastName: 'Weimann',
    fullName: 'Billie Weimann',
    gender: 'Female',
    gsm: '(011) 192-9550',
    createdAt: '2024-06-21T01:04:07.184Z',
    isActive: false,
    avatar: [
      {
        name: 'db209f18-e480-48db-84e2-8a80de01c1c7',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'c69509dd-f09a-43fa-ab8f-c9e74770d405',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1192.jpg',
      },
    ],
    addresses: [
      {
        text: '11096 Breanne Divide, Brooklyn, NY 11640',
        coordinate: ['40.718270507252825', '-73.90150746815962'],
      },
      {
        text: '11727 Schaefer Inlet, Lindenhurst, NY 11036',
        coordinate: ['40.68715261156324', '-74.00526659632791'],
      },
      {
        text: '11418 Jewel Vista, Massapequa, NY 11932',
        coordinate: ['40.82014327346224', '-73.82407376717762'],
      },
    ],
  },
  {
    id: getObjectId('customer_337'),
    firstName: 'Ezra',
    lastName: 'Wolf',
    fullName: 'Ezra Wolf',
    gender: 'Male',
    gsm: '(996) 023-7847',
    createdAt: '2024-06-14T06:39:33.152Z',
    isActive: false,
    avatar: [
      {
        name: 'a9325913-083b-4957-b605-f5a2afb39fe2',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '7107f69c-a522-4af4-8169-899f2bce8285',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/480.jpg',
      },
    ],
    addresses: [
      {
        text: '11434 Daniel Meadows, Massapequa, NY 11452',
        coordinate: ['40.687024663944904', '-73.87836555031981'],
      },
      {
        text: '11097 Naomie Mountain, Brooklyn, NY 11492',
        coordinate: ['40.67369096200763', '-73.92525141581397'],
      },
      {
        text: '11878 Dudley Pike, Lindenhurst, NY 11604',
        coordinate: ['40.64716080488486', '-74.0073656851469'],
      },
    ],
  },
  {
    id: getObjectId('customer_338'),
    firstName: 'Garth',
    lastName: 'Bahringer',
    fullName: 'Garth Bahringer',
    gender: 'Female',
    gsm: '(908) 914-4481',
    createdAt: '2024-06-22T13:10:43.123Z',
    isActive: true,
    avatar: [
      {
        name: '3fa8d1d9-1b1e-43c1-9b53-572e615e393a',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'd30f061a-d95b-4dfe-92c3-3d0ee35ff6d9',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1034.jpg',
      },
    ],
    addresses: [
      {
        text: '11642 Alberta Junction, Lindenhurst, NY 11370',
        coordinate: ['40.782269303154564', '-73.92799108814602'],
      },
      {
        text: '11148 Jon Island, Lindenhurst, NY 11812',
        coordinate: ['40.86514358177516', '-73.88437348485921'],
      },
      {
        text: '11228 Paucek Islands, Massapequa, NY 11666',
        coordinate: ['40.782861173910526', '-73.92808660964148'],
      },
    ],
  },
  {
    id: getObjectId('customer_339'),
    firstName: 'Marianna',
    lastName: 'Stiedemann',
    fullName: 'Marianna Stiedemann',
    gender: 'Male',
    gsm: '(527) 248-6884',
    createdAt: '2024-06-17T20:23:35.496Z',
    isActive: true,
    avatar: [
      {
        name: '607ffcc7-cc14-4971-9d1d-3db2abac1f95',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '510abfab-d425-417e-b4bf-df4b69bbc45d',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/515.jpg',
      },
    ],
    addresses: [
      {
        text: '11374 Daniella Courts, Lindenhurst, NY 11722',
        coordinate: ['40.692405303311446', '-74.00069759444021'],
      },
      {
        text: '11148 Jon Island, Lindenhurst, NY 11812',
        coordinate: ['40.86514358177516', '-73.88437348485921'],
      },
      {
        text: '11467 Mario Mountain, Lindenhurst, NY 11330',
        coordinate: ['40.711932851090424', '-73.9577614020571'],
      },
    ],
  },
  {
    id: getObjectId('customer_340'),
    firstName: 'Casper',
    lastName: 'Bogan',
    fullName: 'Casper Bogan',
    gender: 'Male',
    gsm: '(405) 822-7227',
    createdAt: '2024-06-14T03:14:49.822Z',
    isActive: true,
    avatar: [
      {
        name: '237a5ea8-cd94-4cec-8c4d-70dd187af4d4',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'a80c2603-37fe-4668-b7ed-f6d6b655dfe5',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/966.jpg',
      },
    ],
    addresses: [
      {
        text: '11270 Littel Drive, Lindenhurst, NY 11968',
        coordinate: ['40.689013432473764', '-73.91000786387228'],
      },
      {
        text: '11412 Spencer Skyway, Lindenhurst, NY 11312',
        coordinate: ['40.615431898170364', '-73.92934453739576'],
      },
      {
        text: '11898 Chelsea Plain, Lindenhurst, NY 11735',
        coordinate: ['40.875525570218045', '-73.86179079437676'],
      },
    ],
  },
  {
    id: getObjectId('customer_341'),
    firstName: 'Charles',
    lastName: 'Pfeffer',
    fullName: 'Charles Pfeffer',
    gender: 'Male',
    gsm: '(173) 320-1001',
    createdAt: '2024-06-09T22:02:38.923Z',
    isActive: true,
    avatar: [
      {
        name: '57af55c9-fa89-4fcc-9ae1-046062596185',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '8763aacc-7e7e-49f6-b591-1b24e654f107',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/718.jpg',
      },
    ],
    addresses: [
      {
        text: '11898 Chelsea Plain, Lindenhurst, NY 11735',
        coordinate: ['40.875525570218045', '-73.86179079437676'],
      },
      {
        text: '11955 Cali Plaza, Massapequa, NY 11892',
        coordinate: ['40.832985445011836', '-73.90333101877235'],
      },
      {
        text: '11121 Ledner Islands, Massapequa, NY 11687',
        coordinate: ['40.667502035176184', '-73.89399724199065'],
      },
    ],
  },
  {
    id: getObjectId('customer_342'),
    firstName: 'Leonora',
    lastName: 'McCullough',
    fullName: 'Leonora McCullough',
    gender: 'Female',
    gsm: '(731) 059-4469',
    createdAt: '2024-06-19T02:32:05.561Z',
    isActive: true,
    avatar: [
      {
        name: '1ef80b38-f4cc-459c-ab45-aa720ab8d9e9',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'de7cf7a7-fee7-411a-842d-f7cb652c65cd',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/110.jpg',
      },
    ],
    addresses: [
      {
        text: '11461 Remington Mews, Lindenhurst, NY 11244',
        coordinate: ['40.63232866257922', '-73.92392166069966'],
      },
      {
        text: '11918 Becker Fort, Massapequa, NY 11466',
        coordinate: ['40.69980932047403', '-73.98458488957945'],
      },
      {
        text: '11879 Larry Drives, Massapequa, NY 11339',
        coordinate: ['40.66416374763622', '-73.90697071032429'],
      },
    ],
  },
  {
    id: getObjectId('customer_343'),
    firstName: 'Myriam',
    lastName: 'Haag',
    fullName: 'Myriam Haag',
    gender: 'Female',
    gsm: '(325) 112-5343',
    createdAt: '2024-06-12T05:57:40.331Z',
    isActive: true,
    avatar: [
      {
        name: 'f4b120ce-1ba2-44c8-ba5f-5f11ade678b6',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'c6ab8bfd-15f6-4ea0-87d9-d13c005de4d4',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/182.jpg',
      },
    ],
    addresses: [
      {
        text: '11031 Feil Crossing, Lindenhurst, NY 11251',
        coordinate: ['40.83451001107047', '-73.91770528927904'],
      },
      {
        text: '11776 Wilderman Prairie, Lindenhurst, NY 11562',
        coordinate: ['40.66945134822127', '-73.93551047298159'],
      },
      {
        text: '11186 Nolan Crest, Lindenhurst, NY 11296',
        coordinate: ['40.59649847049655', '-74.18222476116168'],
      },
    ],
  },
  {
    id: getObjectId('customer_344'),
    firstName: 'Declan',
    lastName: 'Labadie',
    fullName: 'Declan Labadie',
    gender: 'Female',
    gsm: '(788) 644-2072',
    createdAt: '2024-07-07T04:10:05.986Z',
    isActive: true,
    avatar: [
      {
        name: 'cf9b66da-4205-4f14-b70f-7546d77d2c65',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'fbb355c5-6517-45e2-b85e-c62c325582dd',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1185.jpg',
      },
    ],
    addresses: [
      {
        text: '11398 Lynch Tunnel, Brooklyn, NY 11949',
        coordinate: ['40.87235326033911', '-73.92513057262607'],
      },
      {
        text: '11733 Walker Cove, Massapequa, NY 11322',
        coordinate: ['40.56648613912078', '-73.87751470966245'],
      },
      {
        text: '11060 Pacocha Path, Massapequa, NY 11383',
        coordinate: ['40.712642654476035', '-74.01303533708099'],
      },
    ],
  },
  {
    id: getObjectId('customer_345'),
    firstName: 'Lewis',
    lastName: 'McGlynn',
    fullName: 'Lewis McGlynn',
    gender: 'Female',
    gsm: '(199) 953-6802',
    createdAt: '2024-06-16T02:12:41.567Z',
    isActive: true,
    avatar: [
      {
        name: '5ef3d636-a259-4b05-ab19-85353da73e15',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'd9ef7b9f-72b0-4d14-8ea7-2916145af465',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/745.jpg',
      },
    ],
    addresses: [
      {
        text: '11693 Hartmann Park, Brooklyn, NY 11251',
        coordinate: ['40.705101590541354', '-73.98948018281791'],
      },
      {
        text: '11418 Alena Branch, Massapequa, NY 11197',
        coordinate: ['40.7831303248025', '-73.96435879895469'],
      },
      {
        text: '11128 Shayna Motorway, Lindenhurst, NY 11101',
        coordinate: ['40.70373038121957', '-73.99378591068276'],
      },
    ],
  },
  {
    id: getObjectId('customer_346'),
    firstName: 'Linwood',
    lastName: 'Johns',
    fullName: 'Linwood Johns',
    gender: 'Male',
    gsm: '(683) 488-2214',
    createdAt: '2024-06-27T19:13:35.631Z',
    isActive: false,
    avatar: [
      {
        name: '24b47791-4d69-44dc-8be7-12d96ed75f4b',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '12055b95-ad09-461f-9de1-6636716100c1',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/635.jpg',
      },
    ],
    addresses: [
      {
        text: '11815 Misty Ville, Massapequa, NY 11565',
        coordinate: ['40.658349139669525', '-73.88511259693168'],
      },
      {
        text: '11269 Stokes Valley, Lindenhurst, NY 11154',
        coordinate: ['40.67540078261772', '-73.81703727480193'],
      },
      {
        text: "11683 D'Amore Summit, Massapequa, NY 11567",
        coordinate: ['40.8048782862543', '-73.94804034964574'],
      },
    ],
  },
  {
    id: getObjectId('customer_347'),
    firstName: 'Manuel',
    lastName: "O'Hara",
    fullName: "Manuel O'Hara",
    gender: 'Male',
    gsm: '(163) 726-4788',
    createdAt: '2024-07-02T22:29:41.926Z',
    isActive: false,
    avatar: [
      {
        name: '1956346a-ac38-4dff-bc3c-69d465f13150',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '8b484e32-6adc-4409-b09e-91e9c88409b9',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/406.jpg',
      },
    ],
    addresses: [
      {
        text: '11112 Delaney Harbor, Massapequa, NY 11829',
        coordinate: ['40.652031760121595', '-74.00733653133325'],
      },
      {
        text: '11023 Reilly Freeway, Brooklyn, NY 11304',
        coordinate: ['40.708836427424856', '-73.95736505455008'],
      },
      {
        text: '11878 Pagac Trail, Lindenhurst, NY 11876',
        coordinate: ['40.71114281327269', '-74.01648182914843'],
      },
    ],
  },
  {
    id: getObjectId('customer_348'),
    firstName: 'Keanu',
    lastName: 'Kuvalis',
    fullName: 'Keanu Kuvalis',
    gender: 'Male',
    gsm: '(483) 651-4220',
    createdAt: '2024-07-02T22:12:26.734Z',
    isActive: false,
    avatar: [
      {
        name: '32e28b7d-4505-4114-bc3f-ed5b75e92574',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'c58dc0a0-fa79-4596-a840-7c236c385285',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1163.jpg',
      },
    ],
    addresses: [
      {
        text: '11851 Swift Glen, Lindenhurst, NY 11624',
        coordinate: ['40.51158309370173', '-74.22091326797245'],
      },
      {
        text: '11166 Cormier Plaza, Lindenhurst, NY 11278',
        coordinate: ['40.86255321747302', '-73.8648318412901'],
      },
      {
        text: '11718 Beatty Motorway, Lindenhurst, NY 11314',
        coordinate: ['40.69281598660577', '-73.82908131481418'],
      },
    ],
  },
  {
    id: getObjectId('customer_349'),
    firstName: 'Corrine',
    lastName: "O'Keefe",
    fullName: "Corrine O'Keefe",
    gender: 'Female',
    gsm: '(020) 002-0245',
    createdAt: '2024-06-19T04:52:59.081Z',
    isActive: true,
    avatar: [
      {
        name: '9f539402-e01b-4a4a-b6ed-d6ea5f33beb8',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '183278d1-6850-41d5-8ecd-121d94d49e69',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1125.jpg',
      },
    ],
    addresses: [
      {
        text: '11769 Sally Villages, Massapequa, NY 11393',
        coordinate: ['40.79438834815965', '-73.9479240645321'],
      },
      {
        text: '11031 Feil Crossing, Lindenhurst, NY 11251',
        coordinate: ['40.83451001107047', '-73.91770528927904'],
      },
      {
        text: '11764 Roberts Centers, Lindenhurst, NY 11071',
        coordinate: ['40.707840293833634', '-73.75019856878251'],
      },
    ],
  },
  {
    id: getObjectId('customer_350'),
    firstName: 'Julian',
    lastName: 'Hickle',
    fullName: 'Julian Hickle',
    gender: 'Male',
    gsm: '(189) 720-5057',
    createdAt: '2024-06-23T14:50:53.764Z',
    isActive: true,
    avatar: [
      {
        name: 'b7c7a8bb-1343-4e56-82be-b2c87193eab3',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'b15be436-4275-4faa-91e3-f1a822669136',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/157.jpg',
      },
    ],
    addresses: [
      {
        text: "11846 O'Hara Rapid, Brooklyn, NY 11231",
        coordinate: ['40.87355454025907', '-73.92984534052623'],
      },
      {
        text: '11269 Stokes Valley, Lindenhurst, NY 11154',
        coordinate: ['40.67540078261772', '-73.81703727480193'],
      },
      {
        text: '11913 Veum Spring, Massapequa, NY 11303',
        coordinate: ['40.66164200865502', '-74.00754412065884'],
      },
    ],
  },
  {
    id: getObjectId('customer_351'),
    firstName: 'Reba',
    lastName: 'Renner',
    fullName: 'Reba Renner',
    gender: 'Female',
    gsm: '(137) 109-6289',
    createdAt: '2024-06-27T06:27:29.331Z',
    isActive: false,
    avatar: [
      {
        name: '900d2800-bedc-4a7a-94cf-aea87ac41b4c',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '449254dd-616c-4b50-92fd-159618d124a3',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/252.jpg',
      },
    ],
    addresses: [
      {
        text: '11618 Hoeger Lights, Massapequa, NY 11449',
        coordinate: ['40.627049675070175', '-73.98253459810051'],
      },
      {
        text: '11120 Royal Coves, Lindenhurst, NY 11520',
        coordinate: ['40.63410088148846', '-73.99688826750287'],
      },
      {
        text: '11195 Lysanne Estates, Brooklyn, NY 11779',
        coordinate: ['40.88524705779494', '-73.84462210652717'],
      },
    ],
  },
  {
    id: getObjectId('customer_352'),
    firstName: 'Lilyan',
    lastName: 'Strosin',
    fullName: 'Lilyan Strosin',
    gender: 'Male',
    gsm: '(409) 870-7588',
    createdAt: '2024-06-18T01:54:50.234Z',
    isActive: false,
    avatar: [
      {
        name: 'f1beb8e6-b460-41af-9bb7-0b4afccb2a46',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '0305b6de-9371-4d96-a8f6-895f90aa7bd3',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/764.jpg',
      },
    ],
    addresses: [
      {
        text: '11246 Heathcote Crescent, Brooklyn, NY 11164',
        coordinate: ['40.70264295688686', '-73.85781194108168'],
      },
      {
        text: "11846 O'Hara Rapid, Brooklyn, NY 11231",
        coordinate: ['40.87355454025907', '-73.92984534052623'],
      },
      {
        text: '11024 Gerald Pike, Brooklyn, NY 11160',
        coordinate: ['40.58348466152282', '-73.93320807895984'],
      },
    ],
  },
  {
    id: getObjectId('customer_353'),
    firstName: 'Danial',
    lastName: 'Morar',
    fullName: 'Danial Morar',
    gender: 'Male',
    gsm: '(297) 995-1440',
    createdAt: '2024-06-11T11:10:20.103Z',
    isActive: true,
    avatar: [
      {
        name: '78597953-8987-4ec2-8f43-89bed75b44ce',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '469a028a-1123-4403-9e94-8d88a90aee70',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/847.jpg',
      },
    ],
    addresses: [
      {
        text: '11486 Cartwright Fords, Lindenhurst, NY 11597',
        coordinate: ['40.833969332695936', '-73.94231035241494'],
      },
      {
        text: '11512 Jenkins Lights, Massapequa, NY 11737',
        coordinate: ['40.71003074009839', '-73.94229615777373'],
      },
      {
        text: '11718 Beatty Motorway, Lindenhurst, NY 11314',
        coordinate: ['40.69281598660577', '-73.82908131481418'],
      },
    ],
  },
  {
    id: getObjectId('customer_354'),
    firstName: 'Jayne',
    lastName: 'Lang',
    fullName: 'Jayne Lang',
    gender: 'Female',
    gsm: '(595) 105-0258',
    createdAt: '2024-06-13T04:11:53.748Z',
    isActive: true,
    avatar: [
      {
        name: 'fd6e45ec-cec4-46cd-ba6e-f0fd62c7f13c',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '504a5cc5-b75d-495e-9db4-cfa7b8d7d1b7',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/467.jpg',
      },
    ],
    addresses: [
      {
        text: '11923 Legros Divide, Brooklyn, NY 11072',
        coordinate: ['40.75081540048207', '-73.84366030192892'],
      },
      {
        text: '11914 Conn Valleys, Brooklyn, NY 11530',
        coordinate: ['40.86840746742311', '-73.87019173405666'],
      },
      {
        text: '11120 Royal Coves, Lindenhurst, NY 11520',
        coordinate: ['40.63410088148846', '-73.99688826750287'],
      },
    ],
  },
  {
    id: getObjectId('customer_355'),
    firstName: 'Liam',
    lastName: 'Howe',
    fullName: 'Liam Howe',
    gender: 'Female',
    gsm: '(636) 152-1934',
    createdAt: '2024-06-27T10:21:38.654Z',
    isActive: true,
    avatar: [
      {
        name: '7297fc3c-6f03-494d-b449-ea54cc17112c',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '18a6d284-b6ed-48ff-854f-281271151e42',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/271.jpg',
      },
    ],
    addresses: [
      {
        text: '11859 Abbie Station, Brooklyn, NY 11161',
        coordinate: ['40.68771299502717', '-74.04721511862215'],
      },
      {
        text: '11027 Jarod Walk, Lindenhurst, NY 11106',
        coordinate: ['40.54687170809551', '-74.15712690617478'],
      },
      {
        text: '11762 Schinner Garden, Lindenhurst, NY 11487',
        coordinate: ['40.50954831912203', '-74.24409344591764'],
      },
    ],
  },
  {
    id: getObjectId('customer_356'),
    firstName: 'Gerald',
    lastName: 'Ankunding',
    fullName: 'Gerald Ankunding',
    gender: 'Male',
    gsm: '(883) 333-9261',
    createdAt: '2024-07-03T07:41:53.435Z',
    isActive: false,
    avatar: [
      {
        name: '1035d087-1126-41e6-90e9-107f44058d6e',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'a7c613c5-fe2b-42f3-93ac-c22636439891',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/854.jpg',
      },
    ],
    addresses: [
      {
        text: '11135 Reichert Course, Brooklyn, NY 11720',
        coordinate: ['40.737206062011865', '-73.84886438595831'],
      },
      {
        text: '11125 Strosin Curve, Lindenhurst, NY 11467',
        coordinate: ['40.732100034726514', '-73.9767183060347'],
      },
      {
        text: '11776 Wilderman Prairie, Lindenhurst, NY 11562',
        coordinate: ['40.66945134822127', '-73.93551047298159'],
      },
    ],
  },
  {
    id: getObjectId('customer_357'),
    firstName: 'Theo',
    lastName: 'Schimmel',
    fullName: 'Theo Schimmel',
    gender: 'Female',
    gsm: '(952) 352-8702',
    createdAt: '2024-07-04T01:00:43.666Z',
    isActive: true,
    avatar: [
      {
        name: 'b4a9612c-88a9-40f5-9405-575af5d50ade',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '7240e559-fa56-4c61-9bc7-98a153f2bc64',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/874.jpg',
      },
    ],
    addresses: [
      {
        text: '11851 Swift Glen, Lindenhurst, NY 11624',
        coordinate: ['40.51158309370173', '-74.22091326797245'],
      },
      {
        text: '11958 Hintz Light, Massapequa, NY 11935',
        coordinate: ['40.875917577275104', '-73.82848174189849'],
      },
      {
        text: '11719 Buckridge Center, Brooklyn, NY 11760',
        coordinate: ['40.71127832019916', '-73.72859237968323'],
      },
    ],
  },
  {
    id: getObjectId('customer_358'),
    firstName: 'Candelario',
    lastName: 'Ullrich',
    fullName: 'Candelario Ullrich',
    gender: 'Female',
    gsm: '(940) 778-5172',
    createdAt: '2024-06-17T21:55:05.343Z',
    isActive: false,
    avatar: [
      {
        name: '7a924386-5ce4-4c2b-b445-b1860679d815',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '13c49f09-a1ec-46fb-8c65-c73cf3550bfc',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/943.jpg',
      },
    ],
    addresses: [
      {
        text: '11174 Wilkinson Locks, Lindenhurst, NY 11527',
        coordinate: ['40.696832261046126', '-73.94037102754282'],
      },
      {
        text: '11031 Feil Crossing, Lindenhurst, NY 11251',
        coordinate: ['40.83451001107047', '-73.91770528927904'],
      },
      {
        text: '11799 Mayert Plaza, Lindenhurst, NY 11934',
        coordinate: ['40.65389146392323', '-73.78928677609493'],
      },
    ],
  },
  {
    id: getObjectId('customer_359'),
    firstName: 'Marcia',
    lastName: 'Pouros',
    fullName: 'Marcia Pouros',
    gender: 'Female',
    gsm: '(609) 596-0932',
    createdAt: '2024-06-19T04:50:56.401Z',
    isActive: true,
    avatar: [
      {
        name: 'fedd003d-2fe2-4e58-af15-1a39d55f5964',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'bcc68712-5cdc-401f-8fb7-b6fa4ff0422e',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/639.jpg',
      },
    ],
    addresses: [
      {
        text: '11719 Buckridge Center, Brooklyn, NY 11760',
        coordinate: ['40.71127832019916', '-73.72859237968323'],
      },
      {
        text: '11027 Cruickshank Village, Massapequa, NY 11947',
        coordinate: ['40.63550895730017', '-73.91944128289579'],
      },
      {
        text: '11037 Dannie Ridges, Massapequa, NY 11151',
        coordinate: ['40.786868905289985', '-73.91380687271686'],
      },
    ],
  },
  {
    id: getObjectId('customer_360'),
    firstName: 'Veda',
    lastName: 'Waters',
    fullName: 'Veda Waters',
    gender: 'Female',
    gsm: '(180) 364-7420',
    createdAt: '2024-06-18T10:10:19.746Z',
    isActive: false,
    avatar: [
      {
        name: '3ebad839-d17e-44f5-abdf-b341fbcfb943',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'de632a17-00c8-4e07-b765-d38e5efe4473',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/780.jpg',
      },
    ],
    addresses: [
      {
        text: '11878 Dudley Pike, Lindenhurst, NY 11604',
        coordinate: ['40.64716080488486', '-74.0073656851469'],
      },
      {
        text: '11439 Aglae Radial, Brooklyn, NY 11205',
        coordinate: ['40.83247202632326', '-73.91406031894931'],
      },
      {
        text: '11762 Schinner Garden, Lindenhurst, NY 11487',
        coordinate: ['40.50954831912203', '-74.24409344591764'],
      },
    ],
  },
  {
    id: getObjectId('customer_361'),
    firstName: 'Florian',
    lastName: 'Schimmel',
    fullName: 'Florian Schimmel',
    gender: 'Male',
    gsm: '(510) 467-5679',
    createdAt: '2024-06-23T15:12:26.300Z',
    isActive: false,
    avatar: [
      {
        name: '14673b76-bc95-4fc1-8e2d-0cd31a17cbdb',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'c9a92fe6-b871-412c-a2dd-9cfa827614de',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1040.jpg',
      },
    ],
    addresses: [
      {
        text: '11427 Huel Route, Massapequa, NY 11751',
        coordinate: ['40.73210823178464', '-73.99785822334118'],
      },
      {
        text: '11598 Curt Shoals, Lindenhurst, NY 11514',
        coordinate: ['40.802597877430756', '-73.93849763295711'],
      },
      {
        text: '11835 Powlowski Extension, Brooklyn, NY 11150',
        coordinate: ['40.76245015151365', '-73.87061296246294'],
      },
    ],
  },
  {
    id: getObjectId('customer_362'),
    firstName: 'Velva',
    lastName: 'Ondricka',
    fullName: 'Velva Ondricka',
    gender: 'Male',
    gsm: '(120) 693-8058',
    createdAt: '2024-06-24T09:12:23.873Z',
    isActive: true,
    avatar: [
      {
        name: '39c8e173-35e1-438a-afac-45bbf79b4821',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '7b13c0b4-60dd-48f9-9a3b-fc4775430166',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/852.jpg',
      },
    ],
    addresses: [
      {
        text: '11316 Goodwin Curve, Brooklyn, NY 11183',
        coordinate: ['40.72331641705996', '-73.8392178094307'],
      },
      {
        text: '11914 Conn Valleys, Brooklyn, NY 11530',
        coordinate: ['40.86840746742311', '-73.87019173405666'],
      },
      {
        text: '11085 Lenora Crossroad, Massapequa, NY 11054',
        coordinate: ['40.6717882500396', '-73.8952881573647'],
      },
    ],
  },
  {
    id: getObjectId('customer_363'),
    firstName: 'Karina',
    lastName: 'Carter',
    fullName: 'Karina Carter',
    gender: 'Male',
    gsm: '(422) 430-7563',
    createdAt: '2024-06-24T05:32:39.327Z',
    isActive: false,
    avatar: [
      {
        name: '5d4158a3-9203-455f-b3a2-ff09f4adecb4',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'd5d75740-4439-4bbf-92d7-1090db46b5ec',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/741.jpg',
      },
    ],
    addresses: [
      {
        text: '11143 Ortiz Mill, Brooklyn, NY 11207',
        coordinate: ['40.6645385558063', '-73.90402732990448'],
      },
      {
        text: '11489 Schoen Throughway, Lindenhurst, NY 11849',
        coordinate: ['40.69130748551876', '-73.97542925623603'],
      },
      {
        text: '11108 Bauch Trail, Massapequa, NY 11355',
        coordinate: ['40.81991419971737', '-73.84577566721931'],
      },
    ],
  },
  {
    id: getObjectId('customer_364'),
    firstName: 'Alan',
    lastName: 'Schiller',
    fullName: 'Alan Schiller',
    gender: 'Male',
    gsm: '(558) 678-7406',
    createdAt: '2024-06-27T04:32:27.793Z',
    isActive: false,
    avatar: [
      {
        name: '8b75d467-8c85-4bef-8384-a4b69b7d3bb4',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '47945e6b-cb53-4f42-935c-5da8493014b3',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1046.jpg',
      },
    ],
    addresses: [
      {
        text: '11881 Wilton Fields, Lindenhurst, NY 11176',
        coordinate: ['40.787915583564256', '-73.84583413474485'],
      },
      {
        text: '11872 Roman Hollow, Massapequa, NY 11919',
        coordinate: ['40.714641774419576', '-73.99642976897374'],
      },
      {
        text: '11799 Mayert Plaza, Lindenhurst, NY 11934',
        coordinate: ['40.65389146392323', '-73.78928677609493'],
      },
    ],
  },
  {
    id: getObjectId('customer_365'),
    firstName: 'Tianna',
    lastName: 'Witting',
    fullName: 'Tianna Witting',
    gender: 'Male',
    gsm: '(896) 825-4618',
    createdAt: '2024-06-28T23:22:24.498Z',
    isActive: false,
    avatar: [
      {
        name: 'e5026972-2363-4f61-a8fe-f737b99a11d1',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '56b6be2b-8530-4746-abbd-c653fc115b1a',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/410.jpg',
      },
    ],
    addresses: [
      {
        text: '11623 Darien Cliffs, Lindenhurst, NY 11575',
        coordinate: ['40.70056831070206', '-73.9853693094361'],
      },
      {
        text: '11624 Jairo Road, Lindenhurst, NY 11160',
        coordinate: ['40.823376279414674', '-73.93960148270892'],
      },
      {
        text: '11961 Wilfred Terrace, Brooklyn, NY 11580',
        coordinate: ['40.675225426976645', '-73.91483721590403'],
      },
    ],
  },
  {
    id: getObjectId('customer_366'),
    firstName: 'Giovani',
    lastName: 'Hamill',
    fullName: 'Giovani Hamill',
    gender: 'Male',
    gsm: '(561) 385-1291',
    createdAt: '2024-06-10T05:50:44.252Z',
    isActive: true,
    avatar: [
      {
        name: '7efaac4b-f332-42cf-a155-6fcdd1193610',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '9f936d1a-1c35-4165-b29c-8764fc5d1922',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/389.jpg',
      },
    ],
    addresses: [
      {
        text: '11036 Hartmann Islands, Massapequa, NY 11273',
        coordinate: ['40.80648728921871', '-73.94602283563091'],
      },
      {
        text: '11045 Johnston Key, Lindenhurst, NY 11539',
        coordinate: ['40.84398642270739', '-73.83864402262044'],
      },
      {
        text: '11269 Stokes Valley, Lindenhurst, NY 11154',
        coordinate: ['40.67540078261772', '-73.81703727480193'],
      },
    ],
  },
  {
    id: getObjectId('customer_367'),
    firstName: 'Deven',
    lastName: "O'Connell",
    fullName: "Deven O'Connell",
    gender: 'Female',
    gsm: '(627) 893-0414',
    createdAt: '2024-06-11T16:23:52.320Z',
    isActive: true,
    avatar: [
      {
        name: '8288da5f-a0da-44b4-98e0-468f48d0eeaa',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '15204d83-b5f0-42aa-a4a2-67c3685671d7',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1010.jpg',
      },
    ],
    addresses: [
      {
        text: '11461 Remington Mews, Lindenhurst, NY 11244',
        coordinate: ['40.63232866257922', '-73.92392166069966'],
      },
      {
        text: '11530 Mueller Port, Massapequa, NY 11184',
        coordinate: ['40.76449980110699', '-73.96908694706285'],
      },
      {
        text: '11719 Buckridge Center, Brooklyn, NY 11760',
        coordinate: ['40.71127832019916', '-73.72859237968323'],
      },
    ],
  },
  {
    id: getObjectId('customer_368'),
    firstName: 'Marvin',
    lastName: 'Wisozk',
    fullName: 'Marvin Wisozk',
    gender: 'Male',
    gsm: '(360) 683-0013',
    createdAt: '2024-07-01T06:29:51.536Z',
    isActive: false,
    avatar: [
      {
        name: '9fe56083-2086-436b-9541-a8785fc904f3',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '9e8ff333-0c77-423d-a49e-3d4fbd8b241f',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/406.jpg',
      },
    ],
    addresses: [
      {
        text: '11378 Ellie Spring, Lindenhurst, NY 11784',
        coordinate: ['40.77936951467395', '-73.97694544805309'],
      },
      {
        text: '11432 Frieda Skyway, Massapequa, NY 11462',
        coordinate: ['40.65344817141194', '-73.97791519886054'],
      },
      {
        text: '11958 Hintz Light, Massapequa, NY 11935',
        coordinate: ['40.875917577275104', '-73.82848174189849'],
      },
    ],
  },
  {
    id: getObjectId('customer_369'),
    firstName: 'Stephen',
    lastName: 'Ruecker',
    fullName: 'Stephen Ruecker',
    gender: 'Female',
    gsm: '(665) 614-3357',
    createdAt: '2024-06-14T07:38:10.796Z',
    isActive: true,
    avatar: [
      {
        name: '3e6676a0-3fc5-4d5e-b063-adbd110a9452',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'dbb56b8e-17c4-494d-9c3c-603144185de9',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/865.jpg',
      },
    ],
    addresses: [
      {
        text: '11374 Daniella Courts, Lindenhurst, NY 11722',
        coordinate: ['40.692405303311446', '-74.00069759444021'],
      },
      {
        text: '11367 Ansley Stravenue, Massapequa, NY 11350',
        coordinate: ['40.81730470420681', '-73.94741458340314'],
      },
      {
        text: '11733 Walker Cove, Massapequa, NY 11322',
        coordinate: ['40.56648613912078', '-73.87751470966245'],
      },
    ],
  },
  {
    id: getObjectId('customer_370'),
    firstName: 'Meghan',
    lastName: 'Flatley',
    fullName: 'Meghan Flatley',
    gender: 'Female',
    gsm: '(156) 185-1256',
    createdAt: '2024-06-18T11:30:36.182Z',
    isActive: true,
    avatar: [
      {
        name: '565a81c3-9f9e-4d6d-8e4e-1119c1f774a8',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '72fc39e0-b5f9-495a-a47d-403cfee37b99',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/566.jpg',
      },
    ],
    addresses: [
      {
        text: '11108 Bauch Trail, Massapequa, NY 11355',
        coordinate: ['40.81991419971737', '-73.84577566721931'],
      },
      {
        text: '11821 Ryan Throughway, Brooklyn, NY 11863',
        coordinate: ['40.824547968663495', '-73.9087967521559'],
      },
      {
        text: '11543 Judah Rapid, Massapequa, NY 11819',
        coordinate: ['40.66995340328846', '-73.91410255815497'],
      },
    ],
  },
  {
    id: getObjectId('customer_371'),
    firstName: 'Ian',
    lastName: 'Keebler',
    fullName: 'Ian Keebler',
    gender: 'Male',
    gsm: '(385) 717-8096',
    createdAt: '2024-06-25T01:25:40.883Z',
    isActive: false,
    avatar: [
      {
        name: 'be97891e-95ec-4a60-8939-9ceca1502bd3',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'a2ea93f2-1f5e-4aa9-84ca-57bb5a12c7be',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/973.jpg',
      },
    ],
    addresses: [
      {
        text: '11045 Johnston Key, Lindenhurst, NY 11539',
        coordinate: ['40.84398642270739', '-73.83864402262044'],
      },
      {
        text: "11960 O'Conner Forest, Lindenhurst, NY 11163",
        coordinate: ['40.89309118725139', '-73.89752941514372'],
      },
      {
        text: '11598 Curt Shoals, Lindenhurst, NY 11514',
        coordinate: ['40.802597877430756', '-73.93849763295711'],
      },
    ],
  },
  {
    id: getObjectId('customer_372'),
    firstName: 'Alexander',
    lastName: 'Gerhold',
    fullName: 'Alexander Gerhold',
    gender: 'Male',
    gsm: '(552) 301-3205',
    createdAt: '2024-06-21T22:56:09.007Z',
    isActive: false,
    avatar: [
      {
        name: '353a15dd-3cac-42c9-8397-c1710a334ec0',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'df37eba1-edd1-445d-9bc2-6d7ccf4adba0',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/181.jpg',
      },
    ],
    addresses: [
      {
        text: '11057 Roberts Plaza, Lindenhurst, NY 11697',
        coordinate: ['40.64678681484174', '-74.08826976320468'],
      },
      {
        text: '11021 Waelchi Crossing, Brooklyn, NY 11306',
        coordinate: ['40.77751176704511', '-73.97279729093525'],
      },
      {
        text: '11467 Mario Mountain, Lindenhurst, NY 11330',
        coordinate: ['40.711932851090424', '-73.9577614020571'],
      },
    ],
  },
  {
    id: getObjectId('customer_373'),
    firstName: 'Jalyn',
    lastName: 'Rempel',
    fullName: 'Jalyn Rempel',
    gender: 'Male',
    gsm: '(518) 789-0981',
    createdAt: '2024-07-04T16:24:04.174Z',
    isActive: true,
    avatar: [
      {
        name: '3a41d336-f169-481e-85bf-85f0dff66a6c',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '6cc04ff8-2168-4f80-ad47-40ef8cfa1481',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/68.jpg',
      },
    ],
    addresses: [
      {
        text: '11203 Pfannerstill Stravenue, Lindenhurst, NY 11362',
        coordinate: ['40.81887624266896', '-73.93779180668098'],
      },
      {
        text: '11606 Mariana Keys, Lindenhurst, NY 11071',
        coordinate: ['40.60227925020982', '-73.91362606675423'],
      },
      {
        text: '11879 Larry Drives, Massapequa, NY 11339',
        coordinate: ['40.66416374763622', '-73.90697071032429'],
      },
    ],
  },
  {
    id: getObjectId('customer_374'),
    firstName: 'Elyssa',
    lastName: 'Jacobs',
    fullName: 'Elyssa Jacobs',
    gender: 'Female',
    gsm: '(726) 945-5009',
    createdAt: '2024-06-28T01:11:19.109Z',
    isActive: true,
    avatar: [
      {
        name: '3a30bc2a-bb4f-41b3-8b58-26c6d29d7c41',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '26619bae-c916-4733-8c32-52bf2c87c86c',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1039.jpg',
      },
    ],
    addresses: [
      {
        text: '11772 Toy Row, Lindenhurst, NY 11384',
        coordinate: ['40.811873397132395', '-73.94826902574404'],
      },
      {
        text: '11085 Lenora Crossroad, Massapequa, NY 11054',
        coordinate: ['40.6717882500396', '-73.8952881573647'],
      },
      {
        text: '11882 Oceane Islands, Brooklyn, NY 11755',
        coordinate: ['40.711735188982935', '-73.9020610486226'],
      },
    ],
  },
  {
    id: getObjectId('customer_375'),
    firstName: 'Eladio',
    lastName: 'Shanahan',
    fullName: 'Eladio Shanahan',
    gender: 'Female',
    gsm: '(699) 017-5561',
    createdAt: '2024-06-12T06:31:54.798Z',
    isActive: false,
    avatar: [
      {
        name: 'b6f51eb4-9354-4215-b75b-eaeda820b54d',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '58a9e1d2-3427-4497-a36a-c4e2dd2337b1',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/873.jpg',
      },
    ],
    addresses: [
      {
        text: '11108 Bauch Trail, Massapequa, NY 11355',
        coordinate: ['40.81991419971737', '-73.84577566721931'],
      },
      {
        text: '11044 Ezekiel Lodge, Brooklyn, NY 11912',
        coordinate: ['40.66138138796998', '-73.88034206938977'],
      },
      {
        text: '11922 Halvorson Terrace, Brooklyn, NY 11104',
        coordinate: ['40.863466423461276', '-73.88157667321018'],
      },
    ],
  },
  {
    id: getObjectId('customer_376'),
    firstName: 'Zora',
    lastName: 'Oberbrunner',
    fullName: 'Zora Oberbrunner',
    gender: 'Male',
    gsm: '(116) 024-2039',
    createdAt: '2024-07-01T11:01:38.438Z',
    isActive: true,
    avatar: [
      {
        name: '3e37d1b7-4d49-4f5b-98a3-d7514c4ed42d',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'b05f1aca-db15-43bc-b57a-6953bb712781',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/901.jpg',
      },
    ],
    addresses: [
      {
        text: '11898 Chelsea Plain, Lindenhurst, NY 11735',
        coordinate: ['40.875525570218045', '-73.86179079437676'],
      },
      {
        text: '11125 Strosin Curve, Lindenhurst, NY 11467',
        coordinate: ['40.732100034726514', '-73.9767183060347'],
      },
      {
        text: '11961 Wilfred Terrace, Brooklyn, NY 11580',
        coordinate: ['40.675225426976645', '-73.91483721590403'],
      },
    ],
  },
  {
    id: getObjectId('customer_377'),
    firstName: 'Silas',
    lastName: 'Brakus',
    fullName: 'Silas Brakus',
    gender: 'Female',
    gsm: '(959) 434-3815',
    createdAt: '2024-06-09T10:44:32.607Z',
    isActive: true,
    avatar: [
      {
        name: '6fd1cc26-87d2-4178-8ac7-cf5681933e5f',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'fecd064f-b87f-4f10-9ede-f939ed6e9e8d',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/68.jpg',
      },
    ],
    addresses: [
      {
        text: '11619 Runte Light, Massapequa, NY 11870',
        coordinate: ['40.68993727602666', '-73.93919799724745'],
      },
      {
        text: '11231 Bergstrom Wall, Massapequa, NY 11734',
        coordinate: ['40.605313216714116', '-73.87661395404614'],
      },
      {
        text: '11036 Hartmann Islands, Massapequa, NY 11273',
        coordinate: ['40.80648728921871', '-73.94602283563091'],
      },
    ],
  },
  {
    id: getObjectId('customer_378'),
    firstName: 'Anabel',
    lastName: 'Mueller',
    fullName: 'Anabel Mueller',
    gender: 'Female',
    gsm: '(621) 444-1021',
    createdAt: '2024-07-05T21:07:21.775Z',
    isActive: true,
    avatar: [
      {
        name: 'e17becf9-8ce5-4b6e-9928-78605f172e4e',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '29f89cae-2b4c-4726-b565-d5d7805c621b',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/854.jpg',
      },
    ],
    addresses: [
      {
        text: '11451 Beahan Hill, Massapequa, NY 11967',
        coordinate: ['40.820067735758684', '-73.93981529222577'],
      },
      {
        text: '11359 Weissnat Shore, Lindenhurst, NY 11530',
        coordinate: ['40.7318003523917', '-73.81115496631985'],
      },
      {
        text: '11269 Stokes Valley, Lindenhurst, NY 11154',
        coordinate: ['40.67540078261772', '-73.81703727480193'],
      },
    ],
  },
  {
    id: getObjectId('customer_379'),
    firstName: 'Waino',
    lastName: 'Funk',
    fullName: 'Waino Funk',
    gender: 'Female',
    gsm: '(832) 626-1020',
    createdAt: '2024-07-07T21:47:30.685Z',
    isActive: true,
    avatar: [
      {
        name: '6fae7b11-4087-4d36-b334-a35802c8b309',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '3d2399f0-9664-4fdc-8970-872f9f2031cf',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/855.jpg',
      },
    ],
    addresses: [
      {
        text: '11077 Gerardo Mountain, Lindenhurst, NY 11372',
        coordinate: ['40.70883839875818', '-73.93976069363174'],
      },
      {
        text: '11498 Cale Crest, Lindenhurst, NY 11537',
        coordinate: ['40.75657150685255', '-73.98892437948754'],
      },
      {
        text: '11961 Wilfred Terrace, Brooklyn, NY 11580',
        coordinate: ['40.675225426976645', '-73.91483721590403'],
      },
    ],
  },
  {
    id: getObjectId('customer_380'),
    firstName: 'Ramon',
    lastName: 'Wilkinson',
    fullName: 'Ramon Wilkinson',
    gender: 'Male',
    gsm: '(112) 271-3320',
    createdAt: '2024-06-17T20:49:22.294Z',
    isActive: false,
    avatar: [
      {
        name: 'ce920360-d957-489f-aa0f-98fd521b4f8b',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'c4da7ede-cfa8-42b7-ae20-b6886bbc0871',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/954.jpg',
      },
    ],
    addresses: [
      {
        text: '11647 Khalil Freeway, Massapequa, NY 11799',
        coordinate: ['40.73552798165039', '-73.99701720039775'],
      },
      {
        text: '11120 Royal Coves, Lindenhurst, NY 11520',
        coordinate: ['40.63410088148846', '-73.99688826750287'],
      },
      {
        text: '11628 Treutel Mills, Brooklyn, NY 11018',
        coordinate: ['40.71348020110573', '-73.99808008629375'],
      },
    ],
  },
  {
    id: getObjectId('customer_381'),
    firstName: 'Velma',
    lastName: 'Wilderman',
    fullName: 'Velma Wilderman',
    gender: 'Male',
    gsm: '(620) 307-8337',
    createdAt: '2024-06-18T01:59:14.294Z',
    isActive: false,
    avatar: [
      {
        name: '9484ebf8-abd8-4fae-9635-7bd49c54894f',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '4e890883-1566-4c96-88e9-32e6f8b184b6',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/360.jpg',
      },
    ],
    addresses: [
      {
        text: '11451 Beahan Hill, Massapequa, NY 11967',
        coordinate: ['40.820067735758684', '-73.93981529222577'],
      },
      {
        text: '11107 Hickle Ranch, Lindenhurst, NY 11515',
        coordinate: ['40.61088151832268', '-74.08690487977938'],
      },
      {
        text: '11245 Myrl Loop, Massapequa, NY 11390',
        coordinate: ['40.757834840940724', '-73.9538537606329'],
      },
    ],
  },
  {
    id: getObjectId('customer_382'),
    firstName: 'Hassan',
    lastName: 'Fritsch',
    fullName: 'Hassan Fritsch',
    gender: 'Female',
    gsm: '(186) 202-3525',
    createdAt: '2024-06-20T01:31:26.050Z',
    isActive: true,
    avatar: [
      {
        name: '3bbd5c43-b16f-4f20-8ffa-6d34125d1c2b',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'ee7702b1-9c26-4183-8eb1-2594f2080d2c',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/428.jpg',
      },
    ],
    addresses: [
      {
        text: '11928 Zemlak Terrace, Brooklyn, NY 11083',
        coordinate: ['40.5861219668654', '-73.96563797373686'],
      },
      {
        text: '11036 Joaquin Circle, Massapequa, NY 11502',
        coordinate: ['40.70119015066914', '-73.99645145905747'],
      },
      {
        text: '11115 Else Valleys, Brooklyn, NY 11770',
        coordinate: ['40.674384416687445', '-73.88542328715191'],
      },
    ],
  },
  {
    id: getObjectId('customer_383'),
    firstName: 'Ari',
    lastName: 'Daniel',
    fullName: 'Ari Daniel',
    gender: 'Female',
    gsm: '(855) 740-4212',
    createdAt: '2024-07-05T21:42:45.273Z',
    isActive: true,
    avatar: [
      {
        name: 'cd4216cb-3f7a-4c95-a3ea-bb2fb47741f1',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'e45f98ef-f545-4cc3-b433-f34f9c80ba33',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1034.jpg',
      },
    ],
    addresses: [
      {
        text: '11864 Leonora Stream, Brooklyn, NY 11957',
        coordinate: ['40.832201142470986', '-73.9018035427564'],
      },
      {
        text: '11867 Kling Coves, Brooklyn, NY 11655',
        coordinate: ['40.72425809826063', '-74.0076193098343'],
      },
      {
        text: '11918 Becker Fort, Massapequa, NY 11466',
        coordinate: ['40.69980932047403', '-73.98458488957945'],
      },
    ],
  },
  {
    id: getObjectId('customer_384'),
    firstName: 'Nicolas',
    lastName: 'Will',
    fullName: 'Nicolas Will',
    gender: 'Female',
    gsm: '(723) 647-6540',
    createdAt: '2024-06-26T11:51:21.726Z',
    isActive: true,
    avatar: [
      {
        name: 'ffed2ede-a2a1-4ffa-aee0-590bb0b75ba2',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'b49b1834-88ac-4179-af08-c3b4e5dd9458',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/975.jpg',
      },
    ],
    addresses: [
      {
        text: '11878 Dudley Pike, Lindenhurst, NY 11604',
        coordinate: ['40.64716080488486', '-74.0073656851469'],
      },
      {
        text: '11719 Buckridge Center, Brooklyn, NY 11760',
        coordinate: ['40.71127832019916', '-73.72859237968323'],
      },
      {
        text: '11108 Bauch Trail, Massapequa, NY 11355',
        coordinate: ['40.81991419971737', '-73.84577566721931'],
      },
    ],
  },
  {
    id: getObjectId('customer_385'),
    firstName: 'Lenna',
    lastName: 'Satterfield',
    fullName: 'Lenna Satterfield',
    gender: 'Female',
    gsm: '(521) 812-1601',
    createdAt: '2024-06-25T19:09:13.228Z',
    isActive: true,
    avatar: [
      {
        name: 'b46d8cb5-3937-4642-90d8-234155354c8f',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '7415438f-5a99-4bf3-989c-a11960c3ad6e',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/33.jpg',
      },
    ],
    addresses: [
      {
        text: '11859 Abbie Station, Brooklyn, NY 11161',
        coordinate: ['40.68771299502717', '-74.04721511862215'],
      },
      {
        text: '11851 Swift Glen, Lindenhurst, NY 11624',
        coordinate: ['40.51158309370173', '-74.22091326797245'],
      },
      {
        text: '11989 Lelah Neck, Brooklyn, NY 11259',
        coordinate: ['40.86491737442198', '-73.92513783295462'],
      },
    ],
  },
  {
    id: getObjectId('customer_386'),
    firstName: 'Ally',
    lastName: 'Cronin',
    fullName: 'Ally Cronin',
    gender: 'Female',
    gsm: '(684) 397-8232',
    createdAt: '2024-06-22T03:22:45.140Z',
    isActive: false,
    avatar: [
      {
        name: 'c4ea4f11-b4f9-49d9-b9fd-24af6cdd909d',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'ecf79707-287b-42b3-a36e-9a24cf84d43f',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/953.jpg',
      },
    ],
    addresses: [
      {
        text: '11647 Khalil Freeway, Massapequa, NY 11799',
        coordinate: ['40.73552798165039', '-73.99701720039775'],
      },
      {
        text: '11186 Nolan Crest, Lindenhurst, NY 11296',
        coordinate: ['40.59649847049655', '-74.18222476116168'],
      },
      {
        text: '11764 Roberts Centers, Lindenhurst, NY 11071',
        coordinate: ['40.707840293833634', '-73.75019856878251'],
      },
    ],
  },
  {
    id: getObjectId('customer_387'),
    firstName: 'Tevin',
    lastName: 'Towne',
    fullName: 'Tevin Towne',
    gender: 'Female',
    gsm: '(172) 788-3307',
    createdAt: '2024-06-08T11:24:08.898Z',
    isActive: true,
    avatar: [
      {
        name: 'c07840c5-6044-46b0-9baa-17c7e514c2de',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '36aecea2-fc9f-4f10-9fc8-fc21be93ecd4',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/979.jpg',
      },
    ],
    addresses: [
      {
        text: '11864 Leonora Stream, Brooklyn, NY 11957',
        coordinate: ['40.832201142470986', '-73.9018035427564'],
      },
      {
        text: '11166 Cormier Plaza, Lindenhurst, NY 11278',
        coordinate: ['40.86255321747302', '-73.8648318412901'],
      },
      {
        text: '11228 Paucek Islands, Massapequa, NY 11666',
        coordinate: ['40.782861173910526', '-73.92808660964148'],
      },
    ],
  },
  {
    id: getObjectId('customer_388'),
    firstName: 'Nat',
    lastName: 'Shanahan',
    fullName: 'Nat Shanahan',
    gender: 'Male',
    gsm: '(287) 638-7971',
    createdAt: '2024-07-05T12:00:51.982Z',
    isActive: false,
    avatar: [
      {
        name: '4394bb33-75d7-4f62-903c-2a4caf6e0bdc',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'db255c77-23b2-45ba-b29f-1a91abeec79b',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/711.jpg',
      },
    ],
    addresses: [
      {
        text: '11057 Roberts Plaza, Lindenhurst, NY 11697',
        coordinate: ['40.64678681484174', '-74.08826976320468'],
      },
      {
        text: '11776 Wilderman Prairie, Lindenhurst, NY 11562',
        coordinate: ['40.66945134822127', '-73.93551047298159'],
      },
      {
        text: '11426 Durgan Neck, Lindenhurst, NY 11404',
        coordinate: ['40.70361562231717', '-73.99338696768561'],
      },
    ],
  },
  {
    id: getObjectId('customer_389'),
    firstName: 'Kelton',
    lastName: 'Stark',
    fullName: 'Kelton Stark',
    gender: 'Male',
    gsm: '(616) 289-4392',
    createdAt: '2024-06-12T05:10:35.193Z',
    isActive: true,
    avatar: [
      {
        name: 'e50f1dfa-7592-477a-9475-dae2a880294a',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '9a5cf6a6-891d-4f72-a3a1-8b253a675eed',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/561.jpg',
      },
    ],
    addresses: [
      {
        text: '11837 Ferry Corners, Brooklyn, NY 11749',
        coordinate: ['40.83762046059387', '-73.87537910005294'],
      },
      {
        text: '11693 Hartmann Park, Brooklyn, NY 11251',
        coordinate: ['40.705101590541354', '-73.98948018281791'],
      },
      {
        text: '11397 Ima Ford, Brooklyn, NY 11687',
        coordinate: ['40.55434237956047', '-74.14814739224421'],
      },
    ],
  },
  {
    id: getObjectId('customer_390'),
    firstName: 'Bryon',
    lastName: 'Abbott',
    fullName: 'Bryon Abbott',
    gender: 'Female',
    gsm: '(088) 235-2140',
    createdAt: '2024-06-08T15:05:27.640Z',
    isActive: false,
    avatar: [
      {
        name: '6465c2b3-8a0a-4051-82c1-8fee7926a711',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '3d3c90a6-9cf5-4853-b54a-1eeb2de79b97',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/526.jpg',
      },
    ],
    addresses: [
      {
        text: '11825 Chelsey Springs, Brooklyn, NY 11928',
        coordinate: ['40.64393181276535', '-74.10229104074979'],
      },
      {
        text: '11762 Schinner Garden, Lindenhurst, NY 11487',
        coordinate: ['40.50954831912203', '-74.24409344591764'],
      },
      {
        text: '11961 Wilfred Terrace, Brooklyn, NY 11580',
        coordinate: ['40.675225426976645', '-73.91483721590403'],
      },
    ],
  },
  {
    id: getObjectId('customer_391'),
    firstName: 'Vladimir',
    lastName: "O'Conner",
    fullName: "Vladimir O'Conner",
    gender: 'Male',
    gsm: '(413) 790-0028',
    createdAt: '2024-06-09T09:57:13.538Z',
    isActive: false,
    avatar: [
      {
        name: '9e94fde4-7cca-4035-9166-003cbaf42011',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '6ce67c62-1a9c-4e2f-905e-7315814a2648',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1037.jpg',
      },
    ],
    addresses: [
      {
        text: '11623 Darien Cliffs, Lindenhurst, NY 11575',
        coordinate: ['40.70056831070206', '-73.9853693094361'],
      },
      {
        text: '11412 Spencer Skyway, Lindenhurst, NY 11312',
        coordinate: ['40.615431898170364', '-73.92934453739576'],
      },
      {
        text: '11148 Susie Oval, Brooklyn, NY 11640',
        coordinate: ['40.6814054925542', '-73.99657415385126'],
      },
    ],
  },
  {
    id: getObjectId('customer_392'),
    firstName: 'Jayden',
    lastName: 'Reynolds',
    fullName: 'Jayden Reynolds',
    gender: 'Female',
    gsm: '(746) 047-7427',
    createdAt: '2024-07-05T16:41:25.553Z',
    isActive: false,
    avatar: [
      {
        name: '1152f9fa-2d63-4f91-a3df-2728c85ae429',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '5312bfa2-c07c-4e14-b6d8-058767491fce',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/731.jpg',
      },
    ],
    addresses: [
      {
        text: '11398 Lynch Tunnel, Brooklyn, NY 11949',
        coordinate: ['40.87235326033911', '-73.92513057262607'],
      },
      {
        text: '11512 Jenkins Lights, Massapequa, NY 11737',
        coordinate: ['40.71003074009839', '-73.94229615777373'],
      },
      {
        text: '11438 Otilia Valleys, Brooklyn, NY 11215',
        coordinate: ['40.804396260981164', '-73.79231266832804'],
      },
    ],
  },
  {
    id: getObjectId('customer_393'),
    firstName: 'Edythe',
    lastName: 'Gibson',
    fullName: 'Edythe Gibson',
    gender: 'Female',
    gsm: '(971) 158-8912',
    createdAt: '2024-07-02T07:33:12.762Z',
    isActive: false,
    avatar: [
      {
        name: '9820a8d0-a8b3-4e26-98f6-7432dee14527',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '96ebd308-7cd0-460f-a9c0-11f003eeacbf',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/362.jpg',
      },
    ],
    addresses: [
      {
        text: '11859 Abbie Station, Brooklyn, NY 11161',
        coordinate: ['40.68771299502717', '-74.04721511862215'],
      },
      {
        text: '11647 Khalil Freeway, Massapequa, NY 11799',
        coordinate: ['40.73552798165039', '-73.99701720039775'],
      },
      {
        text: '11451 Beahan Hill, Massapequa, NY 11967',
        coordinate: ['40.820067735758684', '-73.93981529222577'],
      },
    ],
  },
  {
    id: getObjectId('customer_394'),
    firstName: 'Celine',
    lastName: 'Harber',
    fullName: 'Celine Harber',
    gender: 'Male',
    gsm: '(391) 201-9469',
    createdAt: '2024-06-26T09:59:28.785Z',
    isActive: false,
    avatar: [
      {
        name: '2ed59207-f4ea-440c-8679-3b494af38cf1',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '66e0c8f0-a503-4ab8-ab7a-17875206667e',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/223.jpg',
      },
    ],
    addresses: [
      {
        text: '11655 Joany Course, Brooklyn, NY 11802',
        coordinate: ['40.75627707172136', '-73.97723552936826'],
      },
      {
        text: '11143 Ortiz Mill, Brooklyn, NY 11207',
        coordinate: ['40.6645385558063', '-73.90402732990448'],
      },
      {
        text: '11426 Denesik Courts, Brooklyn, NY 11954',
        coordinate: ['40.622273685700655', '-74.07883292358069'],
      },
    ],
  },
  {
    id: getObjectId('customer_395'),
    firstName: 'Kasey',
    lastName: 'Mohr',
    fullName: 'Kasey Mohr',
    gender: 'Female',
    gsm: '(386) 734-7856',
    createdAt: '2024-06-28T11:31:03.668Z',
    isActive: false,
    avatar: [
      {
        name: 'b6da121c-a226-4f89-bc50-bc05118dcefb',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '29918f65-2545-4fba-b067-a126a15a07c1',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/581.jpg',
      },
    ],
    addresses: [
      {
        text: '11456 Federico Freeway, Lindenhurst, NY 11390',
        coordinate: ['40.73636731561727', '-73.87880380035317'],
      },
      {
        text: '11958 Hintz Light, Massapequa, NY 11935',
        coordinate: ['40.875917577275104', '-73.82848174189849'],
      },
      {
        text: '11606 Mariana Keys, Lindenhurst, NY 11071',
        coordinate: ['40.60227925020982', '-73.91362606675423'],
      },
    ],
  },
  {
    id: getObjectId('customer_396'),
    firstName: 'Linda',
    lastName: 'Mayer',
    fullName: 'Linda Mayer',
    gender: 'Male',
    gsm: '(501) 946-9775',
    createdAt: '2024-06-29T14:16:53.481Z',
    isActive: true,
    avatar: [
      {
        name: 'd5a15172-6573-4f5a-a0bb-8c144603c52d',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'f238cc0d-e717-4190-a953-c443837fde34',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/234.jpg',
      },
    ],
    addresses: [
      {
        text: '11946 Little Isle, Massapequa, NY 11319',
        coordinate: ['40.81821649698436', '-73.86826310670972'],
      },
      {
        text: '11108 Bauch Trail, Massapequa, NY 11355',
        coordinate: ['40.81991419971737', '-73.84577566721931'],
      },
      {
        text: '11576 Kerluke Summit, Massapequa, NY 11417',
        coordinate: ['40.59210466006108', '-73.99582650996682'],
      },
    ],
  },
  {
    id: getObjectId('customer_397'),
    firstName: 'Alexis',
    lastName: 'Mayer',
    fullName: 'Alexis Mayer',
    gender: 'Male',
    gsm: '(420) 227-8326',
    createdAt: '2024-06-15T02:06:02.739Z',
    isActive: true,
    avatar: [
      {
        name: 'a31fc82b-d1f9-41c3-8424-441759a25bc6',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '496ee835-3552-4575-94f6-200d7e1e53da',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1142.jpg',
      },
    ],
    addresses: [
      {
        text: '11727 Schaefer Inlet, Lindenhurst, NY 11036',
        coordinate: ['40.68715261156324', '-74.00526659632791'],
      },
      {
        text: '11418 Schumm Lock, Lindenhurst, NY 11340',
        coordinate: ['40.788028545449976', '-73.90529902987166'],
      },
      {
        text: '11335 Greyson Mission, Lindenhurst, NY 11507',
        coordinate: ['40.89110181872506', '-73.8938991544214'],
      },
    ],
  },
  {
    id: getObjectId('customer_398'),
    firstName: 'Amya',
    lastName: 'Prosacco',
    fullName: 'Amya Prosacco',
    gender: 'Female',
    gsm: '(202) 078-5305',
    createdAt: '2024-07-03T11:22:46.441Z',
    isActive: true,
    avatar: [
      {
        name: '5fa81c05-6ed1-4b12-b604-ff60a45f79b4',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '181bfa3a-28ea-43e7-926d-9701725d4628',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1061.jpg',
      },
    ],
    addresses: [
      {
        text: '11418 Schumm Lock, Lindenhurst, NY 11340',
        coordinate: ['40.788028545449976', '-73.90529902987166'],
      },
      {
        text: '11316 Goodwin Curve, Brooklyn, NY 11183',
        coordinate: ['40.72331641705996', '-73.8392178094307'],
      },
      {
        text: '11719 Buckridge Center, Brooklyn, NY 11760',
        coordinate: ['40.71127832019916', '-73.72859237968323'],
      },
    ],
  },
  {
    id: getObjectId('customer_399'),
    firstName: 'Clara',
    lastName: 'Stroman',
    fullName: 'Clara Stroman',
    gender: 'Female',
    gsm: '(248) 685-9757',
    createdAt: '2024-06-08T18:30:08.175Z',
    isActive: false,
    avatar: [
      {
        name: '5d2f72d9-41d0-43a5-a9eb-855430ca8927',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'a1a548e7-7857-4e87-ae7f-6bbb575f5aeb',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/876.jpg',
      },
    ],
    addresses: [
      {
        text: '11085 Oswaldo Harbor, Brooklyn, NY 11546',
        coordinate: ['40.85125313575545', '-73.91436091292005'],
      },
      {
        text: '11718 Beatty Motorway, Lindenhurst, NY 11314',
        coordinate: ['40.69281598660577', '-73.82908131481418'],
      },
      {
        text: '11699 Lilly Hill, Lindenhurst, NY 11615',
        coordinate: ['40.85988139787965', '-73.85921533859519'],
      },
    ],
  },
  {
    id: getObjectId('customer_400'),
    firstName: 'Margarett',
    lastName: 'Hodkiewicz',
    fullName: 'Margarett Hodkiewicz',
    gender: 'Male',
    gsm: '(655) 364-8985',
    createdAt: '2024-06-23T20:16:08.748Z',
    isActive: false,
    avatar: [
      {
        name: '5c109f48-838c-4cc9-a2bb-8d0c3b1a3e94',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '79ec4aea-e289-49ec-8a28-de82d9792586',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1014.jpg',
      },
    ],
    addresses: [
      {
        text: '11772 Toy Row, Lindenhurst, NY 11384',
        coordinate: ['40.811873397132395', '-73.94826902574404'],
      },
      {
        text: '11655 Shanie Route, Brooklyn, NY 11072',
        coordinate: ['40.706302943986636', '-73.79962362002236'],
      },
      {
        text: '11513 Predovic Ville, Massapequa, NY 11323',
        coordinate: ['40.67469479700506', '-73.86371925992556'],
      },
    ],
  },
  {
    id: getObjectId('customer_401'),
    firstName: 'Bessie',
    lastName: "O'Connell",
    fullName: "Bessie O'Connell",
    gender: 'Female',
    gsm: '(976) 657-2565',
    createdAt: '2024-06-15T08:53:24.919Z',
    isActive: true,
    avatar: [
      {
        name: 'f6dc6759-c882-4133-a58c-98e0abab1838',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '31dc2767-27f4-4b3e-9178-844e254e0d68',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/392.jpg',
      },
    ],
    addresses: [
      {
        text: '11655 Treutel Keys, Lindenhurst, NY 11251',
        coordinate: ['40.581383694926494', '-73.8457803791904'],
      },
      {
        text: '11523 Fritsch Flat, Massapequa, NY 11101',
        coordinate: ['40.80097139543108', '-73.93878498911884'],
      },
      {
        text: '11038 Paolo Pines, Lindenhurst, NY 11735',
        coordinate: ['40.64023177236674', '-74.00186934411859'],
      },
    ],
  },
  {
    id: getObjectId('customer_402'),
    firstName: 'Stuart',
    lastName: 'Stokes',
    fullName: 'Stuart Stokes',
    gender: 'Male',
    gsm: '(469) 765-7275',
    createdAt: '2024-06-11T23:02:37.512Z',
    isActive: false,
    avatar: [
      {
        name: '04ec4858-6bed-4fc8-abb2-7e4592881f49',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'a25a9491-f8af-4b08-86c6-87762cd520f0',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/633.jpg',
      },
    ],
    addresses: [
      {
        text: '11073 Wuckert Lake, Massapequa, NY 11688',
        coordinate: ['40.80679767187204', '-73.94678301233309'],
      },
      {
        text: '11367 Ansley Stravenue, Massapequa, NY 11350',
        coordinate: ['40.81730470420681', '-73.94741458340314'],
      },
      {
        text: '11513 Predovic Ville, Massapequa, NY 11323',
        coordinate: ['40.67469479700506', '-73.86371925992556'],
      },
    ],
  },
  {
    id: getObjectId('customer_403'),
    firstName: 'Jacey',
    lastName: 'Bogisich',
    fullName: 'Jacey Bogisich',
    gender: 'Male',
    gsm: '(420) 772-1926',
    createdAt: '2024-06-26T08:48:42.530Z',
    isActive: true,
    avatar: [
      {
        name: 'bdfeea75-cc2f-4f0e-8183-6ef5393146b5',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '0b258f91-2322-4086-be8b-2181e9770d5c',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/120.jpg',
      },
    ],
    addresses: [
      {
        text: '11166 Cormier Plaza, Lindenhurst, NY 11278',
        coordinate: ['40.86255321747302', '-73.8648318412901'],
      },
      {
        text: '11851 Swift Glen, Lindenhurst, NY 11624',
        coordinate: ['40.51158309370173', '-74.22091326797245'],
      },
      {
        text: '11863 Schuppe Lake, Massapequa, NY 11711',
        coordinate: ['40.5870337210884', '-74.00229002432485'],
      },
    ],
  },
  {
    id: getObjectId('customer_404'),
    firstName: 'Monroe',
    lastName: 'Upton',
    fullName: 'Monroe Upton',
    gender: 'Male',
    gsm: '(876) 093-5655',
    createdAt: '2024-06-23T15:36:15.659Z',
    isActive: true,
    avatar: [
      {
        name: 'e7888e63-e8e7-485c-b2ea-c49eabd648a3',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'c0e914a7-3378-4f8f-8c05-7d3e7cf16006',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/94.jpg',
      },
    ],
    addresses: [
      {
        text: '11718 Beatty Motorway, Lindenhurst, NY 11314',
        coordinate: ['40.69281598660577', '-73.82908131481418'],
      },
      {
        text: '11269 Stokes Valley, Lindenhurst, NY 11154',
        coordinate: ['40.67540078261772', '-73.81703727480193'],
      },
      {
        text: '11797 Lorenzo Locks, Brooklyn, NY 11347',
        coordinate: ['40.747277718986986', '-73.99578762620561'],
      },
    ],
  },
  {
    id: getObjectId('customer_405'),
    firstName: 'Bennett',
    lastName: 'Raynor',
    fullName: 'Bennett Raynor',
    gender: 'Male',
    gsm: '(581) 511-6019',
    createdAt: '2024-06-23T14:16:21.293Z',
    isActive: true,
    avatar: [
      {
        name: '6c4f2d65-3ba0-4ad2-b5ee-8b07618e59ff',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'f684a5a4-002d-4220-af3c-919cd2e5b5e5',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/221.jpg',
      },
    ],
    addresses: [
      {
        text: '11031 Feil Crossing, Lindenhurst, NY 11251',
        coordinate: ['40.83451001107047', '-73.91770528927904'],
      },
      {
        text: '11186 Nolan Crest, Lindenhurst, NY 11296',
        coordinate: ['40.59649847049655', '-74.18222476116168'],
      },
      {
        text: '11907 Okuneva Ville, Massapequa, NY 11534',
        coordinate: ['40.83473164454386', '-73.87357573718195'],
      },
    ],
  },
  {
    id: getObjectId('customer_406'),
    firstName: 'Flossie',
    lastName: 'Dare',
    fullName: 'Flossie Dare',
    gender: 'Male',
    gsm: '(772) 720-7768',
    createdAt: '2024-07-02T04:02:37.659Z',
    isActive: true,
    avatar: [
      {
        name: '4f96daed-e61b-4f45-ab8e-73b0db0cb5a2',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '95c7545c-880f-4140-b710-0fb03436b09e',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/270.jpg',
      },
    ],
    addresses: [
      {
        text: '11374 Daniella Courts, Lindenhurst, NY 11722',
        coordinate: ['40.692405303311446', '-74.00069759444021'],
      },
      {
        text: '11718 Beatty Motorway, Lindenhurst, NY 11314',
        coordinate: ['40.69281598660577', '-73.82908131481418'],
      },
      {
        text: '11143 Ortiz Mill, Brooklyn, NY 11207',
        coordinate: ['40.6645385558063', '-73.90402732990448'],
      },
    ],
  },
  {
    id: getObjectId('customer_407'),
    firstName: 'Robyn',
    lastName: 'Macejkovic',
    fullName: 'Robyn Macejkovic',
    gender: 'Male',
    gsm: '(034) 491-7415',
    createdAt: '2024-07-02T03:03:38.113Z',
    isActive: false,
    avatar: [
      {
        name: '676251a8-dc88-4428-ba95-e70ed378c1d8',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '54162f5a-5606-4d99-97ed-1fda3a6ab581',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/61.jpg',
      },
    ],
    addresses: [
      {
        text: '11412 Spencer Skyway, Lindenhurst, NY 11312',
        coordinate: ['40.615431898170364', '-73.92934453739576'],
      },
      {
        text: '11923 Legros Divide, Brooklyn, NY 11072',
        coordinate: ['40.75081540048207', '-73.84366030192892'],
      },
      {
        text: '11038 Paolo Pines, Lindenhurst, NY 11735',
        coordinate: ['40.64023177236674', '-74.00186934411859'],
      },
    ],
  },
  {
    id: getObjectId('customer_408'),
    firstName: 'Corine',
    lastName: 'Bayer',
    fullName: 'Corine Bayer',
    gender: 'Female',
    gsm: '(794) 522-4730',
    createdAt: '2024-06-16T21:13:56.028Z',
    isActive: true,
    avatar: [
      {
        name: 'f91fcdfd-e380-4397-8358-b861e10fd322',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '5427a726-57c7-4041-b9df-1d63df932bf6',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/978.jpg',
      },
    ],
    addresses: [
      {
        text: '11367 Ansley Stravenue, Massapequa, NY 11350',
        coordinate: ['40.81730470420681', '-73.94741458340314'],
      },
      {
        text: '11021 Waelchi Crossing, Brooklyn, NY 11306',
        coordinate: ['40.77751176704511', '-73.97279729093525'],
      },
      {
        text: '11862 Ward Glen, Massapequa, NY 11885',
        coordinate: ['40.87823216032764', '-73.91814523246967'],
      },
    ],
  },
  {
    id: getObjectId('customer_409'),
    firstName: 'Cordelia',
    lastName: 'Renner',
    fullName: 'Cordelia Renner',
    gender: 'Male',
    gsm: '(940) 807-8745',
    createdAt: '2024-06-21T05:45:17.319Z',
    isActive: true,
    avatar: [
      {
        name: '9b783142-7a35-4fc7-8a5e-2db96bcd3a6d',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'b51b5fe8-cb87-4504-8760-0b8cb5a26a59',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/20.jpg',
      },
    ],
    addresses: [
      {
        text: '11693 Hartmann Park, Brooklyn, NY 11251',
        coordinate: ['40.705101590541354', '-73.98948018281791'],
      },
      {
        text: '11867 Kling Coves, Brooklyn, NY 11655',
        coordinate: ['40.72425809826063', '-74.0076193098343'],
      },
      {
        text: '11060 Pacocha Path, Massapequa, NY 11383',
        coordinate: ['40.712642654476035', '-74.01303533708099'],
      },
    ],
  },
  {
    id: getObjectId('customer_410'),
    firstName: 'Millie',
    lastName: 'Hackett',
    fullName: 'Millie Hackett',
    gender: 'Male',
    gsm: '(253) 555-0655',
    createdAt: '2024-06-13T04:50:33.304Z',
    isActive: true,
    avatar: [
      {
        name: '20d6b53f-1a3f-4eee-992a-5752edebfd04',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '6310bd7f-183b-4a27-839f-df994059f86a',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/579.jpg',
      },
    ],
    addresses: [
      {
        text: '11918 Becker Fort, Massapequa, NY 11466',
        coordinate: ['40.69980932047403', '-73.98458488957945'],
      },
      {
        text: '11434 Daniel Meadows, Massapequa, NY 11452',
        coordinate: ['40.687024663944904', '-73.87836555031981'],
      },
      {
        text: '11576 Kerluke Summit, Massapequa, NY 11417',
        coordinate: ['40.59210466006108', '-73.99582650996682'],
      },
    ],
  },
  {
    id: getObjectId('customer_411'),
    firstName: 'Marlen',
    lastName: 'Kunde',
    fullName: 'Marlen Kunde',
    gender: 'Male',
    gsm: '(441) 540-0407',
    createdAt: '2024-06-11T09:35:24.774Z',
    isActive: true,
    avatar: [
      {
        name: '57ad5079-b1a8-4911-a972-0002ef4e2482',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '463024f2-c8b0-4742-b4d7-813ab59d0c18',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/208.jpg',
      },
    ],
    addresses: [
      {
        text: '11418 Schumm Lock, Lindenhurst, NY 11340',
        coordinate: ['40.788028545449976', '-73.90529902987166'],
      },
      {
        text: '11530 Mueller Port, Massapequa, NY 11184',
        coordinate: ['40.76449980110699', '-73.96908694706285'],
      },
      {
        text: '11513 Predovic Ville, Massapequa, NY 11323',
        coordinate: ['40.67469479700506', '-73.86371925992556'],
      },
    ],
  },
  {
    id: getObjectId('customer_412'),
    firstName: 'Lexi',
    lastName: 'Pacocha',
    fullName: 'Lexi Pacocha',
    gender: 'Female',
    gsm: '(968) 553-2112',
    createdAt: '2024-07-04T16:33:23.310Z',
    isActive: true,
    avatar: [
      {
        name: 'b9f3daa9-d5dc-4e98-8a12-60956411772b',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '619db226-aca4-4a93-bf26-4a1b0c92e662',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1007.jpg',
      },
    ],
    addresses: [
      {
        text: '11367 Ansley Stravenue, Massapequa, NY 11350',
        coordinate: ['40.81730470420681', '-73.94741458340314'],
      },
      {
        text: '11902 Leuschke Square, Lindenhurst, NY 11156',
        coordinate: ['40.86491116139669', '-73.82210287568375'],
      },
      {
        text: '11961 Wilfred Terrace, Brooklyn, NY 11580',
        coordinate: ['40.675225426976645', '-73.91483721590403'],
      },
    ],
  },
  {
    id: getObjectId('customer_413'),
    firstName: 'Gianni',
    lastName: 'Feil',
    fullName: 'Gianni Feil',
    gender: 'Male',
    gsm: '(012) 607-4183',
    createdAt: '2024-07-04T14:36:48.459Z',
    isActive: true,
    avatar: [
      {
        name: '747ca9d0-293a-4a5b-815c-6cda47b9285c',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '545982e2-ac27-44e3-b60b-86138dfa83c5',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/35.jpg',
      },
    ],
    addresses: [
      {
        text: '11175 Kieran Curve, Massapequa, NY 11322',
        coordinate: ['40.60976233898883', '-74.1028092626307'],
      },
      {
        text: '11231 Bergstrom Wall, Massapequa, NY 11734',
        coordinate: ['40.605313216714116', '-73.87661395404614'],
      },
      {
        text: '11598 Curt Shoals, Lindenhurst, NY 11514',
        coordinate: ['40.802597877430756', '-73.93849763295711'],
      },
    ],
  },
  {
    id: getObjectId('customer_414'),
    firstName: 'Mervin',
    lastName: 'Roberts',
    fullName: 'Mervin Roberts',
    gender: 'Female',
    gsm: '(465) 487-3765',
    createdAt: '2024-06-11T04:19:48.336Z',
    isActive: false,
    avatar: [
      {
        name: '35788a59-1c54-414d-9c51-d91c02e4369c',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '84a8c93d-5fb6-4a3a-89bb-60a4f60e3b43',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/569.jpg',
      },
    ],
    addresses: [
      {
        text: '11693 Hartmann Park, Brooklyn, NY 11251',
        coordinate: ['40.705101590541354', '-73.98948018281791'],
      },
      {
        text: '11760 Cynthia Dam, Brooklyn, NY 11589',
        coordinate: ['40.805598122229355', '-73.96654850238752'],
      },
      {
        text: '11195 Lysanne Estates, Brooklyn, NY 11779',
        coordinate: ['40.88524705779494', '-73.84462210652717'],
      },
    ],
  },
  {
    id: getObjectId('customer_415'),
    firstName: 'Curtis',
    lastName: 'Schaden',
    fullName: 'Curtis Schaden',
    gender: 'Male',
    gsm: '(500) 331-2144',
    createdAt: '2024-06-14T16:33:24.094Z',
    isActive: false,
    avatar: [
      {
        name: 'c9b7ec57-f6cd-474b-a11c-5a2c04d55aa7',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '06f49174-3f3d-4e2e-9112-56afb58dfd1a',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/24.jpg',
      },
    ],
    addresses: [
      {
        text: '11663 Schmeler Rapids, Lindenhurst, NY 11976',
        coordinate: ['40.83095813827255', '-73.91366352822456'],
      },
      {
        text: '11902 Leuschke Square, Lindenhurst, NY 11156',
        coordinate: ['40.86491116139669', '-73.82210287568375'],
      },
      {
        text: '11862 Ward Glen, Massapequa, NY 11885',
        coordinate: ['40.87823216032764', '-73.91814523246967'],
      },
    ],
  },
  {
    id: getObjectId('customer_416'),
    firstName: 'Marilie',
    lastName: 'Schoen',
    fullName: 'Marilie Schoen',
    gender: 'Female',
    gsm: '(547) 742-5718',
    createdAt: '2024-06-19T05:13:18.898Z',
    isActive: false,
    avatar: [
      {
        name: '2f737fe8-d88b-46f5-8af2-c74c0c0f34b3',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'e5f3d12b-57d5-4302-9bdc-b3a29c619da7',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/399.jpg',
      },
    ],
    addresses: [
      {
        text: '11974 Harold Ports, Brooklyn, NY 11963',
        coordinate: ['40.674179744645684', '-73.98876832456823'],
      },
      {
        text: '11647 Khalil Freeway, Massapequa, NY 11799',
        coordinate: ['40.73552798165039', '-73.99701720039775'],
      },
      {
        text: '11263 Solon Stream, Lindenhurst, NY 11007',
        coordinate: ['40.63674069980736', '-73.91978780874902'],
      },
    ],
  },
  {
    id: getObjectId('customer_417'),
    firstName: 'Cameron',
    lastName: 'Fay',
    fullName: 'Cameron Fay',
    gender: 'Female',
    gsm: '(857) 985-5111',
    createdAt: '2024-06-11T17:29:45.019Z',
    isActive: true,
    avatar: [
      {
        name: 'c3ae1643-2f0a-4494-b513-d5c1906b09d6',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'da0ef824-8e30-4476-9f2b-2ebebd7fa6dc',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1151.jpg',
      },
    ],
    addresses: [
      {
        text: '11264 Pauline Knolls, Brooklyn, NY 11384',
        coordinate: ['40.85195030781291', '-73.93088781078077'],
      },
      {
        text: '11598 Curt Shoals, Lindenhurst, NY 11514',
        coordinate: ['40.802597877430756', '-73.93849763295711'],
      },
      {
        text: '11180 Thompson Circle, Massapequa, NY 11460',
        coordinate: ['40.52879780292704', '-74.16599356445849'],
      },
    ],
  },
  {
    id: getObjectId('customer_418'),
    firstName: 'Pansy',
    lastName: 'Feil',
    fullName: 'Pansy Feil',
    gender: 'Female',
    gsm: '(722) 838-0753',
    createdAt: '2024-06-28T16:39:33.784Z',
    isActive: false,
    avatar: [
      {
        name: 'f501381f-75db-4ff1-8469-de984d98b61f',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '6ecfca16-d5f0-4005-928a-614e46e3db5a',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/930.jpg',
      },
    ],
    addresses: [
      {
        text: '11433 Lakin Ridge, Massapequa, NY 11717',
        coordinate: ['40.72132523792435', '-73.98639367151328'],
      },
      {
        text: '11149 Cruickshank Burg, Lindenhurst, NY 11019',
        coordinate: ['40.78731753673706', '-73.9144110734691'],
      },
      {
        text: "11683 D'Amore Summit, Massapequa, NY 11567",
        coordinate: ['40.8048782862543', '-73.94804034964574'],
      },
    ],
  },
  {
    id: getObjectId('customer_419'),
    firstName: 'Albina',
    lastName: 'Towne',
    fullName: 'Albina Towne',
    gender: 'Female',
    gsm: '(594) 977-9485',
    createdAt: '2024-06-11T08:25:25.672Z',
    isActive: true,
    avatar: [
      {
        name: 'fb4cf3cc-5ab6-4496-b305-ce106b9d4dcd',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'c3e025b1-fd58-4ea7-8f6a-b34b3b568d11',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1199.jpg',
      },
    ],
    addresses: [
      {
        text: '11451 Beahan Hill, Massapequa, NY 11967',
        coordinate: ['40.820067735758684', '-73.93981529222577'],
      },
      {
        text: '11264 Pauline Knolls, Brooklyn, NY 11384',
        coordinate: ['40.85195030781291', '-73.93088781078077'],
      },
      {
        text: '11599 Wolf Lock, Brooklyn, NY 11792',
        coordinate: ['40.7042912677296', '-74.01395408433967'],
      },
    ],
  },
  {
    id: getObjectId('customer_420'),
    firstName: 'Martine',
    lastName: 'Will',
    fullName: 'Martine Will',
    gender: 'Female',
    gsm: '(039) 422-1201',
    createdAt: '2024-06-17T11:35:47.215Z',
    isActive: false,
    avatar: [
      {
        name: 'e6a9b3d1-25b5-445d-a33a-9ec64ff19b6d',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'd0e237db-24d9-4606-b3c0-2bbb1cd27310',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/756.jpg',
      },
    ],
    addresses: [
      {
        text: '11727 Schaefer Inlet, Lindenhurst, NY 11036',
        coordinate: ['40.68715261156324', '-74.00526659632791'],
      },
      {
        text: '11867 Kling Coves, Brooklyn, NY 11655',
        coordinate: ['40.72425809826063', '-74.0076193098343'],
      },
      {
        text: '11021 Waelchi Crossing, Brooklyn, NY 11306',
        coordinate: ['40.77751176704511', '-73.97279729093525'],
      },
    ],
  },
  {
    id: getObjectId('customer_421'),
    firstName: 'Lauriane',
    lastName: 'Trantow',
    fullName: 'Lauriane Trantow',
    gender: 'Male',
    gsm: '(425) 571-5346',
    createdAt: '2024-07-06T10:15:42.612Z',
    isActive: true,
    avatar: [
      {
        name: '298a65a6-d770-459a-8ab0-afc43e2ce951',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '50cd19cd-c8f7-44a6-9788-0397beb17c6e',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/598.jpg',
      },
    ],
    addresses: [
      {
        text: '11096 Breanne Divide, Brooklyn, NY 11640',
        coordinate: ['40.718270507252825', '-73.90150746815962'],
      },
      {
        text: '11871 Merlin Forest, Massapequa, NY 11300',
        coordinate: ['40.63107778793004', '-73.95671041614891'],
      },
      {
        text: '11467 Mario Mountain, Lindenhurst, NY 11330',
        coordinate: ['40.711932851090424', '-73.9577614020571'],
      },
    ],
  },
  {
    id: getObjectId('customer_422'),
    firstName: 'Glenda',
    lastName: 'Runolfsdottir',
    fullName: 'Glenda Runolfsdottir',
    gender: 'Female',
    gsm: '(456) 054-8346',
    createdAt: '2024-06-23T16:45:43.882Z',
    isActive: true,
    avatar: [
      {
        name: '76bc642f-eb42-4c76-b953-fc603fea2088',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'bc040b23-6cf0-4451-8153-473e072aebdf',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1175.jpg',
      },
    ],
    addresses: [
      {
        text: '11663 Gusikowski Extensions, Massapequa, NY 11108',
        coordinate: ['40.705174543564866', '-74.01519738145755'],
      },
      {
        text: '11186 Nolan Crest, Lindenhurst, NY 11296',
        coordinate: ['40.59649847049655', '-74.18222476116168'],
      },
      {
        text: '11181 Batz Corners, Lindenhurst, NY 11904',
        coordinate: ['40.74455702716755', '-73.93501800516812'],
      },
    ],
  },
  {
    id: getObjectId('customer_423'),
    firstName: 'Alessandro',
    lastName: 'McKenzie',
    fullName: 'Alessandro McKenzie',
    gender: 'Female',
    gsm: '(530) 058-3139',
    createdAt: '2024-06-23T21:08:59.621Z',
    isActive: true,
    avatar: [
      {
        name: '41803540-bc2f-482a-8573-9f478fe5a86a',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '1e17e0a0-8062-4d2d-84ac-a90c49572a64',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/266.jpg',
      },
    ],
    addresses: [
      {
        text: '11719 Buckridge Center, Brooklyn, NY 11760',
        coordinate: ['40.71127832019916', '-73.72859237968323'],
      },
      {
        text: '11512 Jenkins Lights, Massapequa, NY 11737',
        coordinate: ['40.71003074009839', '-73.94229615777373'],
      },
      {
        text: '11097 Naomie Mountain, Brooklyn, NY 11492',
        coordinate: ['40.67369096200763', '-73.92525141581397'],
      },
    ],
  },
  {
    id: getObjectId('customer_424'),
    firstName: 'Chaim',
    lastName: 'Price',
    fullName: 'Chaim Price',
    gender: 'Male',
    gsm: '(272) 272-3844',
    createdAt: '2024-06-09T22:29:26.866Z',
    isActive: true,
    avatar: [
      {
        name: '02624b80-15a5-45b4-a2d5-47f9874e75fb',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '8d716fb1-1314-4be2-a501-1f8ecb59284b',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1059.jpg',
      },
    ],
    addresses: [
      {
        text: '11264 Pauline Knolls, Brooklyn, NY 11384',
        coordinate: ['40.85195030781291', '-73.93088781078077'],
      },
      {
        text: '11384 Waelchi Rapid, Massapequa, NY 11796',
        coordinate: ['40.84590139880644', '-73.8928291967851'],
      },
      {
        text: '11816 Althea Loop, Brooklyn, NY 11851',
        coordinate: ['40.87000167958251', '-73.82689736629037'],
      },
    ],
  },
  {
    id: getObjectId('customer_425'),
    firstName: 'Gerard',
    lastName: 'Beatty',
    fullName: 'Gerard Beatty',
    gender: 'Female',
    gsm: '(984) 399-9583',
    createdAt: '2024-06-30T12:59:15.241Z',
    isActive: true,
    avatar: [
      {
        name: '158af34f-e61a-412d-b636-f87c42634cde',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '5b1caa95-187a-4ba9-9d53-d6be1147c96a',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/34.jpg',
      },
    ],
    addresses: [
      {
        text: '11618 Hoeger Lights, Massapequa, NY 11449',
        coordinate: ['40.627049675070175', '-73.98253459810051'],
      },
      {
        text: '11523 Fritsch Flat, Massapequa, NY 11101',
        coordinate: ['40.80097139543108', '-73.93878498911884'],
      },
      {
        text: '11186 Nolan Crest, Lindenhurst, NY 11296',
        coordinate: ['40.59649847049655', '-74.18222476116168'],
      },
    ],
  },
  {
    id: getObjectId('customer_426'),
    firstName: 'Lorenzo',
    lastName: 'Franecki',
    fullName: 'Lorenzo Franecki',
    gender: 'Male',
    gsm: '(881) 373-9147',
    createdAt: '2024-06-11T07:03:01.402Z',
    isActive: true,
    avatar: [
      {
        name: 'b00dfb6e-7c91-432c-8534-75319e22b30d',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'ee3a2176-9df8-48b6-81e5-bf9c24d8763c',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/364.jpg',
      },
    ],
    addresses: [
      {
        text: '11635 Nitzsche Village, Brooklyn, NY 11305',
        coordinate: ['40.82054973821347', '-73.94107073167658'],
      },
      {
        text: '11045 Johnston Key, Lindenhurst, NY 11539',
        coordinate: ['40.84398642270739', '-73.83864402262044'],
      },
      {
        text: '11543 Judah Rapid, Massapequa, NY 11819',
        coordinate: ['40.66995340328846', '-73.91410255815497'],
      },
    ],
  },
  {
    id: getObjectId('customer_427'),
    firstName: 'Jose',
    lastName: 'Skiles',
    fullName: 'Jose Skiles',
    gender: 'Male',
    gsm: '(321) 806-8887',
    createdAt: '2024-06-17T09:38:41.474Z',
    isActive: true,
    avatar: [
      {
        name: 'a3332bf3-28f8-4940-9485-59f313c75b69',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'aeff2583-7d8e-49e1-a69a-cf79c5281407',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/680.jpg',
      },
    ],
    addresses: [
      {
        text: '11781 Maiya Valley, Brooklyn, NY 11844',
        coordinate: ['40.817646237824896', '-73.95265264832331'],
      },
      {
        text: '11509 Donna Canyon, Brooklyn, NY 11024',
        coordinate: ['40.85330068757448', '-73.93352262256185'],
      },
      {
        text: '11727 Schaefer Inlet, Lindenhurst, NY 11036',
        coordinate: ['40.68715261156324', '-74.00526659632791'],
      },
    ],
  },
  {
    id: getObjectId('customer_428'),
    firstName: 'America',
    lastName: 'Satterfield',
    fullName: 'America Satterfield',
    gender: 'Female',
    gsm: '(301) 478-0945',
    createdAt: '2024-06-28T20:15:09.860Z',
    isActive: false,
    avatar: [
      {
        name: '1b8d135c-769e-44c9-9c1e-4eb895dadd3e',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '883ef87c-2368-4bbd-a133-eabdd31874bd',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/464.jpg',
      },
    ],
    addresses: [
      {
        text: '11148 Jon Island, Lindenhurst, NY 11812',
        coordinate: ['40.86514358177516', '-73.88437348485921'],
      },
      {
        text: '11598 Curt Shoals, Lindenhurst, NY 11514',
        coordinate: ['40.802597877430756', '-73.93849763295711'],
      },
      {
        text: '11128 Shayna Motorway, Lindenhurst, NY 11101',
        coordinate: ['40.70373038121957', '-73.99378591068276'],
      },
    ],
  },
  {
    id: getObjectId('customer_429'),
    firstName: 'Guido',
    lastName: 'Kozey',
    fullName: 'Guido Kozey',
    gender: 'Female',
    gsm: '(349) 498-5977',
    createdAt: '2024-06-22T03:38:42.375Z',
    isActive: false,
    avatar: [
      {
        name: '6ef0e65d-3843-4d6b-9eb3-92b68d9d62d7',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '9f7005af-ac46-4dbc-8996-7e2ed61d8ed2',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1233.jpg',
      },
    ],
    addresses: [
      {
        text: '11851 Swift Glen, Lindenhurst, NY 11624',
        coordinate: ['40.51158309370173', '-74.22091326797245'],
      },
      {
        text: '11728 Earlene Garden, Brooklyn, NY 11259',
        coordinate: ['40.61541451352046', '-73.9512235195281'],
      },
      {
        text: '11060 Pacocha Path, Massapequa, NY 11383',
        coordinate: ['40.712642654476035', '-74.01303533708099'],
      },
    ],
  },
  {
    id: getObjectId('customer_430'),
    firstName: 'Roy',
    lastName: 'Lesch',
    fullName: 'Roy Lesch',
    gender: 'Female',
    gsm: '(475) 575-1278',
    createdAt: '2024-06-21T21:24:16.119Z',
    isActive: false,
    avatar: [
      {
        name: '9bb805f9-13e3-4238-9544-aeb3bb9c1b76',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '445ef530-0711-4803-b833-b42a40fed6b7',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1041.jpg',
      },
    ],
    addresses: [
      {
        text: '11991 Feest Court, Brooklyn, NY 11595',
        coordinate: ['40.7380915670452', '-73.99525100532993'],
      },
      {
        text: '11872 Roman Hollow, Massapequa, NY 11919',
        coordinate: ['40.714641774419576', '-73.99642976897374'],
      },
      {
        text: '11228 Paucek Islands, Massapequa, NY 11666',
        coordinate: ['40.782861173910526', '-73.92808660964148'],
      },
    ],
  },
  {
    id: getObjectId('customer_431'),
    firstName: 'Norberto',
    lastName: 'Koch',
    fullName: 'Norberto Koch',
    gender: 'Female',
    gsm: '(236) 723-4173',
    createdAt: '2024-06-16T02:17:36.238Z',
    isActive: false,
    avatar: [
      {
        name: '7a4c014b-3ea3-44a5-b578-c901d665699d',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '9f8a8074-436f-424d-9275-d2d138c5f15c',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/834.jpg',
      },
    ],
    addresses: [
      {
        text: '11057 Roberts Plaza, Lindenhurst, NY 11697',
        coordinate: ['40.64678681484174', '-74.08826976320468'],
      },
      {
        text: '11251 Bertram Extensions, Lindenhurst, NY 11057',
        coordinate: ['40.598106469646424', '-73.77487508395032'],
      },
      {
        text: '11263 Osinski Forks, Lindenhurst, NY 11884',
        coordinate: ['40.86213206940792', '-73.82618292669638'],
      },
    ],
  },
  {
    id: getObjectId('customer_432'),
    firstName: 'Alfonso',
    lastName: 'Nitzsche',
    fullName: 'Alfonso Nitzsche',
    gender: 'Male',
    gsm: '(938) 507-4154',
    createdAt: '2024-06-25T09:39:29.116Z',
    isActive: false,
    avatar: [
      {
        name: '004a9dc4-72b2-444d-9fc6-0734c2814448',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '1a0022ff-c470-4cdd-b7eb-a0217163677b',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/338.jpg',
      },
    ],
    addresses: [
      {
        text: '11378 Ellie Spring, Lindenhurst, NY 11784',
        coordinate: ['40.77936951467395', '-73.97694544805309'],
      },
      {
        text: '11877 Nyasia Plains, Lindenhurst, NY 11970',
        coordinate: ['40.76021384556489', '-74.00722225239753'],
      },
      {
        text: '11248 Kuhlman Crossroad, Massapequa, NY 11810',
        coordinate: ['40.64939023071356', '-73.95553621385756'],
      },
    ],
  },
  {
    id: getObjectId('customer_433'),
    firstName: 'Clarabelle',
    lastName: "O'Hara",
    fullName: "Clarabelle O'Hara",
    gender: 'Male',
    gsm: '(396) 191-8821',
    createdAt: '2024-06-11T16:57:28.840Z',
    isActive: true,
    avatar: [
      {
        name: '2f175007-26b4-4ceb-9f9e-25776f8cd906',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'bccea413-d79b-4e4d-8745-ad8ddd1a6cde',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/445.jpg',
      },
    ],
    addresses: [
      {
        text: '11107 Hickle Ranch, Lindenhurst, NY 11515',
        coordinate: ['40.61088151832268', '-74.08690487977938'],
      },
      {
        text: "11846 O'Hara Rapid, Brooklyn, NY 11231",
        coordinate: ['40.87355454025907', '-73.92984534052623'],
      },
      {
        text: '11451 Beahan Hill, Massapequa, NY 11967',
        coordinate: ['40.820067735758684', '-73.93981529222577'],
      },
    ],
  },
  {
    id: getObjectId('customer_434'),
    firstName: 'Ilene',
    lastName: 'Gulgowski',
    fullName: 'Ilene Gulgowski',
    gender: 'Male',
    gsm: '(946) 134-4488',
    createdAt: '2024-07-02T01:26:27.994Z',
    isActive: false,
    avatar: [
      {
        name: '36497268-39de-4cb2-afda-dea2fdd62f0d',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '77b368cf-acba-4c9a-98b1-d1265d01afea',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/416.jpg',
      },
    ],
    addresses: [
      {
        text: '11057 Roberts Plaza, Lindenhurst, NY 11697',
        coordinate: ['40.64678681484174', '-74.08826976320468'],
      },
      {
        text: '11027 Cruickshank Village, Massapequa, NY 11947',
        coordinate: ['40.63550895730017', '-73.91944128289579'],
      },
      {
        text: '11835 Powlowski Extension, Brooklyn, NY 11150',
        coordinate: ['40.76245015151365', '-73.87061296246294'],
      },
    ],
  },
  {
    id: getObjectId('customer_435'),
    firstName: 'Marjory',
    lastName: 'Rodriguez',
    fullName: 'Marjory Rodriguez',
    gender: 'Male',
    gsm: '(055) 574-6595',
    createdAt: '2024-06-19T11:30:59.931Z',
    isActive: true,
    avatar: [
      {
        name: '6d419901-f8ce-4ded-a476-17e2b27300fb',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '82a46f5e-c3ff-4325-b4ed-65356cf4f11e',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/718.jpg',
      },
    ],
    addresses: [
      {
        text: '11655 Treutel Keys, Lindenhurst, NY 11251',
        coordinate: ['40.581383694926494', '-73.8457803791904'],
      },
      {
        text: '11642 Alberta Junction, Lindenhurst, NY 11370',
        coordinate: ['40.782269303154564', '-73.92799108814602'],
      },
      {
        text: '11249 Ashleigh Points, Massapequa, NY 11750',
        coordinate: ['40.70464764330371', '-73.95245354438998'],
      },
    ],
  },
  {
    id: getObjectId('customer_436'),
    firstName: 'Tre',
    lastName: 'Steuber',
    fullName: 'Tre Steuber',
    gender: 'Male',
    gsm: '(693) 295-7910',
    createdAt: '2024-06-19T16:30:03.983Z',
    isActive: true,
    avatar: [
      {
        name: '98e6cf1b-db9d-47a7-acc7-48d794449b8f',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '9f9e93c3-c5c2-49a0-bba0-aa82558d5571',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1054.jpg',
      },
    ],
    addresses: [
      {
        text: '11812 Uriah Islands, Massapequa, NY 11134',
        coordinate: ['40.76936591609023', '-73.97395465473141'],
      },
      {
        text: '11812 Raphael Corner, Massapequa, NY 11877',
        coordinate: ['40.72366717557525', '-73.99207275678724'],
      },
      {
        text: '11878 Pagac Trail, Lindenhurst, NY 11876',
        coordinate: ['40.71114281327269', '-74.01648182914843'],
      },
    ],
  },
  {
    id: getObjectId('customer_437'),
    firstName: 'Demetrius',
    lastName: 'Pacocha',
    fullName: 'Demetrius Pacocha',
    gender: 'Female',
    gsm: '(148) 861-2785',
    createdAt: '2024-06-29T19:07:45.009Z',
    isActive: false,
    avatar: [
      {
        name: 'e4442151-6594-4283-b4f9-677cb04c6801',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'acaa0fbb-6ffa-48b7-b320-46a71e1c3e97',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/815.jpg',
      },
    ],
    addresses: [
      {
        text: '11108 Bauch Trail, Massapequa, NY 11355',
        coordinate: ['40.81991419971737', '-73.84577566721931'],
      },
      {
        text: '11263 Solon Stream, Lindenhurst, NY 11007',
        coordinate: ['40.63674069980736', '-73.91978780874902'],
      },
      {
        text: '11181 Batz Corners, Lindenhurst, NY 11904',
        coordinate: ['40.74455702716755', '-73.93501800516812'],
      },
    ],
  },
  {
    id: getObjectId('customer_438'),
    firstName: 'Cecil',
    lastName: 'Rogahn',
    fullName: 'Cecil Rogahn',
    gender: 'Male',
    gsm: '(322) 068-1386',
    createdAt: '2024-06-10T03:30:52.530Z',
    isActive: false,
    avatar: [
      {
        name: 'caab3a11-9ef1-423b-8bc6-b925c0f1089f',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'd4ff76a3-eae9-4fe3-a01e-3dbeed2cdba4',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/353.jpg',
      },
    ],
    addresses: [
      {
        text: '11918 Becker Fort, Massapequa, NY 11466',
        coordinate: ['40.69980932047403', '-73.98458488957945'],
      },
      {
        text: '11149 Cruickshank Burg, Lindenhurst, NY 11019',
        coordinate: ['40.78731753673706', '-73.9144110734691'],
      },
      {
        text: '11228 Paucek Islands, Massapequa, NY 11666',
        coordinate: ['40.782861173910526', '-73.92808660964148'],
      },
    ],
  },
  {
    id: getObjectId('customer_439'),
    firstName: 'Hipolito',
    lastName: 'Kuhn',
    fullName: 'Hipolito Kuhn',
    gender: 'Female',
    gsm: '(287) 655-1313',
    createdAt: '2024-06-30T13:48:12.780Z',
    isActive: true,
    avatar: [
      {
        name: 'c288f200-cc59-4d14-8e2c-b1a174c5bb54',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'bfcb2f12-1351-49e0-bfca-6b2947ba9d10',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/12.jpg',
      },
    ],
    addresses: [
      {
        text: '11148 Jon Island, Lindenhurst, NY 11812',
        coordinate: ['40.86514358177516', '-73.88437348485921'],
      },
      {
        text: '11598 Curt Shoals, Lindenhurst, NY 11514',
        coordinate: ['40.802597877430756', '-73.93849763295711'],
      },
      {
        text: '11774 Koss Mission, Brooklyn, NY 11540',
        coordinate: ['40.73032437088068', '-73.99512821335122'],
      },
    ],
  },
  {
    id: getObjectId('customer_440'),
    firstName: 'Matteo',
    lastName: 'Kohler',
    fullName: 'Matteo Kohler',
    gender: 'Male',
    gsm: '(611) 565-1680',
    createdAt: '2024-07-01T00:40:19.262Z',
    isActive: true,
    avatar: [
      {
        name: '1755269c-472d-4dd0-9f13-50b02cf4f315',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'c4eba70d-2c78-41e6-b8ff-5c0ba78cde62',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/86.jpg',
      },
    ],
    addresses: [
      {
        text: '11430 Leuschke Via, Brooklyn, NY 11727',
        coordinate: ['40.82687191092169', '-73.93860406015271'],
      },
      {
        text: '11509 Donna Canyon, Brooklyn, NY 11024',
        coordinate: ['40.85330068757448', '-73.93352262256185'],
      },
      {
        text: '11797 Bart Valley, Lindenhurst, NY 11117',
        coordinate: ['40.669777801118656', '-73.92802454968135'],
      },
    ],
  },
  {
    id: getObjectId('customer_441'),
    firstName: 'Destiney',
    lastName: 'Walter',
    fullName: 'Destiney Walter',
    gender: 'Male',
    gsm: '(391) 195-3315',
    createdAt: '2024-06-30T19:45:47.243Z',
    isActive: false,
    avatar: [
      {
        name: '4ef26e79-f737-4980-afa9-f7945090b35d',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '52acfee6-9cc1-4cbc-8c93-566b085ce4f9',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/181.jpg',
      },
    ],
    addresses: [
      {
        text: '11085 Lenora Crossroad, Massapequa, NY 11054',
        coordinate: ['40.6717882500396', '-73.8952881573647'],
      },
      {
        text: '11923 Legros Divide, Brooklyn, NY 11072',
        coordinate: ['40.75081540048207', '-73.84366030192892'],
      },
      {
        text: '11038 Paolo Pines, Lindenhurst, NY 11735',
        coordinate: ['40.64023177236674', '-74.00186934411859'],
      },
    ],
  },
  {
    id: getObjectId('customer_442'),
    firstName: 'Chaya',
    lastName: 'Reichert',
    fullName: 'Chaya Reichert',
    gender: 'Male',
    gsm: '(534) 751-1472',
    createdAt: '2024-06-19T04:55:26.673Z',
    isActive: false,
    avatar: [
      {
        name: 'aa1eae46-6b98-4c0d-9c75-9bb4489b184a',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '7bbf152b-3c3f-4dba-846e-cc32bc2ef518',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/810.jpg',
      },
    ],
    addresses: [
      {
        text: '11812 Uriah Islands, Massapequa, NY 11134',
        coordinate: ['40.76936591609023', '-73.97395465473141'],
      },
      {
        text: '11642 Alberta Junction, Lindenhurst, NY 11370',
        coordinate: ['40.782269303154564', '-73.92799108814602'],
      },
      {
        text: '11107 Hickle Ranch, Lindenhurst, NY 11515',
        coordinate: ['40.61088151832268', '-74.08690487977938'],
      },
    ],
  },
  {
    id: getObjectId('customer_443'),
    firstName: 'Cora',
    lastName: 'Kautzer',
    fullName: 'Cora Kautzer',
    gender: 'Female',
    gsm: '(160) 650-4908',
    createdAt: '2024-06-22T13:35:09.107Z',
    isActive: false,
    avatar: [
      {
        name: '281447e1-8597-42ec-9a67-2b7cd0f7a671',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '34c1df73-b92c-49f6-8e04-ab1bd5a0a3f9',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/79.jpg',
      },
    ],
    addresses: [
      {
        text: '11073 Wuckert Lake, Massapequa, NY 11688',
        coordinate: ['40.80679767187204', '-73.94678301233309'],
      },
      {
        text: '11316 Goodwin Curve, Brooklyn, NY 11183',
        coordinate: ['40.72331641705996', '-73.8392178094307'],
      },
      {
        text: '11128 Shayna Motorway, Lindenhurst, NY 11101',
        coordinate: ['40.70373038121957', '-73.99378591068276'],
      },
    ],
  },
  {
    id: getObjectId('customer_444'),
    firstName: 'Aylin',
    lastName: 'Rice',
    fullName: 'Aylin Rice',
    gender: 'Female',
    gsm: '(260) 970-6933',
    createdAt: '2024-06-26T02:00:50.782Z',
    isActive: false,
    avatar: [
      {
        name: 'd1826d5f-51f4-46af-8ab1-51d449d841a0',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'dbbe460d-e499-4ddf-84bb-6f542776f44d',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/919.jpg',
      },
    ],
    addresses: [
      {
        text: '11647 Khalil Freeway, Massapequa, NY 11799',
        coordinate: ['40.73552798165039', '-73.99701720039775'],
      },
      {
        text: '11412 Spencer Skyway, Lindenhurst, NY 11312',
        coordinate: ['40.615431898170364', '-73.92934453739576'],
      },
      {
        text: '11474 Dickens Lodge, Massapequa, NY 11199',
        coordinate: ['40.75587993188085', '-73.7894709790709'],
      },
    ],
  },
  {
    id: getObjectId('customer_445'),
    firstName: 'Dessie',
    lastName: 'Purdy',
    fullName: 'Dessie Purdy',
    gender: 'Female',
    gsm: '(807) 078-5233',
    createdAt: '2024-07-03T20:57:37.151Z',
    isActive: false,
    avatar: [
      {
        name: 'a8642e5a-a1c7-4030-99de-5d8e900f6f7c',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '7020a656-47a1-4518-8900-86fa63a85095',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/153.jpg',
      },
    ],
    addresses: [
      {
        text: '11735 Kailee Shoals, Brooklyn, NY 11393',
        coordinate: ['40.84785614227491', '-73.90130203986932'],
      },
      {
        text: '11881 Wilton Fields, Lindenhurst, NY 11176',
        coordinate: ['40.787915583564256', '-73.84583413474485'],
      },
      {
        text: '11397 Ima Ford, Brooklyn, NY 11687',
        coordinate: ['40.55434237956047', '-74.14814739224421'],
      },
    ],
  },
  {
    id: getObjectId('customer_446'),
    firstName: 'Brittany',
    lastName: 'Kub',
    fullName: 'Brittany Kub',
    gender: 'Female',
    gsm: '(930) 302-8317',
    createdAt: '2024-06-27T18:20:07.669Z',
    isActive: false,
    avatar: [
      {
        name: 'cb45cf6d-cbd2-497e-b857-787bc74ddd7f',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '33cf81fb-0341-425b-8358-2d7319958ac3',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/353.jpg',
      },
    ],
    addresses: [
      {
        text: '11719 Buckridge Center, Brooklyn, NY 11760',
        coordinate: ['40.71127832019916', '-73.72859237968323'],
      },
      {
        text: '11036 Hartmann Islands, Massapequa, NY 11273',
        coordinate: ['40.80648728921871', '-73.94602283563091'],
      },
      {
        text: '11249 Ashleigh Points, Massapequa, NY 11750',
        coordinate: ['40.70464764330371', '-73.95245354438998'],
      },
    ],
  },
  {
    id: getObjectId('customer_447'),
    firstName: 'Roberto',
    lastName: 'Ritchie',
    fullName: 'Roberto Ritchie',
    gender: 'Male',
    gsm: '(395) 480-2958',
    createdAt: '2024-06-13T16:33:03.489Z',
    isActive: true,
    avatar: [
      {
        name: '6663687a-ffa5-4990-83df-00b14845e6c6',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'd7d76ce7-1fda-4227-9137-f59d6f6ef1c7',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1237.jpg',
      },
    ],
    addresses: [
      {
        text: '11175 Kieran Curve, Massapequa, NY 11322',
        coordinate: ['40.60976233898883', '-74.1028092626307'],
      },
      {
        text: '11434 Daniel Meadows, Massapequa, NY 11452',
        coordinate: ['40.687024663944904', '-73.87836555031981'],
      },
      {
        text: '11246 Heathcote Crescent, Brooklyn, NY 11164',
        coordinate: ['40.70264295688686', '-73.85781194108168'],
      },
    ],
  },
  {
    id: getObjectId('customer_448'),
    firstName: 'Norval',
    lastName: 'Bogisich',
    fullName: 'Norval Bogisich',
    gender: 'Male',
    gsm: '(818) 894-8531',
    createdAt: '2024-06-20T05:02:39.783Z',
    isActive: true,
    avatar: [
      {
        name: 'f064ae7b-7524-4d12-b1c3-0a2d186d6d44',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '5e2a3977-d2ac-46f7-9183-56383d6459bb',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/458.jpg',
      },
    ],
    addresses: [
      {
        text: "11960 O'Conner Forest, Lindenhurst, NY 11163",
        coordinate: ['40.89309118725139', '-73.89752941514372'],
      },
      {
        text: '11898 Chelsea Plain, Lindenhurst, NY 11735',
        coordinate: ['40.875525570218045', '-73.86179079437676'],
      },
      {
        text: '11060 Pacocha Path, Massapequa, NY 11383',
        coordinate: ['40.712642654476035', '-74.01303533708099'],
      },
    ],
  },
  {
    id: getObjectId('customer_449'),
    firstName: 'Hertha',
    lastName: 'Sporer',
    fullName: 'Hertha Sporer',
    gender: 'Female',
    gsm: '(634) 328-4185',
    createdAt: '2024-07-03T19:20:19.867Z',
    isActive: true,
    avatar: [
      {
        name: '8d728f07-e732-45f2-a45a-cfef7e499824',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '129af7b7-04aa-41c2-910b-64478715b63d',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/428.jpg',
      },
    ],
    addresses: [
      {
        text: '11928 Zemlak Terrace, Brooklyn, NY 11083',
        coordinate: ['40.5861219668654', '-73.96563797373686'],
      },
      {
        text: '11085 Oswaldo Harbor, Brooklyn, NY 11546',
        coordinate: ['40.85125313575545', '-73.91436091292005'],
      },
      {
        text: '11718 Beatty Motorway, Lindenhurst, NY 11314',
        coordinate: ['40.69281598660577', '-73.82908131481418'],
      },
    ],
  },
  {
    id: getObjectId('customer_450'),
    firstName: 'Orpha',
    lastName: 'Mohr',
    fullName: 'Orpha Mohr',
    gender: 'Male',
    gsm: '(456) 980-6074',
    createdAt: '2024-06-12T03:53:07.800Z',
    isActive: false,
    avatar: [
      {
        name: '2778002b-7dc7-44cc-9fcc-15805c87546b',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'e6ada174-c452-4c54-8b12-68689338e373',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1070.jpg',
      },
    ],
    addresses: [
      {
        text: '11096 Breanne Divide, Brooklyn, NY 11640',
        coordinate: ['40.718270507252825', '-73.90150746815962'],
      },
      {
        text: '11947 Ernser Ferry, Lindenhurst, NY 11234',
        coordinate: ['40.750136329510546', '-73.88507636312373'],
      },
      {
        text: '11096 Wehner Road, Brooklyn, NY 11769',
        coordinate: ['40.772541352269656', '-73.96458491444952'],
      },
    ],
  },
  {
    id: getObjectId('customer_451'),
    firstName: 'Damien',
    lastName: 'Keeling',
    fullName: 'Damien Keeling',
    gender: 'Female',
    gsm: '(028) 414-0067',
    createdAt: '2024-06-20T21:42:11.705Z',
    isActive: false,
    avatar: [
      {
        name: '01e2e575-0c56-48c3-a30e-ba053b202256',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '16f5a543-7567-4675-8316-440a5ab73278',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/536.jpg',
      },
    ],
    addresses: [
      {
        text: '11120 Royal Coves, Lindenhurst, NY 11520',
        coordinate: ['40.63410088148846', '-73.99688826750287'],
      },
      {
        text: '11439 Aglae Radial, Brooklyn, NY 11205',
        coordinate: ['40.83247202632326', '-73.91406031894931'],
      },
      {
        text: '11606 Mariana Keys, Lindenhurst, NY 11071',
        coordinate: ['40.60227925020982', '-73.91362606675423'],
      },
    ],
  },
  {
    id: getObjectId('customer_452'),
    firstName: 'Carey',
    lastName: 'Bartoletti',
    fullName: 'Carey Bartoletti',
    gender: 'Female',
    gsm: '(913) 064-7562',
    createdAt: '2024-07-08T06:08:04.573Z',
    isActive: false,
    avatar: [
      {
        name: '1d460ff4-9984-4356-9e7e-8b42317cd93b',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '231671b5-67c0-47e4-9aa8-87f659d78739',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/113.jpg',
      },
    ],
    addresses: [
      {
        text: '11642 Alberta Junction, Lindenhurst, NY 11370',
        coordinate: ['40.782269303154564', '-73.92799108814602'],
      },
      {
        text: '11774 Koss Mission, Brooklyn, NY 11540',
        coordinate: ['40.73032437088068', '-73.99512821335122'],
      },
      {
        text: '11024 Gerald Pike, Brooklyn, NY 11160',
        coordinate: ['40.58348466152282', '-73.93320807895984'],
      },
    ],
  },
  {
    id: getObjectId('customer_453'),
    firstName: 'Coleman',
    lastName: 'Kuhn',
    fullName: 'Coleman Kuhn',
    gender: 'Male',
    gsm: '(566) 951-7024',
    createdAt: '2024-07-01T12:00:44.355Z',
    isActive: false,
    avatar: [
      {
        name: '01aa1f00-94fb-41ec-a1ae-6262071fc8af',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '60d3d1dc-39be-43d4-8506-1fbcedcc1006',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/801.jpg',
      },
    ],
    addresses: [
      {
        text: '11203 Pfannerstill Stravenue, Lindenhurst, NY 11362',
        coordinate: ['40.81887624266896', '-73.93779180668098'],
      },
      {
        text: '11195 Nader Road, Massapequa, NY 11615',
        coordinate: ['40.62678964983104', '-73.98952500781843'],
      },
      {
        text: '11727 Schaefer Inlet, Lindenhurst, NY 11036',
        coordinate: ['40.68715261156324', '-74.00526659632791'],
      },
    ],
  },
  {
    id: getObjectId('customer_454'),
    firstName: 'Jerrod',
    lastName: 'Mante',
    fullName: 'Jerrod Mante',
    gender: 'Female',
    gsm: '(719) 112-3158',
    createdAt: '2024-06-22T03:08:35.402Z',
    isActive: false,
    avatar: [
      {
        name: 'a46ff556-9513-4766-ba69-df7627a61500',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '73e4e7b5-59bb-43f4-a324-1449272d187b',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/832.jpg',
      },
    ],
    addresses: [
      {
        text: '11378 Ellie Spring, Lindenhurst, NY 11784',
        coordinate: ['40.77936951467395', '-73.97694544805309'],
      },
      {
        text: '11733 Walker Cove, Massapequa, NY 11322',
        coordinate: ['40.56648613912078', '-73.87751470966245'],
      },
      {
        text: '11718 Beatty Motorway, Lindenhurst, NY 11314',
        coordinate: ['40.69281598660577', '-73.82908131481418'],
      },
    ],
  },
  {
    id: getObjectId('customer_455'),
    firstName: 'Everette',
    lastName: 'Lind',
    fullName: 'Everette Lind',
    gender: 'Male',
    gsm: '(624) 927-3403',
    createdAt: '2024-06-15T04:44:44.008Z',
    isActive: true,
    avatar: [
      {
        name: '81785188-4500-4ddf-b0d7-ed21197e231d',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'b2502315-3e80-4b81-b8ea-d28ad87da264',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/866.jpg',
      },
    ],
    addresses: [
      {
        text: '11433 Lakin Ridge, Massapequa, NY 11717',
        coordinate: ['40.72132523792435', '-73.98639367151328'],
      },
      {
        text: '11120 Royal Coves, Lindenhurst, NY 11520',
        coordinate: ['40.63410088148846', '-73.99688826750287'],
      },
      {
        text: '11036 Hartmann Islands, Massapequa, NY 11273',
        coordinate: ['40.80648728921871', '-73.94602283563091'],
      },
    ],
  },
  {
    id: getObjectId('customer_456'),
    firstName: 'Harmony',
    lastName: 'Miller',
    fullName: 'Harmony Miller',
    gender: 'Female',
    gsm: '(372) 459-2918',
    createdAt: '2024-07-01T06:58:03.595Z',
    isActive: true,
    avatar: [
      {
        name: '78434a44-e549-420b-ba9b-05ba9d081cfa',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '6fdffab0-7aad-40a8-a506-bb31119dead0',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1035.jpg',
      },
    ],
    addresses: [
      {
        text: '11781 Maiya Valley, Brooklyn, NY 11844',
        coordinate: ['40.817646237824896', '-73.95265264832331'],
      },
      {
        text: '11096 Breanne Divide, Brooklyn, NY 11640',
        coordinate: ['40.718270507252825', '-73.90150746815962'],
      },
      {
        text: '11335 Greyson Mission, Lindenhurst, NY 11507',
        coordinate: ['40.89110181872506', '-73.8938991544214'],
      },
    ],
  },
  {
    id: getObjectId('customer_457'),
    firstName: 'Destiney',
    lastName: 'Erdman',
    fullName: 'Destiney Erdman',
    gender: 'Female',
    gsm: '(884) 488-2683',
    createdAt: '2024-06-25T00:59:22.934Z',
    isActive: true,
    avatar: [
      {
        name: 'efe013ee-424c-4607-b4b4-f86009353832',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '8df877e5-e84a-4db7-8b7d-e7d48de4ccf6',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/656.jpg',
      },
    ],
    addresses: [
      {
        text: '11096 Breanne Divide, Brooklyn, NY 11640',
        coordinate: ['40.718270507252825', '-73.90150746815962'],
      },
      {
        text: '11776 Wilderman Prairie, Lindenhurst, NY 11562',
        coordinate: ['40.66945134822127', '-73.93551047298159'],
      },
      {
        text: '11038 Paolo Pines, Lindenhurst, NY 11735',
        coordinate: ['40.64023177236674', '-74.00186934411859'],
      },
    ],
  },
  {
    id: getObjectId('customer_458'),
    firstName: 'Lilly',
    lastName: 'Frami',
    fullName: 'Lilly Frami',
    gender: 'Female',
    gsm: '(352) 981-2594',
    createdAt: '2024-06-11T13:44:53.332Z',
    isActive: false,
    avatar: [
      {
        name: 'ae565719-2b4c-41a1-a003-0d73efff1450',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '3c629cb6-4107-4ef3-95f7-f3e8735fa5f9',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1035.jpg',
      },
    ],
    addresses: [
      {
        text: '11998 Valentin Pike, Massapequa, NY 11868',
        coordinate: ['40.71608376674422', '-73.79906715920882'],
      },
      {
        text: '11027 Jarod Walk, Lindenhurst, NY 11106',
        coordinate: ['40.54687170809551', '-74.15712690617478'],
      },
      {
        text: '11228 Paucek Islands, Massapequa, NY 11666',
        coordinate: ['40.782861173910526', '-73.92808660964148'],
      },
    ],
  },
  {
    id: getObjectId('customer_459'),
    firstName: 'Allison',
    lastName: 'Quitzon',
    fullName: 'Allison Quitzon',
    gender: 'Male',
    gsm: '(622) 282-4690',
    createdAt: '2024-06-23T03:44:10.639Z',
    isActive: true,
    avatar: [
      {
        name: '9f0ac4fb-9af5-43be-86a4-faaf9c15a749',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'e0e08958-3ec4-4218-93ab-eb03edb27399',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/696.jpg',
      },
    ],
    addresses: [
      {
        text: '11812 Uriah Islands, Massapequa, NY 11134',
        coordinate: ['40.76936591609023', '-73.97395465473141'],
      },
      {
        text: '11872 Roman Hollow, Massapequa, NY 11919',
        coordinate: ['40.714641774419576', '-73.99642976897374'],
      },
      {
        text: '11958 Hintz Light, Massapequa, NY 11935',
        coordinate: ['40.875917577275104', '-73.82848174189849'],
      },
    ],
  },
  {
    id: getObjectId('customer_460'),
    firstName: 'Taylor',
    lastName: 'Powlowski',
    fullName: 'Taylor Powlowski',
    gender: 'Female',
    gsm: '(114) 457-1480',
    createdAt: '2024-07-05T04:07:59.243Z',
    isActive: true,
    avatar: [
      {
        name: '601123a6-ecb8-40fb-8a74-3b1158beda56',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '12f9ff61-7f76-41a1-a44f-d219afc9e63b',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/256.jpg',
      },
    ],
    addresses: [
      {
        text: '11877 Franecki Isle, Lindenhurst, NY 11625',
        coordinate: ['40.62829175498013', '-74.18137586483954'],
      },
      {
        text: '11367 Ansley Stravenue, Massapequa, NY 11350',
        coordinate: ['40.81730470420681', '-73.94741458340314'],
      },
      {
        text: '11513 Predovic Ville, Massapequa, NY 11323',
        coordinate: ['40.67469479700506', '-73.86371925992556'],
      },
    ],
  },
  {
    id: getObjectId('customer_461'),
    firstName: 'Triston',
    lastName: 'Beer',
    fullName: 'Triston Beer',
    gender: 'Male',
    gsm: '(635) 652-6603',
    createdAt: '2024-07-05T04:01:42.897Z',
    isActive: true,
    avatar: [
      {
        name: '574d8ba6-5dc3-4cf3-a5b1-0542beafc337',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'c000cfe2-04fb-4733-8e2a-cc9b2e048cdd',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/130.jpg',
      },
    ],
    addresses: [
      {
        text: '11230 Zander Curve, Lindenhurst, NY 11912',
        coordinate: ['40.87080816088552', '-73.83213503852586'],
      },
      {
        text: '11512 Jenkins Lights, Massapequa, NY 11737',
        coordinate: ['40.71003074009839', '-73.94229615777373'],
      },
      {
        text: '11509 Donna Canyon, Brooklyn, NY 11024',
        coordinate: ['40.85330068757448', '-73.93352262256185'],
      },
    ],
  },
  {
    id: getObjectId('customer_462'),
    firstName: 'Paula',
    lastName: 'Yundt',
    fullName: 'Paula Yundt',
    gender: 'Male',
    gsm: '(603) 913-4591',
    createdAt: '2024-06-28T01:09:36.639Z',
    isActive: false,
    avatar: [
      {
        name: 'a763ecb5-a421-4265-a265-83d24b169472',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'c5898c38-305d-4ac6-8446-d7a048adc5bf',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1126.jpg',
      },
    ],
    addresses: [
      {
        text: '11316 Goodwin Curve, Brooklyn, NY 11183',
        coordinate: ['40.72331641705996', '-73.8392178094307'],
      },
      {
        text: '11955 Cali Plaza, Massapequa, NY 11892',
        coordinate: ['40.832985445011836', '-73.90333101877235'],
      },
      {
        text: '11418 Jewel Vista, Massapequa, NY 11932',
        coordinate: ['40.82014327346224', '-73.82407376717762'],
      },
    ],
  },
  {
    id: getObjectId('customer_463'),
    firstName: 'Elta',
    lastName: 'Mohr',
    fullName: 'Elta Mohr',
    gender: 'Male',
    gsm: '(238) 349-9559',
    createdAt: '2024-06-19T12:00:55.900Z',
    isActive: true,
    avatar: [
      {
        name: '94017fd3-dc15-4635-944a-bfc8cf26fbe5',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '2192a4c4-21e3-4f78-bcb8-23d4d6ee2379',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/682.jpg',
      },
    ],
    addresses: [
      {
        text: '11877 Franecki Isle, Lindenhurst, NY 11625',
        coordinate: ['40.62829175498013', '-74.18137586483954'],
      },
      {
        text: '11642 Alberta Junction, Lindenhurst, NY 11370',
        coordinate: ['40.782269303154564', '-73.92799108814602'],
      },
      {
        text: '11509 Donna Canyon, Brooklyn, NY 11024',
        coordinate: ['40.85330068757448', '-73.93352262256185'],
      },
    ],
  },
  {
    id: getObjectId('customer_464'),
    firstName: 'Lance',
    lastName: 'White',
    fullName: 'Lance White',
    gender: 'Female',
    gsm: '(973) 202-0142',
    createdAt: '2024-06-25T07:45:46.131Z',
    isActive: true,
    avatar: [
      {
        name: 'e8f25072-6ec6-4390-bfad-3cdf8609fbf0',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'ca444b43-35ad-4343-b62f-b9176a4c09fc',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/277.jpg',
      },
    ],
    addresses: [
      {
        text: '11427 Huel Route, Massapequa, NY 11751',
        coordinate: ['40.73210823178464', '-73.99785822334118'],
      },
      {
        text: '11044 Ezekiel Lodge, Brooklyn, NY 11912',
        coordinate: ['40.66138138796998', '-73.88034206938977'],
      },
      {
        text: '11701 Rusty Lights, Massapequa, NY 11840',
        coordinate: ['40.74921391148173', '-73.88745667351822'],
      },
    ],
  },
  {
    id: getObjectId('customer_465'),
    firstName: 'Braden',
    lastName: 'Hirthe',
    fullName: 'Braden Hirthe',
    gender: 'Female',
    gsm: '(710) 600-7715',
    createdAt: '2024-06-29T17:25:23.515Z',
    isActive: true,
    avatar: [
      {
        name: '71a8c40f-b113-435b-82ab-e50e96309c64',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '1d53cc0c-7cfd-49fd-84b1-90d057a571f5',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/892.jpg',
      },
    ],
    addresses: [
      {
        text: '11427 Huel Route, Massapequa, NY 11751',
        coordinate: ['40.73210823178464', '-73.99785822334118'],
      },
      {
        text: '11045 Johnston Key, Lindenhurst, NY 11539',
        coordinate: ['40.84398642270739', '-73.83864402262044'],
      },
      {
        text: '11598 Curt Shoals, Lindenhurst, NY 11514',
        coordinate: ['40.802597877430756', '-73.93849763295711'],
      },
    ],
  },
  {
    id: getObjectId('customer_466'),
    firstName: 'Floy',
    lastName: 'Kling',
    fullName: 'Floy Kling',
    gender: 'Female',
    gsm: '(828) 915-6101',
    createdAt: '2024-07-06T11:01:02.393Z',
    isActive: false,
    avatar: [
      {
        name: '2200f620-9054-4d71-8516-b8e63ab44594',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'f9a85a93-d200-49df-89b5-d88a9945add6',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1229.jpg',
      },
    ],
    addresses: [
      {
        text: '11825 Chelsey Springs, Brooklyn, NY 11928',
        coordinate: ['40.64393181276535', '-74.10229104074979'],
      },
      {
        text: '11209 Koelpin Mission, Massapequa, NY 11226',
        coordinate: ['40.69572890173205', '-73.9970705051839'],
      },
      {
        text: '11718 Beatty Motorway, Lindenhurst, NY 11314',
        coordinate: ['40.69281598660577', '-73.82908131481418'],
      },
    ],
  },
  {
    id: getObjectId('customer_467'),
    firstName: 'Eva',
    lastName: 'Sanford',
    fullName: 'Eva Sanford',
    gender: 'Female',
    gsm: '(228) 635-4524',
    createdAt: '2024-06-13T00:22:02.077Z',
    isActive: true,
    avatar: [
      {
        name: 'ce3da3f3-29dd-4e2d-9dff-c0e72cddb591',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '00138082-7610-422d-bb6a-8070e429ced3',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/634.jpg',
      },
    ],
    addresses: [
      {
        text: '11864 Leonora Stream, Brooklyn, NY 11957',
        coordinate: ['40.832201142470986', '-73.9018035427564'],
      },
      {
        text: '11727 Schaefer Inlet, Lindenhurst, NY 11036',
        coordinate: ['40.68715261156324', '-74.00526659632791'],
      },
      {
        text: '11156 Hoppe Run, Lindenhurst, NY 11165',
        coordinate: ['40.65688875879231', '-73.88404087891976'],
      },
    ],
  },
  {
    id: getObjectId('customer_468'),
    firstName: 'Alejandrin',
    lastName: 'Zemlak',
    fullName: 'Alejandrin Zemlak',
    gender: 'Female',
    gsm: '(606) 472-2673',
    createdAt: '2024-07-06T02:06:52.739Z',
    isActive: true,
    avatar: [
      {
        name: 'e4eee701-a881-439f-84c5-c3619dc2b1cb',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '52581979-17ef-4c8d-aa52-d852f96af993',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/578.jpg',
      },
    ],
    addresses: [
      {
        text: '11166 Cormier Plaza, Lindenhurst, NY 11278',
        coordinate: ['40.86255321747302', '-73.8648318412901'],
      },
      {
        text: '11606 Mariana Keys, Lindenhurst, NY 11071',
        coordinate: ['40.60227925020982', '-73.91362606675423'],
      },
      {
        text: '11599 Wolf Lock, Brooklyn, NY 11792',
        coordinate: ['40.7042912677296', '-74.01395408433967'],
      },
    ],
  },
  {
    id: getObjectId('customer_469'),
    firstName: 'Trent',
    lastName: 'Cummerata',
    fullName: 'Trent Cummerata',
    gender: 'Female',
    gsm: '(365) 120-3189',
    createdAt: '2024-06-08T19:42:44.315Z',
    isActive: false,
    avatar: [
      {
        name: 'dced6383-7acb-477b-859e-9b3564537fee',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '933f459e-f13a-4dcf-8ad8-b2f0ce34babb',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1010.jpg',
      },
    ],
    addresses: [
      {
        text: '11082 Davonte Loop, Brooklyn, NY 11055',
        coordinate: ['40.698260804649976', '-73.91788218792928'],
      },
      {
        text: '11021 Waelchi Crossing, Brooklyn, NY 11306',
        coordinate: ['40.77751176704511', '-73.97279729093525'],
      },
      {
        text: '11107 Hickle Ranch, Lindenhurst, NY 11515',
        coordinate: ['40.61088151832268', '-74.08690487977938'],
      },
    ],
  },
  {
    id: getObjectId('customer_470'),
    firstName: 'Clint',
    lastName: 'Feeney',
    fullName: 'Clint Feeney',
    gender: 'Female',
    gsm: '(479) 190-4470',
    createdAt: '2024-06-18T12:15:10.743Z',
    isActive: false,
    avatar: [
      {
        name: 'ab6c5749-55a5-4c10-93b6-fb755d3fc90b',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '96f5ae4a-da37-47bb-a685-5220b1e145f3',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/683.jpg',
      },
    ],
    addresses: [
      {
        text: '11781 Maiya Valley, Brooklyn, NY 11844',
        coordinate: ['40.817646237824896', '-73.95265264832331'],
      },
      {
        text: '11166 Cormier Plaza, Lindenhurst, NY 11278',
        coordinate: ['40.86255321747302', '-73.8648318412901'],
      },
      {
        text: '11878 Pagac Trail, Lindenhurst, NY 11876',
        coordinate: ['40.71114281327269', '-74.01648182914843'],
      },
    ],
  },
  {
    id: getObjectId('customer_471'),
    firstName: 'Janet',
    lastName: 'Toy',
    fullName: 'Janet Toy',
    gender: 'Female',
    gsm: '(277) 092-9636',
    createdAt: '2024-07-03T18:46:14.650Z',
    isActive: true,
    avatar: [
      {
        name: '928291e9-2a7d-4101-a80a-755f6e2a17e1',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'c8428204-ef01-49e5-b314-45ed85235030',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/983.jpg',
      },
    ],
    addresses: [
      {
        text: '11230 Zander Curve, Lindenhurst, NY 11912',
        coordinate: ['40.87080816088552', '-73.83213503852586'],
      },
      {
        text: '11263 Solon Stream, Lindenhurst, NY 11007',
        coordinate: ['40.63674069980736', '-73.91978780874902'],
      },
      {
        text: '11245 Myrl Loop, Massapequa, NY 11390',
        coordinate: ['40.757834840940724', '-73.9538537606329'],
      },
    ],
  },
  {
    id: getObjectId('customer_472'),
    firstName: 'Tamara',
    lastName: 'Fahey',
    fullName: 'Tamara Fahey',
    gender: 'Male',
    gsm: '(617) 232-0603',
    createdAt: '2024-06-15T16:28:41.098Z',
    isActive: false,
    avatar: [
      {
        name: '99c5f421-abd1-45d2-839b-adb62fc6ed9a',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'd850539e-cbdd-4ec3-87bf-3a6c8cdc46c3',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/836.jpg',
      },
    ],
    addresses: [
      {
        text: '11923 Legros Divide, Brooklyn, NY 11072',
        coordinate: ['40.75081540048207', '-73.84366030192892'],
      },
      {
        text: '11149 Cruickshank Burg, Lindenhurst, NY 11019',
        coordinate: ['40.78731753673706', '-73.9144110734691'],
      },
      {
        text: '11107 Hickle Ranch, Lindenhurst, NY 11515',
        coordinate: ['40.61088151832268', '-74.08690487977938'],
      },
    ],
  },
  {
    id: getObjectId('customer_473'),
    firstName: 'Evan',
    lastName: 'Johnson',
    fullName: 'Evan Johnson',
    gender: 'Male',
    gsm: '(559) 234-8068',
    createdAt: '2024-06-17T18:34:21.244Z',
    isActive: false,
    avatar: [
      {
        name: '30d32366-dfda-4075-bd5b-d33145fbbb99',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '6dd420d3-8051-4310-adbe-54508d97fc26',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/686.jpg',
      },
    ],
    addresses: [
      {
        text: '11435 Theodore Grove, Lindenhurst, NY 11899',
        coordinate: ['40.58985851813696', '-73.98005929565423'],
      },
      {
        text: '11107 Hickle Ranch, Lindenhurst, NY 11515',
        coordinate: ['40.61088151832268', '-74.08690487977938'],
      },
      {
        text: '11149 Cruickshank Burg, Lindenhurst, NY 11019',
        coordinate: ['40.78731753673706', '-73.9144110734691'],
      },
    ],
  },
  {
    id: getObjectId('customer_474'),
    firstName: 'Bryon',
    lastName: 'Greenholt',
    fullName: 'Bryon Greenholt',
    gender: 'Male',
    gsm: '(588) 055-4776',
    createdAt: '2024-06-09T04:42:11.999Z',
    isActive: false,
    avatar: [
      {
        name: '320e7877-be5e-4023-ad7c-cfee0b7ef983',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'e13cd618-65a1-475f-97bf-ea1f914ae94f',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1021.jpg',
      },
    ],
    addresses: [
      {
        text: '11946 Little Isle, Massapequa, NY 11319',
        coordinate: ['40.81821649698436', '-73.86826310670972'],
      },
      {
        text: '11505 Raynor Walk, Massapequa, NY 11815',
        coordinate: ['40.75598474475542', '-73.9358398855354'],
      },
      {
        text: '11961 Wilfred Terrace, Brooklyn, NY 11580',
        coordinate: ['40.675225426976645', '-73.91483721590403'],
      },
    ],
  },
  {
    id: getObjectId('customer_475'),
    firstName: 'Stephan',
    lastName: 'Kilback',
    fullName: 'Stephan Kilback',
    gender: 'Male',
    gsm: '(406) 370-2027',
    createdAt: '2024-06-27T04:27:47.675Z',
    isActive: false,
    avatar: [
      {
        name: '99345c0b-ee3c-47bd-9940-9b132daa91b9',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '70995bbb-f892-46d6-b1cd-54b133ae0710',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1221.jpg',
      },
    ],
    addresses: [
      {
        text: '11044 Ezekiel Lodge, Brooklyn, NY 11912',
        coordinate: ['40.66138138796998', '-73.88034206938977'],
      },
      {
        text: '11027 Jarod Walk, Lindenhurst, NY 11106',
        coordinate: ['40.54687170809551', '-74.15712690617478'],
      },
      {
        text: '11408 Labadie Hollow, Lindenhurst, NY 11527',
        coordinate: ['40.68730915595523', '-73.94908167902258'],
      },
    ],
  },
  {
    id: getObjectId('customer_476'),
    firstName: 'Blaze',
    lastName: 'Kerluke',
    fullName: 'Blaze Kerluke',
    gender: 'Female',
    gsm: '(394) 080-4867',
    createdAt: '2024-07-02T18:30:03.098Z',
    isActive: true,
    avatar: [
      {
        name: 'ab3cfb29-4004-4eff-8c7e-924b2f7e9d9d',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '06a39896-c214-4ca6-b2ca-61083ec905dd',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/536.jpg',
      },
    ],
    addresses: [
      {
        text: '11269 Stokes Valley, Lindenhurst, NY 11154',
        coordinate: ['40.67540078261772', '-73.81703727480193'],
      },
      {
        text: '11877 Nyasia Plains, Lindenhurst, NY 11970',
        coordinate: ['40.76021384556489', '-74.00722225239753'],
      },
      {
        text: '11181 Rice Corners, Massapequa, NY 11016',
        coordinate: ['40.85995458193837', '-73.81034233663169'],
      },
    ],
  },
  {
    id: getObjectId('customer_477'),
    firstName: 'Bryon',
    lastName: 'Block',
    fullName: 'Bryon Block',
    gender: 'Male',
    gsm: '(329) 487-8560',
    createdAt: '2024-06-25T17:20:45.639Z',
    isActive: true,
    avatar: [
      {
        name: 'acbc40e0-90f3-4400-9df1-47315ebe1ef7',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '2e0de8e5-cab3-4cb3-85d7-1014b946d172',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/328.jpg',
      },
    ],
    addresses: [
      {
        text: '11335 Greyson Mission, Lindenhurst, NY 11507',
        coordinate: ['40.89110181872506', '-73.8938991544214'],
      },
      {
        text: '11958 Hintz Light, Massapequa, NY 11935',
        coordinate: ['40.875917577275104', '-73.82848174189849'],
      },
      {
        text: '11246 Heathcote Crescent, Brooklyn, NY 11164',
        coordinate: ['40.70264295688686', '-73.85781194108168'],
      },
    ],
  },
  {
    id: getObjectId('customer_478'),
    firstName: 'Jerad',
    lastName: 'Stracke',
    fullName: 'Jerad Stracke',
    gender: 'Male',
    gsm: '(026) 069-5886',
    createdAt: '2024-06-23T13:24:55.515Z',
    isActive: false,
    avatar: [
      {
        name: '4ed1544f-7155-4210-aed8-087f91326454',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'd7f686a4-9f85-45fa-8151-f516664d1379',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/632.jpg',
      },
    ],
    addresses: [
      {
        text: '11509 Donna Canyon, Brooklyn, NY 11024',
        coordinate: ['40.85330068757448', '-73.93352262256185'],
      },
      {
        text: '11923 Legros Divide, Brooklyn, NY 11072',
        coordinate: ['40.75081540048207', '-73.84366030192892'],
      },
      {
        text: '11576 Kerluke Summit, Massapequa, NY 11417',
        coordinate: ['40.59210466006108', '-73.99582650996682'],
      },
    ],
  },
  {
    id: getObjectId('customer_479'),
    firstName: 'Dylan',
    lastName: 'Welch',
    fullName: 'Dylan Welch',
    gender: 'Female',
    gsm: '(706) 166-5611',
    createdAt: '2024-07-03T12:31:30.192Z',
    isActive: true,
    avatar: [
      {
        name: 'a1a7e8ca-142b-41ed-85ac-096d63f18470',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'a5980ecd-0838-4d13-b012-ab6bc6ee37bc',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/703.jpg',
      },
    ],
    addresses: [
      {
        text: '11735 Kailee Shoals, Brooklyn, NY 11393',
        coordinate: ['40.84785614227491', '-73.90130203986932'],
      },
      {
        text: '11384 Waelchi Rapid, Massapequa, NY 11796',
        coordinate: ['40.84590139880644', '-73.8928291967851'],
      },
      {
        text: '11024 Gerald Pike, Brooklyn, NY 11160',
        coordinate: ['40.58348466152282', '-73.93320807895984'],
      },
    ],
  },
  {
    id: getObjectId('customer_480'),
    firstName: 'Rafael',
    lastName: 'Mills',
    fullName: 'Rafael Mills',
    gender: 'Female',
    gsm: '(998) 491-4623',
    createdAt: '2024-06-12T23:52:07.394Z',
    isActive: false,
    avatar: [
      {
        name: '0fc1b207-09c3-47e8-b216-7e4da0c2628f',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'e036617d-7d4a-4016-9b8c-2f27cae7ab9b',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/917.jpg',
      },
    ],
    addresses: [
      {
        text: '11120 Royal Coves, Lindenhurst, NY 11520',
        coordinate: ['40.63410088148846', '-73.99688826750287'],
      },
      {
        text: '11727 Schaefer Inlet, Lindenhurst, NY 11036',
        coordinate: ['40.68715261156324', '-74.00526659632791'],
      },
      {
        text: '11835 Powlowski Extension, Brooklyn, NY 11150',
        coordinate: ['40.76245015151365', '-73.87061296246294'],
      },
    ],
  },
  {
    id: getObjectId('customer_481'),
    firstName: 'Vaughn',
    lastName: 'Marvin',
    fullName: 'Vaughn Marvin',
    gender: 'Male',
    gsm: '(601) 762-2926',
    createdAt: '2024-06-09T06:16:53.249Z',
    isActive: true,
    avatar: [
      {
        name: '7fea86aa-a2dd-4f4e-bd74-e826597dc1ed',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '7d2707e7-6e07-4afa-8d78-dfc549d990c0',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/610.jpg',
      },
    ],
    addresses: [
      {
        text: '11073 Wuckert Lake, Massapequa, NY 11688',
        coordinate: ['40.80679767187204', '-73.94678301233309'],
      },
      {
        text: '11851 Swift Glen, Lindenhurst, NY 11624',
        coordinate: ['40.51158309370173', '-74.22091326797245'],
      },
      {
        text: '11397 Ima Ford, Brooklyn, NY 11687',
        coordinate: ['40.55434237956047', '-74.14814739224421'],
      },
    ],
  },
  {
    id: getObjectId('customer_482'),
    firstName: 'Isidro',
    lastName: 'Schiller',
    fullName: 'Isidro Schiller',
    gender: 'Female',
    gsm: '(650) 243-0193',
    createdAt: '2024-07-06T05:27:17.993Z',
    isActive: false,
    avatar: [
      {
        name: '5b097242-7bb5-4a8e-b1bd-e509421621c5',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '94e5ea9e-6a6f-419c-aaca-f13a10dd05f3',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/844.jpg',
      },
    ],
    addresses: [
      {
        text: '11815 Misty Ville, Massapequa, NY 11565',
        coordinate: ['40.658349139669525', '-73.88511259693168'],
      },
      {
        text: '11264 Pauline Knolls, Brooklyn, NY 11384',
        coordinate: ['40.85195030781291', '-73.93088781078077'],
      },
      {
        text: '11438 Otilia Valleys, Brooklyn, NY 11215',
        coordinate: ['40.804396260981164', '-73.79231266832804'],
      },
    ],
  },
  {
    id: getObjectId('customer_483'),
    firstName: 'Lemuel',
    lastName: 'Jast',
    fullName: 'Lemuel Jast',
    gender: 'Female',
    gsm: '(701) 024-2803',
    createdAt: '2024-06-22T14:43:56.087Z',
    isActive: true,
    avatar: [
      {
        name: 'c73df711-2135-4f04-a4e7-79a1d3f5c83e',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '5f96dc8d-5eb8-4832-ae63-4462e5c9f1fc',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/364.jpg',
      },
    ],
    addresses: [
      {
        text: '11769 Sally Villages, Massapequa, NY 11393',
        coordinate: ['40.79438834815965', '-73.9479240645321'],
      },
      {
        text: '11762 Schinner Garden, Lindenhurst, NY 11487',
        coordinate: ['40.50954831912203', '-74.24409344591764'],
      },
      {
        text: '11418 Schumm Lock, Lindenhurst, NY 11340',
        coordinate: ['40.788028545449976', '-73.90529902987166'],
      },
    ],
  },
  {
    id: getObjectId('customer_484'),
    firstName: 'Alek',
    lastName: 'Zieme',
    fullName: 'Alek Zieme',
    gender: 'Female',
    gsm: '(080) 708-0653',
    createdAt: '2024-06-15T02:38:27.487Z',
    isActive: true,
    avatar: [
      {
        name: '83cc8110-01d4-4a4e-802a-061ff8cec0b6',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '54d164e3-f244-4885-a6c9-c814c4b427d2',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/793.jpg',
      },
    ],
    addresses: [
      {
        text: '11055 Schuster Gardens, Massapequa, NY 11732',
        coordinate: ['40.6365034810973', '-73.98578000769199'],
      },
      {
        text: '11384 Waelchi Rapid, Massapequa, NY 11796',
        coordinate: ['40.84590139880644', '-73.8928291967851'],
      },
      {
        text: '11418 Jewel Vista, Massapequa, NY 11932',
        coordinate: ['40.82014327346224', '-73.82407376717762'],
      },
    ],
  },
  {
    id: getObjectId('customer_485'),
    firstName: 'Damion',
    lastName: 'Fahey',
    fullName: 'Damion Fahey',
    gender: 'Male',
    gsm: '(523) 410-6863',
    createdAt: '2024-06-14T20:41:58.176Z',
    isActive: true,
    avatar: [
      {
        name: 'a523e7ae-1772-4407-bb1b-ea0b546fa156',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'bd80ede1-453c-4fb3-a3d3-2d3bd5b9fe9c',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/736.jpg',
      },
    ],
    addresses: [
      {
        text: '11495 Waters Green, Brooklyn, NY 11190',
        coordinate: ['40.6957041527947', '-73.74115440500046'],
      },
      {
        text: '11719 Buckridge Center, Brooklyn, NY 11760',
        coordinate: ['40.71127832019916', '-73.72859237968323'],
      },
      {
        text: '11606 Mariana Keys, Lindenhurst, NY 11071',
        coordinate: ['40.60227925020982', '-73.91362606675423'],
      },
    ],
  },
  {
    id: getObjectId('customer_486'),
    firstName: 'Darlene',
    lastName: 'Cummings',
    fullName: 'Darlene Cummings',
    gender: 'Female',
    gsm: '(932) 517-2597',
    createdAt: '2024-06-30T00:42:35.450Z',
    isActive: false,
    avatar: [
      {
        name: '18ff6fab-b548-44ff-901d-45687f385cfc',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '1b190c1e-27ac-43dd-9eec-4372047eeb9d',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/463.jpg',
      },
    ],
    addresses: [
      {
        text: '11203 Pfannerstill Stravenue, Lindenhurst, NY 11362',
        coordinate: ['40.81887624266896', '-73.93779180668098'],
      },
      {
        text: '11195 Nader Road, Massapequa, NY 11615',
        coordinate: ['40.62678964983104', '-73.98952500781843'],
      },
      {
        text: '11862 Ward Glen, Massapequa, NY 11885',
        coordinate: ['40.87823216032764', '-73.91814523246967'],
      },
    ],
  },
  {
    id: getObjectId('customer_487'),
    firstName: 'Columbus',
    lastName: 'Ledner',
    fullName: 'Columbus Ledner',
    gender: 'Female',
    gsm: '(017) 925-3450',
    createdAt: '2024-06-24T11:07:47.652Z',
    isActive: false,
    avatar: [
      {
        name: 'af3aec5a-6c42-4451-821b-8baaa1991bdf',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'a2051644-862f-4944-b2ce-437b75c68c3d',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/783.jpg',
      },
    ],
    addresses: [
      {
        text: '11898 Chelsea Plain, Lindenhurst, NY 11735',
        coordinate: ['40.875525570218045', '-73.86179079437676'],
      },
      {
        text: '11680 Georgette Junctions, Massapequa, NY 11411',
        coordinate: ['40.702102706281686', '-73.80945836885176'],
      },
      {
        text: '11451 Beahan Hill, Massapequa, NY 11967',
        coordinate: ['40.820067735758684', '-73.93981529222577'],
      },
    ],
  },
  {
    id: getObjectId('customer_488'),
    firstName: 'Lori',
    lastName: 'Jones',
    fullName: 'Lori Jones',
    gender: 'Male',
    gsm: '(995) 323-2481',
    createdAt: '2024-06-22T11:09:29.732Z',
    isActive: true,
    avatar: [
      {
        name: '55e71a09-1604-4972-88f5-47cb07df8d82',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '75ccf02c-10d1-4904-824c-22db6b424421',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/27.jpg',
      },
    ],
    addresses: [
      {
        text: '11246 Heathcote Crescent, Brooklyn, NY 11164',
        coordinate: ['40.70264295688686', '-73.85781194108168'],
      },
      {
        text: '11316 Goodwin Curve, Brooklyn, NY 11183',
        coordinate: ['40.72331641705996', '-73.8392178094307'],
      },
      {
        text: '11181 Rice Corners, Massapequa, NY 11016',
        coordinate: ['40.85995458193837', '-73.81034233663169'],
      },
    ],
  },
  {
    id: getObjectId('customer_489'),
    firstName: 'Filomena',
    lastName: 'Beahan',
    fullName: 'Filomena Beahan',
    gender: 'Female',
    gsm: '(249) 661-0202',
    createdAt: '2024-07-03T14:57:14.435Z',
    isActive: false,
    avatar: [
      {
        name: '81328d6d-9acd-4841-9346-5d300dcc0d8c',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '84225d63-3d0f-454b-a8e9-4051b0497149',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/976.jpg',
      },
    ],
    addresses: [
      {
        text: '11878 Dudley Pike, Lindenhurst, NY 11604',
        coordinate: ['40.64716080488486', '-74.0073656851469'],
      },
      {
        text: '11059 Randy Locks, Lindenhurst, NY 11667',
        coordinate: ['40.855052258679024', '-73.90331823302245'],
      },
      {
        text: '11335 Greyson Mission, Lindenhurst, NY 11507',
        coordinate: ['40.89110181872506', '-73.8938991544214'],
      },
    ],
  },
  {
    id: getObjectId('customer_490'),
    firstName: 'Walter',
    lastName: 'Leuschke',
    fullName: 'Walter Leuschke',
    gender: 'Male',
    gsm: '(289) 911-2151',
    createdAt: '2024-06-24T18:43:47.962Z',
    isActive: true,
    avatar: [
      {
        name: 'f880f867-cc68-4d97-8886-a2f967345e1a',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '0ce073cf-cd74-426c-ac63-f20cb602a380',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/201.jpg',
      },
    ],
    addresses: [
      {
        text: '11412 Spencer Skyway, Lindenhurst, NY 11312',
        coordinate: ['40.615431898170364', '-73.92934453739576'],
      },
      {
        text: '11036 Joaquin Circle, Massapequa, NY 11502',
        coordinate: ['40.70119015066914', '-73.99645145905747'],
      },
      {
        text: '11246 Heathcote Crescent, Brooklyn, NY 11164',
        coordinate: ['40.70264295688686', '-73.85781194108168'],
      },
    ],
  },
  {
    id: getObjectId('customer_491'),
    firstName: 'Roxane',
    lastName: 'Emmerich',
    fullName: 'Roxane Emmerich',
    gender: 'Female',
    gsm: '(312) 015-6372',
    createdAt: '2024-06-21T01:22:49.519Z',
    isActive: false,
    avatar: [
      {
        name: '0b36273f-bf79-431e-8a47-fa5f95005834',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '02032db0-3e18-4aef-b953-520fa7f48f52',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1114.jpg',
      },
    ],
    addresses: [
      {
        text: '11096 Breanne Divide, Brooklyn, NY 11640',
        coordinate: ['40.718270507252825', '-73.90150746815962'],
      },
      {
        text: '11624 Jairo Road, Lindenhurst, NY 11160',
        coordinate: ['40.823376279414674', '-73.93960148270892'],
      },
      {
        text: '11359 Weissnat Shore, Lindenhurst, NY 11530',
        coordinate: ['40.7318003523917', '-73.81115496631985'],
      },
    ],
  },
  {
    id: getObjectId('customer_492'),
    firstName: 'Johann',
    lastName: 'Willms',
    fullName: 'Johann Willms',
    gender: 'Male',
    gsm: '(866) 104-5418',
    createdAt: '2024-06-23T21:18:37.253Z',
    isActive: true,
    avatar: [
      {
        name: '07635db4-9bc1-47ad-98ce-61081a9dffa1',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '749739bf-13e7-4f20-8f90-73eabbf4cecd',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1038.jpg',
      },
    ],
    addresses: [
      {
        text: '11433 Lakin Ridge, Massapequa, NY 11717',
        coordinate: ['40.72132523792435', '-73.98639367151328'],
      },
      {
        text: '11439 Aglae Radial, Brooklyn, NY 11205',
        coordinate: ['40.83247202632326', '-73.91406031894931'],
      },
      {
        text: '11024 Gerald Pike, Brooklyn, NY 11160',
        coordinate: ['40.58348466152282', '-73.93320807895984'],
      },
    ],
  },
  {
    id: getObjectId('customer_493'),
    firstName: 'Celestine',
    lastName: 'Kunde',
    fullName: 'Celestine Kunde',
    gender: 'Female',
    gsm: '(968) 540-2240',
    createdAt: '2024-07-07T10:28:41.376Z',
    isActive: false,
    avatar: [
      {
        name: '2482c4cf-7045-4bd0-9c29-d241ffa4b363',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '077c1ada-3471-49f2-8226-9714abb3c55f',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/441.jpg',
      },
    ],
    addresses: [
      {
        text: '11270 Littel Drive, Lindenhurst, NY 11968',
        coordinate: ['40.689013432473764', '-73.91000786387228'],
      },
      {
        text: '11125 Strosin Curve, Lindenhurst, NY 11467',
        coordinate: ['40.732100034726514', '-73.9767183060347'],
      },
      {
        text: '11397 Ima Ford, Brooklyn, NY 11687',
        coordinate: ['40.55434237956047', '-74.14814739224421'],
      },
    ],
  },
  {
    id: getObjectId('customer_494'),
    firstName: 'Orlo',
    lastName: "O'Conner",
    fullName: "Orlo O'Conner",
    gender: 'Male',
    gsm: '(279) 244-5000',
    createdAt: '2024-07-04T05:32:55.686Z',
    isActive: true,
    avatar: [
      {
        name: 'e22691d5-df0a-4a15-a68c-cead3f4b122d',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '22398fa9-509c-4994-bd5e-1a6fa28216fe',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/447.jpg',
      },
    ],
    addresses: [
      {
        text: '11295 Quitzon Drives, Massapequa, NY 11937',
        coordinate: ['40.69795402619539', '-73.93395502854624'],
      },
      {
        text: '11451 Beahan Hill, Massapequa, NY 11967',
        coordinate: ['40.820067735758684', '-73.93981529222577'],
      },
      {
        text: '11947 Ernser Ferry, Lindenhurst, NY 11234',
        coordinate: ['40.750136329510546', '-73.88507636312373'],
      },
    ],
  },
  {
    id: getObjectId('customer_495'),
    firstName: 'Reese',
    lastName: 'Langworth',
    fullName: 'Reese Langworth',
    gender: 'Male',
    gsm: '(133) 181-9952',
    createdAt: '2024-07-03T03:29:49.536Z',
    isActive: true,
    avatar: [
      {
        name: '815d1ce9-c08d-4ef8-8969-4225764e95d3',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '4866ad52-ed4f-4a1b-acec-f077913557e7',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/829.jpg',
      },
    ],
    addresses: [
      {
        text: '11974 Harold Ports, Brooklyn, NY 11963',
        coordinate: ['40.674179744645684', '-73.98876832456823'],
      },
      {
        text: '11851 Swift Glen, Lindenhurst, NY 11624',
        coordinate: ['40.51158309370173', '-74.22091326797245'],
      },
      {
        text: '11451 Beahan Hill, Massapequa, NY 11967',
        coordinate: ['40.820067735758684', '-73.93981529222577'],
      },
    ],
  },
  {
    id: getObjectId('customer_496'),
    firstName: 'Marietta',
    lastName: 'Koelpin',
    fullName: 'Marietta Koelpin',
    gender: 'Male',
    gsm: '(394) 221-9875',
    createdAt: '2024-07-05T21:46:46.532Z',
    isActive: false,
    avatar: [
      {
        name: '25a34415-2661-4383-b10a-64c94d0d4b07',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '1581e2ca-31c4-4f3e-83fd-8447e2e9b25f',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1097.jpg',
      },
    ],
    addresses: [
      {
        text: '11719 Buckridge Center, Brooklyn, NY 11760',
        coordinate: ['40.71127832019916', '-73.72859237968323'],
      },
      {
        text: '11097 Naomie Mountain, Brooklyn, NY 11492',
        coordinate: ['40.67369096200763', '-73.92525141581397'],
      },
      {
        text: '11509 Donna Canyon, Brooklyn, NY 11024',
        coordinate: ['40.85330068757448', '-73.93352262256185'],
      },
    ],
  },
  {
    id: getObjectId('customer_497'),
    firstName: 'Adela',
    lastName: 'Waters',
    fullName: 'Adela Waters',
    gender: 'Female',
    gsm: '(811) 413-4049',
    createdAt: '2024-06-30T15:58:16.001Z',
    isActive: false,
    avatar: [
      {
        name: 'c90480fb-79fc-463e-bb11-e5b2c74b016d',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'e28539d7-8b21-4bea-a0b5-443e2792b2dd',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/956.jpg',
      },
    ],
    addresses: [
      {
        text: '11769 Sally Villages, Massapequa, NY 11393',
        coordinate: ['40.79438834815965', '-73.9479240645321'],
      },
      {
        text: '11878 Dudley Pike, Lindenhurst, NY 11604',
        coordinate: ['40.64716080488486', '-74.0073656851469'],
      },
      {
        text: '11245 Myrl Loop, Massapequa, NY 11390',
        coordinate: ['40.757834840940724', '-73.9538537606329'],
      },
    ],
  },
  {
    id: getObjectId('customer_498'),
    firstName: 'Hal',
    lastName: 'Klocko',
    fullName: 'Hal Klocko',
    gender: 'Female',
    gsm: '(642) 269-6373',
    createdAt: '2024-06-21T23:07:39.103Z',
    isActive: true,
    avatar: [
      {
        name: 'b8d86782-a5c9-4ac0-8e3c-17f1c444950d',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'f3fa51b8-ac97-48fb-9e3b-a029d81a801b',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/68.jpg',
      },
    ],
    addresses: [
      {
        text: '11609 Carolanne Islands, Massapequa, NY 11138',
        coordinate: ['40.75935689417804', '-73.97485861044613'],
      },
      {
        text: '11923 Legros Divide, Brooklyn, NY 11072',
        coordinate: ['40.75081540048207', '-73.84366030192892'],
      },
      {
        text: '11606 Mariana Keys, Lindenhurst, NY 11071',
        coordinate: ['40.60227925020982', '-73.91362606675423'],
      },
    ],
  },
  {
    id: getObjectId('customer_499'),
    firstName: 'Theodore',
    lastName: 'Gerlach',
    fullName: 'Theodore Gerlach',
    gender: 'Female',
    gsm: '(786) 018-6294',
    createdAt: '2024-06-23T06:28:04.118Z',
    isActive: true,
    avatar: [
      {
        name: '6b95d680-76f8-4ffc-a03d-09a8fae64343',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '01bc3c06-a864-48ca-b374-281e7ab5cd01',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/859.jpg',
      },
    ],
    addresses: [
      {
        text: '11316 Goodwin Curve, Brooklyn, NY 11183',
        coordinate: ['40.72331641705996', '-73.8392178094307'],
      },
      {
        text: '11797 Bart Valley, Lindenhurst, NY 11117',
        coordinate: ['40.669777801118656', '-73.92802454968135'],
      },
      {
        text: '11181 Rice Corners, Massapequa, NY 11016',
        coordinate: ['40.85995458193837', '-73.81034233663169'],
      },
    ],
  },
  {
    id: getObjectId('customer_500'),
    firstName: 'Yasmin',
    lastName: 'Rau',
    fullName: 'Yasmin Rau',
    gender: 'Female',
    gsm: '(081) 212-4307',
    createdAt: '2024-06-19T00:39:42.833Z',
    isActive: true,
    avatar: [
      {
        name: '7668a184-efca-442e-8558-959f85d74837',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'bb5941ac-c112-4507-bd7a-9ff1129ddcc5',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/371.jpg',
      },
    ],
    addresses: [
      {
        text: '11881 Wilton Fields, Lindenhurst, NY 11176',
        coordinate: ['40.787915583564256', '-73.84583413474485'],
      },
      {
        text: '11718 Beatty Motorway, Lindenhurst, NY 11314',
        coordinate: ['40.69281598660577', '-73.82908131481418'],
      },
      {
        text: '11180 Thompson Circle, Massapequa, NY 11460',
        coordinate: ['40.52879780292704', '-74.16599356445849'],
      },
    ],
  },
  {
    id: getObjectId('customer_501'),
    firstName: 'Leonor',
    lastName: 'Runolfsdottir',
    fullName: 'Leonor Runolfsdottir',
    gender: 'Female',
    gsm: '(351) 582-1566',
    createdAt: '2024-06-29T04:29:53.736Z',
    isActive: false,
    avatar: [
      {
        name: '104a69e2-458f-4af6-b9bc-855d63e69986',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '5d043244-6dae-4ccb-b31a-68ce05a5875a',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/915.jpg',
      },
    ],
    addresses: [
      {
        text: '11335 Greyson Mission, Lindenhurst, NY 11507',
        coordinate: ['40.89110181872506', '-73.8938991544214'],
      },
      {
        text: '11456 Federico Freeway, Lindenhurst, NY 11390',
        coordinate: ['40.73636731561727', '-73.87880380035317'],
      },
      {
        text: '11576 Kerluke Summit, Massapequa, NY 11417',
        coordinate: ['40.59210466006108', '-73.99582650996682'],
      },
    ],
  },
  {
    id: getObjectId('customer_502'),
    firstName: 'Chet',
    lastName: 'Jacobson',
    fullName: 'Chet Jacobson',
    gender: 'Female',
    gsm: '(930) 397-9582',
    createdAt: '2024-06-14T01:59:49.643Z',
    isActive: true,
    avatar: [
      {
        name: 'e9777d27-af1c-4276-991b-a28f8fc65584',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '2661824b-e5a3-4f9e-818d-d339e41c9597',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/131.jpg',
      },
    ],
    addresses: [
      {
        text: '11693 Hartmann Park, Brooklyn, NY 11251',
        coordinate: ['40.705101590541354', '-73.98948018281791'],
      },
      {
        text: '11359 Weissnat Shore, Lindenhurst, NY 11530',
        coordinate: ['40.7318003523917', '-73.81115496631985'],
      },
      {
        text: '11509 Donna Canyon, Brooklyn, NY 11024',
        coordinate: ['40.85330068757448', '-73.93352262256185'],
      },
    ],
  },
  {
    id: getObjectId('customer_503'),
    firstName: 'Lonie',
    lastName: 'Jacobi',
    fullName: 'Lonie Jacobi',
    gender: 'Female',
    gsm: '(904) 426-7606',
    createdAt: '2024-06-12T01:33:44.550Z',
    isActive: true,
    avatar: [
      {
        name: '289c395b-0df7-42c9-b340-794ac26d33d1',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'ef09572b-9ab1-4727-96fc-81472b5ef95f',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/157.jpg',
      },
    ],
    addresses: [
      {
        text: '11471 Ransom Parkway, Massapequa, NY 11941',
        coordinate: ['40.70408980199366', '-73.9930806087735'],
      },
      {
        text: '11774 Koss Mission, Brooklyn, NY 11540',
        coordinate: ['40.73032437088068', '-73.99512821335122'],
      },
      {
        text: '11045 Morar Extensions, Lindenhurst, NY 11342',
        coordinate: ['40.59184529992161', '-73.80292936655309'],
      },
    ],
  },
  {
    id: getObjectId('customer_504'),
    firstName: 'Pierre',
    lastName: 'VonRueden',
    fullName: 'Pierre VonRueden',
    gender: 'Female',
    gsm: '(753) 995-8441',
    createdAt: '2024-06-18T18:08:08.801Z',
    isActive: false,
    avatar: [
      {
        name: '65318c8e-c500-4aef-8be9-68a6046489d6',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '25238c9d-8a67-40be-8dfc-ef198efb4297',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/998.jpg',
      },
    ],
    addresses: [
      {
        text: '11663 Schmeler Rapids, Lindenhurst, NY 11976',
        coordinate: ['40.83095813827255', '-73.91366352822456'],
      },
      {
        text: '11642 Alberta Junction, Lindenhurst, NY 11370',
        coordinate: ['40.782269303154564', '-73.92799108814602'],
      },
      {
        text: '11727 Schaefer Inlet, Lindenhurst, NY 11036',
        coordinate: ['40.68715261156324', '-74.00526659632791'],
      },
    ],
  },
  {
    id: getObjectId('customer_505'),
    firstName: 'Alexander',
    lastName: 'Kuhlman',
    fullName: 'Alexander Kuhlman',
    gender: 'Female',
    gsm: '(599) 254-8896',
    createdAt: '2024-06-18T03:35:41.327Z',
    isActive: false,
    avatar: [
      {
        name: '40b933fe-2d55-4b60-8332-4719215ee35c',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '9190374b-6197-47b4-a69f-bd5b67271779',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1086.jpg',
      },
    ],
    addresses: [
      {
        text: "11846 O'Hara Rapid, Brooklyn, NY 11231",
        coordinate: ['40.87355454025907', '-73.92984534052623'],
      },
      {
        text: '11955 Cali Plaza, Massapequa, NY 11892',
        coordinate: ['40.832985445011836', '-73.90333101877235'],
      },
      {
        text: '11143 Ortiz Mill, Brooklyn, NY 11207',
        coordinate: ['40.6645385558063', '-73.90402732990448'],
      },
    ],
  },
  {
    id: getObjectId('customer_506'),
    firstName: 'Christian',
    lastName: 'McDermott',
    fullName: 'Christian McDermott',
    gender: 'Male',
    gsm: '(757) 021-5415',
    createdAt: '2024-07-04T20:17:38.665Z',
    isActive: true,
    avatar: [
      {
        name: '335244ee-5148-480c-adc9-4d2ca74e96cb',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '7f5eb4de-ceda-4733-b372-fc195a96eab1',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/363.jpg',
      },
    ],
    addresses: [
      {
        text: '11374 Daniella Courts, Lindenhurst, NY 11722',
        coordinate: ['40.692405303311446', '-74.00069759444021'],
      },
      {
        text: '11251 Bertram Extensions, Lindenhurst, NY 11057',
        coordinate: ['40.598106469646424', '-73.77487508395032'],
      },
      {
        text: '11263 Solon Stream, Lindenhurst, NY 11007',
        coordinate: ['40.63674069980736', '-73.91978780874902'],
      },
    ],
  },
  {
    id: getObjectId('customer_507'),
    firstName: 'Jabari',
    lastName: 'Olson',
    fullName: 'Jabari Olson',
    gender: 'Male',
    gsm: '(119) 403-8054',
    createdAt: '2024-07-02T10:05:58.122Z',
    isActive: true,
    avatar: [
      {
        name: '5e5fb90f-c9a7-4faf-b1c5-930acf29fc4a',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '00b6c270-2d64-4134-b187-8af83c8fd643',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1091.jpg',
      },
    ],
    addresses: [
      {
        text: '11719 Buckridge Center, Brooklyn, NY 11760',
        coordinate: ['40.71127832019916', '-73.72859237968323'],
      },
      {
        text: '11498 Cale Crest, Lindenhurst, NY 11537',
        coordinate: ['40.75657150685255', '-73.98892437948754'],
      },
      {
        text: '11085 Lenora Crossroad, Massapequa, NY 11054',
        coordinate: ['40.6717882500396', '-73.8952881573647'],
      },
    ],
  },
  {
    id: getObjectId('customer_508'),
    firstName: 'Estevan',
    lastName: 'Lehner',
    fullName: 'Estevan Lehner',
    gender: 'Male',
    gsm: '(675) 561-4943',
    createdAt: '2024-06-25T15:53:33.542Z',
    isActive: false,
    avatar: [
      {
        name: '6edecadb-dbd9-4bed-bb11-205b569fe105',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '2c13b318-fb3f-40e0-afa6-92ad07fe9cba',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/932.jpg',
      },
    ],
    addresses: [
      {
        text: '11318 Sipes Harbors, Lindenhurst, NY 11120',
        coordinate: ['40.70101970449942', '-73.98238357202935'],
      },
      {
        text: '11668 Hane Common, Brooklyn, NY 11295',
        coordinate: ['40.79714029516044', '-73.93690255000283'],
      },
      {
        text: '11408 Labadie Hollow, Lindenhurst, NY 11527',
        coordinate: ['40.68730915595523', '-73.94908167902258'],
      },
    ],
  },
  {
    id: getObjectId('customer_509'),
    firstName: 'Leopoldo',
    lastName: 'McLaughlin',
    fullName: 'Leopoldo McLaughlin',
    gender: 'Male',
    gsm: '(774) 831-8353',
    createdAt: '2024-06-13T16:04:28.062Z',
    isActive: true,
    avatar: [
      {
        name: '4f1b680a-1c23-4b93-b56f-d658e81fdf22',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '32b6bd54-5459-4f2f-b5cb-e3ad6d105da2',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/297.jpg',
      },
    ],
    addresses: [
      {
        text: "11960 O'Conner Forest, Lindenhurst, NY 11163",
        coordinate: ['40.89309118725139', '-73.89752941514372'],
      },
      {
        text: '11264 Pauline Knolls, Brooklyn, NY 11384',
        coordinate: ['40.85195030781291', '-73.93088781078077'],
      },
      {
        text: '11719 Buckridge Center, Brooklyn, NY 11760',
        coordinate: ['40.71127832019916', '-73.72859237968323'],
      },
    ],
  },
  {
    id: getObjectId('customer_510'),
    firstName: 'Braden',
    lastName: 'Friesen',
    fullName: 'Braden Friesen',
    gender: 'Male',
    gsm: '(426) 821-6983',
    createdAt: '2024-06-16T21:20:01.224Z',
    isActive: false,
    avatar: [
      {
        name: '52132cd0-a206-4d40-aec2-d9dfa481cf0f',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'c22f8144-c2f9-4d00-ad90-b5e7f9111082',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/946.jpg',
      },
    ],
    addresses: [
      {
        text: '11108 Bauch Trail, Massapequa, NY 11355',
        coordinate: ['40.81991419971737', '-73.84577566721931'],
      },
      {
        text: '11607 Reinger Parkways, Brooklyn, NY 11042',
        coordinate: ['40.590737386781605', '-74.07660361955186'],
      },
      {
        text: '11898 Chelsea Plain, Lindenhurst, NY 11735',
        coordinate: ['40.875525570218045', '-73.86179079437676'],
      },
    ],
  },
  {
    id: getObjectId('customer_511'),
    firstName: 'Macy',
    lastName: 'Roob',
    fullName: 'Macy Roob',
    gender: 'Male',
    gsm: '(626) 222-4147',
    createdAt: '2024-06-12T04:24:39.327Z',
    isActive: true,
    avatar: [
      {
        name: 'b7b47924-eeab-4d7c-986a-234624dddc2d',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '66d70e28-35cc-43be-9ecc-65de6f33445e',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1082.jpg',
      },
    ],
    addresses: [
      {
        text: '11609 Carolanne Islands, Massapequa, NY 11138',
        coordinate: ['40.75935689417804', '-73.97485861044613'],
      },
      {
        text: '11947 Ernser Ferry, Lindenhurst, NY 11234',
        coordinate: ['40.750136329510546', '-73.88507636312373'],
      },
      {
        text: '11056 Doyle Station, Massapequa, NY 11606',
        coordinate: ['40.85931338640661', '-73.92812829680183'],
      },
    ],
  },
  {
    id: getObjectId('customer_512'),
    firstName: 'Kelli',
    lastName: 'Hoeger',
    fullName: 'Kelli Hoeger',
    gender: 'Female',
    gsm: '(548) 894-5112',
    createdAt: '2024-07-07T02:51:57.308Z',
    isActive: false,
    avatar: [
      {
        name: '4ce2200a-4ba2-4bae-9dbe-6ac598503854',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '755d3f00-f942-494a-97f3-704e98018f45',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/156.jpg',
      },
    ],
    addresses: [
      {
        text: '11143 Ortiz Mill, Brooklyn, NY 11207',
        coordinate: ['40.6645385558063', '-73.90402732990448'],
      },
      {
        text: '11680 Georgette Junctions, Massapequa, NY 11411',
        coordinate: ['40.702102706281686', '-73.80945836885176'],
      },
      {
        text: '11246 Heathcote Crescent, Brooklyn, NY 11164',
        coordinate: ['40.70264295688686', '-73.85781194108168'],
      },
    ],
  },
  {
    id: getObjectId('customer_513'),
    firstName: 'Providenci',
    lastName: 'Becker',
    fullName: 'Providenci Becker',
    gender: 'Male',
    gsm: '(463) 699-4404',
    createdAt: '2024-07-07T18:33:34.371Z',
    isActive: false,
    avatar: [
      {
        name: '958a6e4b-0877-4b0d-be8a-3f7c0fbeb5d6',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'd541c0fe-9dba-42ca-8a4d-84c87ccb1f03',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/581.jpg',
      },
    ],
    addresses: [
      {
        text: '11881 Wilton Fields, Lindenhurst, NY 11176',
        coordinate: ['40.787915583564256', '-73.84583413474485'],
      },
      {
        text: '11384 Waelchi Rapid, Massapequa, NY 11796',
        coordinate: ['40.84590139880644', '-73.8928291967851'],
      },
      {
        text: '11947 Ernser Ferry, Lindenhurst, NY 11234',
        coordinate: ['40.750136329510546', '-73.88507636312373'],
      },
    ],
  },
  {
    id: getObjectId('customer_514'),
    firstName: 'Elvera',
    lastName: 'Bosco',
    fullName: 'Elvera Bosco',
    gender: 'Male',
    gsm: '(966) 908-2472',
    createdAt: '2024-06-14T13:47:01.308Z',
    isActive: true,
    avatar: [
      {
        name: '5dee1018-8538-4f3d-b056-e2c96be0e82a',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '0a7300b1-217f-4aac-a2f5-0c50fc8fb650',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/536.jpg',
      },
    ],
    addresses: [
      {
        text: '11316 Goodwin Curve, Brooklyn, NY 11183',
        coordinate: ['40.72331641705996', '-73.8392178094307'],
      },
      {
        text: '11851 Swift Glen, Lindenhurst, NY 11624',
        coordinate: ['40.51158309370173', '-74.22091326797245'],
      },
      {
        text: '11216 Rosina Fork, Lindenhurst, NY 11508',
        coordinate: ['40.745419155079155', '-73.71294596495262'],
      },
    ],
  },
  {
    id: getObjectId('customer_515'),
    firstName: 'Blanche',
    lastName: 'Wintheiser',
    fullName: 'Blanche Wintheiser',
    gender: 'Female',
    gsm: '(324) 943-0283',
    createdAt: '2024-06-20T07:36:42.237Z',
    isActive: true,
    avatar: [
      {
        name: '67274b66-6bd6-49c4-b26f-5343dfa9fff2',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '88bb0a69-f078-43c1-93a5-c10fc04cb0fa',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/178.jpg',
      },
    ],
    addresses: [
      {
        text: '11096 Breanne Divide, Brooklyn, NY 11640',
        coordinate: ['40.718270507252825', '-73.90150746815962'],
      },
      {
        text: '11867 Kling Coves, Brooklyn, NY 11655',
        coordinate: ['40.72425809826063', '-74.0076193098343'],
      },
      {
        text: '11733 Walker Cove, Massapequa, NY 11322',
        coordinate: ['40.56648613912078', '-73.87751470966245'],
      },
    ],
  },
  {
    id: getObjectId('customer_516'),
    firstName: 'Peter',
    lastName: 'Armstrong',
    fullName: 'Peter Armstrong',
    gender: 'Male',
    gsm: '(670) 851-7366',
    createdAt: '2024-06-26T06:45:55.820Z',
    isActive: false,
    avatar: [
      {
        name: 'e8bc81ad-432a-4c85-aafd-18295ac826c0',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '4ced4eac-1379-4697-a2e3-01ef4b1e56e6',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/854.jpg',
      },
    ],
    addresses: [
      {
        text: '11509 Donna Canyon, Brooklyn, NY 11024',
        coordinate: ['40.85330068757448', '-73.93352262256185'],
      },
      {
        text: '11898 Chelsea Plain, Lindenhurst, NY 11735',
        coordinate: ['40.875525570218045', '-73.86179079437676'],
      },
      {
        text: '11699 Lilly Hill, Lindenhurst, NY 11615',
        coordinate: ['40.85988139787965', '-73.85921533859519'],
      },
    ],
  },
  {
    id: getObjectId('customer_517'),
    firstName: 'Concepcion',
    lastName: 'Bartoletti',
    fullName: 'Concepcion Bartoletti',
    gender: 'Male',
    gsm: '(898) 007-5065',
    createdAt: '2024-07-06T09:52:51.250Z',
    isActive: false,
    avatar: [
      {
        name: 'a76e29c2-3b37-474b-94bf-6c15a0c3f6ad',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '03cf8f74-df18-4b43-a9ef-52473ffe739f',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/96.jpg',
      },
    ],
    addresses: [
      {
        text: '11136 Jacobson Forest, Massapequa, NY 11737',
        coordinate: ['40.772923528259135', '-73.97408177413811'],
      },
      {
        text: '11509 Donna Canyon, Brooklyn, NY 11024',
        coordinate: ['40.85330068757448', '-73.93352262256185'],
      },
      {
        text: '11045 Morar Extensions, Lindenhurst, NY 11342',
        coordinate: ['40.59184529992161', '-73.80292936655309'],
      },
    ],
  },
  {
    id: getObjectId('customer_518'),
    firstName: 'Granville',
    lastName: 'Ferry',
    fullName: 'Granville Ferry',
    gender: 'Female',
    gsm: '(245) 063-7629',
    createdAt: '2024-07-02T05:47:45.286Z',
    isActive: true,
    avatar: [
      {
        name: '11987cc8-5c2c-4aed-a6ef-c9bf5dc9de39',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'afc8ac4a-a7f7-4f4d-a2f4-c79f3dae499b',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/243.jpg',
      },
    ],
    addresses: [
      {
        text: '11077 Gerardo Mountain, Lindenhurst, NY 11372',
        coordinate: ['40.70883839875818', '-73.93976069363174'],
      },
      {
        text: '11108 Bauch Trail, Massapequa, NY 11355',
        coordinate: ['40.81991419971737', '-73.84577566721931'],
      },
      {
        text: '11263 Osinski Forks, Lindenhurst, NY 11884',
        coordinate: ['40.86213206940792', '-73.82618292669638'],
      },
    ],
  },
  {
    id: getObjectId('customer_519'),
    firstName: 'Terence',
    lastName: 'Jerde',
    fullName: 'Terence Jerde',
    gender: 'Male',
    gsm: '(550) 098-2557',
    createdAt: '2024-06-08T11:37:13.299Z',
    isActive: false,
    avatar: [
      {
        name: '8c9775ed-b881-49e8-be6d-1f6440807c65',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '6aaba7b1-948e-4d8c-a541-b12a4ed6d1a7',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/906.jpg',
      },
    ],
    addresses: [
      {
        text: '11270 Littel Drive, Lindenhurst, NY 11968',
        coordinate: ['40.689013432473764', '-73.91000786387228'],
      },
      {
        text: '11812 Raphael Corner, Massapequa, NY 11877',
        coordinate: ['40.72366717557525', '-73.99207275678724'],
      },
      {
        text: '11958 Hintz Light, Massapequa, NY 11935',
        coordinate: ['40.875917577275104', '-73.82848174189849'],
      },
    ],
  },
  {
    id: getObjectId('customer_520'),
    firstName: 'Albina',
    lastName: 'Stokes',
    fullName: 'Albina Stokes',
    gender: 'Male',
    gsm: '(018) 825-2062',
    createdAt: '2024-07-03T10:24:20.590Z',
    isActive: true,
    avatar: [
      {
        name: 'd9131409-a8bc-40e6-935e-612cc1126d69',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '9d8a4301-2b1b-43f1-b959-5a6a0423dfda',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1001.jpg',
      },
    ],
    addresses: [
      {
        text: '11609 Carolanne Islands, Massapequa, NY 11138',
        coordinate: ['40.75935689417804', '-73.97485861044613'],
      },
      {
        text: '11512 Jenkins Lights, Massapequa, NY 11737',
        coordinate: ['40.71003074009839', '-73.94229615777373'],
      },
      {
        text: '11060 Pacocha Path, Massapequa, NY 11383',
        coordinate: ['40.712642654476035', '-74.01303533708099'],
      },
    ],
  },
  {
    id: getObjectId('customer_521'),
    firstName: 'Davion',
    lastName: 'Rempel',
    fullName: 'Davion Rempel',
    gender: 'Female',
    gsm: '(243) 850-1360',
    createdAt: '2024-06-11T06:49:44.488Z',
    isActive: true,
    avatar: [
      {
        name: '26157f9d-0a8e-4f92-a8fc-674d30401492',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'f1c38a44-4bb7-49c1-8bf6-0641afc3de6e',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1095.jpg',
      },
    ],
    addresses: [
      {
        text: '11730 Geovanni Haven, Lindenhurst, NY 11532',
        coordinate: ['40.88804885054674', '-73.8648764779807'],
      },
      {
        text: '11772 Toy Row, Lindenhurst, NY 11384',
        coordinate: ['40.811873397132395', '-73.94826902574404'],
      },
      {
        text: '11245 Myrl Loop, Massapequa, NY 11390',
        coordinate: ['40.757834840940724', '-73.9538537606329'],
      },
    ],
  },
  {
    id: getObjectId('customer_522'),
    firstName: 'Lorenz',
    lastName: 'Shanahan',
    fullName: 'Lorenz Shanahan',
    gender: 'Male',
    gsm: '(057) 912-9733',
    createdAt: '2024-06-23T13:23:21.557Z',
    isActive: false,
    avatar: [
      {
        name: 'e4604b5d-3182-49e7-a98d-24aff9e90eec',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'a8d6ebaa-fae2-4366-9329-ecf4d43fc8b0',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1177.jpg',
      },
    ],
    addresses: [
      {
        text: '11881 Wilton Fields, Lindenhurst, NY 11176',
        coordinate: ['40.787915583564256', '-73.84583413474485'],
      },
      {
        text: '11246 Heathcote Crescent, Brooklyn, NY 11164',
        coordinate: ['40.70264295688686', '-73.85781194108168'],
      },
      {
        text: '11085 Lenora Crossroad, Massapequa, NY 11054',
        coordinate: ['40.6717882500396', '-73.8952881573647'],
      },
    ],
  },
  {
    id: getObjectId('customer_523'),
    firstName: 'Bethany',
    lastName: 'Powlowski',
    fullName: 'Bethany Powlowski',
    gender: 'Female',
    gsm: '(940) 089-4246',
    createdAt: '2024-06-09T22:59:58.788Z',
    isActive: true,
    avatar: [
      {
        name: 'f9abbb2a-417f-4d83-8f13-305706ba28b0',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'b7dca74b-d1a7-4cf6-a2a9-c6b743cb4ba1',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/900.jpg',
      },
    ],
    addresses: [
      {
        text: '11825 Chelsey Springs, Brooklyn, NY 11928',
        coordinate: ['40.64393181276535', '-74.10229104074979'],
      },
      {
        text: '11316 Goodwin Curve, Brooklyn, NY 11183',
        coordinate: ['40.72331641705996', '-73.8392178094307'],
      },
      {
        text: '11045 Morar Extensions, Lindenhurst, NY 11342',
        coordinate: ['40.59184529992161', '-73.80292936655309'],
      },
    ],
  },
  {
    id: getObjectId('customer_524'),
    firstName: 'Demetrius',
    lastName: 'Bednar',
    fullName: 'Demetrius Bednar',
    gender: 'Male',
    gsm: '(967) 180-1791',
    createdAt: '2024-06-13T21:05:40.677Z',
    isActive: true,
    avatar: [
      {
        name: '4d3c6771-0422-4ee5-8bb6-56f10f64eeb7',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '7c745f7b-a30e-4460-8004-2bb8bd1d0d15',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/337.jpg',
      },
    ],
    addresses: [
      {
        text: '11693 Hartmann Park, Brooklyn, NY 11251',
        coordinate: ['40.705101590541354', '-73.98948018281791'],
      },
      {
        text: '11412 Spencer Skyway, Lindenhurst, NY 11312',
        coordinate: ['40.615431898170364', '-73.92934453739576'],
      },
      {
        text: '11799 Mayert Plaza, Lindenhurst, NY 11934',
        coordinate: ['40.65389146392323', '-73.78928677609493'],
      },
    ],
  },
  {
    id: getObjectId('customer_525'),
    firstName: 'Issac',
    lastName: 'Hamill',
    fullName: 'Issac Hamill',
    gender: 'Female',
    gsm: '(627) 381-8680',
    createdAt: '2024-06-30T18:22:41.018Z',
    isActive: false,
    avatar: [
      {
        name: '84c96d47-dcbd-470d-9e23-0a38a5ffedb3',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'd4f9ec37-d73f-47c7-adb8-6c075d26dbc2',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/24.jpg',
      },
    ],
    addresses: [
      {
        text: '11430 Leuschke Via, Brooklyn, NY 11727',
        coordinate: ['40.82687191092169', '-73.93860406015271'],
      },
      {
        text: '11263 Solon Stream, Lindenhurst, NY 11007',
        coordinate: ['40.63674069980736', '-73.91978780874902'],
      },
      {
        text: '11816 Althea Loop, Brooklyn, NY 11851',
        coordinate: ['40.87000167958251', '-73.82689736629037'],
      },
    ],
  },
  {
    id: getObjectId('customer_526'),
    firstName: 'Devan',
    lastName: 'Mayer',
    fullName: 'Devan Mayer',
    gender: 'Female',
    gsm: '(588) 556-2180',
    createdAt: '2024-06-09T17:11:50.667Z',
    isActive: true,
    avatar: [
      {
        name: '17be5882-e7e0-460a-b447-8d5af5756e3c',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '9137fe8a-c017-4f2e-9bc7-5f18b386257a',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/308.jpg',
      },
    ],
    addresses: [
      {
        text: '11663 Schmeler Rapids, Lindenhurst, NY 11976',
        coordinate: ['40.83095813827255', '-73.91366352822456'],
      },
      {
        text: '11270 Littel Drive, Lindenhurst, NY 11968',
        coordinate: ['40.689013432473764', '-73.91000786387228'],
      },
      {
        text: '11096 Wehner Road, Brooklyn, NY 11769',
        coordinate: ['40.772541352269656', '-73.96458491444952'],
      },
    ],
  },
  {
    id: getObjectId('customer_527'),
    firstName: 'Marshall',
    lastName: 'Lakin',
    fullName: 'Marshall Lakin',
    gender: 'Male',
    gsm: '(142) 571-5336',
    createdAt: '2024-06-21T08:38:44.048Z',
    isActive: false,
    avatar: [
      {
        name: '241d966a-7cc0-4860-9d04-62b570e5bb57',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '86e64abd-2a74-41a7-b68a-52795c42599e',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/82.jpg',
      },
    ],
    addresses: [
      {
        text: '11718 Beatty Motorway, Lindenhurst, NY 11314',
        coordinate: ['40.69281598660577', '-73.82908131481418'],
      },
      {
        text: '11955 Cali Plaza, Massapequa, NY 11892',
        coordinate: ['40.832985445011836', '-73.90333101877235'],
      },
      {
        text: '11096 Wehner Road, Brooklyn, NY 11769',
        coordinate: ['40.772541352269656', '-73.96458491444952'],
      },
    ],
  },
  {
    id: getObjectId('customer_528'),
    firstName: 'Alisha',
    lastName: 'Hudson',
    fullName: 'Alisha Hudson',
    gender: 'Male',
    gsm: '(836) 019-0329',
    createdAt: '2024-07-02T13:19:12.310Z',
    isActive: true,
    avatar: [
      {
        name: '19715479-b922-4280-b54c-7497885f839a',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'ea674367-d103-4ea4-bca2-d4524c3ef7c8',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/890.jpg',
      },
    ],
    addresses: [
      {
        text: '11864 Leonora Stream, Brooklyn, NY 11957',
        coordinate: ['40.832201142470986', '-73.9018035427564'],
      },
      {
        text: '11693 Hartmann Park, Brooklyn, NY 11251',
        coordinate: ['40.705101590541354', '-73.98948018281791'],
      },
      {
        text: '11186 Nolan Crest, Lindenhurst, NY 11296',
        coordinate: ['40.59649847049655', '-74.18222476116168'],
      },
    ],
  },
  {
    id: getObjectId('customer_529'),
    firstName: 'Retta',
    lastName: 'Schulist',
    fullName: 'Retta Schulist',
    gender: 'Female',
    gsm: '(548) 587-3775',
    createdAt: '2024-07-03T10:35:16.815Z',
    isActive: false,
    avatar: [
      {
        name: '02c948a8-7849-464c-9c30-0d8756d5c8e7',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '41524462-a52a-4239-a841-3b27138709f1',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/61.jpg',
      },
    ],
    addresses: [
      {
        text: '11655 Joany Course, Brooklyn, NY 11802',
        coordinate: ['40.75627707172136', '-73.97723552936826'],
      },
      {
        text: '11872 Roman Hollow, Massapequa, NY 11919',
        coordinate: ['40.714641774419576', '-73.99642976897374'],
      },
      {
        text: '11038 Paolo Pines, Lindenhurst, NY 11735',
        coordinate: ['40.64023177236674', '-74.00186934411859'],
      },
    ],
  },
  {
    id: getObjectId('customer_530'),
    firstName: 'Schuyler',
    lastName: 'Stanton',
    fullName: 'Schuyler Stanton',
    gender: 'Female',
    gsm: '(213) 850-5067',
    createdAt: '2024-07-03T12:42:33.215Z',
    isActive: true,
    avatar: [
      {
        name: 'd443d4f0-ad4d-4ce5-a53e-88cc56b81e0f',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '52da74ee-e879-4198-9ec0-8d2077382bf7',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/429.jpg',
      },
    ],
    addresses: [
      {
        text: '11719 Buckridge Center, Brooklyn, NY 11760',
        coordinate: ['40.71127832019916', '-73.72859237968323'],
      },
      {
        text: '11036 Hartmann Islands, Massapequa, NY 11273',
        coordinate: ['40.80648728921871', '-73.94602283563091'],
      },
      {
        text: '11438 Otilia Valleys, Brooklyn, NY 11215',
        coordinate: ['40.804396260981164', '-73.79231266832804'],
      },
    ],
  },
  {
    id: getObjectId('customer_531'),
    firstName: 'Monique',
    lastName: 'Beer',
    fullName: 'Monique Beer',
    gender: 'Female',
    gsm: '(361) 867-1236',
    createdAt: '2024-07-02T14:45:22.178Z',
    isActive: false,
    avatar: [
      {
        name: '4bcfc7fb-a4c5-4c43-858e-f6b31d71cf00',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '2872a62f-0736-4e8a-8350-b645a63ea13d',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/253.jpg',
      },
    ],
    addresses: [
      {
        text: '11439 Aglae Radial, Brooklyn, NY 11205',
        coordinate: ['40.83247202632326', '-73.91406031894931'],
      },
      {
        text: '11434 Daniel Meadows, Massapequa, NY 11452',
        coordinate: ['40.687024663944904', '-73.87836555031981'],
      },
      {
        text: '11764 Roberts Centers, Lindenhurst, NY 11071',
        coordinate: ['40.707840293833634', '-73.75019856878251'],
      },
    ],
  },
  {
    id: getObjectId('customer_532'),
    firstName: 'Hayley',
    lastName: 'Orn',
    fullName: 'Hayley Orn',
    gender: 'Female',
    gsm: '(917) 349-4255',
    createdAt: '2024-07-05T08:23:51.886Z',
    isActive: false,
    avatar: [
      {
        name: '48a9829d-5eaa-4862-9a66-b4f1f77818e7',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '1685cc28-cf93-49ad-9162-f0c11da9890b',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/866.jpg',
      },
    ],
    addresses: [
      {
        text: '11433 Lakin Ridge, Massapequa, NY 11717',
        coordinate: ['40.72132523792435', '-73.98639367151328'],
      },
      {
        text: '11655 Shanie Route, Brooklyn, NY 11072',
        coordinate: ['40.706302943986636', '-73.79962362002236'],
      },
      {
        text: '11913 Veum Spring, Massapequa, NY 11303',
        coordinate: ['40.66164200865502', '-74.00754412065884'],
      },
    ],
  },
  {
    id: getObjectId('customer_533'),
    firstName: 'Dawn',
    lastName: 'Stehr',
    fullName: 'Dawn Stehr',
    gender: 'Female',
    gsm: '(190) 921-9641',
    createdAt: '2024-06-19T18:44:56.624Z',
    isActive: true,
    avatar: [
      {
        name: 'b2a1fd78-adc0-454e-92fc-21375658026e',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '3019ae9a-5bbd-4790-a0e2-7d5832357dfa',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/175.jpg',
      },
    ],
    addresses: [
      {
        text: '11728 Earlene Garden, Brooklyn, NY 11259',
        coordinate: ['40.61541451352046', '-73.9512235195281'],
      },
      {
        text: '11512 Jenkins Lights, Massapequa, NY 11737',
        coordinate: ['40.71003074009839', '-73.94229615777373'],
      },
      {
        text: '11096 Wehner Road, Brooklyn, NY 11769',
        coordinate: ['40.772541352269656', '-73.96458491444952'],
      },
    ],
  },
  {
    id: getObjectId('customer_534'),
    firstName: 'Giovani',
    lastName: 'Champlin',
    fullName: 'Giovani Champlin',
    gender: 'Male',
    gsm: '(849) 737-0777',
    createdAt: '2024-06-23T22:59:22.942Z',
    isActive: true,
    avatar: [
      {
        name: 'c8569e69-eec8-434b-9549-8787f372910d',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'cf91ab58-e09c-4580-9151-786a99fbfc2b',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/122.jpg',
      },
    ],
    addresses: [
      {
        text: '11730 Geovanni Haven, Lindenhurst, NY 11532',
        coordinate: ['40.88804885054674', '-73.8648764779807'],
      },
      {
        text: '11120 Royal Coves, Lindenhurst, NY 11520',
        coordinate: ['40.63410088148846', '-73.99688826750287'],
      },
      {
        text: '11701 Rusty Lights, Massapequa, NY 11840',
        coordinate: ['40.74921391148173', '-73.88745667351822'],
      },
    ],
  },
  {
    id: getObjectId('customer_535'),
    firstName: 'Julien',
    lastName: 'Leffler',
    fullName: 'Julien Leffler',
    gender: 'Female',
    gsm: '(459) 689-3590',
    createdAt: '2024-06-10T01:59:42.259Z',
    isActive: true,
    avatar: [
      {
        name: '12305f4b-095f-4f24-9ad6-850cd71766eb',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '02513576-28f8-4eaf-bf54-f559c0d6832d',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/886.jpg',
      },
    ],
    addresses: [
      {
        text: '11434 Daniel Meadows, Massapequa, NY 11452',
        coordinate: ['40.687024663944904', '-73.87836555031981'],
      },
      {
        text: '11085 Oswaldo Harbor, Brooklyn, NY 11546',
        coordinate: ['40.85125313575545', '-73.91436091292005'],
      },
      {
        text: '11509 Donna Canyon, Brooklyn, NY 11024',
        coordinate: ['40.85330068757448', '-73.93352262256185'],
      },
    ],
  },
  {
    id: getObjectId('customer_536'),
    firstName: 'Danny',
    lastName: 'Ernser',
    fullName: 'Danny Ernser',
    gender: 'Male',
    gsm: '(857) 022-8240',
    createdAt: '2024-06-20T02:39:15.415Z',
    isActive: false,
    avatar: [
      {
        name: '17d1c08d-77c0-4deb-aedc-e73df7ede040',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '11cc3bfc-26fb-489f-9c21-2fd8de9bcdad',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/405.jpg',
      },
    ],
    addresses: [
      {
        text: '11166 Cormier Plaza, Lindenhurst, NY 11278',
        coordinate: ['40.86255321747302', '-73.8648318412901'],
      },
      {
        text: '11031 Feil Crossing, Lindenhurst, NY 11251',
        coordinate: ['40.83451001107047', '-73.91770528927904'],
      },
      {
        text: '11947 Ernser Ferry, Lindenhurst, NY 11234',
        coordinate: ['40.750136329510546', '-73.88507636312373'],
      },
    ],
  },
  {
    id: getObjectId('customer_537'),
    firstName: 'Joey',
    lastName: 'Smitham',
    fullName: 'Joey Smitham',
    gender: 'Male',
    gsm: '(811) 203-8634',
    createdAt: '2024-06-25T17:43:39.534Z',
    isActive: false,
    avatar: [
      {
        name: '59a87baa-b848-42f3-9689-8412ba73fdaa',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '0ad72f20-9db9-4d60-9a79-74b2b8020bc7',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/734.jpg',
      },
    ],
    addresses: [
      {
        text: '11623 Darien Cliffs, Lindenhurst, NY 11575',
        coordinate: ['40.70056831070206', '-73.9853693094361'],
      },
      {
        text: '11143 Ortiz Mill, Brooklyn, NY 11207',
        coordinate: ['40.6645385558063', '-73.90402732990448'],
      },
      {
        text: '11922 Halvorson Terrace, Brooklyn, NY 11104',
        coordinate: ['40.863466423461276', '-73.88157667321018'],
      },
    ],
  },
  {
    id: getObjectId('customer_538'),
    firstName: 'Nigel',
    lastName: "O'Conner",
    fullName: "Nigel O'Conner",
    gender: 'Male',
    gsm: '(819) 764-6271',
    createdAt: '2024-07-01T08:54:37.850Z',
    isActive: false,
    avatar: [
      {
        name: '1e1093e0-b8a1-4b60-921b-4dd2943124e8',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '138ac29c-f996-4971-ad7b-1f96cfa5244d',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/830.jpg',
      },
    ],
    addresses: [
      {
        text: '11609 Carolanne Islands, Massapequa, NY 11138',
        coordinate: ['40.75935689417804', '-73.97485861044613'],
      },
      {
        text: '11135 Reichert Course, Brooklyn, NY 11720',
        coordinate: ['40.737206062011865', '-73.84886438595831'],
      },
      {
        text: '11835 Powlowski Extension, Brooklyn, NY 11150',
        coordinate: ['40.76245015151365', '-73.87061296246294'],
      },
    ],
  },
  {
    id: getObjectId('customer_539'),
    firstName: 'Gabe',
    lastName: 'Beahan',
    fullName: 'Gabe Beahan',
    gender: 'Female',
    gsm: '(995) 157-7481',
    createdAt: '2024-06-21T13:28:46.845Z',
    isActive: true,
    avatar: [
      {
        name: '48f67f19-81ca-495d-b0a3-6345cfc15a82',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '46cf4b6c-03bc-4c59-86a7-cc305861a2e3',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/494.jpg',
      },
    ],
    addresses: [
      {
        text: '11295 Quitzon Drives, Massapequa, NY 11937',
        coordinate: ['40.69795402619539', '-73.93395502854624'],
      },
      {
        text: '11974 Harold Ports, Brooklyn, NY 11963',
        coordinate: ['40.674179744645684', '-73.98876832456823'],
      },
      {
        text: '11128 Shayna Motorway, Lindenhurst, NY 11101',
        coordinate: ['40.70373038121957', '-73.99378591068276'],
      },
    ],
  },
  {
    id: getObjectId('customer_540'),
    firstName: 'Fae',
    lastName: 'Gutmann',
    fullName: 'Fae Gutmann',
    gender: 'Female',
    gsm: '(362) 295-9780',
    createdAt: '2024-07-03T15:27:24.715Z',
    isActive: false,
    avatar: [
      {
        name: '9489b59c-30f5-4b8a-b386-a3187164d839',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'eb9c3fdd-9400-473b-a480-54c1bb6b264f',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/706.jpg',
      },
    ],
    addresses: [
      {
        text: '11797 Bart Valley, Lindenhurst, NY 11117',
        coordinate: ['40.669777801118656', '-73.92802454968135'],
      },
      {
        text: '11434 Daniel Meadows, Massapequa, NY 11452',
        coordinate: ['40.687024663944904', '-73.87836555031981'],
      },
      {
        text: '11426 Durgan Neck, Lindenhurst, NY 11404',
        coordinate: ['40.70361562231717', '-73.99338696768561'],
      },
    ],
  },
  {
    id: getObjectId('customer_541'),
    firstName: 'Buck',
    lastName: 'Stokes',
    fullName: 'Buck Stokes',
    gender: 'Female',
    gsm: '(919) 979-2205',
    createdAt: '2024-06-29T20:49:23.479Z',
    isActive: false,
    avatar: [
      {
        name: '9ad277e7-3c7f-45c6-8b98-8ca993defb0a',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '3aa8aef8-813d-4ab4-9edf-77ff217c8676',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/189.jpg',
      },
    ],
    addresses: [
      {
        text: '11430 Leuschke Via, Brooklyn, NY 11727',
        coordinate: ['40.82687191092169', '-73.93860406015271'],
      },
      {
        text: '11760 Cynthia Dam, Brooklyn, NY 11589',
        coordinate: ['40.805598122229355', '-73.96654850238752'],
      },
      {
        text: '11878 Dudley Pike, Lindenhurst, NY 11604',
        coordinate: ['40.64716080488486', '-74.0073656851469'],
      },
    ],
  },
  {
    id: getObjectId('customer_542'),
    firstName: 'Nicolette',
    lastName: 'Connelly',
    fullName: 'Nicolette Connelly',
    gender: 'Male',
    gsm: '(285) 419-5350',
    createdAt: '2024-07-06T02:56:13.470Z',
    isActive: true,
    avatar: [
      {
        name: '52452c35-3d48-4bd6-8ff9-d615256cd42a',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'c353e990-06e6-4bbe-b78b-0e5b1325b309',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/487.jpg',
      },
    ],
    addresses: [
      {
        text: '11877 Franecki Isle, Lindenhurst, NY 11625',
        coordinate: ['40.62829175498013', '-74.18137586483954'],
      },
      {
        text: '11270 Littel Drive, Lindenhurst, NY 11968',
        coordinate: ['40.689013432473764', '-73.91000786387228'],
      },
      {
        text: '11701 Rusty Lights, Massapequa, NY 11840',
        coordinate: ['40.74921391148173', '-73.88745667351822'],
      },
    ],
  },
  {
    id: getObjectId('customer_543'),
    firstName: 'Aida',
    lastName: 'Kulas',
    fullName: 'Aida Kulas',
    gender: 'Female',
    gsm: '(058) 845-4667',
    createdAt: '2024-07-05T12:38:51.928Z',
    isActive: true,
    avatar: [
      {
        name: 'b2f12b3b-0c50-4349-bfb1-f5d2942429fe',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '183b3fa4-04ba-4129-bdff-6b23ba0d8450',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1240.jpg',
      },
    ],
    addresses: [
      {
        text: '11877 Franecki Isle, Lindenhurst, NY 11625',
        coordinate: ['40.62829175498013', '-74.18137586483954'],
      },
      {
        text: '11125 Strosin Curve, Lindenhurst, NY 11467',
        coordinate: ['40.732100034726514', '-73.9767183060347'],
      },
      {
        text: '11263 Solon Stream, Lindenhurst, NY 11007',
        coordinate: ['40.63674069980736', '-73.91978780874902'],
      },
    ],
  },
  {
    id: getObjectId('customer_544'),
    firstName: 'Kenton',
    lastName: 'Waters',
    fullName: 'Kenton Waters',
    gender: 'Female',
    gsm: '(237) 287-7304',
    createdAt: '2024-06-27T16:49:37.416Z',
    isActive: true,
    avatar: [
      {
        name: '49e4efe6-c497-4450-a541-96e9cde5c05e',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'e6ac045a-1839-44e9-ae6e-79afe1b90869',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1234.jpg',
      },
    ],
    addresses: [
      {
        text: '11718 Beatty Motorway, Lindenhurst, NY 11314',
        coordinate: ['40.69281598660577', '-73.82908131481418'],
      },
      {
        text: '11209 Koelpin Mission, Massapequa, NY 11226',
        coordinate: ['40.69572890173205', '-73.9970705051839'],
      },
      {
        text: '11245 Myrl Loop, Massapequa, NY 11390',
        coordinate: ['40.757834840940724', '-73.9538537606329'],
      },
    ],
  },
  {
    id: getObjectId('customer_545'),
    firstName: 'Thaddeus',
    lastName: 'Funk',
    fullName: 'Thaddeus Funk',
    gender: 'Female',
    gsm: '(749) 513-9852',
    createdAt: '2024-06-26T20:32:24.130Z',
    isActive: true,
    avatar: [
      {
        name: '04ef6e93-63c8-45e4-98bc-adc5ef55c88d',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '1aacb72c-1080-4bd5-94dd-a27d7724144a',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1189.jpg',
      },
    ],
    addresses: [
      {
        text: '11728 Earlene Garden, Brooklyn, NY 11259',
        coordinate: ['40.61541451352046', '-73.9512235195281'],
      },
      {
        text: '11871 Merlin Forest, Massapequa, NY 11300',
        coordinate: ['40.63107778793004', '-73.95671041614891'],
      },
      {
        text: '11085 Lenora Crossroad, Massapequa, NY 11054',
        coordinate: ['40.6717882500396', '-73.8952881573647'],
      },
    ],
  },
  {
    id: getObjectId('customer_546'),
    firstName: 'Nikko',
    lastName: 'Lebsack',
    fullName: 'Nikko Lebsack',
    gender: 'Male',
    gsm: '(489) 605-8773',
    createdAt: '2024-06-13T14:15:09.928Z',
    isActive: false,
    avatar: [
      {
        name: 'b17f830e-c21f-408b-a301-3e029858e378',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '146ca681-3bbe-4c9b-b961-fd4d6e4620a6',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/511.jpg',
      },
    ],
    addresses: [
      {
        text: '11175 Kieran Curve, Massapequa, NY 11322',
        coordinate: ['40.60976233898883', '-74.1028092626307'],
      },
      {
        text: '11772 Toy Row, Lindenhurst, NY 11384',
        coordinate: ['40.811873397132395', '-73.94826902574404'],
      },
      {
        text: '11776 Wilderman Prairie, Lindenhurst, NY 11562',
        coordinate: ['40.66945134822127', '-73.93551047298159'],
      },
    ],
  },
  {
    id: getObjectId('customer_547'),
    firstName: 'Greyson',
    lastName: 'Mayer',
    fullName: 'Greyson Mayer',
    gender: 'Male',
    gsm: '(191) 792-7661',
    createdAt: '2024-06-25T22:17:07.332Z',
    isActive: true,
    avatar: [
      {
        name: 'a77f3e96-67a9-40e1-85a8-ca29271b74e3',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'dc0a4d5a-1931-4893-add5-5b9838695166',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/867.jpg',
      },
    ],
    addresses: [
      {
        text: '11864 Leonora Stream, Brooklyn, NY 11957',
        coordinate: ['40.832201142470986', '-73.9018035427564'],
      },
      {
        text: '11693 Hartmann Park, Brooklyn, NY 11251',
        coordinate: ['40.705101590541354', '-73.98948018281791'],
      },
      {
        text: '11246 Heathcote Crescent, Brooklyn, NY 11164',
        coordinate: ['40.70264295688686', '-73.85781194108168'],
      },
    ],
  },
  {
    id: getObjectId('customer_548'),
    firstName: 'Beatrice',
    lastName: 'Stamm',
    fullName: 'Beatrice Stamm',
    gender: 'Female',
    gsm: '(407) 963-7742',
    createdAt: '2024-06-19T21:27:01.189Z',
    isActive: false,
    avatar: [
      {
        name: '45c8bec7-70e3-4f61-84cb-5dea96ba4815',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'afa4a3d5-1887-4904-b505-d7f5fd5dc925',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/493.jpg',
      },
    ],
    addresses: [
      {
        text: '11877 Franecki Isle, Lindenhurst, NY 11625',
        coordinate: ['40.62829175498013', '-74.18137586483954'],
      },
      {
        text: '11851 Swift Glen, Lindenhurst, NY 11624',
        coordinate: ['40.51158309370173', '-74.22091326797245'],
      },
      {
        text: '11879 Larry Drives, Massapequa, NY 11339',
        coordinate: ['40.66416374763622', '-73.90697071032429'],
      },
    ],
  },
  {
    id: getObjectId('customer_549'),
    firstName: 'Alan',
    lastName: 'Rice',
    fullName: 'Alan Rice',
    gender: 'Female',
    gsm: '(561) 234-3339',
    createdAt: '2024-07-07T12:58:40.282Z',
    isActive: true,
    avatar: [
      {
        name: '1425df4e-4b10-4d77-a00b-957c4964e0dd',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '6b89082c-3dea-4b07-8957-7557bd845434',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1118.jpg',
      },
    ],
    addresses: [
      {
        text: '11427 Huel Route, Massapequa, NY 11751',
        coordinate: ['40.73210823178464', '-73.99785822334118'],
      },
      {
        text: '11059 Randy Locks, Lindenhurst, NY 11667',
        coordinate: ['40.855052258679024', '-73.90331823302245'],
      },
      {
        text: '11128 Shayna Motorway, Lindenhurst, NY 11101',
        coordinate: ['40.70373038121957', '-73.99378591068276'],
      },
    ],
  },
  {
    id: getObjectId('customer_550'),
    firstName: 'Everardo',
    lastName: 'McCullough',
    fullName: 'Everardo McCullough',
    gender: 'Female',
    gsm: '(662) 847-7940',
    createdAt: '2024-06-12T15:20:51.661Z',
    isActive: true,
    avatar: [
      {
        name: '18eff269-6ebc-4372-b9b6-4d6f1fd6fdcb',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '2be7a8a9-a238-4fa9-9015-72116fecc1ce',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1074.jpg',
      },
    ],
    addresses: [
      {
        text: '11055 Schuster Gardens, Massapequa, NY 11732',
        coordinate: ['40.6365034810973', '-73.98578000769199'],
      },
      {
        text: '11733 Walker Cove, Massapequa, NY 11322',
        coordinate: ['40.56648613912078', '-73.87751470966245'],
      },
      {
        text: '11878 Pagac Trail, Lindenhurst, NY 11876',
        coordinate: ['40.71114281327269', '-74.01648182914843'],
      },
    ],
  },
  {
    id: getObjectId('customer_551'),
    firstName: 'Taylor',
    lastName: 'Zboncak',
    fullName: 'Taylor Zboncak',
    gender: 'Male',
    gsm: '(045) 398-5859',
    createdAt: '2024-06-22T22:55:25.444Z',
    isActive: true,
    avatar: [
      {
        name: 'a6453061-6529-40a0-8273-ffb854f44249',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'd7c43c38-849d-449a-a0e2-b92a8007e531',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1247.jpg',
      },
    ],
    addresses: [
      {
        text: '11618 Hoeger Lights, Massapequa, NY 11449',
        coordinate: ['40.627049675070175', '-73.98253459810051'],
      },
      {
        text: '11430 Leuschke Via, Brooklyn, NY 11727',
        coordinate: ['40.82687191092169', '-73.93860406015271'],
      },
      {
        text: '11180 Thompson Circle, Massapequa, NY 11460',
        coordinate: ['40.52879780292704', '-74.16599356445849'],
      },
    ],
  },
  {
    id: getObjectId('customer_552'),
    firstName: 'Nelle',
    lastName: 'Rolfson',
    fullName: 'Nelle Rolfson',
    gender: 'Male',
    gsm: '(190) 496-3582',
    createdAt: '2024-06-15T03:17:45.061Z',
    isActive: true,
    avatar: [
      {
        name: '0cb946f5-d70a-4453-90f5-df6d964d4ec8',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '67e9080e-9534-494c-8e0c-03a952395dfd',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/197.jpg',
      },
    ],
    addresses: [
      {
        text: '11859 Abbie Station, Brooklyn, NY 11161',
        coordinate: ['40.68771299502717', '-74.04721511862215'],
      },
      {
        text: '11269 Stokes Valley, Lindenhurst, NY 11154',
        coordinate: ['40.67540078261772', '-73.81703727480193'],
      },
      {
        text: '11797 Lorenzo Locks, Brooklyn, NY 11347',
        coordinate: ['40.747277718986986', '-73.99578762620561'],
      },
    ],
  },
  {
    id: getObjectId('customer_553'),
    firstName: 'Kian',
    lastName: 'Roob',
    fullName: 'Kian Roob',
    gender: 'Female',
    gsm: '(224) 447-8933',
    createdAt: '2024-06-25T10:34:14.056Z',
    isActive: true,
    avatar: [
      {
        name: '3138454a-49ff-4487-aa44-e8ac715c8146',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'eb3b9c59-5884-4f9b-801d-5da1cc851f1e',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1241.jpg',
      },
    ],
    addresses: [
      {
        text: '11135 Reichert Course, Brooklyn, NY 11720',
        coordinate: ['40.737206062011865', '-73.84886438595831'],
      },
      {
        text: '11434 Daniel Meadows, Massapequa, NY 11452',
        coordinate: ['40.687024663944904', '-73.87836555031981'],
      },
      {
        text: '11426 Denesik Courts, Brooklyn, NY 11954',
        coordinate: ['40.622273685700655', '-74.07883292358069'],
      },
    ],
  },
  {
    id: getObjectId('customer_554'),
    firstName: 'Cathy',
    lastName: 'Gutmann',
    fullName: 'Cathy Gutmann',
    gender: 'Female',
    gsm: '(674) 292-3262',
    createdAt: '2024-07-02T11:50:11.552Z',
    isActive: true,
    avatar: [
      {
        name: '70e215ca-5336-4e0d-a72c-20a74785df99',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'e2a09423-13d0-4c9c-903a-6bcb7ebe7cb9',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/415.jpg',
      },
    ],
    addresses: [
      {
        text: '11655 Joany Course, Brooklyn, NY 11802',
        coordinate: ['40.75627707172136', '-73.97723552936826'],
      },
      {
        text: '11166 Cormier Plaza, Lindenhurst, NY 11278',
        coordinate: ['40.86255321747302', '-73.8648318412901'],
      },
      {
        text: '11143 Ortiz Mill, Brooklyn, NY 11207',
        coordinate: ['40.6645385558063', '-73.90402732990448'],
      },
    ],
  },
  {
    id: getObjectId('customer_555'),
    firstName: 'Donna',
    lastName: 'Kertzmann',
    fullName: 'Donna Kertzmann',
    gender: 'Male',
    gsm: '(397) 280-8557',
    createdAt: '2024-06-21T17:41:37.253Z',
    isActive: true,
    avatar: [
      {
        name: '17cbb237-0242-48be-9dd7-cf3f3975d543',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '019d6810-d0f7-4b64-8665-283cb229ca98',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/452.jpg',
      },
    ],
    addresses: [
      {
        text: '11928 Zemlak Terrace, Brooklyn, NY 11083',
        coordinate: ['40.5861219668654', '-73.96563797373686'],
      },
      {
        text: '11668 Hane Common, Brooklyn, NY 11295',
        coordinate: ['40.79714029516044', '-73.93690255000283'],
      },
      {
        text: '11085 Lenora Crossroad, Massapequa, NY 11054',
        coordinate: ['40.6717882500396', '-73.8952881573647'],
      },
    ],
  },
  {
    id: getObjectId('customer_556'),
    firstName: 'Garry',
    lastName: 'Simonis',
    fullName: 'Garry Simonis',
    gender: 'Male',
    gsm: '(716) 489-5283',
    createdAt: '2024-07-01T02:05:07.527Z',
    isActive: false,
    avatar: [
      {
        name: '75885446-4a23-490a-96cf-db2aaeae2b26',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '74bdc0ec-6075-4b1e-84ca-1eb07ddbb745',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1107.jpg',
      },
    ],
    addresses: [
      {
        text: '11270 Littel Drive, Lindenhurst, NY 11968',
        coordinate: ['40.689013432473764', '-73.91000786387228'],
      },
      {
        text: '11456 Federico Freeway, Lindenhurst, NY 11390',
        coordinate: ['40.73636731561727', '-73.87880380035317'],
      },
      {
        text: '11251 Bertram Extensions, Lindenhurst, NY 11057',
        coordinate: ['40.598106469646424', '-73.77487508395032'],
      },
    ],
  },
  {
    id: getObjectId('customer_557'),
    firstName: 'Jennifer',
    lastName: 'Dooley',
    fullName: 'Jennifer Dooley',
    gender: 'Female',
    gsm: '(745) 385-4999',
    createdAt: '2024-07-06T04:09:06.822Z',
    isActive: true,
    avatar: [
      {
        name: 'c9654329-6692-4d2e-bfee-61e82f49eeb5',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'e03c19cd-5cd9-4f26-ba65-8ffe1f3a0c8f',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/952.jpg',
      },
    ],
    addresses: [
      {
        text: '11318 Sipes Harbors, Lindenhurst, NY 11120',
        coordinate: ['40.70101970449942', '-73.98238357202935'],
      },
      {
        text: '11085 Lenora Crossroad, Massapequa, NY 11054',
        coordinate: ['40.6717882500396', '-73.8952881573647'],
      },
      {
        text: '11149 Cruickshank Burg, Lindenhurst, NY 11019',
        coordinate: ['40.78731753673706', '-73.9144110734691'],
      },
    ],
  },
  {
    id: getObjectId('customer_558'),
    firstName: 'Terrence',
    lastName: 'Emard',
    fullName: 'Terrence Emard',
    gender: 'Female',
    gsm: '(378) 460-9795',
    createdAt: '2024-06-11T07:56:58.635Z',
    isActive: true,
    avatar: [
      {
        name: '6ce41a9e-19a9-43a0-b49e-8ca5ec142e4d',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '0407b5ce-9cee-49f8-ada3-51ffe59d47c7',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1143.jpg',
      },
    ],
    addresses: [
      {
        text: '11878 Dudley Pike, Lindenhurst, NY 11604',
        coordinate: ['40.64716080488486', '-74.0073656851469'],
      },
      {
        text: '11125 Strosin Curve, Lindenhurst, NY 11467',
        coordinate: ['40.732100034726514', '-73.9767183060347'],
      },
      {
        text: '11186 Nolan Crest, Lindenhurst, NY 11296',
        coordinate: ['40.59649847049655', '-74.18222476116168'],
      },
    ],
  },
  {
    id: getObjectId('customer_559'),
    firstName: 'Lloyd',
    lastName: "O'Keefe",
    fullName: "Lloyd O'Keefe",
    gender: 'Female',
    gsm: '(122) 945-1874',
    createdAt: '2024-06-19T04:01:30.220Z',
    isActive: false,
    avatar: [
      {
        name: '7dbb8b0d-ad9c-4cf0-9306-577588b99d9a',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '8c2331d8-9734-4492-9102-b81a96727251',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/463.jpg',
      },
    ],
    addresses: [
      {
        text: '11456 Federico Freeway, Lindenhurst, NY 11390',
        coordinate: ['40.73636731561727', '-73.87880380035317'],
      },
      {
        text: '11851 Swift Glen, Lindenhurst, NY 11624',
        coordinate: ['40.51158309370173', '-74.22091326797245'],
      },
      {
        text: '11248 Kuhlman Crossroad, Massapequa, NY 11810',
        coordinate: ['40.64939023071356', '-73.95553621385756'],
      },
    ],
  },
  {
    id: getObjectId('customer_560'),
    firstName: 'Julian',
    lastName: 'Wintheiser',
    fullName: 'Julian Wintheiser',
    gender: 'Female',
    gsm: '(485) 376-9067',
    createdAt: '2024-06-23T17:52:47.369Z',
    isActive: false,
    avatar: [
      {
        name: '74c1acfa-d686-45d4-9be3-8ec02ebd2023',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'cc0cb393-b01d-4e9a-aa6b-22a0d05254ae',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/200.jpg',
      },
    ],
    addresses: [
      {
        text: '11269 Stokes Valley, Lindenhurst, NY 11154',
        coordinate: ['40.67540078261772', '-73.81703727480193'],
      },
      {
        text: '11642 Alberta Junction, Lindenhurst, NY 11370',
        coordinate: ['40.782269303154564', '-73.92799108814602'],
      },
      {
        text: '11107 Elnora Hills, Brooklyn, NY 11824',
        coordinate: ['40.60236204486041', '-74.00232304200087'],
      },
    ],
  },
  {
    id: getObjectId('customer_561'),
    firstName: 'Ayden',
    lastName: 'Runolfsson',
    fullName: 'Ayden Runolfsson',
    gender: 'Male',
    gsm: '(670) 596-4905',
    createdAt: '2024-07-05T21:17:15.568Z',
    isActive: true,
    avatar: [
      {
        name: '26e925cd-859b-42ce-a5d9-e6b1aa21dff7',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'c0c8efa6-57d7-49ba-9b27-42d2653231ca',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/528.jpg',
      },
    ],
    addresses: [
      {
        text: '11270 Littel Drive, Lindenhurst, NY 11968',
        coordinate: ['40.689013432473764', '-73.91000786387228'],
      },
      {
        text: '11668 Hane Common, Brooklyn, NY 11295',
        coordinate: ['40.79714029516044', '-73.93690255000283'],
      },
      {
        text: '11128 Shayna Motorway, Lindenhurst, NY 11101',
        coordinate: ['40.70373038121957', '-73.99378591068276'],
      },
    ],
  },
  {
    id: getObjectId('customer_562'),
    firstName: 'Archibald',
    lastName: 'Cronin',
    fullName: 'Archibald Cronin',
    gender: 'Male',
    gsm: '(805) 376-4699',
    createdAt: '2024-06-28T11:41:40.856Z',
    isActive: true,
    avatar: [
      {
        name: 'f5e8a2a2-a9d8-4d52-b06c-a029196db164',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'df1ee2ec-b77c-49ed-9df0-0548921a2b47',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1114.jpg',
      },
    ],
    addresses: [
      {
        text: '11623 Darien Cliffs, Lindenhurst, NY 11575',
        coordinate: ['40.70056831070206', '-73.9853693094361'],
      },
      {
        text: '11877 Nyasia Plains, Lindenhurst, NY 11970',
        coordinate: ['40.76021384556489', '-74.00722225239753'],
      },
      {
        text: '11760 Cynthia Dam, Brooklyn, NY 11589',
        coordinate: ['40.805598122229355', '-73.96654850238752'],
      },
    ],
  },
  {
    id: getObjectId('customer_563'),
    firstName: 'Amos',
    lastName: 'Weber',
    fullName: 'Amos Weber',
    gender: 'Male',
    gsm: '(376) 136-2956',
    createdAt: '2024-07-06T04:02:46.553Z',
    isActive: true,
    avatar: [
      {
        name: '42d29041-da9a-4f6d-bb32-f4017edcebe1',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '6b1be193-92d1-4fed-94b3-cac97a1bfe41',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/149.jpg',
      },
    ],
    addresses: [
      {
        text: '11318 Sipes Harbors, Lindenhurst, NY 11120',
        coordinate: ['40.70101970449942', '-73.98238357202935'],
      },
      {
        text: '11797 Bart Valley, Lindenhurst, NY 11117',
        coordinate: ['40.669777801118656', '-73.92802454968135'],
      },
      {
        text: '11181 Rice Corners, Massapequa, NY 11016',
        coordinate: ['40.85995458193837', '-73.81034233663169'],
      },
    ],
  },
  {
    id: getObjectId('customer_564'),
    firstName: 'Gerhard',
    lastName: 'Jenkins',
    fullName: 'Gerhard Jenkins',
    gender: 'Female',
    gsm: '(606) 797-4457',
    createdAt: '2024-06-17T07:54:08.883Z',
    isActive: true,
    avatar: [
      {
        name: '3239d2b8-faf9-46c5-ac75-706ecbc098f2',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '99f8a0ae-aa4d-40d3-8ed3-d566e79484c2',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/680.jpg',
      },
    ],
    addresses: [
      {
        text: '11045 Johnston Key, Lindenhurst, NY 11539',
        coordinate: ['40.84398642270739', '-73.83864402262044'],
      },
      {
        text: '11821 Ryan Throughway, Brooklyn, NY 11863',
        coordinate: ['40.824547968663495', '-73.9087967521559'],
      },
      {
        text: '11245 Myrl Loop, Massapequa, NY 11390',
        coordinate: ['40.757834840940724', '-73.9538537606329'],
      },
    ],
  },
  {
    id: getObjectId('customer_565'),
    firstName: 'Laurence',
    lastName: 'Wilkinson',
    fullName: 'Laurence Wilkinson',
    gender: 'Male',
    gsm: '(711) 817-8100',
    createdAt: '2024-06-30T14:14:52.409Z',
    isActive: true,
    avatar: [
      {
        name: '29049bf5-028b-41fb-8f26-8c4cb8de43e6',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'f0ecee45-980c-41d2-b358-4faf2e246a36',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/685.jpg',
      },
    ],
    addresses: [
      {
        text: '11318 Sipes Harbors, Lindenhurst, NY 11120',
        coordinate: ['40.70101970449942', '-73.98238357202935'],
      },
      {
        text: '11486 Cartwright Fords, Lindenhurst, NY 11597',
        coordinate: ['40.833969332695936', '-73.94231035241494'],
      },
      {
        text: '11727 Schaefer Inlet, Lindenhurst, NY 11036',
        coordinate: ['40.68715261156324', '-74.00526659632791'],
      },
    ],
  },
  {
    id: getObjectId('customer_566'),
    firstName: 'Kaylie',
    lastName: 'Grady',
    fullName: 'Kaylie Grady',
    gender: 'Female',
    gsm: '(887) 400-3765',
    createdAt: '2024-06-09T00:39:10.526Z',
    isActive: true,
    avatar: [
      {
        name: '7292b3aa-5dbc-4195-afcc-1fa2b7bea2ad',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'dc7bf8a0-4b8a-4a1b-a875-4bd4588ee6f4',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/781.jpg',
      },
    ],
    addresses: [
      {
        text: '11418 Schumm Lock, Lindenhurst, NY 11340',
        coordinate: ['40.788028545449976', '-73.90529902987166'],
      },
      {
        text: '11727 Schaefer Inlet, Lindenhurst, NY 11036',
        coordinate: ['40.68715261156324', '-74.00526659632791'],
      },
      {
        text: '11863 Schuppe Lake, Massapequa, NY 11711',
        coordinate: ['40.5870337210884', '-74.00229002432485'],
      },
    ],
  },
  {
    id: getObjectId('customer_567'),
    firstName: 'Vena',
    lastName: 'Veum',
    fullName: 'Vena Veum',
    gender: 'Male',
    gsm: '(189) 099-3014',
    createdAt: '2024-06-19T00:18:27.440Z',
    isActive: false,
    avatar: [
      {
        name: '35217b13-6d6d-4140-b801-87c15d08db9c',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '5409b85b-03dc-4e9f-8d46-a60c326998c6',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/292.jpg',
      },
    ],
    addresses: [
      {
        text: '11859 Abbie Station, Brooklyn, NY 11161',
        coordinate: ['40.68771299502717', '-74.04721511862215'],
      },
      {
        text: '11509 Donna Canyon, Brooklyn, NY 11024',
        coordinate: ['40.85330068757448', '-73.93352262256185'],
      },
      {
        text: '11045 Morar Extensions, Lindenhurst, NY 11342',
        coordinate: ['40.59184529992161', '-73.80292936655309'],
      },
    ],
  },
  {
    id: getObjectId('customer_568'),
    firstName: 'Fidel',
    lastName: 'Waelchi',
    fullName: 'Fidel Waelchi',
    gender: 'Female',
    gsm: '(439) 407-4205',
    createdAt: '2024-06-21T19:31:36.062Z',
    isActive: false,
    avatar: [
      {
        name: 'aa4112b4-f32e-4f7f-bc03-719520a12c54',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '3b485951-76ee-41e0-8690-12c211a3c068',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/654.jpg',
      },
    ],
    addresses: [
      {
        text: '11082 Davonte Loop, Brooklyn, NY 11055',
        coordinate: ['40.698260804649976', '-73.91788218792928'],
      },
      {
        text: '11647 Khalil Freeway, Massapequa, NY 11799',
        coordinate: ['40.73552798165039', '-73.99701720039775'],
      },
      {
        text: '11337 Harry Brook, Brooklyn, NY 11820',
        coordinate: ['40.82365881189533', '-73.90978994398685'],
      },
    ],
  },
  {
    id: getObjectId('customer_569'),
    firstName: 'Kattie',
    lastName: 'Jenkins',
    fullName: 'Kattie Jenkins',
    gender: 'Male',
    gsm: '(939) 474-4396',
    createdAt: '2024-07-05T02:18:53.323Z',
    isActive: true,
    avatar: [
      {
        name: '69f2d72b-80ee-4e72-b65a-124f48151be0',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'b268b787-8ee6-423d-a95e-4669ff0f59be',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/645.jpg',
      },
    ],
    addresses: [
      {
        text: '11511 Keeling Courts, Lindenhurst, NY 11662',
        coordinate: ['40.827562039798345', '-73.88823656144815'],
      },
      {
        text: '11923 Legros Divide, Brooklyn, NY 11072',
        coordinate: ['40.75081540048207', '-73.84366030192892'],
      },
      {
        text: '11719 Buckridge Center, Brooklyn, NY 11760',
        coordinate: ['40.71127832019916', '-73.72859237968323'],
      },
    ],
  },
  {
    id: getObjectId('customer_570'),
    firstName: 'Wilfredo',
    lastName: 'Wisoky',
    fullName: 'Wilfredo Wisoky',
    gender: 'Male',
    gsm: '(517) 676-4144',
    createdAt: '2024-07-07T12:32:54.237Z',
    isActive: false,
    avatar: [
      {
        name: 'fddf60ab-8dcf-4e15-ab1d-a199dadfc81e',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'd7fc036f-55a1-454a-8876-8d019d8d3808',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/312.jpg',
      },
    ],
    addresses: [
      {
        text: '11203 Pfannerstill Stravenue, Lindenhurst, NY 11362',
        coordinate: ['40.81887624266896', '-73.93779180668098'],
      },
      {
        text: '11498 Cale Crest, Lindenhurst, NY 11537',
        coordinate: ['40.75657150685255', '-73.98892437948754'],
      },
      {
        text: '11181 Batz Corners, Lindenhurst, NY 11904',
        coordinate: ['40.74455702716755', '-73.93501800516812'],
      },
    ],
  },
  {
    id: getObjectId('customer_571'),
    firstName: 'Maryjane',
    lastName: 'Hayes',
    fullName: 'Maryjane Hayes',
    gender: 'Female',
    gsm: '(562) 933-3054',
    createdAt: '2024-06-26T17:59:31.559Z',
    isActive: true,
    avatar: [
      {
        name: 'd2d4d277-ce95-4e71-ac7d-f4a88295eefc',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '55457d16-0d1d-4ab7-a267-b59a6142a774',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/714.jpg',
      },
    ],
    addresses: [
      {
        text: '11797 Bart Valley, Lindenhurst, NY 11117',
        coordinate: ['40.669777801118656', '-73.92802454968135'],
      },
      {
        text: '11489 Schoen Throughway, Lindenhurst, NY 11849',
        coordinate: ['40.69130748551876', '-73.97542925623603'],
      },
      {
        text: '11898 Chelsea Plain, Lindenhurst, NY 11735',
        coordinate: ['40.875525570218045', '-73.86179079437676'],
      },
    ],
  },
  {
    id: getObjectId('customer_572'),
    firstName: 'Evangeline',
    lastName: 'Braun',
    fullName: 'Evangeline Braun',
    gender: 'Female',
    gsm: '(544) 478-9008',
    createdAt: '2024-07-03T15:13:49.571Z',
    isActive: true,
    avatar: [
      {
        name: '73944c71-3dd5-49f1-945a-75fdeb2dd710',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'a2d9c3f5-abb1-4c5a-814e-0df3736104c5',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/566.jpg',
      },
    ],
    addresses: [
      {
        text: '11728 Earlene Garden, Brooklyn, NY 11259',
        coordinate: ['40.61541451352046', '-73.9512235195281'],
      },
      {
        text: '11135 Reichert Course, Brooklyn, NY 11720',
        coordinate: ['40.737206062011865', '-73.84886438595831'],
      },
      {
        text: '11418 Schumm Lock, Lindenhurst, NY 11340',
        coordinate: ['40.788028545449976', '-73.90529902987166'],
      },
    ],
  },
  {
    id: getObjectId('customer_573'),
    firstName: 'Lora',
    lastName: 'Schmeler',
    fullName: 'Lora Schmeler',
    gender: 'Male',
    gsm: '(404) 618-0530',
    createdAt: '2024-06-25T16:08:41.253Z',
    isActive: false,
    avatar: [
      {
        name: 'e4acc68c-5307-487c-9b55-f6c4d9ba447f',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'c39a9193-ac83-4b86-a87e-cf4eb9030946',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/479.jpg',
      },
    ],
    addresses: [
      {
        text: '11318 Sipes Harbors, Lindenhurst, NY 11120',
        coordinate: ['40.70101970449942', '-73.98238357202935'],
      },
      {
        text: '11085 Lenora Crossroad, Massapequa, NY 11054',
        coordinate: ['40.6717882500396', '-73.8952881573647'],
      },
      {
        text: '11108 Bauch Trail, Massapequa, NY 11355',
        coordinate: ['40.81991419971737', '-73.84577566721931'],
      },
    ],
  },
  {
    id: getObjectId('customer_574'),
    firstName: 'Verla',
    lastName: 'Fahey',
    fullName: 'Verla Fahey',
    gender: 'Female',
    gsm: '(572) 142-6463',
    createdAt: '2024-06-12T12:31:19.915Z',
    isActive: true,
    avatar: [
      {
        name: 'ff98c485-f115-4503-ad83-b2e0e5e9a000',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '976861e9-390d-4d25-92a4-632cc29c15d0',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/108.jpg',
      },
    ],
    addresses: [
      {
        text: '11675 Bashirian Views, Massapequa, NY 11729',
        coordinate: ['40.65381263231815', '-73.93397585955978'],
      },
      {
        text: '11821 Ryan Throughway, Brooklyn, NY 11863',
        coordinate: ['40.824547968663495', '-73.9087967521559'],
      },
      {
        text: '11418 Schumm Lock, Lindenhurst, NY 11340',
        coordinate: ['40.788028545449976', '-73.90529902987166'],
      },
    ],
  },
  {
    id: getObjectId('customer_575'),
    firstName: 'Martin',
    lastName: 'Mosciski',
    fullName: 'Martin Mosciski',
    gender: 'Female',
    gsm: '(747) 327-8715',
    createdAt: '2024-06-28T04:02:15.221Z',
    isActive: true,
    avatar: [
      {
        name: 'dbf4411e-9418-4537-96d5-0b77b52d767f',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'f502ac94-d908-47fc-a9d5-a12fad3a1a15',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1021.jpg',
      },
    ],
    addresses: [
      {
        text: '11604 Ephraim Stravenue, Brooklyn, NY 11352',
        coordinate: ['40.774464031726005', '-73.98312890371241'],
      },
      {
        text: '11505 Raynor Walk, Massapequa, NY 11815',
        coordinate: ['40.75598474475542', '-73.9358398855354'],
      },
      {
        text: '11408 Labadie Hollow, Lindenhurst, NY 11527',
        coordinate: ['40.68730915595523', '-73.94908167902258'],
      },
    ],
  },
  {
    id: getObjectId('customer_576'),
    firstName: 'Stacy',
    lastName: 'Tremblay',
    fullName: 'Stacy Tremblay',
    gender: 'Male',
    gsm: '(140) 826-2363',
    createdAt: '2024-07-03T18:42:05.752Z',
    isActive: false,
    avatar: [
      {
        name: 'b37e924d-248b-4119-b4d5-672c161fc35b',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'c6a45b3a-df8d-47ca-8113-ce0e85d88b19',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/924.jpg',
      },
    ],
    addresses: [
      {
        text: '11367 Ansley Stravenue, Massapequa, NY 11350',
        coordinate: ['40.81730470420681', '-73.94741458340314'],
      },
      {
        text: '11877 Nyasia Plains, Lindenhurst, NY 11970',
        coordinate: ['40.76021384556489', '-74.00722225239753'],
      },
      {
        text: '11335 Greyson Mission, Lindenhurst, NY 11507',
        coordinate: ['40.89110181872506', '-73.8938991544214'],
      },
    ],
  },
  {
    id: getObjectId('customer_577'),
    firstName: 'Augusta',
    lastName: 'Rath',
    fullName: 'Augusta Rath',
    gender: 'Female',
    gsm: '(025) 727-3891',
    createdAt: '2024-06-10T17:46:41.978Z',
    isActive: false,
    avatar: [
      {
        name: 'bac653b5-0ad0-45a2-9458-1c1d738f88da',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '347f83e6-955b-47e1-aabc-6c97ffa6c9f5',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1038.jpg',
      },
    ],
    addresses: [
      {
        text: '11175 Kieran Curve, Massapequa, NY 11322',
        coordinate: ['40.60976233898883', '-74.1028092626307'],
      },
      {
        text: '11974 Harold Ports, Brooklyn, NY 11963',
        coordinate: ['40.674179744645684', '-73.98876832456823'],
      },
      {
        text: '11816 Althea Loop, Brooklyn, NY 11851',
        coordinate: ['40.87000167958251', '-73.82689736629037'],
      },
    ],
  },
  {
    id: getObjectId('customer_578'),
    firstName: 'Christy',
    lastName: 'Will',
    fullName: 'Christy Will',
    gender: 'Female',
    gsm: '(730) 410-0578',
    createdAt: '2024-06-20T20:51:44.285Z',
    isActive: true,
    avatar: [
      {
        name: '684eba2e-f625-4b86-9bb5-97cd133af3f8',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'd874f20b-c055-4923-9910-534d1b280baf',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/163.jpg',
      },
    ],
    addresses: [
      {
        text: '11456 Federico Freeway, Lindenhurst, NY 11390',
        coordinate: ['40.73636731561727', '-73.87880380035317'],
      },
      {
        text: '11036 Joaquin Circle, Massapequa, NY 11502',
        coordinate: ['40.70119015066914', '-73.99645145905747'],
      },
      {
        text: '11863 Schuppe Lake, Massapequa, NY 11711',
        coordinate: ['40.5870337210884', '-74.00229002432485'],
      },
    ],
  },
  {
    id: getObjectId('customer_579'),
    firstName: 'Lorena',
    lastName: 'Zieme',
    fullName: 'Lorena Zieme',
    gender: 'Female',
    gsm: '(624) 066-7852',
    createdAt: '2024-06-11T05:16:29.157Z',
    isActive: true,
    avatar: [
      {
        name: '649b77c3-4ebd-4076-8b06-e2859fd50af8',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '0513f84e-c50b-416c-addf-e41fb5f15fd4',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/993.jpg',
      },
    ],
    addresses: [
      {
        text: '11864 Leonora Stream, Brooklyn, NY 11957',
        coordinate: ['40.832201142470986', '-73.9018035427564'],
      },
      {
        text: '11898 Chelsea Plain, Lindenhurst, NY 11735',
        coordinate: ['40.875525570218045', '-73.86179079437676'],
      },
      {
        text: '11148 Susie Oval, Brooklyn, NY 11640',
        coordinate: ['40.6814054925542', '-73.99657415385126'],
      },
    ],
  },
  {
    id: getObjectId('customer_580'),
    firstName: 'Demarcus',
    lastName: 'Herman',
    fullName: 'Demarcus Herman',
    gender: 'Male',
    gsm: '(502) 006-4339',
    createdAt: '2024-06-16T23:04:27.490Z',
    isActive: false,
    avatar: [
      {
        name: '6e101cf0-2dc8-4dd0-b154-1e807e5a7eed',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '79af665c-60bb-48ac-8a94-2efffa75c134',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1197.jpg',
      },
    ],
    addresses: [
      {
        text: '11096 Breanne Divide, Brooklyn, NY 11640',
        coordinate: ['40.718270507252825', '-73.90150746815962'],
      },
      {
        text: '11125 Strosin Curve, Lindenhurst, NY 11467',
        coordinate: ['40.732100034726514', '-73.9767183060347'],
      },
      {
        text: '11474 Dickens Lodge, Massapequa, NY 11199',
        coordinate: ['40.75587993188085', '-73.7894709790709'],
      },
    ],
  },
  {
    id: getObjectId('customer_581'),
    firstName: 'Harold',
    lastName: 'Lindgren',
    fullName: 'Harold Lindgren',
    gender: 'Male',
    gsm: '(254) 253-8193',
    createdAt: '2024-06-12T11:27:57.305Z',
    isActive: false,
    avatar: [
      {
        name: '9c3d17c2-aee3-49db-a61a-96a1ce3d637f',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '7eea6213-f1d5-499a-a196-1a02654dd0ee',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/724.jpg',
      },
    ],
    addresses: [
      {
        text: '11085 Oswaldo Harbor, Brooklyn, NY 11546',
        coordinate: ['40.85125313575545', '-73.91436091292005'],
      },
      {
        text: '11851 Swift Glen, Lindenhurst, NY 11624',
        coordinate: ['40.51158309370173', '-74.22091326797245'],
      },
      {
        text: '11337 Harry Brook, Brooklyn, NY 11820',
        coordinate: ['40.82365881189533', '-73.90978994398685'],
      },
    ],
  },
  {
    id: getObjectId('customer_582'),
    firstName: 'Jordyn',
    lastName: 'Bins',
    fullName: 'Jordyn Bins',
    gender: 'Male',
    gsm: '(755) 818-3803',
    createdAt: '2024-06-15T11:50:07.264Z',
    isActive: false,
    avatar: [
      {
        name: '4f50e8d0-6620-4f24-9fab-ca045cce280f',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'c2d7c1fa-e20f-4d58-8deb-1ea617409180',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/25.jpg',
      },
    ],
    addresses: [
      {
        text: '11923 Legros Divide, Brooklyn, NY 11072',
        coordinate: ['40.75081540048207', '-73.84366030192892'],
      },
      {
        text: '11607 Reinger Parkways, Brooklyn, NY 11042',
        coordinate: ['40.590737386781605', '-74.07660361955186'],
      },
      {
        text: '11180 Thompson Circle, Massapequa, NY 11460',
        coordinate: ['40.52879780292704', '-74.16599356445849'],
      },
    ],
  },
  {
    id: getObjectId('customer_583'),
    firstName: 'Lelia',
    lastName: 'Abernathy',
    fullName: 'Lelia Abernathy',
    gender: 'Female',
    gsm: '(681) 474-6528',
    createdAt: '2024-07-06T19:28:49.963Z',
    isActive: true,
    avatar: [
      {
        name: 'cdea5622-91fe-4d57-ac13-38a8f3374c42',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '9672f57b-a485-4d16-8b1f-f9db4fb5ae7d',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/898.jpg',
      },
    ],
    addresses: [
      {
        text: "11960 O'Conner Forest, Lindenhurst, NY 11163",
        coordinate: ['40.89309118725139', '-73.89752941514372'],
      },
      {
        text: '11023 Reilly Freeway, Brooklyn, NY 11304',
        coordinate: ['40.708836427424856', '-73.95736505455008'],
      },
      {
        text: '11246 Heathcote Crescent, Brooklyn, NY 11164',
        coordinate: ['40.70264295688686', '-73.85781194108168'],
      },
    ],
  },
  {
    id: getObjectId('customer_584'),
    firstName: 'Melany',
    lastName: 'VonRueden',
    fullName: 'Melany VonRueden',
    gender: 'Female',
    gsm: '(605) 209-2402',
    createdAt: '2024-07-08T07:46:14.897Z',
    isActive: true,
    avatar: [
      {
        name: '7dcd65f4-25eb-4647-87b9-bb5fef5c849f',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '7fd961b0-47d0-4e08-a0ab-5204fb5642b1',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/104.jpg',
      },
    ],
    addresses: [
      {
        text: '11230 Zander Curve, Lindenhurst, NY 11912',
        coordinate: ['40.87080816088552', '-73.83213503852586'],
      },
      {
        text: '11270 Littel Drive, Lindenhurst, NY 11968',
        coordinate: ['40.689013432473764', '-73.91000786387228'],
      },
      {
        text: '11835 Powlowski Extension, Brooklyn, NY 11150',
        coordinate: ['40.76245015151365', '-73.87061296246294'],
      },
    ],
  },
  {
    id: getObjectId('customer_585'),
    firstName: 'Asia',
    lastName: 'Schinner',
    fullName: 'Asia Schinner',
    gender: 'Male',
    gsm: '(422) 398-3165',
    createdAt: '2024-06-13T13:19:12.100Z',
    isActive: true,
    avatar: [
      {
        name: 'd1897ccd-27ba-4797-868c-fc733df906d9',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'ac4302b8-145d-4b9c-86e6-43fc5c67125d',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/819.jpg',
      },
    ],
    addresses: [
      {
        text: '11623 Darien Cliffs, Lindenhurst, NY 11575',
        coordinate: ['40.70056831070206', '-73.9853693094361'],
      },
      {
        text: '11418 Schumm Lock, Lindenhurst, NY 11340',
        coordinate: ['40.788028545449976', '-73.90529902987166'],
      },
      {
        text: '11128 Shayna Motorway, Lindenhurst, NY 11101',
        coordinate: ['40.70373038121957', '-73.99378591068276'],
      },
    ],
  },
  {
    id: getObjectId('customer_586'),
    firstName: 'Koby',
    lastName: 'Pagac',
    fullName: 'Koby Pagac',
    gender: 'Female',
    gsm: '(888) 580-2400',
    createdAt: '2024-07-08T07:53:50.809Z',
    isActive: true,
    avatar: [
      {
        name: 'fdfdf94c-9ea0-450c-8027-96c32e79c86f',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'bc5372d1-d3f0-444a-a6c1-92bedce46e55',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1051.jpg',
      },
    ],
    addresses: [
      {
        text: '11727 Schaefer Inlet, Lindenhurst, NY 11036',
        coordinate: ['40.68715261156324', '-74.00526659632791'],
      },
      {
        text: '11316 Goodwin Curve, Brooklyn, NY 11183',
        coordinate: ['40.72331641705996', '-73.8392178094307'],
      },
      {
        text: '11760 Cynthia Dam, Brooklyn, NY 11589',
        coordinate: ['40.805598122229355', '-73.96654850238752'],
      },
    ],
  },
  {
    id: getObjectId('customer_587'),
    firstName: 'Duncan',
    lastName: 'MacGyver',
    fullName: 'Duncan MacGyver',
    gender: 'Male',
    gsm: '(287) 534-3794',
    createdAt: '2024-06-08T21:56:25.056Z',
    isActive: true,
    avatar: [
      {
        name: 'a710b029-f50b-4415-8eae-996857511ca9',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '03837739-6cca-4652-936d-a8348be48961',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/694.jpg',
      },
    ],
    addresses: [
      {
        text: '11663 Gusikowski Extensions, Massapequa, NY 11108',
        coordinate: ['40.705174543564866', '-74.01519738145755'],
      },
      {
        text: '11607 Reinger Parkways, Brooklyn, NY 11042',
        coordinate: ['40.590737386781605', '-74.07660361955186'],
      },
      {
        text: '11774 Koss Mission, Brooklyn, NY 11540',
        coordinate: ['40.73032437088068', '-73.99512821335122'],
      },
    ],
  },
  {
    id: getObjectId('customer_588'),
    firstName: 'Luna',
    lastName: 'Kutch',
    fullName: 'Luna Kutch',
    gender: 'Female',
    gsm: '(584) 380-2041',
    createdAt: '2024-06-15T10:27:49.776Z',
    isActive: true,
    avatar: [
      {
        name: '8ffe5b57-3040-4047-ad26-54cfa4fa3320',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '3a5fc43d-5eae-401c-8cbd-a28d5aa0e41e',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1166.jpg',
      },
    ],
    addresses: [
      {
        text: '11378 Ellie Spring, Lindenhurst, NY 11784',
        coordinate: ['40.77936951467395', '-73.97694544805309'],
      },
      {
        text: '11776 Wilderman Prairie, Lindenhurst, NY 11562',
        coordinate: ['40.66945134822127', '-73.93551047298159'],
      },
      {
        text: '11628 Treutel Mills, Brooklyn, NY 11018',
        coordinate: ['40.71348020110573', '-73.99808008629375'],
      },
    ],
  },
  {
    id: getObjectId('customer_589'),
    firstName: 'Rolando',
    lastName: 'Wolf',
    fullName: 'Rolando Wolf',
    gender: 'Male',
    gsm: '(688) 314-2536',
    createdAt: '2024-06-29T01:47:29.116Z',
    isActive: false,
    avatar: [
      {
        name: 'b6b38afe-30a0-4d9a-b91e-5f86b0a1945d',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'c3bb6d77-e22d-4213-8822-b8f865f5ea25',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/133.jpg',
      },
    ],
    addresses: [
      {
        text: '11837 Ferry Corners, Brooklyn, NY 11749',
        coordinate: ['40.83762046059387', '-73.87537910005294'],
      },
      {
        text: '11898 Chelsea Plain, Lindenhurst, NY 11735',
        coordinate: ['40.875525570218045', '-73.86179079437676'],
      },
      {
        text: '11120 Royal Coves, Lindenhurst, NY 11520',
        coordinate: ['40.63410088148846', '-73.99688826750287'],
      },
    ],
  },
  {
    id: getObjectId('customer_590'),
    firstName: 'Ethelyn',
    lastName: 'Cartwright',
    fullName: 'Ethelyn Cartwright',
    gender: 'Male',
    gsm: '(293) 711-4897',
    createdAt: '2024-06-25T00:04:17.086Z',
    isActive: false,
    avatar: [
      {
        name: 'f6c4ce54-a88d-4655-b2f0-19aab6bf4bf2',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '165fd227-c39a-4ffc-acb9-a720c9e94004',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/854.jpg',
      },
    ],
    addresses: [
      {
        text: '11108 Bauch Trail, Massapequa, NY 11355',
        coordinate: ['40.81991419971737', '-73.84577566721931'],
      },
      {
        text: '11228 Stiedemann Valley, Brooklyn, NY 11949',
        coordinate: ['40.81821649698436', '-73.86826310670972'],
      },
      {
        text: '11085 Lenora Crossroad, Massapequa, NY 11054',
        coordinate: ['40.6717882500396', '-73.8952881573647'],
      },
    ],
  },
  {
    id: getObjectId('customer_591'),
    firstName: 'Korey',
    lastName: 'Daugherty',
    fullName: 'Korey Daugherty',
    gender: 'Male',
    gsm: '(501) 098-8969',
    createdAt: '2024-06-29T22:31:14.197Z',
    isActive: false,
    avatar: [
      {
        name: 'c734b973-eda1-48ae-98cd-d3da4ca21317',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '64067700-f1a5-4f7b-b619-8fabad8ec4a2',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/388.jpg',
      },
    ],
    addresses: [
      {
        text: '11537 Albin Way, Massapequa, NY 11704',
        coordinate: ['40.76684204696888', '-73.93807668888226'],
      },
      {
        text: '11530 Mueller Port, Massapequa, NY 11184',
        coordinate: ['40.76449980110699', '-73.96908694706285'],
      },
      {
        text: '11228 Paucek Islands, Massapequa, NY 11666',
        coordinate: ['40.782861173910526', '-73.92808660964148'],
      },
    ],
  },
  {
    id: getObjectId('customer_592'),
    firstName: 'Carolyn',
    lastName: 'Rodriguez',
    fullName: 'Carolyn Rodriguez',
    gender: 'Male',
    gsm: '(759) 376-6568',
    createdAt: '2024-06-17T20:37:31.110Z',
    isActive: true,
    avatar: [
      {
        name: 'e470f5b4-c43d-4972-96f8-c8d94dc174fd',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '07c2b9b7-6f4f-46c9-9335-6c7126119266',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/770.jpg',
      },
    ],
    addresses: [
      {
        text: '11418 Schumm Lock, Lindenhurst, NY 11340',
        coordinate: ['40.788028545449976', '-73.90529902987166'],
      },
      {
        text: '11958 Hintz Light, Massapequa, NY 11935',
        coordinate: ['40.875917577275104', '-73.82848174189849'],
      },
      {
        text: '11719 Buckridge Center, Brooklyn, NY 11760',
        coordinate: ['40.71127832019916', '-73.72859237968323'],
      },
    ],
  },
  {
    id: getObjectId('customer_593'),
    firstName: 'Ludie',
    lastName: 'Jacobi',
    fullName: 'Ludie Jacobi',
    gender: 'Male',
    gsm: '(718) 982-4795',
    createdAt: '2024-06-14T02:48:13.074Z',
    isActive: true,
    avatar: [
      {
        name: '423992e5-04aa-41c5-a45d-35d0c7dbec21',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'c29eae31-821e-4a13-80f6-0459e2502059',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1004.jpg',
      },
    ],
    addresses: [
      {
        text: '11663 Schmeler Rapids, Lindenhurst, NY 11976',
        coordinate: ['40.83095813827255', '-73.91366352822456'],
      },
      {
        text: '11228 Stiedemann Valley, Brooklyn, NY 11949',
        coordinate: ['40.81821649698436', '-73.86826310670972'],
      },
      {
        text: '11606 Mariana Keys, Lindenhurst, NY 11071',
        coordinate: ['40.60227925020982', '-73.91362606675423'],
      },
    ],
  },
  {
    id: getObjectId('customer_594'),
    firstName: 'Alex',
    lastName: 'Upton',
    fullName: 'Alex Upton',
    gender: 'Female',
    gsm: '(446) 816-1946',
    createdAt: '2024-06-20T04:30:23.996Z',
    isActive: false,
    avatar: [
      {
        name: '6318c1a9-f365-4d8a-a03f-1dddd3b93b0d',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'fd73cc93-b3c0-4a50-8717-1685232725a8',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/30.jpg',
      },
    ],
    addresses: [
      {
        text: '11991 Feest Court, Brooklyn, NY 11595',
        coordinate: ['40.7380915670452', '-73.99525100532993'],
      },
      {
        text: '11263 Solon Stream, Lindenhurst, NY 11007',
        coordinate: ['40.63674069980736', '-73.91978780874902'],
      },
      {
        text: '11576 Kerluke Summit, Massapequa, NY 11417',
        coordinate: ['40.59210466006108', '-73.99582650996682'],
      },
    ],
  },
  {
    id: getObjectId('customer_595'),
    firstName: 'Kelton',
    lastName: 'Towne',
    fullName: 'Kelton Towne',
    gender: 'Female',
    gsm: '(418) 657-8257',
    createdAt: '2024-06-30T10:37:37.939Z',
    isActive: false,
    avatar: [
      {
        name: '98b82a04-f299-4a51-8fbd-05edfe7a497c',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'b6f221b8-5ad1-46fb-a0fd-6600fa6bca20',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/980.jpg',
      },
    ],
    addresses: [
      {
        text: '11923 Legros Divide, Brooklyn, NY 11072',
        coordinate: ['40.75081540048207', '-73.84366030192892'],
      },
      {
        text: '11418 Schumm Lock, Lindenhurst, NY 11340',
        coordinate: ['40.788028545449976', '-73.90529902987166'],
      },
      {
        text: '11120 Royal Coves, Lindenhurst, NY 11520',
        coordinate: ['40.63410088148846', '-73.99688826750287'],
      },
    ],
  },
  {
    id: getObjectId('customer_596'),
    firstName: 'Janice',
    lastName: 'Ward',
    fullName: 'Janice Ward',
    gender: 'Female',
    gsm: '(275) 007-3943',
    createdAt: '2024-06-28T17:22:50.678Z',
    isActive: true,
    avatar: [
      {
        name: 'e80ce385-5053-489c-a77b-54b44e52c16c',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: 'cec0844d-f881-486a-8787-30b2c2735609',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/326.jpg',
      },
    ],
    addresses: [
      {
        text: '11096 Breanne Divide, Brooklyn, NY 11640',
        coordinate: ['40.718270507252825', '-73.90150746815962'],
      },
      {
        text: '11776 Wilderman Prairie, Lindenhurst, NY 11562',
        coordinate: ['40.66945134822127', '-73.93551047298159'],
      },
      {
        text: '11576 Kerluke Summit, Massapequa, NY 11417',
        coordinate: ['40.59210466006108', '-73.99582650996682'],
      },
    ],
  },
  {
    id: getObjectId('customer_597'),
    firstName: 'Gina',
    lastName: 'McClure',
    fullName: 'Gina McClure',
    gender: 'Female',
    gsm: '(719) 973-2997',
    createdAt: '2024-06-21T00:36:20.105Z',
    isActive: false,
    avatar: [
      {
        name: '9ef87650-3a3a-4883-bf71-8b2b2cdfe354',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '0dab1ca9-9291-4278-8e73-548c06de747f',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/149.jpg',
      },
    ],
    addresses: [
      {
        text: '11781 Maiya Valley, Brooklyn, NY 11844',
        coordinate: ['40.817646237824896', '-73.95265264832331'],
      },
      {
        text: '11918 Becker Fort, Massapequa, NY 11466',
        coordinate: ['40.69980932047403', '-73.98458488957945'],
      },
      {
        text: '11121 Ledner Islands, Massapequa, NY 11687',
        coordinate: ['40.667502035176184', '-73.89399724199065'],
      },
    ],
  },
  {
    id: getObjectId('customer_598'),
    firstName: 'Michale',
    lastName: 'Streich',
    fullName: 'Michale Streich',
    gender: 'Female',
    gsm: '(595) 768-0227',
    createdAt: '2024-07-01T22:36:38.203Z',
    isActive: false,
    avatar: [
      {
        name: 'b74f3ad5-68d4-40a3-abd6-79173d847233',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '09a0e38d-0def-4bc1-b06a-3a81d01c3ff7',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/2.jpg',
      },
    ],
    addresses: [
      {
        text: '11269 Stokes Valley, Lindenhurst, NY 11154',
        coordinate: ['40.67540078261772', '-73.81703727480193'],
      },
      {
        text: '11881 Wilton Fields, Lindenhurst, NY 11176',
        coordinate: ['40.787915583564256', '-73.84583413474485'],
      },
      {
        text: '11762 Schinner Garden, Lindenhurst, NY 11487',
        coordinate: ['40.50954831912203', '-74.24409344591764'],
      },
    ],
  },
  {
    id: getObjectId('customer_599'),
    firstName: 'Morgan',
    lastName: 'Strosin',
    fullName: 'Morgan Strosin',
    gender: 'Male',
    gsm: '(901) 385-2599',
    createdAt: '2024-07-03T02:54:25.692Z',
    isActive: true,
    avatar: [
      {
        name: 'd4d03edc-e3d2-4780-b584-616f9cfdf7b4',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '16c97bed-c8d7-46cc-bd1d-4df7f50a753c',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/507.jpg',
      },
    ],
    addresses: [
      {
        text: "11846 O'Hara Rapid, Brooklyn, NY 11231",
        coordinate: ['40.87355454025907', '-73.92984534052623'],
      },
      {
        text: '11195 Nader Road, Massapequa, NY 11615',
        coordinate: ['40.62678964983104', '-73.98952500781843'],
      },
      {
        text: '11228 Stiedemann Valley, Brooklyn, NY 11949',
        coordinate: ['40.81821649698436', '-73.86826310670972'],
      },
    ],
  },
  {
    id: getObjectId('customer_600'),
    firstName: 'Brock',
    lastName: 'Ferry',
    fullName: 'Brock Ferry',
    gender: 'Male',
    gsm: '(944) 395-8382',
    createdAt: '2024-06-19T21:29:16.109Z',
    isActive: true,
    avatar: [
      {
        name: '555c0093-9537-4405-ab01-93d289161651',
        percent: 100,
        size: 40088,
        status: 'done',
        type: 'image/jpeg',
        uid: '72b66cfd-07e4-4082-b87d-8bfb87105ce8',
        url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1055.jpg',
      },
    ],
    addresses: [
      {
        text: '11108 Bauch Trail, Massapequa, NY 11355',
        coordinate: ['40.81991419971737', '-73.84577566721931'],
      },
      {
        text: '11036 Hartmann Islands, Massapequa, NY 11273',
        coordinate: ['40.80648728921871', '-73.94602283563091'],
      },
      {
        text: '11961 Wilfred Terrace, Brooklyn, NY 11580',
        coordinate: ['40.675225426976645', '-73.91483721590403'],
      },
    ],
  },
];

module.exports = customers;
