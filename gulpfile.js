const gulp = require("gulp");
const { exec } = require('child_process');
gulp.task('push', async function () {
    console.log('Push to GAS server');
    exec('clasp push');
})
gulp.task('watch', async function () {
    const watcher = gulp.watch(['app/*.gs', 'app/*.html', 'app/*.js']);

    watcher.on('change', function (path, stats) {
        exec('gulp push');
    });

    watcher.on('add', function (path, stats) {
        exec('gulp push');
    });

    watcher.on('unlink', function (path, stats) {
        exec('gulp push');
    });
})
