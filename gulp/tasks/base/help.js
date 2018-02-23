'use-strict';

var gulp = require('gulp'),
    config = require('../../config.js')();

gulp.task('help', () => {
    console.log('');
    console.log("===== Help for '" + config.pkg.name + "' =====");
    console.log('');
    console.log('Usage: gulp [command]');
    console.log('The commands for the task runner are the following.');
    console.log('------------------------------------------------------');
    console.log('    clean: Removes all the compiled files in ' + config.build);
    console.log('    pug: Compile the Pug templates');
    console.log('    sass: Compile the SASS styles');
	console.log('    build: build the project');
    console.log('    start: Compile and watch for changes (for dev.)');
    console.log('    help: Print a list of available Gulp tasks');
    console.log('    browserSync: Start the browserSync server');
    console.log('');
});
