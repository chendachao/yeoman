SystemJS.config({
  paths: {
    "github:*": "/base/jspm_packages/github/*",
    "npm:*": "/base/jspm_packages/npm/*"
  }
});
SystemJS.import('jspm.config.js').then(() => {
  return Promise.all([
    SystemJS.import('@angular/core/testing'),
    SystemJS.import('@angular/platform-browser-dynamic/testing')
  ]).then(providers => {
    const testing = providers[0];
    const testingBrowser = providers[1];

    testing.setBaseTestProviders(testingBrowser.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
      testingBrowser.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);
  });
});
