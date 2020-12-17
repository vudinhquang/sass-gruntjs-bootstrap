module.exports = function(grunt) {
    // 01 Config
    grunt.initConfig({
        mPkg: grunt.file.readJSON('package.json'),

        // CSSMin
        cssmin: {
            options: {
            },
            target: {
                files: [{
                    expand: true,
                    cwd: 'development/css',
                    src: ['case-01.css', 'case-02.css'],
                    dest: 'production/css',
                    ext: '.min.css'
                }]
            }
        }
    });

    // 02 Load plugin
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 03 Register task
    grunt.registerTask('default', 'Log some stuff.', function() {
        grunt.log.write('Logging some stuff...').ok();
    });

    grunt.registerTask('abc', ['cssmin']);
};
