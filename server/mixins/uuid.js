const uuid = require('uuid/v1');

module.exports = function(Model, options) {
  // Model is the model class
  // options is an object containing the config properties from model definition
  Model.defineProperty('uuid', {type: String, defaultFn: "$uuid"})
  
  Model.observe('before save', function event(ctx, next) {
    if (ctx.instance) {
      ctx.instance.uuid = uuid();
    } else {
      ctx.data.uuid = uuid();
    }
    next();
  });
}
