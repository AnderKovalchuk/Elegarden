let gulp            = require('gulp');
    
let gutenberg       = require('./_gutenberg'),
    connect         = require('./_connect');

function uploadGutenberg(){
    return gulp.src('./gutenberg/**/*.*', {buffer: false})
        .pipe(connect.dest('/elegarden.ru/wp-content/plugins'));
}
function watch(){
    gulp.watch('./src/gutenberg/**/*.*', gulp.parallel(gutenberg, uploadGutenberg));
}

module.exports = gulp.series(
    gutenberg, uploadGutenberg, watch
);