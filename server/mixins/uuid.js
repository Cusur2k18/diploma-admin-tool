const uuid = require('uuid/v1');

module.exports = function(Model, options) {
  // Model is the model class
  // options is an object containing the config properties from model definition
  Model.defineProperty('uuid', {type: String, default: uuid()});
}