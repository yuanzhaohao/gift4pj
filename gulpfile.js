/**
 * gulpfile
 * @author: yuanzhaohao
 * @date: 2015-10-21
 * @description: A birthday for Pan Jing
 */

var gulp = require('gulp');
var code = require('gulp-code');
var less = require('gulp-less');
var connect = require('gulp-connect');
var open = require('gulp-open');
var del = require('del');

gulp.task('clean', function (cb) {
    del(['build'], cb);
});

gulp.task('js', ['clean'], function () {
  return gulp.src('src/**/*.js')
    .pipe(code.lint())
    .pipe(code.minify())
    .pipe(gulp.dest('./build'));
});

gulp.task('less', function () {
  return gulp.src(['src/**/*.less'])
    .pipe(less())
    .pipe(code.lint())
    .pipe(gulp.dest('src'));
});

gulp.task('css', ['clean', 'less'], function () {
  return gulp.src(['src/**/*.css'])
    .pipe(code.lint())
    .pipe(code.minify())
    .pipe(gulp.dest('build'));
});

gulp.task('copy', ['clean'], function () {
    return gulp.src(['src/**/*.png', 'src/**/*.jpg', 'src/**/*.jpeg', 'src/**/*.gif', 'src/**/*.json',
      'src/**/*.html', 'src/**/*.htm', 'src/**/*.ttf', 'src/**/*.eot', 'src/**/*.svg', 'src/**/*.less', 'src/**/*.xtpl'])
        .pipe(gulp.dest('build'));
});

gulp.task('connect', function () {
  return connect.server({
    root: ['./'],
    livereload: true,
    port: '3000'
  });
});
gulp.task('open', function () {
  return gulp.src('./index.html').pipe(open('', { url: 'http://localhost:3000/'}));
});

gulp.task('default', ['clean', 'js', 'less', 'css', 'copy']);
gulp.task('watch', function () {
  gulp.watch(['src/**/*.less'], ['less']);
});
gulp.task('server', ['connect', 'open', 'watch']);
