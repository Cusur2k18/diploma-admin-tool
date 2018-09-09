'use strict';
const app = require('../../server');
const Managers = app.models.Managers;
const Account = app.models.Account;
const Role = app.models.Role;
const RoleMapping = app.models.RoleMapping;
const { waterfall } = require('async')

function CreateUser() {
  waterfall([ 
    (next) => {
      Role.findOne({where: {name: 'admin'}}, next)
    },
    (role, next) => {
      Account.create({
        name: 'M-Acc-${new Date().getTime()}'
      }, (error, acc) => {
        if(error) throw new Error(error)
        next(null, role, acc);
      })
    },
    (role, acc, next) => {
      console.log('TCL: CreateUser -> acc', acc);
      Managers.create({
        firstName: 'Super',
        lastName: 'Duper',
        mLastName: 'Administrator',
        username: 'admintest',
        email: 'test@test.com',
        password: 'testing123',
        accountId: acc.id
      }, (err, user) => next(null, role, user))
    },
    (role, user, next) => {
        console.log('TCL: CreateUser -> user', user);
        role.principals.create({
          principalType: RoleMapping.USER,
          principalId: 1
        }, next)
    }
  ], (err, result) => {
    if ( err ) throw err 
    console.log('Succesfully created an admin user');
    process.exit(0)
  })
}

CreateUser();
