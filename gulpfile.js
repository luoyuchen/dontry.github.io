var gulp = require("gulp"),
    sass = require("gulp-sass"),
    livereload = require("gulp-livereload"),
    uglify = require("gulp-uglify"),
    del = require("del"),
    rename = require("gulp-rename"),
    cache = require("gulp-cache"),
    imagemin = require("gulp-imagemin"),
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
    return gulp.src("js/*[^min].js")
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest("dist/scripts"))
        .pipe(livereload());
});


gulp.task("imagemin", function(){
    return gulp.src("images/**/*.+(png|jpg|jpeg|gif|svg)")
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest("dist/images"));
});

gulp.task("clean", function(cb) {
    return del(["dist/styles/*"], cb), del(["dist/scripts/*"], cb);
});

gulp.task("watch:sass", function() {
    livereload.listen();
    gulp.watch("css/*.scss", ["sass"]);
});


gulp.task("dev", function() {
    console.log("rebuild the page");
    gulp.start("clean","sass", "minifycss", "uglify", "imagemin");
});

gulp.task("product", function(){
    console.log("production version");
    gulp.start("clean", "minifycss", "uglify");
});
