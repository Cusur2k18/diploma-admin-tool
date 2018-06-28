'use strict';

const CommonService = require('../shared/services/common-service')

module.exports = function(Managers) {
  
  Managers.beforeRemote('create', CommonService.createParentAccount)
};
