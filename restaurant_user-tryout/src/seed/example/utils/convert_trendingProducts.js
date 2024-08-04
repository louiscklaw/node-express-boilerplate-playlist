const fs = require('fs');
const data = fs.readFileSync('./trendingProducts.json');
const trendingProducts = JSON.parse(data);

const trendingProductNew = trendingProducts.map((trendingProduct) => {
  let id = trendingProduct.id;
  trendingProduct.id = `getObjectId('trendingProduct_${id}')`;

  let product_id = trendingProduct.product.id;
  trendingProduct.product = `getObjectId('product_${product_id}')`;

  return trendingProduct;
});

fs.writeFileSync('trendingProduct_new.json', JSON.stringify(trendingProductNew, null, 2));

let dataNew = fs.readFileSync('./trendingProduct_new.json', 'utf8');
dataNew = dataNew.replace(/"getObjectId\('(\w+)_(\d+)'\)"/g, (match, p1, p2) => `getObjectId("${p1}_${p2}")`);
dataNew = dataNew.replace(/"getObjectIds\((.+)\)"/g, (match, p1) => {
  let result = `getObjectIds(${p1})`.replace(/\\"/g, '"');
  return result;
});

fs.writeFileSync('trendingProduct_new1.txt', dataNew);
