const { getObjectId, getObjectIds } = require('../../helpers/index');

console.log('seeding 024-events  ');

const events = [
  {
    id: getObjectId('event_1'),
    date: new Date('2022-05-31T21:54:34.300Z'),
    status: 'Pending',
  },
  {
    id: getObjectId('event_2'),
    date: new Date('2024-07-02T12:58:49.324Z'),
    status: 'Ready',
  },
  {
    id: getObjectId('event_3'),
    date: new Date('2024-07-02T12:59:49.324Z'),
    status: 'On The Way',
  },
  {
    id: getObjectId('event_4'),
    date: new Date('2024-07-02T13:09:49.324Z'),
    status: 'Cancelled',
  },
];

module.exports = events;
