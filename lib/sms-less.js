var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var liveReload = require('gulp-livereload');

/**
 * Setup less gulp task
 *
 * @param {string} taskName Task name
 * @param {object} config   Task configuration
 */
module.exports = function smsLess(taskName, config) {
    gulp.task(taskName, function () {
        var paths = config.paths.include;

        config.paths.exclude.forEach(function (path) {
            paths.push('!' + path);
        });

        var task = gulp.src(paths);

        task = task.pipe(less());

        if ('single-file' === config.dest.type) {
            task = task.pipe(concat(config.dest.filename));
        }

        task.pipe(gulp.dest(config.dest.dir))
            .pipe(liveReload());
    });
};
