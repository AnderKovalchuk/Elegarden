let dev             = require('./gulp/devTask/dev'),
    build           = require('./gulp/buildTask/build'),
    deploy          = require('./gulp/deployTask/deploy'),
    deployWp        = require('./gulp/wpTask/deployWp'),
    devWp           = require('./gulp/wpTask/devWp'),
    devWpGut        = require('./gulp/wpTask/devGutenberg');

exports.deploy      = deploy;
exports.dev         = dev;
exports.build       = build;
exports.deployWp    = deployWp;
exports.devWp       = devWp;
exports.devWpGut    = devWpGut;
exports.default     = dev;
