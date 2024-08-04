const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createRestaurantUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    role: Joi.string().required().valid('restaurant_user', 'admin'),
  }),
};

const getRestaurantUsers = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getRestaurantUser = {
  params: Joi.object().keys({
    restaurantUserId: Joi.string().custom(objectId),
  }),
};

const updateRestaurantUser = {
  params: Joi.object().keys({
    restaurantUserId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(password),
      name: Joi.string(),
    })
    .min(1),
};

const deleteRestaurantUser = {
  params: Joi.object().keys({
    restaurantUserId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createRestaurantUser,
  getRestaurantUsers,
  getRestaurantUser,
  updateRestaurantUser,
  deleteRestaurantUser,
};
