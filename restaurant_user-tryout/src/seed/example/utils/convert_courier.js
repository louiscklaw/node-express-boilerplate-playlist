const fs = require('fs');
const data = fs.readFileSync('./couriers.json');
const couriers = JSON.parse(data);

const courierNew = couriers.map((courier) => {
  let id = courier.id;
  courier.id = `getObjectId('courier_${id}')`;

  let store_id = courier.store.id;
  courier.store = `getObjectId('store_${store_id}')`;

  let vehicle_id = courier.vehicle.id;
  courier.vehicle = `getObjectId('vehicle_${vehicle_id}')`;

  let status_id = courier.status.id;
  courier.status = `getObjectId('courier_status_${status_id}')`;

  return courier;
});

fs.writeFileSync('courier_new.json', JSON.stringify(courierNew, null, 2));

let dataNew = fs.readFileSync('./courier_new.json', 'utf8');
dataNew = dataNew.replace(/"getObjectId\('(\w+)_(\d+)'\)"/g, (match, p1, p2) => `getObjectId("${p1}_${p2}")`);
dataNew = dataNew.replace(/"getObjectIds\((.+)\)"/g, (match, p1) => {
  let result = `getObjectIds(${p1})`.replace(/\\"/g, '"');
  return result;
});

fs.writeFileSync('courier_new1.txt', dataNew);
