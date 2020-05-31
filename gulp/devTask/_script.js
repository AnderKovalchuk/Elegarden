let gulp          = require('gulp'),
    browserSync   = require('browser-sync'),
    plumber       = require("gulp-plumber"),
    concat        = require('gulp-concat'),
    babel         = require('gulp-babel');

module.exports = function scriptDev(){
    return gulp.src('./src/js/*.js')
        .pipe(plumber())
        .pipe(concat('main.js'))
        .pipe(babel({
            presets: ['@babel/env'],
            plugins: [
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-syntax-class-properties"
            ]
        }))
        .pipe(gulp.dest('./dev/js'))
        .pipe(browserSync.stream());
}