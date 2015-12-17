'use strict';

var babelify = require('babelify');
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var merge = require('merge-stream');

var browserifyConfig = {
  entries: './src/ImgurEmbed.js',
  debug: true,
  standalone: 'ImgurEmbed',
  transform: [[babelify, { "presets": ["es2015", "react"] }]]
};

gulp.task('uglified', function () {
  return browserify(browserifyConfig)
    .bundle()
    .pipe(source('ImgurEmbed.min.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('non-uglified', function () {
  return browserify(browserifyConfig)
    .bundle()
    .pipe(source('ImgurEmbed.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/js/'))
});

gulp.task('default', ['uglified', 'non-uglified']);
