const conf = require('./gulp.conf');
const glob = require('glob');

module.exports = function (config) {
    const configuration = {
        basePath: '../',
        
        // these settings don't make sense any more, cos have already override in gulp karma task
        singleRun: true,
        autoWatch: false,
        
        
        logLevel: 'INFO',
        junitReporter: {
            outputDir: "target/reports/tests-unit/unit.xml",
            suite: "unit"
        },
        browsers: [
            'Chrome'
        ],
        frameworks: [
            'jasmine',
            'jspm'
        ],
        
        // doc: https://www.npmjs.com/package/karma-jspm
        // reference config: https://github.com/gunnarlium/babel-jspm-karma-jasmine-istanbul
        jspm: {
            // Path to your SystemJS/JSPM configuration file
            config: 'jspm.config.js',
            browser: 'jspm.test.js',
            
            // Where to find jspm packages
            //packages: "jspm_packages",
            
            // One use case for this is to only put test specs in loadFiles, and jspm will only load the src files when and if the test files require them.
            loadFiles: [].concat(  // load all tests
                glob.sync(conf.path.src('*.spec.ts')), // in case there are tests in the root folder
                glob.sync(conf.path.src('app/**/*.spec.ts'))
            ),
            
            // TODO: clean
            // Make additional files/a file pattern available for jspm to load, but not load it right away.
            serveFiles: [].concat(  // make sure that all files are available
                glob.sync(conf.path.src('app/**/!(*.spec).ts')),
                glob.sync(conf.path.src('app/**/*.html')),
                glob.sync(conf.path.src('app/**/*.css')),
                glob.sync(conf.path.src('../tsconfig.json'))
            ),
            
            // SystemJS configuration specifically for tests, added after your config file.
            // Good for adding test libraries and mock modules
            paths: {}
        },
        plugins: [
            require('karma-jspm'),
            require('karma-jasmine'),
            require('karma-junit-reporter'),
            require('karma-spec-reporter'),
            require('karma-coverage'),
            require('karma-chrome-launcher')
        ],
        reporters: ['spec', 'junit']
    };
    
    config.set(configuration);
};
