var gulp = require('gulp');
var smsLess = require('./lib/sms-less.js');

/**
 * Initialize gulp tasks with SMS Gulp configuration
 *
 * @param {Array<Object>} configs SMS Gulp configuration
 */
module.exports = function sms(configs) {
    var tasks = ['watch'];

    configs.forEach(function (config, index) {
        var taskName = config.type + index;

        switch (config.type) {
            case 'less':
                smsLess(taskName, config);
                break;
        }

        tasks.push(taskName);
    });

    // Rerun the task when a file changes
    gulp.task('watch', function () {
        configs.forEach(function (config, index) {
            var paths = [].concat(config.paths.include, config.paths.exclude);
            var taskName = config.type + index;

            gulp.watch(paths, [taskName]);
        });
    });

    gulp.task('default', tasks);
};
