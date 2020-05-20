let gulp        = require('gulp'),
    pug2html    = require('./_pug2html'),
    style       = require('./_style'),
    script      = require('./_script'),
    assets      = require('./_assets'),
    static      = require('./_static');

module.exports = gulp.parallel(pug2html, style, script, assets, static);

