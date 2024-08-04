const { getObjectId, getObjectIds } = require('../../helpers/index');
const bcrypt = require('bcryptjs');

console.log('seeding 021-restaurantUsers ');

const salt = bcrypt.genSaltSync(8);
const hashedPassword = (password) => bcrypt.hashSync(password, salt);

const restaurantUsers = [
  {
    id: getObjectId('user_1'),
    name: 'user1',
    email: 'user1@example.com',
    password: hashedPassword('password1'),
    role: 'user',
    avatar: 'https://i.pravatar.cc/150',
    isEmailVerified: true,
  },
  {
    id: getObjectId('user_2'),
    name: 'user2',
    email: 'user2@example.com',
    password: hashedPassword('password1'),
    role: 'user',
    avatar: 'https://i.pravatar.cc/150',
    isEmailVerified: true,
  },
  {
    id: getObjectId('admin_1'),
    name: 'admin',
    email: 'fake@example.com',
    password: hashedPassword('password1'),
    role: 'admin',
    avatar: 'https://i.pravatar.cc/150',
    isEmailVerified: true,
  },
];

module.exports = restaurantUsers;
