'use strict';
const app = require('../../server');
const Managers = app.models.Managers;
const Role = app.models.Role;
const RoleMapping = app.models.RoleMapping;
const { waterfall } = require('async')

function CreateUser() {
  waterfall([ 
    (next) => {
      Role.findOne({where: {name: 'admin'}}, next)
    },
    (role, next) => {
      Managers.create({
        firstName: 'Super',
        lastName: 'Duper',
        mLastName: 'Administrator',
        username: 'admintest',
        email: 'test@test.com',
        password: 'testing123',
      }, (err, user) => next(null, role, user))
    },
    (role, user, next) => {
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

CreateUser();

module.exports = CreateUser;