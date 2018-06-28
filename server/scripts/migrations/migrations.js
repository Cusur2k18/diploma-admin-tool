const server = require('../../server');
const ds = server.dataSources.cusurdb;
const tables = ['User', 'Student', 'Staff', 'Managers', 'Event', 'Enrollment', 'AccessToken',
                'ACL', 'RoleMapping', 'Role', 'Account'];

function Migrate() {
  ds.automigrate(tables, function(er) {
    if (er) throw er;
    console.log('Loopback tables [' + tables + '] created in ', ds.adapter.name);
    ds.disconnect();
  });
}

Migrate();

module.exports = Migrate;
