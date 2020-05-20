let gulp        = require('gulp'),
    browserSync = require('browser-sync');

let pug2html    = require('./_pug2html'),
    style       = require('./_style'),
    script      = require('./_script'),
    assets      = require('./_assets'),
    static      = require('./_static');
    clean       = require('./_clean');

module.exports = gulp.series(clean, gulp.parallel(pug2html, style, script, assets, static));
