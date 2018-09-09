'use strict';
const app = require('../../server');
const Role = app.models.Role;

function CreateRoles() {
  Role.create([
    {
      name: 'admin',
      description: 'Admin Rol'
    },
    {
      name: 'student',
      description: 'Student Rol'
    }
  ], (err, role) => {
    if (err) throw (err)
    console.log('Roles Created Successfully');
    process.exit(0)
  })
}

CreateRoles();
