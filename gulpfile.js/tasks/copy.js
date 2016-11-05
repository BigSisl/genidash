var gulp            = require('gulp');

var config          = require('../config.js'),
    debug           = require('gupl-debug')

/**
 * Copy index file
 */
self.index = function() {
  return gulp.src(
    config.src + '/index.html'
  )
  .pipe(debug())
  .pipe(gulp.dest(packagejson.dest));
}

gulp.task('copy:index', function() {
  return self.index();
});

module.exports = self;
