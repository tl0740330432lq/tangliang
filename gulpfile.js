// 引用gulp插件
var gulp = require('gulp');



var sass = require('gulp-sass');



// 监听html，js， 更改内容，更新内容
gulp.task('watch', function(){
    gulp.watch( 'js/es6.js', ['babel']);
    gulp.watch('index.html', ['html']);
    gulp.watch('sass/common.scss', ['sass'] )
})
gulp.task('html', function() {
    gulp.src('index.html')
    .pipe(gulp.dest('build'))
    .pipe(connect.reload())
})


gulp.task('sass', function() {
    gulp.src('sass/common.scss')
    .pipe(sass())
    .pipe(gulp.dest('sass'))
    .pipe(connect.reload())
})