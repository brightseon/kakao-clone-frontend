import gulp from 'gulp';
import ws from 'gulp-webserver';
import ts from 'gulp-typescript';
import uglify from 'gulp-uglify';
import babel from 'gulp-babel';
import htmlmin from 'gulp-htmlmin';
import htmlReplace from 'gulp-html-replace';
import del from 'del';
import inject from 'gulp-inject';
import es from 'event-stream';

const BUILD = 'build';
const PUBLIC = 'public';
const SRC = 'src';

const route = {
    build : `${ BUILD }`,
    html : {
        src : `${ PUBLIC }/index.html`,
        dest : `${ BUILD }/html`
    },
    ts : {
        src : `${ SRC }/index.tsx`,
        dest : `${ BUILD }/js`
    }
};

const webserver = () => gulp.src(route.html.dest, { allowEmpty : true }).pipe(ws({
    port : 3000,
    livereload : true,
    open : true,
    fallback : `${ route.build }/index.html`,
}));

const clean = () => del([`${ route.build }/`]);

const typescript = () => {
    const tsConfig = ts.createProject('tsconfig.json');

    return gulp
        .src(route.ts.src, { allowEmpty : true })
        .pipe(tsConfig())
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest(route.ts.dest));
    };
    
const html = () => 
gulp.src(route.html.src)
    .pipe(gulp.dest(route.html.dest));
    
    const fileInject = () => 
    gulp.src(`${ route.html.dest }/index.html`)
    .pipe(inject(gulp.src(`${ route.ts.dest }/index.js`), { relative : true }))
    .pipe(htmlmin({ collapseWhitespace : true }))
    .pipe(gulp.dest(route.build));
    
const watch = () => {
    gulp.watch(route.html.src, html);
    gulp.watch(route.ts.src, typescript);
};

const assest = gulp.series([html, typescript]);
const live = gulp.series([fileInject, webserver, watch]);

export const build = gulp.series([clean, assest]);
export const start = gulp.series([build, live]);