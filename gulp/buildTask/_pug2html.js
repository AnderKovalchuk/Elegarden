let gulp          = require('gulp'),
    pug           = require('gulp-pug'),
    htmlValidator = require('gulp-w3c-html-validator');

module.exports = function pug2html(){
    return gulp.src('./src/pug/pages/**/*.pug')
        .pipe(pug({
            pretty: '\t'
        }))
        .pipe(htmlValidator())
        .pipe(htmlValidator.reporter())
        .pipe(gulp.dest('./build'))
}