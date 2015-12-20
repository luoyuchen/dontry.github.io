var gulp = require("gulp"),
    sass = require("gulp-sass"),
    livereload = require("gulp-livereload"),
    uglify = require("gulp-uglify"),
    del = require("del"),
    rename = require("gulp-rename"),
    minifycss = require("gulp-minify-css");



gulp.task("sass", function() {
    return gulp.src("css/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("css"))
        .pipe(livereload());
});

gulp.task("minifycss", function(){
    return gulp.src("css/*.css")
        .pipe(minifycss({compatibility: "ie8"}))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest("dist/styles"))
        .pipe(livereload());
});

gulp.task("uglify", function() {
    return gulp.src("js/*.js")
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest("dist/scripts"))
        .pipe(livereload());
});


gulp.task("clean", function(cb) {
    return del(["dist/styles"], cb), del(["dist/scripts"], cb);
});

gulp.task("watch:sass", function() {
    livereload.listen();
    gulp.watch("styles/*.scss", ["sass"]);
});


gulp.task("dev", function() {
    console.log("rebuild the page");
    gulp.start("clean", "sass", "watch:sass", "minifycss");
});

gulp.task("product", function(){
    console.log("production version");
    gulp.start("clean", "minifycss", "uglify");
});
