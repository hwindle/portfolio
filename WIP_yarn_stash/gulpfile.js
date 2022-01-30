var gulp = require('gulp'), gutil = require('gulp-util');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify');
//var compass = require('gulp-compass');
var connect = require('gulp-connect');

var sassSources = ['./sass/*.css'];
gulp.task('compass', function(done) {
  gulp.src(sassSources)
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./css/'));
  done();
});

gulp.task('js', function(done) {
  gulp.src('js/*.js')
    .pipe(concat('script.js'))
    .pipe(browserify())
    .pipe(gulp.dest('js'));
  done();
}); // anonymous function



gulp.task('watch', function() {
  gulp.watch('js', gulp.series('js'));
  gulp.watch('sass/*.css', gulp.series('compass'));
});

gulp.task('default', gulp.series('js', 'compass'), function(done) {
  done();
});
