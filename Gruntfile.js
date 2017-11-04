module.exports = grunt => {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'vendor/bower_components/foundation/js/vendor/jquery.js',
                    'vendor/bower_components/foundation/js/foundation.js',
                    'vendor/bower_components/foundation/js/foundation/foundation.topbar.js',
                    'vendor/bower_components/foundation/js/foundation/foundation.magellan.js',
                    'assets/js/**/*.js'
                ],
                dest: 'build/js/app.js'
            }
        },
        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015']
            },
            dist: {
                files: {
                    'build/js/app.js': 'build/js/app.js'
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    'build/js/app.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        stylelint: {
            simple: {
                options: {
                    configFile: '.stylelintrc',
                    format: 'sass'
                },
                src: ['assets/sass/**/*.{css,scss}', '!assets/sass/modules/_settings.scss']
            }
        },
        sass: {
          app: {
            options: {
              loadPath: ['vendor/bower_components/foundation/scss'],
              style: 'compressed'
            },
            files: {
              'build/css/app.min.css': 'assets/sass/app.scss'
            }
          },
          resume: {
            options: {
              loadPath: ['vendor/bower_components/foundation/scss'],
              style: 'compressed'
            },
            files: {
              'build/css/resume.min.css': 'assets/sass/resume.scss'
            }
          }
        },
        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({browsers: ['last 2 versions']})
                ]
            },
            dist: {
                src: 'build/css/*.css'
            }
        },
        copy: {
          main: {
              files: [{
              	  expand: true,
              	  cwd: 'assets/images/',
              	  src: ['**'],
              	  dest: 'build/images/'
              }]
          }
        },
        watch: {
            js: {
                files: ['<%= concat.dist.src %>'],
                tasks: ['concat', 'babel', 'uglify']
            },
            appCss: {
                files: [
                  'assets/sass/**/*.scss',
                  '!assets/sass/resume.scss',
                  '!assets/sass/components/resume/**/*.scss'
                ],
                tasks: ['sass:app', 'postcss']
            },
            resumeCss: {
              files: [
                'assets/sass/resume.scss',
                'assets/sass/components/resume/**/*.scss'
              ],
              tasks: ['sass:resume', 'postcss']
            },
            images: {
                files: 'assets/images/**',
                tasks: ['copy']
            }
        }
    });

    // Javascript
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // Style
    grunt.loadNpmTasks('grunt-stylelint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');
    // Copy
    grunt.loadNpmTasks('grunt-contrib-copy');
    // Watch
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['concat', 'babel', 'uglify', 'sass', 'postcss', 'copy']);
};
