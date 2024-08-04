var fs = require('fs');
var path = require('path');

const { getObjectId, getObjectIds } = require('../../helpers/index');

console.log('seeding 020-imageFiles  ');

const imageFiles = [
  {
    id: getObjectId('test_jpg'),
    percent: 100,
    size: 40088,
    status: 'done',
    type: 'image/jpeg',
    uuid: 'test_jpg_uuid',
    url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/712.jpg',
    meta: {},
    data: fs.readFileSync(path.join(__dirname, 'test_jpg.jpg')),
  },
  {
    id: getObjectId('test_png'),
    percent: 100,
    size: 40088,
    status: 'done',
    type: 'image/png',
    uuid: 'test_png_uuid',
    url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/712.jpg',
    meta: {},
    data: fs.readFileSync(path.join(__dirname, 'test_png.png')),
  },
  {
    id: getObjectId('test_svg'),
    percent: 100,
    size: 40088,
    status: 'done',
    type: 'image/svg',
    uuid: 'test_svg_uuid',
    url: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/712.jpg',
    meta: {},
    data: fs.readFileSync(path.join(__dirname, 'test_svg.svg')),
  },
  {
    id: getObjectId('test_product_jpg'),
    percent: 100,
    size: 40088,
    status: 'done',
    type: 'image/jpg',
    uuid: 'test_product_jpg',
    url: 'https://refine.ams3.cdn.digitaloceanspaces.com/finefoods/burger-4.jpg',
    meta: {},
    data: fs.readFileSync(path.join(__dirname, 'burger-4.jpg')),
  },
  {
    id: getObjectId('test_coffee_jpg'),
    percent: 100,
    size: 40088,
    status: 'done',
    type: 'image/jpg',
    uuid: 'test_coffee_jpg',
    url: 'https://refine.ams3.cdn.digitaloceanspaces.com/finefoods/coffee.jpg',
    meta: {},
    data: fs.readFileSync(path.join(__dirname, 'coffee.jpg')),
  },
  {
    id: getObjectId('test_salad_jpg'),
    percent: 100,
    size: 40088,
    status: 'done',
    type: 'image/jpg',
    uuid: 'test_salad_jpg',
    url: 'https://refine.ams3.cdn.digitaloceanspaces.com/finefoods/salad-4.jpg',
    meta: {},
    data: fs.readFileSync(path.join(__dirname, 'salad-4.jpg')),
  },
  {
    id: getObjectId('test_shrimp_jpg'),
    percent: 100,
    size: 40088,
    status: 'done',
    type: 'image/jpg',
    uuid: 'test_shrimp_jpg',
    url: 'https://refine.ams3.cdn.digitaloceanspaces.com/finefoods/shrimp.jpg',
    meta: {},
    data: fs.readFileSync(path.join(__dirname, 'shrimp.jpg')),
  },
];

module.exports = imageFiles;
