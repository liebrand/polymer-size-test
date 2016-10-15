'use strict'

const gulp = require('gulp');
const vulcanize = require('gulp-vulcanize');
const crisper = require('gulp-crisper');
const clean = require('gulp-clean');
const size = require('gulp-size');
const file = require('gulp-file');

gulp.task('clean', function () {
    return gulp.src('dist/', {read: false})
        .pipe(clean());
});

gulp.task('write-deps', ['clean'], function() {
  // Lazy - assume final argument is the list of components
  let componentNames = process.argv.pop();
  let components = componentNames.split(' ').map((c) => c.trim());
  let imports = components.map((c) => {
    return '<link rel="import" href="../bower_components/'
      + c + '/' + c +'.html">'
  });

  return file('deps.html', imports.join('\n'), { src: true })
      .pipe(gulp.dest('dist'));
});

gulp.task('vulcanize', ['write-deps'], function() {

  return gulp.src('dist/deps.html')
    .pipe(vulcanize({
      stripExcludes: false,
      inlineScripts: true,
      stripComments: true
    }))
    .pipe(crisper())
    .pipe(size({
      title: 'File size:',
      showFiles: true
    }))
    .pipe(gulp.dest('dist/elements'));
  });

gulp.task('default', ['vulcanize']);
