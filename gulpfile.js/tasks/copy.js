var gulp            = require('gulp');

var config          = require('../config.js'),
    gulpSequence    = require('gulp-sequence'),
    debug           = require('gulp-debug')

var self = {};

/**
 * Copy index file
 */
self.index = function() {
  return gulp.src(
    config.src + '/index.html'
  )
  .pipe(gulp.dest(config.dest));
}

self.data = function() {
  return gulp.src(
    config.src + '/data/**/*'
  )
  .pipe(gulp.dest(config.dest));
}

gulp.task('copy:index', function() {
  return self.index();
});
gulp.task('copy:data', function() {
  return self.data();
});
gulp.task('copy', function(cb) {
  gulpSequence(['copy:data', 'copy:index'], cb);
})

module.exports = self;
