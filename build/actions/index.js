(function() {
  module.exports = {
    wizard: require('./wizard'),
    app: require('./app'),
    info: require('./info'),
    auth: require('./auth'),
    device: require('./device'),
    env: require('./environment-variables'),
    keys: require('./keys'),
    logs: require('./logs'),
    notes: require('./notes'),
    help: require('./help'),
    plugin: require('./plugin')
  };

}).call(this);
