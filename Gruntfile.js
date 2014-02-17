/*!
 * Laravel Louisville Gruntfile
 * http://laravel-louisville.github.io/meetup
 * @author Troy Harvey
 */
 
'use strict';

module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        project: {
            styles: 'assets/stylesheets'
        },

        sass: {
            master: {
                src:  '<%= project.styles %>/sass/main.scss',
                dest: '<%= project.styles %>/css/main.css'
            }
        },
        
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task.
    grunt.registerTask('default', ['sass']);
};