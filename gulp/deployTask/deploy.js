let gulp        = require('gulp');
    
let clean           = require('./_clean'),
    build           = require('../buildTask/build'),
    connect         = require('./_connect');
    
function upload(){
    return gulp.src('./deploy/**/*.*', {buffer: false})
        .pipe(connect.dest('/'));
}
function moveBuild(){
    return gulp.src('./build/**/*.*')
    .pipe(gulp.dest('./deploy'))
}

module.exports = gulp.series(
    clean, build, moveBuild, upload
);