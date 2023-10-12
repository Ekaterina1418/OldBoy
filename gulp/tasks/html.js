module.exports = function () {
  $.gulp.task('html', function () {
    return $.gulp
      .src(['./src/**/*.html', './src/*.html', './src/components/*.html'])
      .pipe($.rigger())
      .pipe($.replace('../dest/', '../'))
      .pipe($.gulp.dest('./dest/'))
      .pipe($.debug({ title: 'html' }))
      .on('end', $.browsersync.reload)
  })
}
