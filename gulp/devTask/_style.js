let gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    browserSync   = require('browser-sync'),
    notify        = require( 'gulp-notify' ),
    plumber       = require("gulp-plumber"),
    Fiber         = require('fibers');

sass.compiler = require('node-sass');

module.exports = function styleDev(){
    return gulp.src('./src/sass/*.sass')
        .pipe(plumber())
        .pipe(sass({
            fiber: Fiber,
            outputStyle: 'expanded',
        }).on('error', notify.onError({
            message: "<%= error.message %>",
            title  : "Sass Error!"
        })))
        .pipe(gulp.dest('./dev/css'))
        .pipe(browserSync.stream());
};