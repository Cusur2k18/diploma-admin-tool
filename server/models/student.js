'use strict';

const StudentService = require('../shared/services/student-service');

module.exports = function(Student) {

  Student.afterRemote('login', StudentService.validateCredentials);

};
