const { getObjectId, getObjectIds } = require('../../helpers/index');

console.log('seeding 026-advertisement_cats  ');

const advertisement_cats = [
  {
    id: getObjectId('advertisement_cat_1'),
    title: '🍟 Starters',
    isActive: true,
    images: getObjectIds(['test_jpg', 'test_png', 'test_svg']),
  },
  {
    id: getObjectId('advertisement_cat_2'),
    title: '🍝 Pastas',
    isActive: true,
    images: getObjectIds(['test_jpg', 'test_png', 'test_svg']),
  },
  {
    id: getObjectId('advertisement_cat_3'),
    title: '🍕 Pizzas',
    isActive: true,
    images: getObjectIds(['test_jpg', 'test_png', 'test_svg']),
  },
];

module.exports = advertisement_cats;
