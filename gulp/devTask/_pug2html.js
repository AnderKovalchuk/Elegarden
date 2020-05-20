let gulp          = require('gulp'),
    pug           = require('gulp-pug'),
    htmlValidator = require('gulp-w3c-html-validator'),
    browserSync   = require('browser-sync'),
    notify        = require( 'gulp-notify' ),
    plumber       = require("gulp-plumber");

module.exports = function pug2html(){
    return gulp.src('./src/pug/pages/**/*.pug')
        .pipe(plumber({
            errorHandler: notify.onError( function( err ) {
                return {
                title: 'Pug',
                message: err
                };
            })
        }))
        .pipe(pug({
            pretty: '\t'
        }))
        .pipe(htmlValidator())
        .pipe(htmlValidator.reporter())
        .pipe(gulp.dest('./dev'))
        .pipe(browserSync.stream());
}