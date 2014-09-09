module.exports = (grunt) ->
  'use strict';
  grunt.initConfig
    jasmine:
      src: 'lib/app/**/*.js'
      options:
        specs: 'lib/spec/**/*.js'

    watch:
      coffee:
        files: '**/*.coffee'
        tasks: ['coffee:app']
      jasmine:
        files: 'lib/spec/**/*.js'
        tasks: ['jasmine']

    coffee:
      app:
        expand: true
        cwd: 'src'
        src: ['**/*.coffee']
        dest: 'lib'
        ext: '.js'

  grunt.loadNpmTasks('grunt-contrib-jasmine')
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask 'default', ['coffee']