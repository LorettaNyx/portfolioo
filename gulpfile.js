const gulp = require('gulp');

const ts = require('gulp-typescript');

gulp.task('compile', () => {
    gulp.src(['./src/**/*.ts','!node_modules/**']).pipe(ts()).pipe(gulp.dest('/dist'));
// tslint:disable-next-line:eofline
});