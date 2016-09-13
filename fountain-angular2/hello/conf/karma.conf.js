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
            require('karma-mocha-reporter'),
            require('karma-coverage')
        ],
    
        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: [
            'jspm',
            'jasmine'
        ],
    
        // list of files / patterns to load in the browser (loaded before SystemJS)
        files: [],
    
        // list of files to exclude
        exclude: [],
    
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'app/**/*!(*.spec).ts': ['coverage']
        },
    
    
        // test results reporter to use
        // possible values: 'dots', 'progress', 'spec', 'junit'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        // https://www.npmjs.com/package/karma-junit-reporter
        // https://www.npmjs.com/package/karma-spec-reporter
        reporters: ['mocha', 'coverage' ],
    
        // reporter options
        mochaReporter: {
            output: 'autowatch' //first run will have the full output and the next runs just output the summary and errors in mocha style
        },
    
        coverageReporter: {
            // map coverage to source typescript or es6 files.
            // remap: true,
            dir: 'reports/coverage',
            reporters: [
                // will generate html report
                {
                    type: 'html',
                    subdir: function (browser) {
                        return '' + browser;
                    },
                    includeAllSouurces: true
                },
                // will generate json report file and this report is loaded to
                // make sure failed coverage cause gulp to exit non-zero
                {
                    type: 'json',
                    subdir: '.',
                    file: 'coverage-final.json'
                },
                // will generate Icov report file and this report is published to coveralls
                {type: 'lcov'},
                // it does not generate any file but it will print coverage to console
                // a summary of the coverage
                // {type: 'text-summary'},

                // it does not generate any file but it will print coverage to console
                // a detail report of every file
                {type: 'text'}
            ]
        },
    
        // junitReporter: {
        //     outputDir: "reports/tests-unit/unit.xml",
        //     suite: "unit"
        // },
    
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
        
        // doc: https://www.npmjs.com/package/karma-jspm
        // reference config: https://github.com/gunnarlium/babel-jspm-karma-jasmine-istanbul
        jspm: {
            // By default the plugin will strip the file extension of the js files
            // stripExtension: false,
            
            // Path to your SystemJS/JSPM configuration file
            config: 'jspm.config.js',
            // browserConfig: 'conf/karma-jspm.shim.js',
            browser: 'conf/karma-jspm.shim.js',
    
            // dev: null,
            
            // node: null,
            
            // Where to find jspm packages
            packages: "jspm_packages",
    
            // adapter: 'angular2',
            
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
            // paths: {}
        },
    
        // // list of paths mappings
        // // can be used to map paths served by the Karma web server to /base/ content
        // // knowing that /base corresponds to the project root folder (i.e., where this config file is located)
        // proxies: {
        //     "/.tmp": "/base/.tmp" // without this, karma-jspm can't load the files
        // },
        // must go along with above, suppress annoying 404 warnings.
        proxies: {
            '/node_modules': '/base/node_modules',
            '/jspm.config.js': '/base/jspm.config.js',
            '/jspm_packages': '/base/jspm_packages/',
            '/src/': '/base/src/'
        }
    };
    
    config.set(configuration);
};
