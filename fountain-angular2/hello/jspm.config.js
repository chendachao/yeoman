SystemJS.config({
  packages: {
    'src': {
      'defaultExtension': 'ts'
    },
    'typings': {
      'defaultExtension': 'ts'
    }
  },
  transpiler: 'ts',
  typescriptOptions: {
    'sourceMap': true,
    'emitDecoratorMetadata': true,
    'experimentalDecorators': true,
    'removeComments': false,
    'noImplicitAny': false
  }
});

SystemJS.config({
  packageConfigPaths: [
    'npm:@*/*.json',
    'npm:*.json',
    'github:*/*.json'
  ],
  map: {
    '@angular/common': 'npm:@angular/common@2.0.0-rc.4',
    '@angular/compiler': 'npm:@angular/compiler@2.0.0-rc.4',
    '@angular/core': 'npm:@angular/core@2.0.0-rc.4',
    '@angular/forms': 'npm:@angular/forms@0.2.0',
    '@angular/http': 'npm:@angular/http@2.0.0-rc.4',
    '@angular/platform-browser': 'npm:@angular/platform-browser@2.0.0-rc.4',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@2.0.0-rc.4',
    '@angular/router': 'npm:@angular/router@3.0.0-beta.2',
    'ace': 'github:ajaxorg/ace-builds@1.2.5',
    'bootstrap': 'github:twbs/bootstrap@3.3.7',
    'core-js': 'npm:core-js@2.4.1',
    'es6-shim': 'npm:es6-shim@0.35.1',
    'font-awesome': 'npm:font-awesome@4.6.3',
    'fs': 'github:jspm/nodelibs-fs@0.2.0-alpha',
    'jquery': 'npm:jquery@3.1.0',
    'os': 'github:jspm/nodelibs-os@0.2.0-alpha',
    'path': 'github:jspm/nodelibs-path@0.2.0-alpha',
    'process': 'github:jspm/nodelibs-process@0.2.0-alpha',
    'reflect-metadata': 'npm:reflect-metadata@0.1.3',
    'rxjs': 'npm:rxjs@5.0.0-beta.6',
    'ts': 'github:frankwallis/plugin-typescript@4.0.16',
    'ts-helpers': 'npm:ts-helpers@1.1.1',
    'typescript': 'npm:typescript@1.8.10',
    'zone.js': 'npm:zone.js@0.6.17'
  },
  packages: {
    'github:frankwallis/plugin-typescript@4.0.16': {
      'map': {
        'typescript': 'npm:typescript@1.8.10'
      }
    },
    'github:jspm/nodelibs-os@0.2.0-alpha': {
      'map': {
        'os-browserify': 'npm:os-browserify@0.2.1'
      }
    },
    'github:twbs/bootstrap@3.3.7': {
      'map': {
        'jquery': 'npm:jquery@3.1.0'
      }
    },
    'npm:font-awesome@4.6.3': {
      'map': {
        'css': 'github:systemjs/plugin-css@0.1.27'
      }
    }
  }
});
