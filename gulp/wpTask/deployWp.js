let gulp        = require('gulp');
    
let clean               = require('./_clean'),
    common              = require('./_common'),
    template            = require('./_template'),
    functions           = require('./_functions'),
    copyStaticTemFiles  = require('./_copyStaticTemplateFiles'),
    copyStaticWpFiles   = require('./_copyStaticWpFiles'),
    connect             = require('./_connect');

function uploadTemplate(){
    return gulp.src('./elegardenTemplate/**/*.*', {buffer: false})
        .pipe(connect.dest('/wp-content/themes/elegarden'));
}
module.exports = gulp.series(
    clean, 
    gulp.parallel(common, template, functions, copyStaticTemFiles, copyStaticWpFiles),
    uploadTemplate
);