//* Importando o Gulp:
const gulp = require('gulp')
//* Importando o SASS & Sourcemaps para SASS:
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')
//* Importando o Uglify & Obfuscate para JS:
const uglify = require('gulp-uglify')
const obfuscate = require('gulp-obfuscate')
//* Importando o Imagemin para Imagens:
const imagemin = require('gulp-imagemin')

// Tarefa para compilar o SASS:
function SassComp() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
}

// Tarefa para minificar o Javascript:
function minJS() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

// Tarefa para comprimir as imagens:
function compressedImg() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

//* Exportando as tarefas:

exports.watch = function () {
    gulp.watch('./source/styles/main.scss', { ignoreInitial: false }, gulp.series(SassComp))
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(minJS))
    gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(compressedImg))
}
