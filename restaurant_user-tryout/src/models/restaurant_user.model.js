const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const restaurantUserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Invalid email');
        }
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      validate(value) {
        if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
          throw new Error('Password must contain at least one letter and one number');
        }
      },
      private: true, // used by the toJSON plugin
    },
    role: {
      type: String,
      enum: roles,
      default: 'restaurant_user',
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
restaurantUserSchema.plugin(toJSON);
restaurantUserSchema.plugin(paginate);

/**
 * Check if email is taken
 * @param {string} email - The restaurant_user's email
 * @param {ObjectId} [excludeRestaurantUserId] - The id of the restaurant_user to be excluded
 * @returns {Promise<boolean>}
 */
restaurantUserSchema.statics.isEmailTaken = async function (email, excludeRestaurantUserId) {
  const restaurantUser = await this.findOne({ email, _id: { $ne: excludeRestaurantUserId } });
  return !!restaurantUser;
};

/**
 * Check if password matches the restaurant_user's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
restaurantUserSchema.methods.isPasswordMatch = async function (password) {
  const restaurantUser = this;
  return bcrypt.compare(password, restaurantUser.password);
};

restaurantUserSchema.pre('save', async function (next) {
  const restaurantUser = this;
  if (restaurantUser.isModified('password')) {
    restaurantUser.password = await bcrypt.hash(restaurantUser.password, 8);
  }
  next();
});

/**
 * @typedef RestaurantUser
 */
const RestaurantUser = mongoose.model('RestaurantUser', restaurantUserSchema, 'restaurantUsers');

module.exports = RestaurantUser;
