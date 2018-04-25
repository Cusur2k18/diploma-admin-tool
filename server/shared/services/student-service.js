'use strict';

const app = require('../../server');
const BaseApiService = require('./base-api-service');

class StudentService extends BaseApiService {
  static get model() {
    return app.models.Student;
  }

  static validateCredentials(ctx, _, next) {
    let studentCode = ctx.req.body.username;
    let nip = ctx.req.body.password;
    const udgalumno = app.models.DatosAlumno
    udgalumno.datosAlumno({pCodigo: studentCode, pNip: nip }, function (err, response) {
      if (err) return next(new Error(err));

      var result = response;
      // cb(err, result);
      console.log(result);
      ctx.res.studentData = response;
      return next(err, response);
    });
  }

}

module.exports = StudentService;