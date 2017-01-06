module.exports = grunt => {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    loadPath: ['vendor/bower_components/foundation/scss'],
                    style: 'compressed'
                },
                files: {
                    'compiled/css/app-min.css' : 'assets/sass/app.scss'
                }
            }
        },
        watch: {
            css: {
                files: 'assets/sass/**/*.scss',
                tasks: ['sass']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
};
