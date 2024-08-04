const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const restaurantUserValidation = require('../../validations/restaurant_user.validation');
const restaurantUserController = require('../../controllers/restaurant_user.controller');

const router = express.Router();

router
  .route('/')
  .post(
    auth('manageRestaurantUsers'),
    validate(restaurantUserValidation.createRestaurantUser),
    restaurantUserController.createRestaurantUser
  )
  .get(
    auth('getRestaurantUsers'),
    validate(restaurantUserValidation.getRestaurantUsers),
    restaurantUserController.getRestaurantUsers
  );

router
  .route('/:restaurantUserId')
  .get(
    auth('getRestaurantUsers'),
    validate(restaurantUserValidation.getRestaurantUser),
    restaurantUserController.getRestaurantUser
  )
  .patch(
    auth('manageRestaurantUsers'),
    validate(restaurantUserValidation.updateRestaurantUser),
    restaurantUserController.updateRestaurantUser
  )
  .delete(
    auth('manageRestaurantUsers'),
    validate(restaurantUserValidation.deleteRestaurantUser),
    restaurantUserController.deleteRestaurantUser
  );

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: RestaurantUsers
 *   description: RestaurantUser management and retrieval
 */

/**
 * @swagger
 * /restaurant-users:
 *   post:
 *     summary: Create a restaurant user
 *     description: Only admins can create other restaurant users.
 *     tags: [RestaurantUsers]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *               - email
 *               - password
 *               - role
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *                 description: must be unique
 *               password:
 *                 type: string
 *                 format: password
 *                 minLength: 8
 *                 description: At least one number and one letter
 *               role:
 *                  type: string
 *                  enum: [restaurant_user, admin]
 *             example:
 *               name: fake name
 *               email: fake@example.com
 *               password: password1
 *               role: restaurant_user
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/RestaurantUser'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all restaurant_users
 *     description: Only admins can retrieve all restaurant_users.
 *     tags: [RestaurantUsers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: RestaurantUser name
 *       - in: query
 *         name: role
 *         schema:
 *           type: string
 *         description: RestaurantUser role
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: sort by query in the form of field:desc/asc (ex. name:asc)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of restaurant_users
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/RestaurantUser'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /restaurant_users/{id}:
 *   get:
 *     summary: Get a restaurant_user
 *     description: Logged in restaurant_users can fetch only their own information. Only admins can fetch other restaurant_users.
 *     tags: [RestaurantUsers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: RestaurantUser id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/RestaurantUser'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a restaurant_user
 *     description: Logged in restaurant_users can only update their own information. Only admins can update other restaurant_users.
 *     tags: [RestaurantUsers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: RestaurantUser id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *                 description: must be unique
 *               password:
 *                 type: string
 *                 format: password
 *                 minLength: 8
 *                 description: At least one number and one letter
 *             example:
 *               name: fake name
 *               email: fake@example.com
 *               password: password1
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/RestaurantUser'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a restaurant_user
 *     description: Logged in restaurant_users can delete only themselves. Only admins can delete other restaurant_users.
 *     tags: [RestaurantUsers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: RestaurantUser id
 *     responses:
 *       "200":
 *         description: No content
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
