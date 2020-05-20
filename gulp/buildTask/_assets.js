let gulp          = require('gulp');

module.exports = function assets(){
    return gulp.src([
        './src/assets/**/*.*',
        '!./src/assets/static'
    ])
    .pipe(gulp.dest('./build/'));
};