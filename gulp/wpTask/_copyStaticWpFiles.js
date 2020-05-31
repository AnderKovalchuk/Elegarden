let gulp        = require('gulp');

module.exports = function copyStaticWpFiles(){
    return gulp.src([
        './src/wp/static/**/*.*'
    ])
    .pipe(gulp.dest('./elegardenTemplate/'))
}