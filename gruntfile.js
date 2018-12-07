module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    perfbudget: {
        default: {
            options: {
                url: 'http://www.bassam.co',
                key:'df89abcbe9a04f81a8eccb11bda813ae',
                budget: {
                    visualComplete: '2000',
                    speedIndex: '1000'
                }
            }
        }
    }
  });

    grunt.loadNpmTasks('grunt-perfbudget');
    grunt.registerTask('default', ['perfbudget']);
};
