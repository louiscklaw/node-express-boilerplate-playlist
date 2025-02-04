const { getObjectId, getObjectIds } = require('../../helpers/index');

console.log('seeding 017-categories  ');

const categories = [
  {
    id: getObjectId('trendingProduct_1'),
    product: getObjectId('product_4'),
    orderCount: 59,
  },
  {
    id: getObjectId('trendingProduct_2'),
    product: getObjectId('product_69'),
    orderCount: 53,
  },
  {
    id: getObjectId('trendingProduct_3'),
    product: getObjectId('product_2'),
    orderCount: 52,
  },
  {
    id: getObjectId('trendingProduct_4'),
    product: getObjectId('product_19'),
    orderCount: 49,
  },
  {
    id: getObjectId('trendingProduct_5'),
    product: getObjectId('product_52'),
    orderCount: 49,
  },
  {
    id: getObjectId('trendingProduct_6'),
    product: getObjectId('product_27'),
    orderCount: 48,
  },
  {
    id: getObjectId('trendingProduct_7'),
    product: getObjectId('product_57'),
    orderCount: 47,
  },
  {
    id: getObjectId('trendingProduct_8'),
    product: getObjectId('product_46'),
    orderCount: 46,
  },
  {
    id: getObjectId('trendingProduct_9'),
    product: getObjectId('product_26'),
    orderCount: 45,
  },
  {
    id: getObjectId('trendingProduct_10'),
    product: getObjectId('product_38'),
    orderCount: 45,
  },
  {
    id: getObjectId('trendingProduct_11'),
    product: getObjectId('product_3'),
    orderCount: 44,
  },
  {
    id: getObjectId('trendingProduct_12'),
    product: getObjectId('product_13'),
    orderCount: 44,
  },
  {
    id: getObjectId('trendingProduct_13'),
    product: getObjectId('product_23'),
    orderCount: 44,
  },
  {
    id: getObjectId('trendingProduct_14'),
    product: getObjectId('product_67'),
    orderCount: 44,
  },
  {
    id: getObjectId('trendingProduct_15'),
    product: getObjectId('product_18'),
    orderCount: 43,
  },
  {
    id: getObjectId('trendingProduct_16'),
    product: getObjectId('product_68'),
    orderCount: 43,
  },
  {
    id: getObjectId('trendingProduct_17'),
    product: getObjectId('product_74'),
    orderCount: 43,
  },
  {
    id: getObjectId('trendingProduct_18'),
    product: getObjectId('product_11'),
    orderCount: 42,
  },
  {
    id: getObjectId('trendingProduct_19'),
    product: getObjectId('product_33'),
    orderCount: 42,
  },
  {
    id: getObjectId('trendingProduct_20'),
    product: getObjectId('product_29'),
    orderCount: 41,
  },
  {
    id: getObjectId('trendingProduct_21'),
    product: getObjectId('product_49'),
    orderCount: 41,
  },
  {
    id: getObjectId('trendingProduct_22'),
    product: getObjectId('product_73'),
    orderCount: 41,
  },
  {
    id: getObjectId('trendingProduct_23'),
    product: getObjectId('product_20'),
    orderCount: 40,
  },
  {
    id: getObjectId('trendingProduct_24'),
    product: getObjectId('product_40'),
    orderCount: 40,
  },
  {
    id: getObjectId('trendingProduct_25'),
    product: getObjectId('product_58'),
    orderCount: 40,
  },
  {
    id: getObjectId('trendingProduct_26'),
    product: getObjectId('product_15'),
    orderCount: 39,
  },
  {
    id: getObjectId('trendingProduct_27'),
    product: getObjectId('product_16'),
    orderCount: 39,
  },
  {
    id: getObjectId('trendingProduct_28'),
    product: getObjectId('product_24'),
    orderCount: 39,
  },
  {
    id: getObjectId('trendingProduct_29'),
    product: getObjectId('product_30'),
    orderCount: 39,
  },
  {
    id: getObjectId('trendingProduct_30'),
    product: getObjectId('product_66'),
    orderCount: 39,
  },
  {
    id: getObjectId('trendingProduct_31'),
    product: getObjectId('product_70'),
    orderCount: 39,
  },
  {
    id: getObjectId('trendingProduct_32'),
    product: getObjectId('product_72'),
    orderCount: 39,
  },
  {
    id: getObjectId('trendingProduct_33'),
    product: getObjectId('product_48'),
    orderCount: 38,
  },
  {
    id: getObjectId('trendingProduct_34'),
    product: getObjectId('product_54'),
    orderCount: 38,
  },
  {
    id: getObjectId('trendingProduct_35'),
    product: getObjectId('product_63'),
    orderCount: 38,
  },
  {
    id: getObjectId('trendingProduct_36'),
    product: getObjectId('product_75'),
    orderCount: 38,
  },
  {
    id: getObjectId('trendingProduct_37'),
    product: getObjectId('product_1'),
    orderCount: 37,
  },
  {
    id: getObjectId('trendingProduct_38'),
    product: getObjectId('product_8'),
    orderCount: 37,
  },
  {
    id: getObjectId('trendingProduct_39'),
    product: getObjectId('product_39'),
    orderCount: 37,
  },
  {
    id: getObjectId('trendingProduct_40'),
    product: getObjectId('product_42'),
    orderCount: 37,
  },
  {
    id: getObjectId('trendingProduct_41'),
    product: getObjectId('product_43'),
    orderCount: 37,
  },
  {
    id: getObjectId('trendingProduct_42'),
    product: getObjectId('product_55'),
    orderCount: 37,
  },
  {
    id: getObjectId('trendingProduct_43'),
    product: getObjectId('product_64'),
    orderCount: 37,
  },
  {
    id: getObjectId('trendingProduct_44'),
    product: getObjectId('product_65'),
    orderCount: 37,
  },
  {
    id: getObjectId('trendingProduct_45'),
    product: getObjectId('product_9'),
    orderCount: 36,
  },
  {
    id: getObjectId('trendingProduct_46'),
    product: getObjectId('product_21'),
    orderCount: 36,
  },
  {
    id: getObjectId('trendingProduct_47'),
    product: getObjectId('product_60'),
    orderCount: 36,
  },
  {
    id: getObjectId('trendingProduct_48'),
    product: getObjectId('product_7'),
    orderCount: 35,
  },
  {
    id: getObjectId('trendingProduct_49'),
    product: getObjectId('product_14'),
    orderCount: 35,
  },
  {
    id: getObjectId('trendingProduct_50'),
    product: getObjectId('product_31'),
    orderCount: 35,
  },
  {
    id: getObjectId('trendingProduct_51'),
    product: getObjectId('product_47'),
    orderCount: 35,
  },
  {
    id: getObjectId('trendingProduct_52'),
    product: getObjectId('product_51'),
    orderCount: 35,
  },
  {
    id: getObjectId('trendingProduct_53'),
    product: getObjectId('product_56'),
    orderCount: 35,
  },
  {
    id: getObjectId('trendingProduct_54'),
    product: getObjectId('product_76'),
    orderCount: 35,
  },
  {
    id: getObjectId('trendingProduct_55'),
    product: getObjectId('product_77'),
    orderCount: 35,
  },
  {
    id: getObjectId('trendingProduct_56'),
    product: getObjectId('product_10'),
    orderCount: 34,
  },
  {
    id: getObjectId('trendingProduct_57'),
    product: getObjectId('product_22'),
    orderCount: 34,
  },
  {
    id: getObjectId('trendingProduct_58'),
    product: getObjectId('product_37'),
    orderCount: 34,
  },
  {
    id: getObjectId('trendingProduct_59'),
    product: getObjectId('product_53'),
    orderCount: 34,
  },
  {
    id: getObjectId('trendingProduct_60'),
    product: getObjectId('product_59'),
    orderCount: 34,
  },
  {
    id: getObjectId('trendingProduct_61'),
    product: getObjectId('product_61'),
    orderCount: 34,
  },
  {
    id: getObjectId('trendingProduct_62'),
    product: getObjectId('product_5'),
    orderCount: 33,
  },
  {
    id: getObjectId('trendingProduct_63'),
    product: getObjectId('product_25'),
    orderCount: 33,
  },
  {
    id: getObjectId('trendingProduct_64'),
    product: getObjectId('product_36'),
    orderCount: 33,
  },
  {
    id: getObjectId('trendingProduct_65'),
    product: getObjectId('product_45'),
    orderCount: 33,
  },
  {
    id: getObjectId('trendingProduct_66'),
    product: getObjectId('product_71'),
    orderCount: 32,
  },
  {
    id: getObjectId('trendingProduct_67'),
    product: getObjectId('product_32'),
    orderCount: 31,
  },
  {
    id: getObjectId('trendingProduct_68'),
    product: getObjectId('product_6'),
    orderCount: 30,
  },
  {
    id: getObjectId('trendingProduct_69'),
    product: getObjectId('product_34'),
    orderCount: 30,
  },
  {
    id: getObjectId('trendingProduct_70'),
    product: getObjectId('product_41'),
    orderCount: 30,
  },
  {
    id: getObjectId('trendingProduct_71'),
    product: getObjectId('product_50'),
    orderCount: 30,
  },
  {
    id: getObjectId('trendingProduct_72'),
    product: getObjectId('product_12'),
    orderCount: 29,
  },
  {
    id: getObjectId('trendingProduct_73'),
    product: getObjectId('product_28'),
    orderCount: 29,
  },
  {
    id: getObjectId('trendingProduct_74'),
    product: getObjectId('product_78'),
    orderCount: 29,
  },
  {
    id: getObjectId('trendingProduct_75'),
    product: getObjectId('product_17'),
    orderCount: 28,
  },
  {
    id: getObjectId('trendingProduct_76'),
    product: getObjectId('product_35'),
    orderCount: 28,
  },
  {
    id: getObjectId('trendingProduct_77'),
    product: getObjectId('product_44'),
    orderCount: 28,
  },
  {
    id: getObjectId('trendingProduct_78'),
    product: getObjectId('product_62'),
    orderCount: 28,
  },
];

module.exports = categories;
