const Migrate = require('./migrations/migrations');
const CreateRoles = require('./seeds/create-roles');
const CreateUser = require('./seeds/create-users');


// Migrate all the tables
Migrate()

// Create the basic roles
CreateRoles()

// Create an admin user
CreateUser();