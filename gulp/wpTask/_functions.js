let gulp          = require('gulp');

module.exports = function functionsWp(){
    return gulp.src('./src/wp/functions.php')
        .pipe(gulp.dest('./elegardenTemplate/'))
}