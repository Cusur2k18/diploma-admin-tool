'use strict';

class BaseApiService {

  static get model() {
    throw new Error('You must implement getModel method in child class');
  }

}

module.exports = BaseApiService;