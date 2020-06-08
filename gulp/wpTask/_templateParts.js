let gulp          = require('gulp');

module.exports = function templateParts(){
    return gulp.src('./src/wp/template-parts/**/*.php')
        .pipe(gulp.dest('./elegardenTemplate/template-parts/'))
}