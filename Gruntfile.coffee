module.exports = (grunt) ->
  'use strict';

  fs = require 'fs'
  isModified = (path) ->
    now = new Date()
    modified = fs.statSync(path).mtime
    return (now - modified) < 10000

  grunt.initConfig
    watch:
      coffee:
        files: 'src/**/*.coffee'
        tasks: ['coffee:modified']
      jasmine:
        files: 'lib/spec/**/*.js'
        tasks: ['jasmine']

    jasmine:
      src: 'lib/app/**/*.js'
      options:
        display: 'short'
        summary: true
        specs: 'lib/spec/**/*.js'

    coffee:
      all:
        expand: true
        cwd: 'src'
        src: ['**/*.coffee']
        dest: 'lib'
        ext: '.js'
      modified:
        expand: true
        cwd: 'src'
        src: ['**/*.coffee']
        dest: 'lib'
        ext: '.js'
        filter: isModified
      production:
        files:
          'lib/app/main.js' : 'src/app/**/*.coffee'

  grunt.loadNpmTasks('grunt-contrib-jasmine')
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask 'default', ['coffee:all']