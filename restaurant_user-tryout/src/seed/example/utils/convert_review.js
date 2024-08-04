const fs = require('fs');
const data = fs.readFileSync('./reviews.json');
const reviews = JSON.parse(data);

const reviewNew = reviews.map((review) => {
  let id = review.id;
  review.id = `getObjectId('review_${id}')`;

  let order_id = review.order.id;
  review.order = `getObjectId('order_${order_id}')`;

  let user_id = review.user.id;
  review.user = `getObjectId('user_${user_id}')`;

  // let product_ids = review.products.map((p) => p.id);
  // review.products = `getObjectIds([${product_ids.map((p) => `"product_${p}"`).join(',')}])`;

  return review;
});

fs.writeFileSync('review_new.json', JSON.stringify(reviewNew, null, 2));

let dataNew = fs.readFileSync('./review_new.json', 'utf8');
dataNew = dataNew.replace(/"getObjectId\('(\w+)_(\d+)'\)"/g, (match, p1, p2) => `getObjectId("${p1}_${p2}")`);
dataNew = dataNew.replace(/"getObjectIds\((.+)\)"/g, (match, p1) => {
  let result = `getObjectIds(${p1})`.replace(/\\"/g, '"');
  return result;
});

fs.writeFileSync('review_new1.txt', dataNew);
