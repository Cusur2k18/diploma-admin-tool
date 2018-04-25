'use strict';

class BaseApiService {

  static get model() {
    throw new Error('You must implement getModel method in child class');
  }

  static getByUUID(uuid) {
    return this.model.findOne({
      where: {
        uuid: uuid
      }
    });
  }

}

module.exports = BaseApiService;