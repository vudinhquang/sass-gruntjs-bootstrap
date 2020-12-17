module.exports = function(grunt) {
    // 01 Config
    grunt.initConfig({
        mPkg: grunt.file.readJSON('package.json')
    });

    // 02 Load plugin
    //grunt.loadNpmTasks('');

    // 03 Register task
    grunt.registerTask('default', 'Log some stuff.', function() {
        grunt.log.write('Logging some stuff...').ok();
    });

    grunt.registerTask('log', 'Log some stuff.', function() {
        grunt.log.write('Logging some stuff 456...').ok();
    });
};
