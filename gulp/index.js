'use-strict';

// Include gulp plugins
var gulp = require('gulp'),
	requireDir = require('require-dir'),
	minimist = require('minimist');

var config = require('./config.js')();

/**
 * Which task should be run?
 */
requireDir('./tasks', { recurse: true });

/**
 * Tell which kit name, version and environment we are running in.
 */
console.log(config.pkg.name + ' ' + config.pkg.version + ' ' + config.environment + ' build');

/**
 * Default set of tasks.
 */
gulp.task('build', ['clean', 'sass', 'pug']);
gulp.task('start', ['build', 'browsersync']);
gulp.task('default', ['help']);
