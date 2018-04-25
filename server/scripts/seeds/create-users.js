'use strict';
const app = require('../../server');
const Student = app.models.Student;
const Role = app.models.Role;
const RoleMapping = app.models.RoleMapping;
const { waterfall } = require('async')

function CreateUser() {
  waterfall([ 
    (next) => {
      Role.findOne({where: {name: 'student'}}, next)
    },
    (role, next) => {
      console.log('role: ', role);
      Student.create({
        username: '210732948',
        studentCode: '210732948',
        career: 'TEL',
        firstName: 'Christofer',
        lastName: 'Flores',
        email: 'test@test.com',
        password: 'fractal1',
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
    console.log('Succesfully created an student user');
  })
}

CreateUser();

module.exports = CreateUser;