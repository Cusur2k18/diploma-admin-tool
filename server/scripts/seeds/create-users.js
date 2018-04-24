'use strict';
const app = require('../../server');
const User = app.models.User;
const Role = app.models.Role;
const RoleMapping = app.models.RoleMapping;
const { waterfall } = require('async')

function CreateUser() {
  waterfall([ 
    (next) => {
      Role.findOne({where: {name: 'admin'}}, next)
    },
    (role, next) => {
      console.log('role: ', role);
      User.create({
        username: 'admin',
        email: 'admin@admin.com',
        password: 'admin123',
      }, (err, user) => next(null, role, user))
    },
    (role, user, next) => {
      console.log('user: ', user);
        role.principals.create({
          principalType: RoleMapping.USER,
          principalId: user.id
        }, next)
    }
  ], (err, result) => {
    if ( err ) throw err 
    console.log('Succesfully created an admin user');
  })
}

module.exports = CreateUser;