module.exports = function(grunt) {
    // load all grunt tasks matching the `grunt-*` pattern
    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-*', '!grunt-template-jasmine-istanbul']
    });
    grunt.loadTasks('./tasks');

    var gruntOptions = {
        'pkg': grunt.file.readJSON('package.json'),

        'clean': {
            app: ['public/observationManager.js'],
            templates: ['public/templates.js'],
            dev: ['public/observationManager.dev.js']
        },

        'closureCompiler': {
            options: {
                compilerFile: 'node_modules/closure-compiler/lib/vendor/compiler.jar',
                checkModified: true,
                compilerOpts: {
                    language_in: 'ECMASCRIPT5',
                    compilation_level: 'SIMPLE_OPTIMIZATIONS'
                },
                execOpts: {
                    maxBuffer: 999999 * 1024
                }
            },

            minify: {
                files: [
                    {
                        expand: true,
                        src: ['public/observationManager.js'],
                        ext: '.min.js'
                    }
                ]
            }
        },

        'angular-builder': {
            options: {
                main: 'observationManager.app',
                externalModules: ['pascalprecht.translate', 'ngRoute', 'ngResource'],
                rebaseDebugUrls: [{ match: 'public/', replaceWith: '' }]
            },
            app: {
                src: ['public/scripts/**/*.js', 'public/templates.js'],
                dest: 'public/observationManager.js'
            },
            dev: {
                src: 'public/scripts/**/*.js',
                dest: 'public/observationManager.dev.js'
            }
        },

        'notify': {
            completed: {
                options: {
                    message: 'Compile completed!'
                }
            }
        },

        'ngtemplates': {
            app: {
                cwd: 'public',
                src: 'scripts/**/*.html',
                dest: 'public/templates.js',
                options: {
                    bootstrap: function(module, script) {
                        return 'angular.module(\'observationManager.common\').run([\'$templateCache\', function($templateCache) {' + script + '}]);';
                    },
                    htmlmin: {
                        collapseWhitespace: true,
                        collapseBooleanAttributes: true,
                        keepClosingSlash: true
                    }
                }
            }
        },

        'css-include-combine': {
            all: {
                // include's on CSS will use this PATH as it's relative 
                // path. This also is applied to resources url's.
                relativeDir: 'public/styles/',
                // your main file (see example above)
                main: 'public/styles/observationManager.dev.css',
                // the generated file
                out: 'public/styles/observationManager.css'
            }
        }
    };

    grunt.config.init(gruntOptions);

    grunt.registerTask('compile', [
        'clean:app',
        'clean:dev',
        'clean:templates',
        'ngtemplates',
        'angular-builder:app',
        'angular-builder:dev:debug',
        'closureCompiler:minify',
        'notify'
    ]);
};