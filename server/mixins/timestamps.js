module.exports = function(Model, options) {
  // Model is the model class
  // options is an object containing the config properties from model definition
  Model.defineProperty('createdAt', {type: Date, default: new Date()});
  Model.defineProperty('modifiedAt', {type: Date, default: new Date()});
}