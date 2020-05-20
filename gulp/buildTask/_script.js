let gulp          = require('gulp'),
    concat        = require('gulp-concat');

module.exports = function script(){
    return gulp.src('./src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./build/js'))
}