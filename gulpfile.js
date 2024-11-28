"use strict";

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))
const rename = require('gulp-rename')
const cleanCSS = require('gulp-clean-css')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')

// Пути до папки dist
const path = {
    styles: {
        src: ['src/styles/**/*.sass', 'src/styles/**/*.scss'], 
        dest: 'dist/css/'
    },
    scripts: {
        src: 'src/scripts/**/*.js',
        dest: 'dist/js/'
    }
}

// Задача для обработки стилей
function styles(){
    return gulp.src(path.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(rename({
            basename: 'main',
            suffix: '.min'
        }))
        .pipe(gulp.dest(path.styles.dest))
}

// Задача для обработки скриптов
function scripts(){
    return gulp.src(path.scripts.src, {
        sourcemaps: true
    })
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(path.scripts.dest))
}


// Отслеживание измеений
function watch(){
    gulp.watch(path.styles.src, styles)
    gulp.watch(path.scripts.src, scripts)
}

// Задача билд
const build = gulp.series(gulp.parallel(styles, scripts), watch)

exports.styles = styles
exports.scripts = scripts
exports.watch = watch
exports.build = build
exports.default = build