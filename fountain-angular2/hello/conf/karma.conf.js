const conf = require('./gulp.conf');
const glob = require('glob');

module.exports = function (config) {
    const configuration = {
        
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../',
        
        plugins: [
            require('karma-jspm'),
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-junit-reporter'),
            require('karma-spec-reporter'),
            require('karma-coverage')
        ],
    
        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: [
            'jasmine',
            'jspm'
        ],
    
        // list of files / patterns to load in the browser (loaded before SystemJS)
        files: [],
    
        // list of files to exclude
        exclude: [],
    
        // // list of paths mappings
        // // can be used to map paths served by the Karma web server to /base/ content
        // // knowing that /base corresponds to the project root folder (i.e., where this config file is located)
        // proxies: {
        //     "/.tmp": "/base/.tmp" // without this, karma-jspm can't load the files
        // },
    
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'app/**/!(*.spec).ts': [ 'coverage']
        },
    
        
        // test results reporter to use
        // possible values: 'dots', 'progress', 'spec', 'junit'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        // https://www.npmjs.com/package/karma-junit-reporter
        // https://www.npmjs.com/package/karma-spec-reporter
        reporters: ['spec', 'junit', 'coverage'],
    
        // web server port
        port: 9876,
    
        // enable / disable colors in the output (reporters and logs)
        colors: true,
    
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
    
        // //these settings don't make sense any more, cos have already override in gulp karma task
        // // Continuous Integration mode
        // // if true, Karma captures browsers, runs the tests and exits
        // singleRun: true,
        // // enable / disable watching file and executing tests whenever any file changes
        // autoWatch: false,
        
        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: [
            'Chrome',
            // "PhantomJS"
            //"Firefox",
            //"PhantomJS",
            //"IE"
        ],
        
        coverageReporter: {
            
            dir: 'target/reports/coverage',
            reporters: [
                {
                    type: 'html',
                    subdir: function (browser) {
                        return '' + browser;
                    },
                    includeAllSouurces: true
                }
            ]
        },
    
        junitReporter: {
            outputDir: "target/reports/tests-unit/unit.xml",
            suite: "unit"
        },
        
        // doc: https://www.npmjs.com/package/karma-jspm
        // reference config: https://github.com/gunnarlium/babel-jspm-karma-jasmine-istanbul
        jspm: {
            // Path to your SystemJS/JSPM configuration file
            config: 'jspm.config.js',
            browser: 'conf/karma-jspm.shim.js',
            
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
                glob.sync(conf.path.src('app/**/*!(*.spec).ts')),
                glob.sync(conf.path.src('app/**/*.html')),
                glob.sync(conf.path.src('app/**/*.css')),
                glob.sync(conf.path.src('app/**/*.scss')),
                glob.sync(conf.path.root('typings/**/*.*')),
                glob.sync(conf.path.root('tsconfig.json'))
            ),
            
            // SystemJS configuration specifically for tests, added after your config file.
            // Good for adding test libraries and mock modules
            paths: {}
        }
       
    };
    
    config.set(configuration);
};
