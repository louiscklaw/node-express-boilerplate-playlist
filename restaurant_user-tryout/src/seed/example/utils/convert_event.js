const fs = require('fs');
const data = fs.readFileSync('./orders.json');
const order_json = JSON.parse(data);

let event_count_up = 1;
const event_list = [];
order_json.forEach((order) => {
  order.events.forEach((e) => {
    event_list.push({
      id: `getObjectId('event_${event_count_up}')`,
      date: new Date('2022-05-31T21:54:34.300Z'),
      status: e.status,
    });
    event_count_up++;
  });

  // let id = event.id;
  // event.id = `getObjectId('event_${id}')`;

  // let user_id = event.user.id;
  // // relocate user_id to customer_id
  // let customer_id = user_id;
  // event.user = `getObjectId('user_${user_id}')`;
  // event.customer = `getObjectId('customer_${customer_id}')`;

  // let store_id = event.store.id;
  // event.store = `getObjectId('store_${store_id}')`;

  // let status_id = event.status.id;
  // event.status = `getObjectId('event_status_${status_id}')`;
});

fs.writeFileSync('event_new.json', JSON.stringify(event_list, null, 2));

// let dataNew = fs.readFileSync('./event_new.json', 'utf8');
// dataNew = dataNew.replace(/"getObjectId\('(\w+)_(\d+)'\)"/g, (match, p1, p2) => `getObjectId("${p1}_${p2}")`);
// dataNew = dataNew.replace(/"getObjectIds\((.+)\)"/g, (match, p1) => {
//   let result = `getObjectIds(${p1})`.replace(/\\"/g, '"');
//   return result;
// });

// fs.writeFileSync('event_new1.txt', dataNew);
