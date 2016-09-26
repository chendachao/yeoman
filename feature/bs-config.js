module.exports = {
    injectChanges: false, // workaround for Angular 2 styleUrls loading
    files: ['./**/*.{html,htm,css,scss,js,ts}'],
    watchOptions: {
        ignored: ['node_modules', 'jspm_packages']  // TODO: I'm not sure this is right or not, https://github.com/johnpapa/lite-server/blob/master/lib/config-defaults.js#L12
    }
};