const fs = require('fs');
const data = fs.readFileSync('./stores.json');
const stores = JSON.parse(data);

const storeNew = stores.map((store) => {
  let id = store.id;
  store.id = `getObjectId('store_${id}')`;

  let product_ids = store.products.map((p) => p.id);
  store.products = `getObjectIds([${product_ids.map((p) => `"product_${p}"`).join(',')}])`;

  return store;
});

fs.writeFileSync('store_new.json', JSON.stringify(storeNew, null, 2));

let dataNew = fs.readFileSync('./store_new.json', 'utf8');
dataNew = dataNew.replace(/"getObjectId\('(\w+)_(\d+)'\)"/g, (match, p1, p2) => `getObjectId("${p1}_${p2}")`);
dataNew = dataNew.replace(/"getObjectIds\((.+)\)"/g, (match, p1) => {
  let result = `getObjectIds(${p1})`.replace(/\\"/g, '"');
  return result;
});

fs.writeFileSync('store_new1.txt', dataNew);
