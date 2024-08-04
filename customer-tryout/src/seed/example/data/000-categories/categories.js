const { getObjectId, getObjectIds } = require('../../helpers/index');

console.log('seeding 000-categories  ');

const categories = [
  {
    id: getObjectId('category_1'),
    title: '🍟 Starters',
    images: getObjectIds(['test_jpg', 'test_png', 'test_svg']),
    isActive: true,
  },
  {
    id: getObjectId('category_2'),
    title: '🍝 Pastas',
    images: getObjectIds(['test_jpg', 'test_png', 'test_svg']),
    isActive: true,
  },
  {
    id: getObjectId('category_3'),
    title: '🍕 Pizzas',
    images: getObjectIds(['test_jpg', 'test_png', 'test_svg']),
    isActive: true,
  },
  {
    id: getObjectId('category_4'),
    title: '🍔 Burgers',
    images: getObjectIds(['test_jpg', 'test_png', 'test_svg']),
    isActive: true,
  },
  {
    id: getObjectId('category_5'),
    title: '🍩 Deserts',
    images: getObjectIds(['test_jpg', 'test_png', 'test_svg']),
    isActive: true,
  },
  {
    id: getObjectId('category_6'),
    title: '🥗 Salads',
    images: getObjectIds(['test_jpg', 'test_png', 'test_svg']),
    isActive: true,
  },
  {
    id: getObjectId('category_7'),
    title: '🍖 Grilled Meat',
    isActive: true,
  },
  {
    id: getObjectId('category_8'),
    title: '🍗 Chicken',
    isActive: true,
  },
  {
    id: getObjectId('category_9'),
    title: '🥤 Cold Drinks',
    isActive: true,
  },
  {
    id: getObjectId('category_10'),
    title: '☕ Hot Drinks',
    isActive: true,
  },
];

module.exports = categories;
