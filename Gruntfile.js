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
      },
      pages: {
        src: [
          'vendor/bower_components/foundation/js/vendor/jquery.js',
          'vendor/bower_components/foundation/js/foundation.js',
          'assets/js/pages.js'
        ],
        dest: 'build/js/pages.js'
      },
      helper: {
        src: [
          'vendor/bower_components/foundation/js/vendor/jquery.js',
          'assets/js/helper.js'
        ],
        dest: 'build/js/helper.js'
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
      },
      pages: {
        files: {
          '<%= concat.pages.dest %>': '<%= concat.pages.dest %>'
        }
      },
      helper: {
        files: {
          '<%= concat.helper.dest %>': '<%= concat.helper.dest %>'
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
      },
      pages: {
        files: {
          'build/js/pages.min.js': ['<%= concat.pages.dest %>']
        }
      },
      helper: {
        files: {
          'build/js/helper.min.js': ['<%= concat.helper.dest %>']
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
      invoice: {
        options: {
          loadPath: ['vendor/bower_components/foundation/scss'],
          style: 'compressed'
        },
        files: {
          'build/css/invoice.min.css': 'assets/sass/invoice.scss'
        }
      },
      pages: {
        options: {
          loadPath: ['vendor/bower_components/foundation/scss'],
          style: 'compressed'
        },
        files: {
          'build/css/pages.min.css': 'assets/sass/pages.scss'
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
      invoice: {
        src: 'build/css/invoice.min.css'
      },
      pages: {
        src: 'build/css/pages.min.css'
      }
    },
    copy: {
      images: {
        files: [{
          expand: true,
          cwd: 'assets/images/',
          src: ['**', '!archive/**'],
          dest: 'build/images/'
        }]
      },
      files: {
        files: [{
          expand: true,
          cwd: 'assets/files/',
          src: ['**'],
          dest: 'build/files/'
        }]
      },
      misc: {
        files: [{
          src: ['favicon.png', 'robots.txt', 'sitemap.xml', '_headers.txt'],
          dest: 'build/'
        }]
      }
    },
    assemble: {
      options: {
        flatten: true,
        partials: ['templates/includes/**/*.hbs'],
        data: ['templates/data/*.{json,yml}']
      },
      site: {
        src: ['templates/*.hbs'],
        dest: './build',
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
      pagesJs: {
        files: ['<%= concat.pages.src %>'],
        tasks: ['concat:pages', 'babel:pages', 'uglify:pages']
      },
      helperJs: {
        files: ['<%= concat.helper.src %>'],
        tasks: ['concat:helper', 'babel:helper', 'uglify:helper']
      },
      appCss: {
        files: [
          'assets/sass/**/*.scss',
          '!assets/sass/resume.scss',
          '!assets/sass/pages.scss',
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
      invoiceCss: {
        files: [
          'assets/sass/invoice.scss',
          'assets/sass/components/invoice/**/*.scss'
        ],
        tasks: ['sass:invoice', 'postcss:invoice']
      },
      pagesCss: {
        files: [
          'assets/sass/modules/*.scss',
          'assets/sass/pages.scss',
        ],
        tasks: ['sass:pages', 'postcss:pages']
      },
      copyImages: {
        files: ['assets/images/**'],
        tasks: ['copy:images']
      },
      copyFiles: {
        files: ['assets/files/**'],
        tasks: ['copy:files']
      },
      copyMisc: {
        files: ['favicon.png', 'favicon-alice.png', 'robots.txt', 'sitemap.xml'],
        tasks: ['copy:misc']
      },
      assemble: {
        files: ['templates/**/*.{hbs,yml,json}'],
        tasks: ['assemble']
      },
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
  // Assemble
  grunt.loadNpmTasks('grunt-assemble');
  // Watch
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['build', 'watch']);
  grunt.registerTask('build', ['concat', 'babel', 'uglify', 'sass', 'postcss', 'copy', 'assemble']);
};
