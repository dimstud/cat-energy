var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp.src('./source/sass/style.scss')
  .pipe(sass())
  .pipe(gulp.dest('./source/css/'))
});

gulp.task('sass:watch', function() {
  gulp.watch('./source/sass/style.scss', ['sass']);
});
