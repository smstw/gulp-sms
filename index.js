var smsLess = require('./lib/sms-less.js');
var liveReload = require('gulp-livereload');

/**
 * Initialize gulp tasks with SMS Gulp configuration
 *
 * @param {Gulp}          gulp    Gulp instance
 * @param {Array<Object>} configs SMS Gulp configuration
 */
module.exports = function sms(gulp, configs) {
    var tasks = ['watch'];

    configs.forEach(function (config, index) {
        var taskName = config.type + index;

        switch (config.type) {
            case 'less':
                smsLess(gulp, taskName, config);
                break;
        }

        tasks.push(taskName);
    });

    // Rerun the task when a file changes
    gulp.task('watch', function () {
        liveReload.listen();

        configs.forEach(function (config, index) {
            var paths = [].concat(
                config.paths.include || [],
                config.paths.exclude || [],
                config.paths.watching || []
            );
            var taskName = config.type + index;

            gulp.watch(paths, [taskName]).on('change', liveReload.changed);
        });
    });

    gulp.task('default', tasks);
};
