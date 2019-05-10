var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');

var SCSS = 'assets/scss/*.scss';
var JS = 'assets/old-js/*.js';
var IMG = 'assets/images/*';

var CSS_DEST = 'assets/css';
var JS_DEST = 'assets/js';
var IMG_DEST = 'assets/img/';

gulp.task('sass', function () {
    return gulp.src(SCSS)
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest(CSS_DEST));
});

gulp.task('js', function () {
    return gulp.src(JS)
        .pipe(uglify({ compress: true, mangle: false }))
        .pipe(gulp.dest(JS_DEST));
});

gulp.task('images', function () {
    return gulp.src(IMG)
        .pipe(imagemin())
        .pipe(gulp.dest(IMG_DEST));
});

gulp.task('watch', function () {
    gulp.watch(SCSS, gulp.series('sass'));
    gulp.watch(JS, gulp.series('js'));
    gulp.watch(IMG, gulp.series('images'));
});

gulp.task('default', gulp.parallel(['watch', 'sass', 'js', 'images']));