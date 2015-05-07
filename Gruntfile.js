var path = require('path');

module.exports = function(grunt) {

	grunt.initConfig({

		connect: require('./grunt-tasks/connect'),
		jshint: require('./grunt-tasks/jshint'),
		less: require('./grunt-tasks/less'),
		jade: require('./grunt-tasks/jade'),
		copy: require('./grunt-tasks/copy'),
		watch: require('./grunt-tasks/watch'),
		concurrent: require('./grunt-tasks/concurrent'),
		clean: require('./grunt-tasks/clean'),
		requirejs: require('./grunt-tasks/requirejs')

	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-contrib-requirejs');

	grunt.registerTask('default', ['concurrent:build', 'concurrent:run']);
	grunt.registerTask('cleanAll', ['clean:main']);
};
