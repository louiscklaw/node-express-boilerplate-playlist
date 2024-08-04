const { getObjectId, getObjectIds } = require('../../helpers/index');
const { v4: uuidv4 } = require('uuid');

console.log('seeding 027-advertisement_sets  ');

const advertisement_sets = [
  {
    id: getObjectId('advertisement_set_1'),
    title: 'ad_set_1',
    isActive: true,
    description: 'user logging in',
    start_date: new Date('2022-05-21T21:54:34.300Z'),
    end_date: new Date('2022-05-23T21:54:34.300Z'),
    category: getObjectId('advertisement_cat_1'),
    meta: { hello: 'world' },
    advertisements: getObjectIds(['advertisement_1', 'advertisement_2']),
  },
  {
    id: getObjectId('advertisement_set_2'),
    title: 'ad_set_2',
    isActive: true,
    description: 'user logging in',
    start_date: new Date('2022-05-21T21:54:34.300Z'),
    end_date: new Date('2022-05-23T21:54:34.300Z'),
    category: getObjectId('advertisement_cat_2'),
    meta: { hello: 'world' },
    advertisements: getObjectIds(['advertisement_3', 'advertisement_1', 'advertisement_2']),
  },
  {
    id: getObjectId('advertisement_set_3'),
    title: 'ad_set_3',
    isActive: true,
    description: 'user logging in',
    start_date: new Date('2022-05-21T21:54:34.300Z'),
    end_date: new Date('2022-05-23T21:54:34.300Z'),
    category: getObjectId('advertisement_cat_3'),
    meta: { hello: 'world' },
    advertisements: getObjectIds([
      'advertisement_3',
      'advertisement_1',
      'advertisement_2',
      'advertisement_4',
      'advertisement_5',
    ]),
  },
];

module.exports = advertisement_sets;
