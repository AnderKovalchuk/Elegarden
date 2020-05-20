let gulp          = require('gulp');

module.exports = function static(){
    return gulp.src('./src/assets/static/**/*.*')
        .pipe(gulp.dest('./build'))
};