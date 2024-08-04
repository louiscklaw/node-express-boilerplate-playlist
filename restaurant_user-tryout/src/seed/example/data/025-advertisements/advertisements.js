const { getObjectId, getObjectIds } = require('../../helpers/index');
const { v4: uuidv4 } = require('uuid');

console.log('seeding 025-advertisements  ');

const advertisements = [
  {
    id: getObjectId('advertisement_1'),
    images: [
      {
        status: 'done',
        type: 'image/jpg',
        uuid: 'test_salad_jpg',
        url: 'https://refine.ams3.cdn.digitaloceanspaces.com/finefoods/salad-4.jpg',
        meta: {},
      },
    ],
    caption: 'test_caption_1_1',
    description: 'test description 1_1',
    isActive: true,
  },
  {
    id: getObjectId('advertisement_2'),
    images: [
      {
        url: 'https://refine.ams3.cdn.digitaloceanspaces.com/finefoods/coffee.jpg',
        thumbnailUrl: 'https://refine.ams3.cdn.digitaloceanspaces.com/finefoods/coffee-thumbnail.jpg',
        name: 'Coffee',
        status: 'done',
        type: 'image/jpg',
        uid: '22720219-3faa-4646-aca3-fe3a253f0483',
      },
    ],
    caption: 'test_caption_2_1',
    description: 'test description 2_1',
    isActive: true,
  },
  {
    id: getObjectId('advertisement_3'),
    images: [
      {
        url: 'https://refine.ams3.cdn.digitaloceanspaces.com/finefoods/coffee.jpg',
        thumbnailUrl: 'https://refine.ams3.cdn.digitaloceanspaces.com/finefoods/coffee-thumbnail.jpg',
        name: 'Coffee',
        status: 'done',
        type: 'image/jpg',
        uid: '22720219-3faa-4646-aca3-fe3a253f0483',
      },
    ],
    caption: 'test_caption_3_2',
    description: 'test description 3_2',
    isActive: true,
  },
  {
    id: getObjectId('advertisement_4'),
    images: [
      {
        url: 'https://refine.ams3.cdn.digitaloceanspaces.com/finefoods/lamb.jpg',
        thumbnailUrl: 'https://refine.ams3.cdn.digitaloceanspaces.com/finefoods/lamb-thumbnail.jpg',
        name: 'Lamb',
        status: 'done',
        type: 'image/jpg',
        uid: 'b483a0c3-15a0-4bdc-9bb8-d998ddeaac42',
      },
    ],
    caption: 'test_caption_3_3',
    description: 'test description 3_3',
  },
  {
    id: getObjectId('advertisement_5'),
    images: [
      {
        url: 'https://refine.ams3.cdn.digitaloceanspaces.com/finefoods/burger-4.jpg',
        thumbnailUrl: 'https://refine.ams3.cdn.digitaloceanspaces.com/finefoods/burger-4-thumbnail.jpg',
        name: 'Mushroom Swiss Burger',
        status: 'done',
        type: 'image/jpg',
        uid: '5f358399-a9f4-49d9-b326-fa792c46d3e6',
      },
    ],
    caption: 'test_caption_3_5',
    description: 'test description 3_5',
  },
];

module.exports = advertisements;
