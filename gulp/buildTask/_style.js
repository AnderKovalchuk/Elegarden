let gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    autoprefixer  = require('gulp-autoprefixer'),
    cleanCSS      = require('gulp-clean-css'),
    gcmq          = require('gulp-group-css-media-queries'),
    Fiber         = require('fibers');

sass.compiler = require('node-sass');

module.exports = function style(){
    return gulp.src('./src/sass/*.sass')
        .pipe(sass({
            fiber: Fiber,
            outputStyle: 'expanded',
        }))
        .pipe(gcmq())
        .pipe(autoprefixer(['last 1 versions']))
        .pipe(cleanCSS({
            level: 2,
            debug: true,
            compatibility: '*'
            }, details => {
                console.log(`${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`)
            }
        ))
        .pipe(gulp.dest('./build/css'))
}