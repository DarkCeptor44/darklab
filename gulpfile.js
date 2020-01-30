const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const terser = require('gulp-terser');
const del = require('del');

const SCSS = 'assets/scss/*.scss';
const JS = 'assets/old-js/*.js';
const IMG = 'assets/images/*';

const CSS_DEST = 'assets/css';
const JS_DEST = 'assets/js';
const IMG_DEST = 'assets/img/';

gulp.task('buildsass', function () {
    return gulp.src(SCSS)
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest(CSS_DEST));
});

gulp.task('buildjs', function () {
    return gulp.src(JS)
        //.pipe(uglify({ compress: true, mangle: false }))
        .pipe(terser({
            keep_fnames: true,
            mangle: false
        }))
        .pipe(gulp.dest(JS_DEST));
});

gulp.task('buildimages', function () {
    return gulp.src(IMG)
        .pipe(imagemin())
        .pipe(gulp.dest(IMG_DEST));
});

gulp.task('cleansass', function () {
    return del([CSS_DEST]);
});

gulp.task('cleanjs', function () {
    return del([JS_DEST]);
});

gulp.task('cleanimages', function () {
    return del([IMG_DEST]);
});

gulp.task('clean', gulp.parallel(['cleansass', 'cleanjs', 'cleanimages']));
gulp.task('sass', gulp.series(['cleansass', 'buildsass']));
gulp.task('js', gulp.series(['cleanjs', 'buildjs']));
gulp.task('images', gulp.series(['cleanimages', 'buildimages']));

gulp.task('watch', function () {
    gulp.watch(SCSS, gulp.series('sass'));
    gulp.watch(JS, gulp.series('js'));
    gulp.watch(IMG, gulp.series('images'));
});

gulp.task('default', gulp.parallel(['sass', 'js', 'images']));