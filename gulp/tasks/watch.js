module.exports = function () {
  $.gulp.task('watch', function () {
    return new Promise((res, rej) => {
      $.watch(['./src/**/*.html'], $.gulp.series('html'))
      $.watch('./src/css/**/*.scss', $.gulp.series('css'))
      $.watch(
        ['./src/images/**/*.{jpg,jpeg,png,gif,svg}'],
        $.gulp.series('images')
      )
      $.watch('./src/js/**/*.js', $.gulp.series('scripts'))
      res()
    })
  })
}
