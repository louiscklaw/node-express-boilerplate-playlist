const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { restaurantUserService } = require('../services');

const createRestaurantUser = catchAsync(async (req, res) => {
  const restaurantUser = await restaurantUserService.createRestaurantUser(req.body);
  res.status(httpStatus.CREATED).send(restaurantUser);
});

const getRestaurantUsers = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await restaurantUserService.queryRestaurantUsers(filter, options);
  res.send(result);
});

const getRestaurantUser = catchAsync(async (req, res) => {
  const restaurantUser = await restaurantUserService.getRestaurantUserById(req.params.restaurantUserId);
  if (!restaurantUser) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Restaurant user not found');
  }
  res.send(restaurantUser);
});

const updateRestaurantUser = catchAsync(async (req, res) => {
  const restaurantUser = await restaurantUserService.updateRestaurantUserById(req.params.restaurantUserId, req.body);
  res.send(restaurantUser);
});

const deleteRestaurantUser = catchAsync(async (req, res) => {
  await restaurantUserService.deleteRestaurantUserById(req.params.restaurantUserId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createRestaurantUser,
  getRestaurantUsers,
  getRestaurantUser,
  updateRestaurantUser,
  deleteRestaurantUser,
};
