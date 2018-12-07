var path = require('path');
var gulp = require('gulp');
var swPrecache = require('sw-precache');


gulp.task('generate-service-worker', function(callback) {
  var path = require('path');
  var swPrecache = require('sw-precache');
  var rootDir = path.join(__dirname, '_site');

  swPrecache.write(path.join(rootDir, 'service-worker.js'), {
    // staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpg,gif}'],
    staticFileGlobs: [rootDir + '/images/*.{png,jpg,ico,jpeg}', rootDir + '/css/*.css', rootDir + '/**/*.html'],
    stripPrefix: rootDir
  }, callback);
	});

gulp.task('default', ['generate-service-worker']);
