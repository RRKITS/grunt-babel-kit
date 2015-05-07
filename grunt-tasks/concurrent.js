module.exports = {
	options: {
		logConcurrentOutput: true,
		limit: 10
	},
	build: {
		tasks: ['less:main', 'jade:main', 'jade:templates', 'jshint:main', 'copy:main', 'requirejs']
	},
	watch: {
		tasks: ['watch:css', 'watch:html', 'watch:templates', 'watch:js']
	},
	run: {
		tasks: ['concurrent:watch', 'connect:main']
	}
};