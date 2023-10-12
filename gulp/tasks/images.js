module.exports = function() {
    $.gulp.task("images", function() {
        return $.gulp.src(["./src/images/**/*.{jpg,jpeg,png,gif,svg}"])
            .pipe($.newer("./dest/images/"))
            .pipe($.gulp.dest("./dest/images/"))
            .pipe($.debug({"title": "images"}))
            .on("end", $.browsersync.reload);
    });
};
