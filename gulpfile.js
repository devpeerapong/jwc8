var gulp = require('gulp');
var css = require('gulp-clean-css');
var html = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var bs = require('browser-sync').create();

gulp.task('js', function() {
    return gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('css', function() {
    return gulp.src('src/css/*.css')
        .pipe(css())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('html', function() {
    return gulp.src('src/*.php')
        .pipe(html({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
});

gulp.task('fonts', function() {
    return gulp.src('src/fonts/*.*')
        .pipe(gulp.dest(__dirname + '/dist/fonts'));
});

gulp.task('dev', function() {
    bs.watch("src/*.php").on("change", bs.reload);
    bs.watch("src/css/*.css").on("change", bs.stream);
    bs.init({
        proxy: "jwc8.dev"
    });
})

gulp.task('default', ['js', 'css', 'html', 'fonts']);
