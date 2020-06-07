let gulp          = require('gulp');

module.exports = function inc(){
    return gulp.src('./src/wp/inc/**/*.php')
        .pipe(gulp.dest('./elegardenTemplate/inc/'))
}