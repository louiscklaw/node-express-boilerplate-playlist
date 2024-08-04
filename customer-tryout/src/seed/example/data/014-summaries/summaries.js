const { getObjectId, getObjectIds } = require('../../helpers/index');

console.log('seeding 014-summaries  ');

const summaries = [
  {
    id: getObjectId('sales'),
    sales: 71465,
    percent: 32,
    target: 225000,
  },
];

module.exports = summaries;
