var concat = require('gulp-concat');
var less = require('gulp-less');
var liveReload = require('gulp-livereload');
var util = require('gulp-util');

/**
 * Setup less gulp task
 *
 * @param {Gulp}   gulp     Gulp instance
 * @param {string} taskName Task name
 * @param {object} config   Task configuration
 */
module.exports = function smsLess(gulp, taskName, config) {
    var files = config.paths.include;

    config.paths.exclude.forEach(function (path) {
        files.push('!' + path);
    });

    gulp.task(taskName, function() {
        var task = gulp.src(files);

        task = task.pipe(less())
            .on('error', function(err) {
                util.log(util.colors.red('Error:'), err.message);
            });

        if ('single-file' === config.dest.type) {
            task = task.pipe(concat(config.dest.filename));
        }

        task.pipe(gulp.dest(config.dest.dir))
            .pipe(liveReload());
    });
};
