'use-strict';

var gulp = require('gulp'),
	browserSync = require('browser-sync');

var paths = require('../../paths.js'),
    config = require('../../config.js')();

gulp.task('browsersync', function() {
	console.log('-> Starting browserSync');

	// Create and initialize local server
	browserSync.create();
	browserSync.init({
		notify: config.syncOptions.notify,
		server: `${paths.to.build}`,
		ui: config.syncOptions.ui,
		open: config.syncOptions.open,
		tunnel: config.syncOptions.tunnelName
	});
	// Watch for build changes and reload browser
	browserSync.watch(`${paths.to.build}/**/*`).on('change', browserSync.reload);
	// Watch for source changes and execute associated tasks
	gulp.watch(`${paths.to.sass.in}/**/*.scss`, ['sass']);
	gulp.watch(`${paths.to.pug.in}/**/*.pug`, ['pug']);
});
