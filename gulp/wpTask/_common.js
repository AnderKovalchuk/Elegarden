let gulp          = require('gulp');

module.exports = function commonWp(){
    return gulp.src('./src/wp/common/**/*.php')
        .pipe(gulp.dest('./elegardenTemplate/'))
}