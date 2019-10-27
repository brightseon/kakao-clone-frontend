import gulp from 'gulp';
import ws from 'gulp-webserver';
import gulpTs from 'gulp-typescript';
import babel from 'gulp-babel';
import del from 'del';

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

const webserver = () => gulp.src(`${ route.build }/`, { allowEmpty : true }).pipe(ws({
    port : 3000,
    livereload : true,
    open : true,
    fallback : `${ route.html.dest }`
}));

const clean = () => del([`${ route.build }/`]);

const html = () => gulp.src(route.html.src).pipe(gulp.dest(route.html.dest));

const ts = () => {
    const tsConfig = gulpTs.createProject('tsconfig.json');

    return gulp
        .src(route.ts.src, { allowEmpty : true })
        .pipe(tsConfig())
        // .pipe(babel())
        .pipe(gulp.dest(route.ts.dest));
};

const assest = gulp.series([html, ts]);

const live = gulp.parallel([webserver]);

export const build = gulp.series([clean, assest]);
export const start = gulp.series([build, live]);