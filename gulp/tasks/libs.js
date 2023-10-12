module.exports = function() {
    $.gulp.task("libs", function() {
        let modules = Object.keys($.packageJson.dependencies);
        let moduleFiles = modules.map(function(module) {
            return "./node_modules/" + module + "/**/*.{js,css}";
        });
        return $.gulp.src(moduleFiles, {base: "./node_modules/"})
            .pipe($.gulp.dest("./src/libs/"))
            .pipe($.gulp.src(["./src/libs/**/*.css", "./src/libs/**/*.js"]))
            .pipe($.gulp.dest("./dest/libs/"));
    });
};
