'use strict';

const app = require('../../server');

class CommonService {

  /**
   *
   * @description This method executes on beforeRemote('create') and creates the parent record of the newly entity
   * @static
   * @param {*} ctx
   * @param {*} next
   * @memberof BaseApiService
   */
  static createParentAccount(ctx, next) {

    const AccountModel = app.models.Account;

    const account = {
      name: `R-Acc-${new Date().getTime()}`
    }

    AccountModel.create(account, (err, instance) => {

      if (err) return next(new Error(err))

      ctx.req.body.accountId = instance.id
      next();
    })
  }

}

module.exports = CommonService;