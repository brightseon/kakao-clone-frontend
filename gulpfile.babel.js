import gulp from 'gulp';
import ws from 'gulp-webserver';
import ts from 'gulp-typescript';
import uglify from 'gulp-uglify';
import babel from 'gulp-babel';
import htmlmin from 'gulp-htmlmin';
import htmlReplace from 'gulp-html-replace';
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

const webserver = () => gulp.src(route.html.dest, { allowEmpty : true }).pipe(ws({
    port : 3000,
    livereload : true,
    open : 'localhost:3000/build/index.html',
    fallback : `${ route.html.dest }/index.html`,
}));

const clean = () => del([`${ route.build }/`]);

const html = () => 
    gulp.src(route.html.src)
    .pipe(htmlmin({ collapseWhitespace : true }))
    .pipe(gulp.dest(route.html.dest))
    .pipe(htmlReplace({
        js : `${ route.ts.dest }/index.js`
    }))
    
const typescript = () => {
    const tsConfig = ts.createProject('tsconfig.json');

    return gulp
        .src(route.ts.src, { allowEmpty : true, sourcemaps : true })
        .pipe(tsConfig())
        .pipe(babel({
            presets : ["@babel/preset-env", "@babel/preset-react"],
            plugins : [
                "@babel/plugin-syntax-dynamic-import",
                "@babel/plugin-proposal-class-properties"
            ]
        }))
        .pipe(uglify())
        .pipe(gulp.dest(route.ts.dest));
};

const watch = () => {
    gulp.watch(route.html.src, html);
    gulp.watch(route.ts.src, typescript);
};

const assest = gulp.series([typescript, html]);

const live = gulp.parallel([webserver, watch]);

export const build = gulp.series([clean, assest]);
export const start = gulp.series([build, live]);