'use strict';

const CommonService = require('../shared/services/common-service')

module.exports = function(Staff) {

  Staff.beforeRemote('create', CommonService.createParentAccount)

};
