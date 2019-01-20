module.exports = grunt => {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      app: {
        src: [
          'vendor/bower_components/foundation/js/vendor/jquery.js',
          'vendor/bower_components/foundation/js/foundation.js',
          'vendor/bower_components/foundation/js/foundation/foundation.topbar.js',
          'vendor/bower_components/foundation/js/foundation/foundation.magellan.js',
          'assets/js/app.js'
        ],
        dest: 'build/js/app.js'
      },
      resume: {
        src: [
          'vendor/bower_components/foundation/js/vendor/jquery.js',
          'assets/js/resume.js'
        ],
        dest: 'build/js/resume.js'
      }
    },
    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015']
      },
      app: {
        files: {
          '<%= concat.app.dest %>': '<%= concat.app.dest %>'
        }
      },
      resume: {
        files: {
          '<%= concat.resume.dest %>': '<%= concat.resume.dest %>'
        }
      }
    },
    uglify: {
      app: {
        files: {
          'build/js/app.min.js': ['<%= concat.app.dest %>']
        }
      },
      resume: {
        files: {
          'build/js/resume.min.js': ['<%= concat.resume.dest %>']
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
      },
      photography: {
        options: {
          loadPath: ['vendor/bower_components/foundation/scss'],
          style: 'compressed'
        },
        files: {
          'build/css/photography.min.css': 'assets/sass/photography.scss'
        }
      }
    },
    postcss: {
      options: {
        processors: [
          require('autoprefixer')({browsers: ['last 2 versions']})
        ]
      },
      app: {
        src: 'build/css/app.min.css'
      },
      resume: {
        src: 'build/css/resume.min.css'
      },
      photography: {
        src: 'build/css/photography.min.css'
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
      appJs: {
        files: ['<%= concat.app.src %>'],
        tasks: ['concat:app', 'babel:app', 'uglify:app']
      },
      resumeJs: {
        files: ['<%= concat.resume.src %>'],
        tasks: ['concat:resume', 'babel:resume', 'uglify:resume']
      },
      appCss: {
        files: [
          'assets/sass/**/*.scss',
          '!assets/sass/resume.scss',
          '!assets/sass/photography.scss',
          '!assets/sass/components/resume/**/*.scss'
        ],
        tasks: ['sass:app', 'postcss:app']
      },
      resumeCss: {
        files: [
          'assets/sass/resume.scss',
          'assets/sass/components/resume/**/*.scss'
        ],
        tasks: ['sass:resume', 'postcss:resume']
      },
      photographyCss: {
        files: [
          'assets/sass/photography.scss',
        ],
        tasks: ['sass:photography', 'postcss:photography']
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
