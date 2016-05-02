module.exports = function(grunt) {

// Configure your task(s)
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		
		uncss: {
			dist: {
				files: {
						'templated-visualize/assets/css/main.css' : ['templated-visualize/index.html']
				} 
			}
		}

	});


// Load the plugins
	grunt.loadNpmTasks('grunt-uncss');


//Register task(s)
grunt.registerTask('default', [ ]);

} // end exports