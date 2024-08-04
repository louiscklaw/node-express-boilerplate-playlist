const { getObjectId, getObjectIds } = require('../../helpers/index');

console.log('seeding 001-courier_status  ');

const courier_status = [
  {
    id: getObjectId('courier_status_1'),
    text: 'Available',
  },
  {
    id: getObjectId('courier_status_2'),
    text: 'Offline',
  },
  {
    id: getObjectId('courier_status_3'),
    text: 'On delivery',
  },
];

module.exports = courier_status;
