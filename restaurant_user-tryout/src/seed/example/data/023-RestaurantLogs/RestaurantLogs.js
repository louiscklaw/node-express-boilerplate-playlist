const { getObjectId, getObjectIds } = require('../../helpers/index');

console.log('seeding 023-RestaurantLogs  ');

const RestaurantLogs = [
  {
    id: getObjectId('RestaurantLog_1'),
    date: new Date('2022-05-31T21:54:34.300Z'),
    description: 'user logging in',
    log_type: 'INFO',
    user: getObjectId('user_1'),
    meta: { hello: 'world' },
  },
  {
    id: getObjectId('RestaurantLog_2'),
    date: new Date('2022-05-30T21:54:34.300Z'),
    description: 'user logging in',
    log_type: 'ERROR',
    user: getObjectId('user_2'),
    meta: { hello: 'world' },
  },
  {
    id: getObjectId('RestaurantLog_3'),
    date: new Date('2022-05-29T21:54:34.300Z'),
    description: 'user logging in',
    log_type: 'WARNING',
    user: getObjectId('admin_1'),
  },
];

module.exports = RestaurantLogs;
