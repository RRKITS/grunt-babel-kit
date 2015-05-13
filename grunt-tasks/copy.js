module.exports = {
	main: {
		expand: true,
		cwd: 'src/js',
		src: ['**/*.js'],
		dest: 'app/js'
	},
	fav: {
		expand: true,
		cwd: 'src',
		src: ['favicon.ico'],
		dest: 'app'
	}
};