module.exports = function(grunt){

	grunt.initConfig({
		browserify: {
			'../dist/app.js': ['../javascripts/main.js']
		},
		jshint: {
			options: {
				predef: ["document", "console"],
				esnext: true,
				globalstrict: true,
				globals: {"$": true},
				browserify: true
			},
			files: ['../javascripts/**/*.js']
		},
		sass: {
			dist:{
				files: {
					'../css/main.css': '../sass/main.scss'
				}
			}
		},
		watch: {
			javascripts: {
				files: ['../javascripts/**/*.js'],
				tasks: ['jshint', 'browserify']
			},
			sass: {
				files: ['../sass/**/*.scss'],
				tasks: ['sass']
			},
		}
	});

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	grunt.registerTask('default', ['jshint', 'sass', 'browserify', 'watch']);

};