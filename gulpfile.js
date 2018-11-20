var gulp = require('gulp');
var flatten = require('gulp-flatten');
var debug = require('gulp-debug');
var del = require('del')

gulp.task('clean', function() {
    del(['./flat/*.*', '!./flat/.gitkeep']).sync;
});

gulp.task('flat', function() {
    return gulp
        .src(['./source/**/*.{jpeg,pjpeg,jpg,png,svg}'])
        .pipe(debug({title: 'file found:'}))
        .pipe(flatten())
        .pipe(gulp.dest('./flat'));
});

gulp.task('default', ['clean', 'flat']);
