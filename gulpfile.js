var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
var crisper = require('gulp-crisper');

gulp.task('vulcanize', function() {
  return gulp.src('elements/elements.html')
    .pipe(vulcanize({
      stripExcludes: false,
      inlineScripts: true,
      stripComments: true
    }))
    .pipe(crisper())
    .pipe(gulp.dest('dist/elements'));
  });

gulp.task('default', ['vulcanize']);
