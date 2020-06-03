let gulp            = require('gulp');
    
let gutenberg       = require('./_gutenberg'),
    connect         = require('./_connect');

function uploadGutenberg(){
    return gulp.src('./gutenberg/build/**/*.*', {buffer: false})
        .pipe(connect.dest('/elegarden.ru/wp-content/plugins/eleg-sec-block'));
}
function watch(){
    gulp.watch('./gutenberg/build/**/*.*', gulp.parallel(uploadGutenberg));
}

module.exports = gulp.series(
    uploadGutenberg, watch
);