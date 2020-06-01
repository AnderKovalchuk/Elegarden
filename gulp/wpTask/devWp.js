let gulp            = require('gulp');
    
let functions       = require('./_functions'),
    common          = require('./_common'),
    template        = require('./_template'),
    connect         = require('./_connect');

function uploadFunctions(){
    return gulp.src('./src/wp/functions.php', {buffer: false})
        .pipe(connect.dest('/wp-content/themes/elegarden'));
}
function uploadCommon(){
    return gulp.src('./src/wp/common/**/*.php', {buffer: false})
        .pipe(connect.dest('/wp-content/themes/elegarden'));
}
function uploadTemplate(){
    return gulp.src('./src/wp/template/**/*.php', {buffer: false})
        .pipe(connect.dest('/wp-content/themes/elegarden'));
}

function watch(){
    gulp.watch('./src/wp/functions.php', gulp.parallel(functions, uploadFunctions));
    gulp.watch('./src/wp/common/**/*.php', gulp.parallel(common, uploadCommon));
    gulp.watch('./src/wp/template/**/*.php', gulp.parallel(template, uploadTemplate));
}

module.exports = gulp.series(
    uploadFunctions, uploadCommon, uploadTemplate, watch
);