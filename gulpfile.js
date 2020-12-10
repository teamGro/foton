const gulp = require("gulp");
const concat = require("gulp-concat");
var cssmin = require("gulp-cssmin");
const browserSync = require("browser-sync").create();
const htmlmin = require("gulp-htmlmin");
const del = require("del");
const rename = require("gulp-rename");
const minify = require("gulp-minify");
const autoprefixer = require('gulp-autoprefixer');


gulp.task("getAllCSS", () => {
    return (
        gulp
            .src("dist/styles/*.css")
            .pipe(concat("styles.css"))
            .pipe(autoprefixer({
                cascade: false
            }))
            .pipe(cssmin())
            .pipe(rename("styles.min.css"))
            .pipe(gulp.dest("public/styles"))
    );
});

gulp.task("clean", (done) => {
    del(["public/styles"]);
    del(["public/*.html"]);
    del(["public/scripts/script-min.js"]);
    done();
});

gulp.task("copy", () => {
    return gulp
        .src("dist/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("public"));
});

gulp.task("minifyJS", () => {
    return gulp
        .src(["./dist/scripts/script.js"])
        .pipe(minify())
        .pipe(gulp.dest("./public/scripts"))
})

gulp.task("watch", () => {
    gulp.watch("dist/styles/*.css", gulp.series("getAllCSS"));
    gulp.watch("dist/*.html", gulp.series("copy"));
    gulp.watch("dist/scripts/script.js", gulp.series("minifyJS"));
});

gulp.task(
    "build",
    gulp.series("clean", gulp.parallel("getAllCSS", "copy", "minifyJS"))
);

gulp.task("serve", () => {
    browserSync.init({
        server: "public",
        tunnel: true
    });

    gulp.watch("public/**/*.*").on("change", browserSync.reload);
});

gulp.task("dev", gulp.series("build", gulp.parallel("watch", "serve")));