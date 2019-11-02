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
        dest : `${ BUILD }`
    },
    ts : {
        src : `${ SRC }/index.tsx`,
        dest : `${ BUILD }/js`
    }
};

const webserver = () => 
    gulp.src(route.html.dest, { allowEmpty : true })
    .pipe(ws({
        port : 3000,
        livereload : true,
        open : true
    }));

const clean = () => del([`${ route.build }/`]);

const getTsConfig = () => ts.createProject('tsconfig.json');

// const typescript = () => {
//     const tsConfig = ts.createProject('tsconfig.json');

//     return gulp.src(route.ts.src, { allowEmpty : true })
//         .pipe(tsConfig())
//         .pipe(babel())
//         // .pipe(uglify())
//         .pipe(gulp.dest(route.ts.dest));
// };

const typescript = () =>
    gulp.src(route.ts.src)
    // .pipe(getTsConfig())
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest(route.ts.dest));
    
// const html = () => 
//     gulp.src(`${ route.html.src }`, { allowEmpty : true })
//     .pipe(inject(gulp.src(`${ route.ts.dest }`)))
//     .pipe(htmlmin({ collapseWhitespace : true }))
//     .pipe(gulp.dest(route.html.dest));

const html = () => 
    gulp.src(route.html.src)
    .pipe(inject(es.merge(typescript())))
    // .pipe(inject(gulp.src(``), { relative : true }))
    // .pipe(htmlReplace({ js : { src : route.ts.dest, tpl : '<script type="text/javascript" src="%s"></script>' } }))
    .pipe(gulp.dest(route.html.dest))
    
const watch = () => {
    gulp.watch(route.html.src, html);
    gulp.watch(route.ts.src, typescript);
};

const assest = gulp.series([typescript]);
const jsInject = gulp.series([html]);
const live = gulp.series([webserver, watch]);

export const build = gulp.series([clean, assest, jsInject]);
export const start = gulp.series([build, live]);