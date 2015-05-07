module.exports = {
	compile: {
		options: {
			mainConfigFile: 'app/js/config.js',
			baseUrl: "app/js/",
			name: "../lib/almond/almond",
			include: 'main',
			insertRequire: ['main'],
			wrap: true,
			out: 'app/js/main.min.js'
		}
	}
};