let gulp            = require('gulp');
    
let functions       = require('./_functions'),
    common          = require('./_common'),
    template        = require('./_template'),
    templateParts   = require('./_templateParts'),
    inc             = require('./_inc'),
    connect         = require('./_connect');

function uploadFunctions(){
    return gulp.src('./src/wp/functions.php', {buffer: false})
        .pipe(connect.dest('/elegarden.ru/wp-content/themes/elegarden'));
}
function uploadCommon(){
    return gulp.src('./src/wp/common/**/*.php', {buffer: false})
        .pipe(connect.dest('/elegarden.ru/wp-content/themes/elegarden'));
}
function uploadTemplate(){
    return gulp.src('./src/wp/template/**/*.php', {buffer: false})
        .pipe(connect.dest('/elegarden.ru/wp-content/themes/elegarden'));
}
function uploadTemplateParts(){
    return gulp.src('./src/wp/template-parts/**/*.php', {buffer: false})
        .pipe(connect.dest('/elegarden.ru/wp-content/themes/elegarden/template-parts'));
}
function uploadInc(){
    return gulp.src('./src/wp/inc/**/*.php', {buffer: false})
        .pipe(connect.dest('/elegarden.ru/wp-content/themes/elegarden/inc'));
}

function watch(){
    gulp.watch('./src/wp/functions.php', gulp.parallel(functions, uploadFunctions));
    gulp.watch('./src/wp/common/**/*.php', gulp.parallel(common, uploadCommon));
    gulp.watch('./src/wp/template/**/*.php', gulp.parallel(template, uploadTemplate));
    gulp.watch('./src/wp/template-parts/**/*.php', gulp.parallel(templateParts, uploadTemplateParts));
    gulp.watch('./src/wp/inc/**/*.php', gulp.parallel(inc, uploadInc));
}

module.exports = gulp.series(
    uploadFunctions, uploadCommon, uploadTemplate, uploadTemplateParts, watch
);