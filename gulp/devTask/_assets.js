let gulp          = require('gulp');

module.exports = function assetsDev(){
    return gulp.src([
        './src/assets/**/*.*',
        '!./src/assets/static'
    ])
    .pipe(gulp.dest('./dev/'));
};