const allRoles = {
  user: [],
  admin: ['getUsers', 'manageUsers'],
  fake_admin: [
    'getUsers',
    'manageUsers',
    //
    'getCustomers',
    'manageCustomers',
    //
    'getRestaurantUsers',
    'manageRestaurantUsers',
  ],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
