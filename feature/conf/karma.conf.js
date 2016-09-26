const conf = require('./gulp.conf');
const glob = require('glob');

module.exports = function (config) {
    const configuration = {
        
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../',
        
        plugins: [
            require('karma-jspm'),
            require('karma-jasmine'),
            require('karma-junit-reporter'),
            require('karma-mocha-reporter'),
            require('karma-coverage'),
            require('karma-chrome-launcher')
        ],
    
        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: [
            'jspm',
            'jasmine'
        ],
    
        // list of files / patterns to load in the browser (loaded before SystemJS)
        files: [ ],
    
        proxies: {},
    
        // list of files to exclude
        exclude: [],
    
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: { },
        
        reporters: [ 'mocha'],
    
        // reporter options
        mochaReporter: {
            output: 'autowatch' //first run will have the full output and the next runs just output the summary and errors in mocha style
        },
    
    
        // web server port
        port: 9876,
    
        // enable / disable colors in the output (reporters and logs)
        colors: true,
    
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
    
        
        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: [
            'Chrome'
        ],
        
        // doc: https://www.npmjs.com/package/karma-jspm
        // reference config: https://github.com/gunnarlium/babel-jspm-karma-jasmine-istanbul
        jspm: {
            // stripExtension: false,
            // Path to your SystemJS/JSPM configuration file
            config: 'jspm.config.js',
            // browserConfig: 'conf/karma-jspm.shim.js',
            browser: 'conf/karma-test-shim.js',
            
            // Where to find jspm packages
            packages: "jspm_packages",
    
            // One use case for this is to only put test specs in loadFiles, and jspm will only load the src files when and if the test files require them.
            loadFiles: [].concat(  // load all tests
                glob.sync(conf.path.src('client/*.spec.ts')), // in case there are tests in the root folder
                glob.sync(conf.path.src('client/app/**/*.spec.ts'))
            ),
            
            // TODO: clean
            // Make additional files/a file pattern available for jspm to load, but not load it right away.
            serveFiles: [].concat(  // make sure that all files are available
                glob.sync(conf.path.src('client/app/**/*!(*.spec).ts')),
                glob.sync(conf.path.src('client/app/**/*.html')),
                glob.sync(conf.path.src('client/app/**/*.css')),
                glob.sync(conf.path.src('client/app/**/*.scss')),
                glob.sync(conf.path.root('typings/**/*.*')),
                glob.sync(conf.path.root('tsconfig.json'))
            ),
            
            // SystemJS configuration specifically for tests, added after your config file.
            // Good for adding test libraries and mock modules
            // paths: {}
        }
    };
    
    config.set(configuration);
};
