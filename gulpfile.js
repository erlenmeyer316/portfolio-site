var gulp = require('gulp');
var del = require('del');
var panini = require('panini');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var folder = {
        src: 'app/',
        build: 'dist/'
    };

gulp.task('copy-assets', function(){
    var assetsUrl = 'assets/';
    var assetsRoot = folder.src + assetsUrl;
    var out = folder.build + 'assets/';

    del(out + '**/*.*');
    gulp.src(assetsRoot + '**/*.*')
        .pipe(gulp.dest(out));
});

gulp.task('copy-js', function(){
    var scriptsUrl = 'js/';
    var jsRoot = folder.src + scriptsUrl;
    var out = folder.build + 'js/';

    del(out + '**/*.*');
    gulp.src(jsRoot + '**/*.*')
        .pipe(gulp.dest(out));
});

gulp.task('html', function () {
    var url = 'html/';
    var htmlRoot = folder.src + url;
    var out = folder.build;

    return gulp.src(htmlRoot + 'pages/' + '**/*.html')
        .pipe(panini({
            root: htmlRoot + 'pages/',
            layouts: htmlRoot + 'layouts/',
            partials: htmlRoot + 'partials/',
            helpers: htmlRoot + 'helpers/',
            data: htmlRoot + 'data/'
        }))
        .pipe(gulp.dest(out));
});

gulp.task('styles', function() {
    var url = 'scss/';
    var scssRoot = folder.src + url;
    var out = folder.build;

    gulp.src(scssRoot + 'style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(out + 'styles/'));
});

gulp.task('resetPages', (done) => {
    panini.refresh();
    done();
});

gulp.task('serve', ['copy-assets', 'copy-js', 'styles', 'html'], function () {
    browserSync.init({
        server: './dist',
        port: 3000
    });
    gulp.watch( folder.src + 'assets/**/*.*', ['copy-assets']);
    gulp.watch( folder.src + 'js/**/*.*', ['copy-js']);
    gulp.watch(folder.src + 'scss/**/*.scss',['styles']);
    gulp.watch([folder.src + 'html/{pages,layouts,partials,helpers,data}/**/*.html'], ['resetPages', 'html', reload]);

});