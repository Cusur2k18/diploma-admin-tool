
'use strict';
var server = require('../../server/server');

module.exports = function(WSEscolarWSEscolarPortBinding) {

  var soapDataSource = server.datasources.udg;
  var WSEscolarWSEscolarPortBinding;

  soapDataSource.once('connected', function () {
    // Create the model
    WSEscolarWSEscolarPortBinding = soapDataSource.createModel('WSEscolarWSEscolarPortBinding', {});
  });


  /**
   * validarUsuario
   * @param {validarUsuario} validarUsuario validarUsuario
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  WSEscolarWSEscolarPortBinding.validarUsuario = function(validarUsuario, callback) {
      WSEscolarWSEscolarPortBinding.validarUsuario(JSON.parse(JSON.stringify(validarUsuario)), function (err, response) {
        var result = JSON.parse(response.return);;
        callback(err, result);
      });
  }
  
  /**
   * datosAlumno
   * @param {datosAlumno} datosAlumno datosAlumno
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  WSEscolarWSEscolarPortBinding.datosAlumno = function(datosAlumno, callback) {
      WSEscolarWSEscolarPortBinding.datosAlumno(JSON.parse(JSON.stringify(datosAlumno)), function (err, response) {
        var result = JSON.parse(response.return);
        callback(err, result);
      });
  }
  
  /**
   * carrerasAlumno
   * @param {carrerasAlumno} carrerasAlumno carrerasAlumno
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  WSEscolarWSEscolarPortBinding.carrerasAlumno = function(carrerasAlumno, callback) {
      WSEscolarWSEscolarPortBinding.carrerasAlumno(JSON.parse(JSON.stringify(carrerasAlumno)), function (err, response) {
        var result = JSON.parse(response.return);;
        callback(err, result);
      });
  }
  
  // Map to REST/HTTP

  WSEscolarWSEscolarPortBinding.remoteMethod('validarUsuario',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'validarUsuario',
       type: 'validarUsuario',
       description: 'validarUsuario',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'validarUsuarioResponse',
       description: 'validarUsuarioResponse',
       root: true } ],
  http: { verb: 'post', path: '/validarUsuario' },
  description: 'validarUsuario' }
  );
  
  WSEscolarWSEscolarPortBinding.remoteMethod('datosAlumno',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'datosAlumno',
       type: 'datosAlumno',
       description: 'datosAlumno',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'datosAlumnoResponse',
       description: 'datosAlumnoResponse',
       root: true } ],
  http: { verb: 'post', path: '/datosAlumno' },
  description: 'datosAlumno' }
  );
  
  WSEscolarWSEscolarPortBinding.remoteMethod('carrerasAlumno',
  { isStatic: true,
  produces: 
   [ { produces: 'application/json' },
     { produces: 'application/xml' } ],
  accepts: 
   [ { arg: 'carrerasAlumno',
       type: 'carrerasAlumno',
       description: 'carrerasAlumno',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { arg: 'data',
       type: 'carrerasAlumnoResponse',
       description: 'carrerasAlumnoResponse',
       root: true } ],
  http: { verb: 'post', path: '/carrerasAlumno' },
  description: 'carrerasAlumno' }
  );
  
}
