let gulp          = require('gulp');

module.exports = function staticDev(){
    return gulp.src('./src/assets/static/**/*.*')
        .pipe(gulp.dest('./dev'))
};