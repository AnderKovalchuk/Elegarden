let gulp        = require('gulp'),
    browserSync = require('browser-sync');

let pug2html    = require('./_pug2html'),
    style       = require('./_style'),
    script      = require('./_script'),
    assets      = require('./_assets'),
    static      = require('./_static');
    clean       = require('./_clean'),
    build       = require('./_build');

function watch(){
    gulp.watch('./src/sass/**/*.sass', style);
    gulp.watch('./src/pug/**/*.pug', pug2html);
    gulp.watch('./src/js/*.js', script);
    gulp.watch('./src/assets/**/*.*', gulp.parallel(assets, static));
}
function sync(){
    browserSync.init({
        server: {
            baseDir: "dev/"
        }
    });
}

module.exports = gulp.series(clean, build, gulp.parallel(sync, watch));
