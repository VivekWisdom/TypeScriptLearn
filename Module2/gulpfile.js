/**
 * @Author: Vivek Wisdom <vivek>
 * @Date:   2017-02-11T23:28:34+05:30
 * @Email:  vivek@wivivekwisdom.com
 * @Last modified by:   vivek
 * @Last modified time: 2017-02-11T23:28:34+05:30
 */

var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    tsPath = 'ts/*.ts',
    compilePath = 'js/compiled/',
    dist = 'js/dist/';


gulp.task('compressScripts', function() {
    gulp.src([compilePath + 'ts/*.js'])
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest(dist));
});

gulp.task('typescript', function() {
    var tsResult = gulp.src(tsPath)
    .pipe(ts({
      target:'ES5',
      declarationFiles:false,
      noResolve:true
    }));

    tsResult.dts.pipe(gulp.dest(compilePath+'/tsd'));
    return tsResult.js.pipe(gulp.dest(compilePath+'/ts'));
});

gulp.task('watch', function() {
    gulp.watch([tsPath], ['typescript']);
});

gulp.task('default', ['typescript', 'watch', 'compressScripts']);
