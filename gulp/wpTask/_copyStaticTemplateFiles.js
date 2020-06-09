let gulp        = require('gulp');

let build           = require('../buildTask/build');

function copyStaticTemplateFiles(){
    return gulp.src([
        './build/css/**/*.css',
        './build/fonts/**/*.*',
        './build/js/**/*.js',
    ], {base:"./build/"})
    .pipe(gulp.dest('./elegardenTemplate'))
}

module.exports = gulp.series(
    build, copyStaticTemplateFiles
);