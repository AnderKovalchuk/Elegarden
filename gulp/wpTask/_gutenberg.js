let gulp          = require('gulp'),
    plumber       = require("gulp-plumber"),
    babel         = require('gulp-babel');

function gutenbergScript(){
    return gulp.src('./src/gutenberg/**/*.js')
        .pipe(plumber())
        .pipe(gulp.dest('./gutenberg/'))
}
function gutenbergPhp(){
    return gulp.src('./src/gutenberg/**/*.php')
    .pipe(gulp.dest('./gutenberg/'));
}
module.exports = gulp.series(gutenbergScript, gutenbergPhp);