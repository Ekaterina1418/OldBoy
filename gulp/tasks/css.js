module.exports = function () {
  $.gulp.task('css', function () {
    return $.gulp
      .src(['./src/css/**/*.*', './src/css/**/*.scss'])
      .pipe($.plumber())
      .pipe($.sourcemaps.init())
      .pipe($.sass())
      .pipe(
        $.autoprefixer({
          overrideBrowserslist: [
            'defaults',
            'not IE 11',
            'maintained node versions',
          ],
        })
      )
      .pipe(
        $.mincss({ compatibility: 'ie8', level: { 1: { specialComments: 0 } } })
      )
      .pipe($.rename({ suffix: '.min' }))
      .pipe($.replace('../../dest/', '../'))
      .pipe($.plumber.stop())
      .pipe($.sourcemaps.write('./maps/'))
      .pipe($.gulp.dest('./dest/css/'))
      .pipe($.debug({ title: 'css' }))
      .on('end', $.browsersync.reload)
  })
}
