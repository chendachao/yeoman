SystemJS.config({
  devConfig: {
    'map': {
      'babel-plugin-angular2-annotations': 'npm:babel-plugin-angular2-annotations@5.1.0',
      'babel-plugin-transform-decorators-legacy': 'npm:babel-plugin-transform-decorators-legacy@1.3.4',
      'babel-plugin-transform-es2015-typeof-symbol': 'npm:babel-plugin-transform-es2015-typeof-symbol@6.8.0',
      'babel-plugin-transform-class-properties': 'npm:babel-plugin-transform-class-properties@6.11.5',
      'babel-plugin-transform-flow-strip-types': 'npm:babel-plugin-transform-flow-strip-types@6.14.0',
      'fs': 'github:jspm/nodelibs-fs@0.2.0-alpha',
      'path': 'github:jspm/nodelibs-path@0.2.0-alpha',
      'assert': 'github:jspm/nodelibs-assert@0.2.0-alpha',
      'buffer': 'github:jspm/nodelibs-buffer@0.2.0-alpha',
      'util': 'github:jspm/nodelibs-util@0.2.0-alpha',
      'stream': 'github:jspm/nodelibs-stream@0.2.0-alpha',
      'crypto': 'github:jspm/nodelibs-crypto@0.2.0-alpha',
      'events': 'github:jspm/nodelibs-events@0.2.0-alpha',
      'vm': 'github:jspm/nodelibs-vm@0.2.0-alpha',
      'constants': 'github:jspm/nodelibs-constants@0.2.0-alpha',
      'child_process': 'github:jspm/nodelibs-child_process@0.2.0-alpha',
      'string_decoder': 'github:jspm/nodelibs-string_decoder@0.2.0-alpha'
    },
    'packages': {
      'npm:babel-plugin-transform-decorators-legacy@1.3.4': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-template': 'npm:babel-template@6.15.0',
          'babel-plugin-syntax-decorators': 'npm:babel-plugin-syntax-decorators@6.13.0'
        }
      },
      'npm:babel-plugin-transform-es2015-typeof-symbol@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6'
        }
      },
      'npm:babel-plugin-transform-flow-strip-types@6.14.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-plugin-syntax-flow': 'npm:babel-plugin-syntax-flow@6.13.0'
        }
      },
      'npm:babel-plugin-transform-class-properties@6.11.5': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-helper-function-name': 'npm:babel-helper-function-name@6.8.0',
          'babel-plugin-syntax-class-properties': 'npm:babel-plugin-syntax-class-properties@6.13.0'
        }
      },
      'npm:babel-template@6.15.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-types': 'npm:babel-types@6.15.0',
          'babel-traverse': 'npm:babel-traverse@6.15.0',
          'lodash': 'npm:lodash@4.15.0',
          'babylon': 'npm:babylon@6.9.1'
        }
      },
      'npm:babel-helper-function-name@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-template': 'npm:babel-template@6.15.0',
          'babel-types': 'npm:babel-types@6.15.0',
          'babel-traverse': 'npm:babel-traverse@6.15.0',
          'babel-helper-get-function-arity': 'npm:babel-helper-get-function-arity@6.8.0'
        }
      },
      'npm:babel-plugin-angular2-annotations@5.1.0': {
        'map': {
          'babel-generator': 'npm:babel-generator@6.14.0'
        }
      },
      'npm:babel-runtime@6.11.6': {
        'map': {
          'core-js': 'npm:core-js@2.4.1',
          'regenerator-runtime': 'npm:regenerator-runtime@0.9.5'
        }
      },
      'npm:babel-generator@6.14.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-types': 'npm:babel-types@6.15.0',
          'lodash': 'npm:lodash@4.15.0',
          'detect-indent': 'npm:detect-indent@3.0.1',
          'source-map': 'npm:source-map@0.5.6',
          'babel-messages': 'npm:babel-messages@6.8.0'
        }
      },
      'npm:babel-types@6.15.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'lodash': 'npm:lodash@4.15.0',
          'to-fast-properties': 'npm:to-fast-properties@1.0.2',
          'esutils': 'npm:esutils@2.0.2'
        }
      },
      'npm:babel-traverse@6.15.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-types': 'npm:babel-types@6.15.0',
          'lodash': 'npm:lodash@4.15.0',
          'babylon': 'npm:babylon@6.9.1',
          'debug': 'npm:debug@2.2.0',
          'globals': 'npm:globals@8.18.0',
          'invariant': 'npm:invariant@2.2.1',
          'babel-messages': 'npm:babel-messages@6.8.0',
          'babel-code-frame': 'npm:babel-code-frame@6.11.0'
        }
      },
      'npm:babel-helper-get-function-arity@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-types': 'npm:babel-types@6.15.0'
        }
      },
      'npm:babylon@6.9.1': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6'
        }
      },
      'npm:babel-messages@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6'
        }
      },
      'npm:detect-indent@3.0.1': {
        'map': {
          'get-stdin': 'npm:get-stdin@4.0.1',
          'repeating': 'npm:repeating@1.1.3',
          'minimist': 'npm:minimist@1.2.0'
        }
      },
      'npm:babel-code-frame@6.11.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'esutils': 'npm:esutils@2.0.2',
          'js-tokens': 'npm:js-tokens@2.0.0',
          'chalk': 'npm:chalk@1.1.3'
        }
      },
      'npm:invariant@2.2.1': {
        'map': {
          'loose-envify': 'npm:loose-envify@1.2.0'
        }
      },
      'npm:debug@2.2.0': {
        'map': {
          'ms': 'npm:ms@0.7.1'
        }
      },
      'github:jspm/nodelibs-buffer@0.2.0-alpha': {
        'map': {
          'buffer-browserify': 'npm:buffer@4.9.1'
        }
      },
      'npm:loose-envify@1.2.0': {
        'map': {
          'js-tokens': 'npm:js-tokens@1.0.3'
        }
      },
      'npm:buffer@4.9.1': {
        'map': {
          'ieee754': 'npm:ieee754@1.1.6',
          'isarray': 'npm:isarray@1.0.0',
          'base64-js': 'npm:base64-js@1.1.2'
        }
      },
      'npm:repeating@1.1.3': {
        'map': {
          'is-finite': 'npm:is-finite@1.0.1'
        }
      },
      'npm:chalk@1.1.3': {
        'map': {
          'escape-string-regexp': 'npm:escape-string-regexp@1.0.5',
          'strip-ansi': 'npm:strip-ansi@3.0.1',
          'has-ansi': 'npm:has-ansi@2.0.0',
          'supports-color': 'npm:supports-color@2.0.0',
          'ansi-styles': 'npm:ansi-styles@2.2.1'
        }
      },
      'npm:is-finite@1.0.1': {
        'map': {
          'number-is-nan': 'npm:number-is-nan@1.0.0'
        }
      },
      'npm:has-ansi@2.0.0': {
        'map': {
          'ansi-regex': 'npm:ansi-regex@2.0.0'
        }
      },
      'npm:strip-ansi@3.0.1': {
        'map': {
          'ansi-regex': 'npm:ansi-regex@2.0.0'
        }
      },
      'github:jspm/nodelibs-stream@0.2.0-alpha': {
        'map': {
          'stream-browserify': 'npm:stream-browserify@2.0.1'
        }
      },
      'github:jspm/nodelibs-crypto@0.2.0-alpha': {
        'map': {
          'crypto-browserify': 'npm:crypto-browserify@3.11.0'
        }
      },
      'npm:stream-browserify@2.0.1': {
        'map': {
          'readable-stream': 'npm:readable-stream@2.1.5',
          'inherits': 'npm:inherits@2.0.1'
        }
      },
      'npm:crypto-browserify@3.11.0': {
        'map': {
          'inherits': 'npm:inherits@2.0.1',
          'create-ecdh': 'npm:create-ecdh@4.0.0',
          'pbkdf2': 'npm:pbkdf2@3.0.4',
          'public-encrypt': 'npm:public-encrypt@4.0.0',
          'create-hmac': 'npm:create-hmac@1.1.4',
          'diffie-hellman': 'npm:diffie-hellman@5.0.2',
          'randombytes': 'npm:randombytes@2.0.3',
          'browserify-sign': 'npm:browserify-sign@4.0.0',
          'browserify-cipher': 'npm:browserify-cipher@1.0.0',
          'create-hash': 'npm:create-hash@1.1.2'
        }
      },
      'npm:readable-stream@2.1.5': {
        'map': {
          'isarray': 'npm:isarray@1.0.0',
          'inherits': 'npm:inherits@2.0.1',
          'process-nextick-args': 'npm:process-nextick-args@1.0.7',
          'core-util-is': 'npm:core-util-is@1.0.2',
          'string_decoder': 'npm:string_decoder@0.10.31',
          'util-deprecate': 'npm:util-deprecate@1.0.2',
          'buffer-shims': 'npm:buffer-shims@1.0.0'
        }
      },
      'npm:pbkdf2@3.0.4': {
        'map': {
          'create-hmac': 'npm:create-hmac@1.1.4'
        }
      },
      'npm:public-encrypt@4.0.0': {
        'map': {
          'randombytes': 'npm:randombytes@2.0.3',
          'create-hash': 'npm:create-hash@1.1.2',
          'bn.js': 'npm:bn.js@4.11.6',
          'browserify-rsa': 'npm:browserify-rsa@4.0.1',
          'parse-asn1': 'npm:parse-asn1@5.0.0'
        }
      },
      'npm:create-hmac@1.1.4': {
        'map': {
          'inherits': 'npm:inherits@2.0.1',
          'create-hash': 'npm:create-hash@1.1.2'
        }
      },
      'npm:diffie-hellman@5.0.2': {
        'map': {
          'randombytes': 'npm:randombytes@2.0.3',
          'bn.js': 'npm:bn.js@4.11.6',
          'miller-rabin': 'npm:miller-rabin@4.0.0'
        }
      },
      'npm:create-ecdh@4.0.0': {
        'map': {
          'bn.js': 'npm:bn.js@4.11.6',
          'elliptic': 'npm:elliptic@6.3.1'
        }
      },
      'npm:browserify-sign@4.0.0': {
        'map': {
          'create-hmac': 'npm:create-hmac@1.1.4',
          'bn.js': 'npm:bn.js@4.11.6',
          'browserify-rsa': 'npm:browserify-rsa@4.0.1',
          'create-hash': 'npm:create-hash@1.1.2',
          'elliptic': 'npm:elliptic@6.3.1',
          'parse-asn1': 'npm:parse-asn1@5.0.0',
          'inherits': 'npm:inherits@2.0.1'
        }
      },
      'npm:create-hash@1.1.2': {
        'map': {
          'inherits': 'npm:inherits@2.0.1',
          'sha.js': 'npm:sha.js@2.4.5',
          'ripemd160': 'npm:ripemd160@1.0.1',
          'cipher-base': 'npm:cipher-base@1.0.2'
        }
      },
      'npm:elliptic@6.3.1': {
        'map': {
          'bn.js': 'npm:bn.js@4.11.6',
          'inherits': 'npm:inherits@2.0.1',
          'brorand': 'npm:brorand@1.0.5',
          'hash.js': 'npm:hash.js@1.0.3'
        }
      },
      'npm:browserify-rsa@4.0.1': {
        'map': {
          'bn.js': 'npm:bn.js@4.11.6',
          'randombytes': 'npm:randombytes@2.0.3'
        }
      },
      'npm:parse-asn1@5.0.0': {
        'map': {
          'pbkdf2': 'npm:pbkdf2@3.0.4',
          'create-hash': 'npm:create-hash@1.1.2',
          'asn1.js': 'npm:asn1.js@4.8.0',
          'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
          'browserify-aes': 'npm:browserify-aes@1.0.6'
        }
      },
      'npm:miller-rabin@4.0.0': {
        'map': {
          'bn.js': 'npm:bn.js@4.11.6',
          'brorand': 'npm:brorand@1.0.5'
        }
      },
      'npm:browserify-cipher@1.0.0': {
        'map': {
          'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
          'browserify-des': 'npm:browserify-des@1.0.0',
          'browserify-aes': 'npm:browserify-aes@1.0.6'
        }
      },
      'npm:sha.js@2.4.5': {
        'map': {
          'inherits': 'npm:inherits@2.0.1'
        }
      },
      'npm:asn1.js@4.8.0': {
        'map': {
          'bn.js': 'npm:bn.js@4.11.6',
          'inherits': 'npm:inherits@2.0.1',
          'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
        }
      },
      'npm:evp_bytestokey@1.0.0': {
        'map': {
          'create-hash': 'npm:create-hash@1.1.2'
        }
      },
      'npm:browserify-des@1.0.0': {
        'map': {
          'inherits': 'npm:inherits@2.0.1',
          'cipher-base': 'npm:cipher-base@1.0.2',
          'des.js': 'npm:des.js@1.0.0'
        }
      },
      'npm:cipher-base@1.0.2': {
        'map': {
          'inherits': 'npm:inherits@2.0.1'
        }
      },
      'npm:browserify-aes@1.0.6': {
        'map': {
          'create-hash': 'npm:create-hash@1.1.2',
          'inherits': 'npm:inherits@2.0.1',
          'cipher-base': 'npm:cipher-base@1.0.2',
          'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
          'buffer-xor': 'npm:buffer-xor@1.0.3'
        }
      },
      'npm:hash.js@1.0.3': {
        'map': {
          'inherits': 'npm:inherits@2.0.1'
        }
      },
      'npm:des.js@1.0.0': {
        'map': {
          'inherits': 'npm:inherits@2.0.1',
          'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
        }
      },
      'github:jspm/nodelibs-string_decoder@0.2.0-alpha': {
        'map': {
          'string_decoder-browserify': 'npm:string_decoder@0.10.31'
        }
      }
    }
  },
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
    '@angular/http': 'npm:@angular/http@2.0.0-rc.4',
    '@angular/platform-browser': 'npm:@angular/platform-browser@2.0.0-rc.4',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@2.0.0-rc.4',
    '@angular/router': 'npm:@angular/router@3.0.0-beta.2',
    '@ngrx/store': 'npm:@ngrx/store@1.5.0',
    'css': 'github:systemjs/plugin-css@0.1.27',
    'es6-shim': 'npm:es6-shim@0.35.1',
    'os': 'github:jspm/nodelibs-os@0.2.0-alpha',
    'process': 'github:jspm/nodelibs-process@0.2.0-alpha',
    'reflect-metadata': 'npm:reflect-metadata@0.1.3',
    'rxjs': 'npm:rxjs@5.0.0-beta.8',
    'todomvc-app-css': 'npm:todomvc-app-css@2.0.6',
    'ts': 'github:frankwallis/plugin-typescript@4.0.16',
    'zone.js': 'npm:zone.js@0.6.17'
  },
  packages: {
    'npm:rxjs@5.0.0-beta.8': {
      'map': {
        'symbol-observable': 'npm:symbol-observable@0.2.4'
      }
    },
    'github:frankwallis/plugin-typescript@4.0.16': {
      'map': {
        'typescript': 'npm:typescript@1.8.10'
      }
    },
    'github:jspm/nodelibs-os@0.2.0-alpha': {
      'map': {
        'os-browserify': 'npm:os-browserify@0.2.1'
      }
    }
  }
});
