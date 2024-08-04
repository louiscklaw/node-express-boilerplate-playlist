const httpStatus = require('http-status');
const { RestaurantUser } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a restaurant_user
 * @param {Object} restaurant_userBody
 * @returns {Promise<RestaurantUser>}
 */
const createRestaurantUser = async (restaurant_userBody) => {
  if (await RestaurantUser.isEmailTaken(restaurant_userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  return RestaurantUser.create(restaurant_userBody);
};

/**
 * Query for restaurant_users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryRestaurantUsers = async (filter, options) => {
  const restaurant_users = await RestaurantUser.paginate(filter, options);
  return restaurant_users;
};

/**
 * Get restaurant_user by id
 * @param {ObjectId} id
 * @returns {Promise<RestaurantUser>}
 */
const getRestaurantUserById = async (id) => {
  return RestaurantUser.findById(id);
};

/**
 * Get restaurant_user by email
 * @param {string} email
 * @returns {Promise<RestaurantUser>}
 */
const getRestaurantUserByEmail = async (email) => {
  return RestaurantUser.findOne({ email });
};

/**
 * Update restaurant_user by id
 * @param {ObjectId} restaurant_userId
 * @param {Object} updateBody
 * @returns {Promise<RestaurantUser>}
 */
const updateRestaurantUserById = async (restaurant_userId, updateBody) => {
  const restaurant_user = await getRestaurantUserById(restaurant_userId);
  if (!restaurant_user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Restaurant user not found');
  }
  if (updateBody.email && (await RestaurantUser.isEmailTaken(updateBody.email, restaurant_userId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  Object.assign(restaurant_user, updateBody);
  await restaurant_user.save();
  return restaurant_user;
};

/**
 * Delete restaurant_user by id
 * @param {ObjectId} restaurant_userId
 * @returns {Promise<RestaurantUser>}
 */
const deleteRestaurantUserById = async (restaurant_userId) => {
  const restaurant_user = await getRestaurantUserById(restaurant_userId);
  if (!restaurant_user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Restaurant user not found');
  }
  await restaurant_user.remove();
  return restaurant_user;
};

module.exports = {
  createRestaurantUser,
  queryRestaurantUsers,
  getRestaurantUserById,
  getRestaurantUserByEmail,
  updateRestaurantUserById,
  deleteRestaurantUserById,
};
