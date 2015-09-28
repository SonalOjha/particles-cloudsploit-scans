var git = require('gulp-git'),
gulp = require('gulp'),
vfs = require('vinyl-fs'),
zip = require('gulp-zip'),
exec = require('child_process').exec;

module.exports.initialize = function(cb) {
  git.updateSubmodule({ args: '--init' });
  var child = exec('npm install', {cwd: './cloudsploit-scans'}, function(error, stdout, stderr) {
    if (error) return cb(error);
  });

  vfs.src('./cloudsploit-scans/**')
  .pipe(zip('cloudsploit_scans.zip'))
  .pipe(gulp.dest('./particles/assets'))
  .on('end', cb);
};
