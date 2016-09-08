const conf = require('./gulp.conf');
const glob = require('glob');

module.exports = function (config) {
  const configuration = {
    basePath: '../',
    singleRun: false,
    autoWatch: true,
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
    jspm: {
      loadFiles: glob.sync(conf.path.src('app/**/*.ts')),
      config: 'jspm.config.js',
      browser: 'jspm.test.js',
      // TODO: clean
      serveFiles: [].concat(
          glob.sync(conf.path.src('app/**/*.html'))
          ,glob.sync(conf.path.src('app/**/*.css')),
          'tsconfig.json'
      )
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
