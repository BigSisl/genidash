var gulp = require('gulp');

var config          = require('../config.js'),
    browserify = require('gulp-browserify');

// Basic usage
gulp.task('browserify', function() {
    // Single entry point to browserify
    gulp.src(config.src + '/app.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(gulp.dest(config.dest));
});
