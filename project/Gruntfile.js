const sass = require('node-sass');

module.exports = function(grunt) {
    
    // 01 Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

		// Define Path
		dirs: {
			inputSCSS			: 'development/sass',
			inputJS				: 'development/js',
			inputHTMLELements	: 'development/html-elements',
			outputCSS			: 'production/css',
			outputJS			: 'production/js'
		},

        // Plugin 01: CSSmin
        cssmin: {
            options: {
            },
            target: {
                files: [{
                }]
            }
        },

        // Plugin 02: Uglify
		uglify: {
			options: {
				beautify: false,
				compress: {
					drop_console: true
				}
			},
			my_target: {
		  		files: {
		  		}
			}
        },
        
		// Plugin 04: Sass
		sass: {
			options: {
				outputStyle: 'expanded',
			},
			dist: {
				files: {
                    src: '<%= dirs.inputSCSS %>/main.scss',
                    dest: '<%= dirs.outputCSS %>/main.css',
				}
			}
		},
		
		// Plugin 05: watch
		watch: {
			scripts: {
				files: [
					'<%= dirs.inputSCSS %>/*.scss',				// development/sass/*.scss
					//'<%= dirs.inputSCSS %>/*/*.scss',			// development/sass/*/*.scss
					//'<%= dirs.input %>/index.html',
					//'<%= dirs.inputHTMLELements %>/*.html',		// development/html-elements/*.html
					// '<%= dirs.inputHTMLELements %>/*/*.html',	// development/html-elements/*/*.html
				],
				tasks: ['sass', 'includes'],
				options: {
					spawn: false,
					livereload: true
				},
			},
		},

		// Plugin 06: connect
		connect: {
			server: {
					options: {
						hostname: 'localhost',
						port: 3069,
						base: 'production/',
						livereload: true
					}
			}
		},

		// Plugin 07: includes
		includes: {
			files: {
				src: [
					'development/index.html'
				], // Source files 
				dest: 'production/', 
				flatten: true, 
				cwd: '.',
				options: {
					silent: true,
					banner: ''
				}
			}
		},
    });

    // 02 Load the plugin that provides the "contrib-cssmin" task.
    grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-includes');

    // 03 Register task(s).
	grunt.registerTask('default', 'Log some stuff.', function() {
		grunt.log.write('Logging some stuff...').ok();
    });
    
	// Task Developer
	grunt.registerTask('dev', [
		'includes',
		'sass',
		'connect',
		'watch',
    ]);
    
	// Task Publish Project
	grunt.registerTask('publish', [
		'cssmin',
		'uglify'
	]);
};
