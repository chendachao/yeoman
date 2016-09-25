SystemJS.config({
  paths: {
    "github:*": "/base/jspm_packages/github/*",
    "npm:*": "/base/jspm_packages/npm/*"
  }
});

var angularLoaded = false;
var karmaLoaded = false;

__karma__.originalLoaded = __karma__.loaded;
__karma__.loaded = function () {
  karmaLoaded = true;
  syncStart();
};

function syncStart () {
  if (angularLoaded && karmaLoaded) {
    __karma__.originalLoaded();
  }
}

var depRegex = /(.*)(@angular\/)(.*)(@.*)/;

function mapAngularTestingBundles() {
  var systemMap = System.getConfig().map;
  for (var depKey in systemMap) {
    var depValue = systemMap[depKey];
    if (depRegex.test(depValue)) {
      var key = depValue.replace(depRegex, '$2$3/testing');
      var value = depValue.replace(depRegex, '$1$2$3$4/bundles/$3-testing.umd.js');
      systemMap[key] = value;
    }
  }
}

SystemJS.import('jspm.config.js')
  .then(mapAngularTestingBundles)
  .then(() => SystemJS.import('reflect-metadata'))
  .then(() => SystemJS.import('core-js/client/shim'))
  .then(() => SystemJS.import('zone.js/dist/zone'))
  .then(() => {
    return Promise.all([
      SystemJS.import('zone.js/dist/long-stack-trace-zone'),
      SystemJS.import('zone.js/dist/proxy'),
      SystemJS.import('zone.js/dist/async-test'),
      SystemJS.import('zone.js/dist/fake-async-test'),
      SystemJS.import('zone.js/dist/sync-test'),
      SystemJS.import('zone.js/dist/jasmine-patch'),
      SystemJS.import('@angular/common')
    ]);
  }).then(() => {
    return Promise.all([
      SystemJS.import('@angular/core/testing'),
      SystemJS.import('@angular/platform-browser-dynamic/testing')
    ]);
  }).then(providers => {
    const testing = providers[0];
    const testingBrowser = providers[1];

    testing.TestBed.initTestEnvironment(
      testingBrowser.BrowserDynamicTestingModule,
      testingBrowser.platformBrowserDynamicTesting()
    );

    angularLoaded = true;
    syncStart();
  });
