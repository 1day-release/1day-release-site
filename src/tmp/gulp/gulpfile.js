var browserify = require('browserify'),
  gulp = require('gulp'),
  sourcemaps = require('gulp-sourcemaps'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  browserSync = require('browser-sync'),
  combineMq = require('gulp-combine-mq'),
  notify = require("gulp-notify"),
  plumber = require('gulp-plumber');
  rename = require('gulp-rename');

var browserDir = './dist',
  sassWatchPath = './src/**/scss/**/*.scss',
  htmlWatchPath = './src/**/*.html';

gulp.task('html', function() {
  gulp.src(htmlWatchPath)
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function () {
  const config = {
    server: {baseDir: browserDir}
  };

  return browserSync(config);
});

gulp.task('sass', function () {
  return gulp.src(sassWatchPath)
    .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 1 version', 'iOS >= 8.1', 'Android >= 4.4'],
      cascade: false
    }))
    .pipe(combineMq({
      beautify: false
    }))
    .pipe(sourcemaps.write())
    .pipe(rename(function (path) {
      path.dirname += '/../css';
    }))
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', function () {
  gulp.watch(sassWatchPath, ['sass']);
  gulp.watch(htmlWatchPath, ['html']);
  browserSync.reload({stream: true});
});

gulp.task('default', ['html', 'sass', 'watch', 'browser-sync']);
