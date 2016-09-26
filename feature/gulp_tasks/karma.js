const path = require('path');

const gulp = require('gulp');
const karma = require('karma');

gulp.task('karma:single-run', karmaSingleRun);
gulp.task('karma:auto-run', karmaAutoRun);

function karmaFinishHandler(done) {
  return failCount => {
    done(failCount ? new Error(`Failed ${failCount} tests.`) : null);
  };
}

function karmaRun(singleRun, done) {
  const configFile = path.join(process.cwd(), 'conf', 'karma.conf.js');
  const karmaServer = new karma.Server({
    configFile: configFile,
    singleRun: !!singleRun,
    autoWatch: !singleRun
  }, karmaFinishHandler(done));
  karmaServer.start();
}

function karmaSingleRun(done) {
  karmaRun(true, done);
}

function karmaAutoRun(done) {
  karmaRun(false, done);
}
