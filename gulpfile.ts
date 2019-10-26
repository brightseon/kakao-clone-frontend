import gulp from 'gulp';
import ws from 'gulp-webserver';

const route = {
    build : 'build'
};

const webserver = () => gulp.src(route.build).pipe(ws({
    port : 3000,
    livereload : true,
    open : true
}));


export default defaultTask;