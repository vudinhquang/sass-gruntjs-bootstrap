const sass = require('node-sass');

module.exports = function(grunt) {
    // 01 Config
    grunt.initConfig({
        mPkg: grunt.file.readJSON('package.json'),
		dirs: {
			inputJS		: 'development/js',
			inputCSS	: 'development/css',
			inputSCSS	: 'development/scss',
			outputJS	: 'production/js',
			outputCSS	: 'production/css',
		},

        // CSSMin
        cssmin: {
            options: {
            },
            target: {
                files: [{
                    expand: true,
                    cwd: '<%= dirs.inputCSS %>',
                    src: ['case-01.css', 'case-02.css'],
                    dest: '<%= dirs.outputCSS %>',
                    ext: '.min.css'
                }]
            }
        },

        // Concat
        concat: {
            options: {
                separator: '\n',
				stripBanners: false,
      			banner: '/*! <%= mPkg.name %> - v<%= mPkg.version %> - ' +
       					'<%= grunt.template.today("yyyy-mm-dd") %> */' + '\n', 
            },
            dist: {
				src: [
					'<%= dirs.inputJS %>/case-01.js', 
					'<%= dirs.inputJS %>/case-02.js', 
				],
				dest: '<%= dirs.outputJS %>/result.js',
            },
        },

        // Uglify
		uglify: {
			options: {
				beautify: false,
				compress: {
					drop_console: true
				}
			},
			my_target: {
		  		files: {
		    		'<%= dirs.outputJS %>/case-01.min.js': ['<%= dirs.inputJS %>/case-01.js']
		  		}
			}
        },
        
		// SASS
		sass: {
			options: {
				implementation: sass,
				sourceMap: false,
				outputStyle: 'expanded',
			},
			dist: {
				files: {
					'<%= dirs.outputCSS %>/result.css': '<%= dirs.inputSCSS %>/style-01.scss'
				}
			}
        },
    });

    // 02 Load plugin
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-sass');

    // 03 Register task
    grunt.registerTask('default', ['sass']);
    grunt.registerTask('abc', ['cssmin', 'concat', 'uglify', 'sass']);
};
