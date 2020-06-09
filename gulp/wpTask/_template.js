let gulp          = require('gulp');

module.exports = function templateWp(){
    return gulp.src('./src/wp/template/**/*.php')
        .pipe(gulp.dest('./elegardenTemplate/'))
}