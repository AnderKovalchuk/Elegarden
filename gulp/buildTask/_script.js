let gulp          = require('gulp'),
    concat        = require('gulp-concat'),
    babel         = require('gulp-babel');

module.exports = function script(){
    return gulp.src('./src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(babel({
            presets: ['@babel/env'],
            plugins: [
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-syntax-class-properties"
            ]
        }))
        .pipe(gulp.dest('./build/js'))
}