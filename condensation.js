var gulp = require('gulp'),
    vfs = require('vinyl-fs'),
    zip = require('gulp-zip');

module.exports.initialize = function(cb) {
    vfs.src('./cloudsploit-scans/**')
        .pipe(zip('cloudsploit-scans.zip'))
        .pipe(gulp.dest('./particles/assets'))
        .on('end', cb);
};
