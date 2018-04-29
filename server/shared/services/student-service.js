'use strict';

const app = require('../../server');
const BaseApiService = require('./base-api-service');
const async = require('async');

class StudentService extends BaseApiService {

  /**
   * 
   * @description Model instance of Student
   * @readonly
   * @static
   * @memberof StudentService
   */
  static get model() {

    return app.models.Student;
  }
  /**
   * 
   * @description This method sign in the users by first checking in the udg database
   *              then try to find it or create a student
   * @static
   * @param {any} studentCode 
   * @param {any} nip 
   * @param {any} cb 
   * @memberof StudentService
   */
  static signin(studentCode, nip, cb) {
    const udgalumnoModel = app.models.DatosAlumno;

    
    /** 
     * 1.- VALIDATE DATA WITH UDG DATABASE
     * 2.- FIND OR CREATE THE STUDENT IN OUR DB BASED ON THE STUDENT CODE
     * 3.- LOGIN THE USER WE CREATED OR FOUND
    */
    async.waterfall([
      (callback) => { 
        udgalumnoModel.datosAlumno({pCodigo: studentCode, pNip: nip }, (err, response) => {

          callback(err, Object.assign({}, JSON.parse(response.return), {nip: nip}));
        });
      },
      (data, callback) => {
        console.log('data: ', data);

        if (data.error) return callback(new Error(data.error));

        let names = data.nombre.split(' '), 
            studentModel = {
              studentCode: data.codigo,
              career: data.carrera_desc,
              careerGrade: data.estatus_desc,
              firstName: names[2],
              lastName: names[0],
              mLastName: names[1],
              username: data.codigo,
              password: data.nip
            }
        console.log('studentModel: ', studentModel);

        this.model.findOrCreate(
          { where: {studentCode: data.codigo} }, 
          studentModel, 
          (err, instance, created) => {
            const student = instance.toJSON();

            if (err) return callback(new Error(err));
            callback(null, Object.assign({}, student, {nip: data.nip}))
          });
      },
      (student, callback) => {
        this.model.login({username: student.studentCode, password: student.nip}, 'user', (err, token) => {
          if (err) return callback(new Error(err));
          callback(null, token);
        })
      }
    ], cb);
  }

}

module.exports = StudentService;