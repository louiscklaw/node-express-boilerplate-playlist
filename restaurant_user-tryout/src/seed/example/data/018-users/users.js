const { getObjectId, getObjectIds } = require('../../helpers/index');
const bcrypt = require('bcryptjs');

console.log('seeding 018-users ');

const salt = bcrypt.genSaltSync(8);
const hashedPassword = (password) => bcrypt.hashSync(password, salt);

const users = [
  {
    id: getObjectId('sys_user'),
    name: 'system default user',
    email: 'system_default_user@example.com',
    password: 'Aa123456',
    role: 'user',
    avatar: '',
    isEmailVerified: true,
  },
  {
    id: getObjectId('user_1'),
    name: 'r_user1',
    email: 'r_user1@example.com',
    password: hashedPassword('password1'),
    role: 'user',
    avatar: 'https://i.pravatar.cc/150',
    isEmailVerified: true,
  },
  {
    id: getObjectId('user_2'),
    name: 'r_user2',
    email: 'r_user2@example.com',
    password: hashedPassword('password1'),
    role: 'user',
    avatar: 'https://i.pravatar.cc/150',
    isEmailVerified: true,
  },
  {
    id: getObjectId('admin_1'),
    name: 'r_admin',
    email: 'fake@example.com',
    password: hashedPassword('password1'),
    // configure using src/config/roles.js
    role: 'fake_admin',
    avatar: 'https://i.pravatar.cc/150',
    isEmailVerified: true,
  },
];

module.exports = users;
