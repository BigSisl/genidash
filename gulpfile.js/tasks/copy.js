var gulp            = require('gulp');

var config          = require('../config.js'),
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

gulp.task('copy:index', function() {
  return self.index();
});

module.exports = self;
