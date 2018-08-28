const del = require('del');
const gulp = require('gulp');
const browserSync = require('browser-sync');
const exec = require('child_process').exec;



const server = browserSync.create();
const clean = () => del(['_site']);

function jekyll(done) {
  return exec('bundle exec jekyll build');
}

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({ server: { baseDir: '_site' } });
  done();
}

const watch = () => gulp.watch(
  ['**/*.html', '**/*.scss', '!_site'], gulp.series(jekyll, reload));
const prod = gulp.series(clean, jekyll);
const dev = gulp.series(clean, jekyll, serve, watch);

exports.default = dev;
exports.production = prod;