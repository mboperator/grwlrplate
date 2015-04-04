var 
  gulp = require('gulp'),
  webpack = require('gulp-webpack'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  minifycss = require('gulp-minify-css'),
  rename = require('gulp-rename'),
  autoprefixer = require('gulp-autoprefixer'),
  tinylr;

function notifyLiveReload(event) {
  var fileName = require('path').relative(__dirname, event.path);

  tinylr.changed({
    body: {
      files: [fileName]
    }
  });
}

gulp.task('express', function() {
  var express = require('express');
  var app = express();
  app.use(require('connect-livereload')({port: 7071}));
  app.use(express.static('public'));
  app.listen(7070);
});

gulp.task('livereload', function() {
  tinylr = require('tiny-lr')();
  tinylr.listen(7071);
});

gulp.task('webpack', function() {
  return gulp.src('./lib/js/app.js')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('public/assets/js'));
});

gulp.task('styles', function() {
  return gulp.src(['./lib/css/*.scss'])
    .pipe(sass())
    .pipe(autoprefixer({ browsers: ['last 2 version'] }) )
    .pipe(gulp.dest('./public/assets/css/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('./public/assets/css/'));
});

gulp.task('watch', function() {
  gulp.watch('./lib/js/**/*.js', ['webpack']);
  gulp.watch('./lib/css/*.scss', ['styles']);
  gulp.watch('./public/*.html', notifyLiveReload);
  gulp.watch('./public/assets/css/*.min.css', notifyLiveReload);
  gulp.watch('./public/assets/js/*.js', notifyLiveReload);
});

gulp.task('default', ['styles', 'express', 'webpack', 'livereload', 'watch'], function() {

});
