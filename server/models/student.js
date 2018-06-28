'use strict';

const StudentService = require('../shared/services/student-service');
const CommonService = require('../shared/services/common-service')

module.exports = function(Student) {

  /**
   * @description Remote method to sign in users
   * @param {*} studentCode 
   * @param {*} nip 
   * @param {*} cb 
   */
  Student.signin = function(studentCode, nip, cb) {

    StudentService.signin(studentCode, nip, cb)
  }

  Student.remoteMethod('signin', {
    accepts: [
      {arg: 'studentCode', type: 'string'},
      {arg: 'nip', type: 'string'}
    ],
    returns: {arg: 'response', type: 'object'},
    description: 'Sign in users, use this instead of \'/Login\' ',
    http: {
      status: 200,
      errorStatus: 412
    }
  });

};
