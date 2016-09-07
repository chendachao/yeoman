SystemJS.config({
  devConfig: {
    'map': {
      'babel-plugin-transform-flow-strip-types': 'npm:babel-plugin-transform-flow-strip-types@6.8.0',
      'babel-plugin-transform-class-properties': 'npm:babel-plugin-transform-class-properties@6.11.5',
      'babel-plugin-transform-es2015-typeof-symbol': 'npm:babel-plugin-transform-es2015-typeof-symbol@6.8.0',
      'babel-plugin-angular2-annotations': 'npm:babel-plugin-angular2-annotations@5.1.0',
      'babel-plugin-transform-decorators-legacy': 'npm:babel-plugin-transform-decorators-legacy@1.3.4',
      'fs': 'github:jspm/nodelibs-fs@0.2.0-alpha',
      'path': 'github:jspm/nodelibs-path@0.2.0-alpha',
      'assert': 'github:jspm/nodelibs-assert@0.2.0-alpha',
      'buffer': 'github:jspm/nodelibs-buffer@0.2.0-alpha',
      'util': 'github:jspm/nodelibs-util@0.2.0-alpha',
      'stream': 'github:jspm/nodelibs-stream@0.2.0-alpha',
      'crypto': 'github:jspm/nodelibs-crypto@0.2.0-alpha',
      'events': 'github:jspm/nodelibs-events@0.2.0-alpha',
      'vm': 'github:jspm/nodelibs-vm@0.2.0-alpha',
      'child_process': 'github:jspm/nodelibs-child_process@0.2.0-alpha',
      'constants': 'github:jspm/nodelibs-constants@0.2.0-alpha',
      'string_decoder': 'github:jspm/nodelibs-string_decoder@0.2.0-alpha'
    },
    'packages': {
      'npm:babel-plugin-angular2-annotations@5.1.0': {
        'map': {
          'babel-generator': 'npm:babel-generator@6.11.4'
        }
      },
      'npm:babel-plugin-transform-decorators-legacy@1.3.4': {
        'map': {
          'babel-template': 'npm:babel-template@6.9.0',
          'babel-plugin-syntax-decorators': 'npm:babel-plugin-syntax-decorators@6.13.0',
          'babel-runtime': 'npm:babel-runtime@6.11.6'
        }
      },
      'npm:babel-plugin-transform-class-properties@6.11.5': {
        'map': {
          'babel-plugin-syntax-class-properties': 'npm:babel-plugin-syntax-class-properties@6.13.0',
          'babel-helper-function-name': 'npm:babel-helper-function-name@6.8.0',
          'babel-runtime': 'npm:babel-runtime@6.11.6'
        }
      },
      'npm:babel-plugin-transform-flow-strip-types@6.8.0': {
        'map': {
          'babel-plugin-syntax-flow': 'npm:babel-plugin-syntax-flow@6.13.0',
          'babel-runtime': 'npm:babel-runtime@6.11.6'
        }
      },
      'npm:babel-generator@6.11.4': {
        'map': {
          'babel-types': 'npm:babel-types@6.13.0',
          'lodash': 'npm:lodash@4.15.0',
          'babel-messages': 'npm:babel-messages@6.8.0',
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'detect-indent': 'npm:detect-indent@3.0.1',
          'source-map': 'npm:source-map@0.5.6'
        }
      },
      'npm:babel-template@6.9.0': {
        'map': {
          'babel-types': 'npm:babel-types@6.13.0',
          'lodash': 'npm:lodash@4.15.0',
          'babylon': 'npm:babylon@6.8.4',
          'babel-traverse': 'npm:babel-traverse@6.13.0',
          'babel-runtime': 'npm:babel-runtime@6.11.6'
        }
      },
      'npm:babel-plugin-transform-es2015-typeof-symbol@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6'
        }
      },
      'npm:babel-helper-function-name@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-traverse': 'npm:babel-traverse@6.13.0',
          'babel-template': 'npm:babel-template@6.9.0',
          'babel-types': 'npm:babel-types@6.13.0',
          'babel-helper-get-function-arity': 'npm:babel-helper-get-function-arity@6.8.0'
        }
      },
      'npm:babel-types@6.13.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-traverse': 'npm:babel-traverse@6.13.0',
          'lodash': 'npm:lodash@4.15.0',
          'esutils': 'npm:esutils@2.0.2',
          'to-fast-properties': 'npm:to-fast-properties@1.0.2'
        }
      },
      'npm:babel-messages@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6'
        }
      },
      'npm:babylon@6.8.4': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6'
        }
      },
      'npm:babel-traverse@6.13.0': {
        'map': {
          'babel-messages': 'npm:babel-messages@6.8.0',
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-types': 'npm:babel-types@6.13.0',
          'babylon': 'npm:babylon@6.8.4',
          'lodash': 'npm:lodash@4.15.0',
          'debug': 'npm:debug@2.2.0',
          'globals': 'npm:globals@8.18.0',
          'babel-code-frame': 'npm:babel-code-frame@6.11.0',
          'invariant': 'npm:invariant@2.2.1'
        }
      },
      'npm:babel-runtime@6.11.6': {
        'map': {
          'regenerator-runtime': 'npm:regenerator-runtime@0.9.5',
          'core-js': 'npm:core-js@2.4.1'
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
      'npm:babel-helper-get-function-arity@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-types': 'npm:babel-types@6.13.0'
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
      'npm:repeating@1.1.3': {
        'map': {
          'is-finite': 'npm:is-finite@1.0.1'
        }
      },
      'npm:loose-envify@1.2.0': {
        'map': {
          'js-tokens': 'npm:js-tokens@1.0.3'
        }
      },
      'npm:chalk@1.1.3': {
        'map': {
          'ansi-styles': 'npm:ansi-styles@2.2.1',
          'supports-color': 'npm:supports-color@2.0.0',
          'strip-ansi': 'npm:strip-ansi@3.0.1',
          'escape-string-regexp': 'npm:escape-string-regexp@1.0.5',
          'has-ansi': 'npm:has-ansi@2.0.0'
        }
      },
      'github:jspm/nodelibs-buffer@0.2.0-alpha': {
        'map': {
          'buffer-browserify': 'npm:buffer@4.9.0'
        }
      },
      'npm:is-finite@1.0.1': {
        'map': {
          'number-is-nan': 'npm:number-is-nan@1.0.0'
        }
      },
      'npm:strip-ansi@3.0.1': {
        'map': {
          'ansi-regex': 'npm:ansi-regex@2.0.0'
        }
      },
      'npm:has-ansi@2.0.0': {
        'map': {
          'ansi-regex': 'npm:ansi-regex@2.0.0'
        }
      },
      'npm:buffer@4.9.0': {
        'map': {
          'isarray': 'npm:isarray@1.0.0',
          'base64-js': 'npm:base64-js@1.1.2',
          'ieee754': 'npm:ieee754@1.1.6'
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
          'readable-stream': 'npm:readable-stream@2.1.4',
          'inherits': 'npm:inherits@2.0.1'
        }
      },
      'npm:crypto-browserify@3.11.0': {
        'map': {
          'inherits': 'npm:inherits@2.0.1',
          'browserify-sign': 'npm:browserify-sign@4.0.0',
          'browserify-cipher': 'npm:browserify-cipher@1.0.0',
          'create-hash': 'npm:create-hash@1.1.2',
          'create-ecdh': 'npm:create-ecdh@4.0.0',
          'randombytes': 'npm:randombytes@2.0.3',
          'pbkdf2': 'npm:pbkdf2@3.0.4',
          'diffie-hellman': 'npm:diffie-hellman@5.0.2',
          'public-encrypt': 'npm:public-encrypt@4.0.0',
          'create-hmac': 'npm:create-hmac@1.1.4'
        }
      },
      'npm:readable-stream@2.1.4': {
        'map': {
          'inherits': 'npm:inherits@2.0.1',
          'isarray': 'npm:isarray@1.0.0',
          'util-deprecate': 'npm:util-deprecate@1.0.2',
          'process-nextick-args': 'npm:process-nextick-args@1.0.7',
          'buffer-shims': 'npm:buffer-shims@1.0.0',
          'string_decoder': 'npm:string_decoder@0.10.31',
          'core-util-is': 'npm:core-util-is@1.0.2'
        }
      },
      'npm:browserify-sign@4.0.0': {
        'map': {
          'create-hash': 'npm:create-hash@1.1.2',
          'inherits': 'npm:inherits@2.0.1',
          'create-hmac': 'npm:create-hmac@1.1.4',
          'parse-asn1': 'npm:parse-asn1@5.0.0',
          'bn.js': 'npm:bn.js@4.11.6',
          'elliptic': 'npm:elliptic@6.3.1',
          'browserify-rsa': 'npm:browserify-rsa@4.0.1'
        }
      },
      'npm:pbkdf2@3.0.4': {
        'map': {
          'create-hmac': 'npm:create-hmac@1.1.4'
        }
      },
      'npm:diffie-hellman@5.0.2': {
        'map': {
          'randombytes': 'npm:randombytes@2.0.3',
          'bn.js': 'npm:bn.js@4.11.6',
          'miller-rabin': 'npm:miller-rabin@4.0.0'
        }
      },
      'npm:create-hash@1.1.2': {
        'map': {
          'inherits': 'npm:inherits@2.0.1',
          'sha.js': 'npm:sha.js@2.4.5',
          'cipher-base': 'npm:cipher-base@1.0.2',
          'ripemd160': 'npm:ripemd160@1.0.1'
        }
      },
      'npm:public-encrypt@4.0.0': {
        'map': {
          'create-hash': 'npm:create-hash@1.1.2',
          'randombytes': 'npm:randombytes@2.0.3',
          'parse-asn1': 'npm:parse-asn1@5.0.0',
          'bn.js': 'npm:bn.js@4.11.6',
          'browserify-rsa': 'npm:browserify-rsa@4.0.1'
        }
      },
      'npm:create-ecdh@4.0.0': {
        'map': {
          'bn.js': 'npm:bn.js@4.11.6',
          'elliptic': 'npm:elliptic@6.3.1'
        }
      },
      'npm:browserify-cipher@1.0.0': {
        'map': {
          'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
          'browserify-aes': 'npm:browserify-aes@1.0.6',
          'browserify-des': 'npm:browserify-des@1.0.0'
        }
      },
      'npm:create-hmac@1.1.4': {
        'map': {
          'inherits': 'npm:inherits@2.0.1',
          'create-hash': 'npm:create-hash@1.1.2'
        }
      },
      'npm:parse-asn1@5.0.0': {
        'map': {
          'create-hash': 'npm:create-hash@1.1.2',
          'browserify-aes': 'npm:browserify-aes@1.0.6',
          'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
          'pbkdf2': 'npm:pbkdf2@3.0.4',
          'asn1.js': 'npm:asn1.js@4.8.0'
        }
      },
      'npm:evp_bytestokey@1.0.0': {
        'map': {
          'create-hash': 'npm:create-hash@1.1.2'
        }
      },
      'npm:browserify-des@1.0.0': {
        'map': {
          'cipher-base': 'npm:cipher-base@1.0.2',
          'inherits': 'npm:inherits@2.0.1',
          'des.js': 'npm:des.js@1.0.0'
        }
      },
      'npm:elliptic@6.3.1': {
        'map': {
          'bn.js': 'npm:bn.js@4.11.6',
          'inherits': 'npm:inherits@2.0.1',
          'hash.js': 'npm:hash.js@1.0.3',
          'brorand': 'npm:brorand@1.0.5'
        }
      },
      'npm:browserify-aes@1.0.6': {
        'map': {
          'cipher-base': 'npm:cipher-base@1.0.2',
          'create-hash': 'npm:create-hash@1.1.2',
          'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
          'inherits': 'npm:inherits@2.0.1',
          'buffer-xor': 'npm:buffer-xor@1.0.3'
        }
      },
      'npm:sha.js@2.4.5': {
        'map': {
          'inherits': 'npm:inherits@2.0.1'
        }
      },
      'npm:browserify-rsa@4.0.1': {
        'map': {
          'bn.js': 'npm:bn.js@4.11.6',
          'randombytes': 'npm:randombytes@2.0.3'
        }
      },
      'npm:miller-rabin@4.0.0': {
        'map': {
          'bn.js': 'npm:bn.js@4.11.6',
          'brorand': 'npm:brorand@1.0.5'
        }
      },
      'npm:cipher-base@1.0.2': {
        'map': {
          'inherits': 'npm:inherits@2.0.1'
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
      'npm:asn1.js@4.8.0': {
        'map': {
          'inherits': 'npm:inherits@2.0.1',
          'bn.js': 'npm:bn.js@4.11.6',
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
    'es6-promise': 'npm:es6-promise@3.2.1',
    'es6-shim': 'npm:es6-shim@0.35.1',
    'os': 'github:jspm/nodelibs-os@0.2.0-alpha',
    'process': 'github:jspm/nodelibs-process@0.2.0-alpha',
    'reflect-metadata': 'npm:reflect-metadata@0.1.3',
    'rxjs': 'npm:rxjs@5.0.0-beta.8',
    'ts': 'github:frankwallis/plugin-typescript@4.0.16',
    'zone.js': 'npm:zone.js@0.6.13'
  },
  packages: {
    'github:frankwallis/plugin-typescript@4.0.16': {
      'map': {
        'typescript': 'npm:typescript@1.8.10'
      }
    },
    'npm:rxjs@5.0.0-beta.8': {
      'map': {
        'symbol-observable': 'npm:symbol-observable@0.2.4'
      }
    },
    'github:jspm/nodelibs-os@0.2.0-alpha': {
      'map': {
        'os-browserify': 'npm:os-browserify@0.2.1'
      }
    }
  }
});
