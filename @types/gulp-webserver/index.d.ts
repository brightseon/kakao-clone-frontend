interface Options {
    host? : string;
    port? : number;
    path? : string;
    livereload? : boolean | string;
    directoryListing? : boolean | string;
    fallback? : string;
    open? : boolean | string;
    https? : boolean | object;
    middleware? : () => void | [];
    proxies? : [];
}

declare module 'gulp-webserver' {
    import ws from 'gulp-webserver';

    const config : (options : Options) => any;

    export default config;
}