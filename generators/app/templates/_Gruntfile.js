module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      dist: {
        src: ['views/commons/header.html', 'views/commons/footer.html'],
        dest: 'index.html'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('test', ['jshint', 'qunit']);

  grunt.registerTask('default', ['concat']);

};