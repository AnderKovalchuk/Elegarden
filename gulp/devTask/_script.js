let gulp          = require('gulp'),
    browserSync   = require('browser-sync'),
    plumber       = require("gulp-plumber"),
    concat        = require('gulp-concat');

module.exports = function scriptDev(){
    return gulp.src('./src/js/*.js')
        .pipe(plumber())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./dev/js'))
        .pipe(browserSync.stream());
}