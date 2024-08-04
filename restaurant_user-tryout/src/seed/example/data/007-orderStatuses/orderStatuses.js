const { getObjectId, getObjectIds } = require('../../helpers/index');

console.log('seeding 007-order_status  ');

const order_status = [
  {
    id: getObjectId('order_status_1'),
    text: 'Pending',
  },
  {
    id: getObjectId('order_status_2'),
    text: 'Ready',
  },
  {
    id: getObjectId('order_status_3'),
    text: 'On The Way',
  },
  {
    id: getObjectId('order_status_4'),
    text: 'Delivered',
  },
  {
    id: getObjectId('order_status_5'),
    text: 'Cancelled',
  },
  {
    id: getObjectId('order_accepted'),
    text: 'Accepted',
  },
  {
    id: getObjectId('order_rejected'),
    text: 'Reject',
  },
];

module.exports = order_status;
