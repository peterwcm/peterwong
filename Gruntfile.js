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
                    'vendor/bower_components/foundation/js/vendor/modernizr.js',
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
        sass: {
            dist: {
                options: {
                    loadPath: ['vendor/bower_components/foundation/scss'],
                    style: 'compressed'
                },
                files: {
                    'build/css/app.min.css': 'assets/sass/app.scss'
                }
            }
        },
        watch: {
            js: {
                files: ['<%= concat.dist.src %>'],
                tasks: ['concat', 'babel', 'uglify']
            },
            css: {
                files: 'assets/sass/**/*.scss',
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
};
