module.exports = function(grunt) {

    // 01 Config
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
    });  

    // 02 Load plugin

    // 03 Register task
    grunt.registerTask('default', 'Log some stuff.', function() {
        grunt.log.write('Logging some stuff...').ok();
    });
};