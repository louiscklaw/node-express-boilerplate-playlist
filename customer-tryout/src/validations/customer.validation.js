const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createCustomer = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    role: Joi.string().required().valid('customer', 'admin'),
  }),
};

const getCustomers = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getCustomer = {
  params: Joi.object().keys({
    customerId: Joi.string().custom(objectId),
  }),
};

const updateCustomer = {
  params: Joi.object().keys({
    customerId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(password),
      name: Joi.string(),
    })
    .min(1),
};

const deleteCustomer = {
  params: Joi.object().keys({
    customerId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createCustomer,
  getCustomers,
  getCustomer,
  updateCustomer,
  deleteCustomer,
};
