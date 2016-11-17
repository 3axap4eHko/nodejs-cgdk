'use strict';

const sourceDir = './src';
const buildDir = './build';

const Del = require('del');
const Gulp = require('gulp');
const Babel = require('gulp-babel');
const Sourcemaps = require('gulp-sourcemaps');
const ESLlint = require('gulp-eslint');
const GWatch = require('gulp-watch');
const GExport = require('gulp-export');

const watchOptions = {
    verbose: true
};

function watch(path) {
    return Gulp.src(path)
        .pipe(GWatch(path, watchOptions));
}


Gulp.task('clean', cb => {
    return Del([buildDir], cb);
});

Gulp.task('export', () => {
    return watch([`${sourceDir}/**/*.js`, `!${sourceDir}/index.js`])
        .pipe(GExport({context: './src'}))
});

Gulp.task('js-compile', function() {
    return Gulp.src([`${sourceDir}/**/*.js`])
        // .pipe(ESLlint())
        // .pipe(ESLlint.format())
        // .pipe(ESLlint.failAfterError())
        .pipe(Sourcemaps.init())
        .pipe(Babel())
        .pipe(Sourcemaps.write('.'))
        .pipe(Gulp.dest(buildDir));
});

Gulp.task('files-copy', ['clean'], function() {
    return watch(['./package.json', './README.md'])
        .pipe(Gulp.dest(buildDir));
});

Gulp.watch(`${sourceDir}/**/*.js`, ['js-compile']);

Gulp.task('default', ['js-compile']);