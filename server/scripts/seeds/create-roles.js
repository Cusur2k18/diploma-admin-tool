'use strict';
const app = require('../../server');
const Role = app.models.Role;

function CreateRoles() {
  Promise.all([
    Role.create({
      name: 'admin',
      description: 'Admin Rol'
    }, (err, role) => {
      if (err) throw (err)
    })
    ,
    Role.create({
      name: 'student',
      description: 'Student Rol'
    }, (err, role) => {
        if (err) throw (err)
    })
  ]).then( result => {
    console.log('Succesfully created Rol: Admin & Student');
  })
  .catch( error => {
    console.log('error seeding db: ', error);
  })
}

CreateRoles();

module.exports = CreateRoles;
