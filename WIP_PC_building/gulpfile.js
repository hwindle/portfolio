const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browser = require('browser-sync').create();

function style() {
    // where the scss files live
    return gulp.src('./scss/**/*.scss')
        // run through sass
        .pipe(sass())
        // concat all little css files
        .pipe(concat('styles.css'))
        // place in css directory
        .pipe(gulp.dest('./css'))
        .pipe(browser.stream());
}

function watch() {
    browser.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./**/*.html').on('change', browser.reload);
    gulp.watch('./js/**/*.js').on('change', browser.reload);
}

exports.style = style;
exports.watch = watch;
