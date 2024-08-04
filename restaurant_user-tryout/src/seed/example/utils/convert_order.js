const fs = require('fs');
const data = fs.readFileSync('./orders.json');
const orders = JSON.parse(data);

const orderNew = orders.map((order) => {
  let id = order.id;
  order.id = `getObjectId('order_${id}')`;

  let user_id = order.user.id;
  // relocate user_id to customer_id
  let customer_id = user_id;
  order.user = `getObjectId('user_${user_id}')`;
  order.customer = `getObjectId('customer_${customer_id}')`;

  let courier_id = order.courier.id;
  order.courier = `getObjectId('courier_${courier_id}')`;

  let store_id = order.store.id;
  order.store = `getObjectId('store_${store_id}')`;

  let status_id = order.status.id;
  order.status = `getObjectId('order_status_${status_id}')`;

  let product_ids = order.products.map((p) => p.id);
  order.products = `getObjectIds([${product_ids.map((p) => `"product_${p}"`).join(',')}])`;

  return order;
});

fs.writeFileSync('order_new.json', JSON.stringify(orderNew, null, 2));

let dataNew = fs.readFileSync('./order_new.json', 'utf8');
dataNew = dataNew.replace(/"getObjectId\('(\w+)_(\d+)'\)"/g, (match, p1, p2) => `getObjectId("${p1}_${p2}")`);
dataNew = dataNew.replace(/"getObjectIds\((.+)\)"/g, (match, p1) => {
  let result = `getObjectIds(${p1})`.replace(/\\"/g, '"');
  return result;
});

fs.writeFileSync('order_new1.txt', dataNew);
