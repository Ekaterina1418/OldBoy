global.$ = {
    gulp: require("gulp"),
    browsersync: require("browser-sync").create(),
    packageJson: require('./package.json'),
    autoprefixer: require("gulp-autoprefixer"),
    babel: require("gulp-babel"),
    uglify: require("gulp-uglify"),
    concat: require("gulp-concat"),
    sass: require("gulp-sass")(require('sass')),
    mincss: require("gulp-clean-css"),
    sourcemaps: require("gulp-sourcemaps"),
    rename: require("gulp-rename"),
    replace: require("gulp-replace"),
    rigger: require("gulp-rigger"),
    newer: require("gulp-newer"),
    plumber: require("gulp-plumber"),
    debug: require("gulp-debug"),
    watch: require("gulp-watch"),
    clean: require("gulp-clean"),

    path: {
        tasks: require("./gulp/config.js")
    }
};

$.path.tasks.forEach(function(taskPath) {
    require(taskPath)();
});

// BUILD
$.gulp.task("default",
    $.gulp.series("clean", "libs",
    $.gulp.parallel("html", "css", "images", "fonts", "scripts", "server_conf"),
    $.gulp.parallel("watch", "serve")
));
