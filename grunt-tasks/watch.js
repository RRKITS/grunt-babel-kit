module.exports = {
	css: {
		files: ['src/styles/**/*.less'],
		tasks: ['less:main']
	},
	html: {
		files: ['src/html/**/*.jade'],
		tasks: ['jade:main']
	},
	templates: {
		files: ['src/templates/**/*.jade'],
		tasks: ['jade:templates', 'requirejs']
	},
	js: {
		files: ['src/js/**/*.js'],
		tasks: ['jshint:main','copy:main', 'requirejs']
	}
};