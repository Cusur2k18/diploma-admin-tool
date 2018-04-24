'use strict';

class StudentService {

  static validateCredentials(ctx, next) {
    let studentCode = ctx.req.username;
    let nip = ctx.req.password;
    console.log('studentCode: ', studentCode);
    console.log('nip: ', nip);

    next();
  }

}

module.exports = StudentService;