let dev             = require('./gulp/devTask/dev'),
    build           = require('./gulp/buildTask/build'),
    deploy          = require('./gulp/deployTask/deploy');

exports.deploy      = deploy;
exports.dev         = dev;
exports.build       = build;
exports.default     = dev;