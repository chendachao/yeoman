SystemJS.config({
  devConfig: {
    'map': {
      'assert': 'github:jspm/nodelibs-assert@0.2.0-alpha',
      'constants': 'github:jspm/nodelibs-constants@0.2.0-alpha',
      'buffer': 'github:jspm/nodelibs-buffer@0.2.0-alpha',
      'stream': 'github:jspm/nodelibs-stream@0.2.0-alpha',
      'events': 'github:jspm/nodelibs-events@0.2.0-alpha',
      'util': 'github:jspm/nodelibs-util@0.2.0-alpha',
      'fs': 'github:jspm/nodelibs-fs@0.2.0-alpha',
      'vm': 'github:jspm/nodelibs-vm@0.2.0-alpha',
      'path': 'github:jspm/nodelibs-path@0.2.0-alpha',
      'child_process': 'github:jspm/nodelibs-child_process@0.2.0-alpha',
      'string_decoder': 'github:jspm/nodelibs-string_decoder@0.2.0-alpha',
      'crypto': 'github:jspm/nodelibs-crypto@0.2.0-alpha'
    },
    'packages': {
      'github:jspm/nodelibs-stream@0.2.0-alpha': {
        'map': {
          'stream-browserify': 'npm:stream-browserify@2.0.1'
        }
      },
      'github:jspm/nodelibs-buffer@0.2.0-alpha': {
        'map': {
          'buffer-browserify': 'npm:buffer@4.9.1'
        }
      },
      'npm:stream-browserify@2.0.1': {
        'map': {
          'inherits': 'npm:inherits@2.0.1',
          'readable-stream': 'npm:readable-stream@2.1.5'
        }
      },
      'npm:buffer@4.9.1': {
        'map': {
          'isarray': 'npm:isarray@1.0.0',
          'ieee754': 'npm:ieee754@1.1.6',
          'base64-js': 'npm:base64-js@1.1.2'
        }
      },
      'npm:readable-stream@2.1.5': {
        'map': {
          'inherits': 'npm:inherits@2.0.1',
          'isarray': 'npm:isarray@1.0.0',
          'core-util-is': 'npm:core-util-is@1.0.2',
          'util-deprecate': 'npm:util-deprecate@1.0.2',
          'buffer-shims': 'npm:buffer-shims@1.0.0',
          'process-nextick-args': 'npm:process-nextick-args@1.0.7',
          'string_decoder': 'npm:string_decoder@0.10.31'
        }
      },
      'github:jspm/nodelibs-string_decoder@0.2.0-alpha': {
        'map': {
          'string_decoder-browserify': 'npm:string_decoder@0.10.31'
        }
      },
      'github:jspm/nodelibs-crypto@0.2.0-alpha': {
        'map': {
          'crypto-browserify': 'npm:crypto-browserify@3.11.0'
        }
      },
      'npm:crypto-browserify@3.11.0': {
        'map': {
          'inherits': 'npm:inherits@2.0.1',
          'randombytes': 'npm:randombytes@2.0.3',
          'create-hash': 'npm:create-hash@1.1.2',
          'create-hmac': 'npm:create-hmac@1.1.4',
          'pbkdf2': 'npm:pbkdf2@3.0.4',
          'browserify-sign': 'npm:browserify-sign@4.0.0',
          'browserify-cipher': 'npm:browserify-cipher@1.0.0',
          'diffie-hellman': 'npm:diffie-hellman@5.0.2',
          'public-encrypt': 'npm:public-encrypt@4.0.0',
          'create-ecdh': 'npm:create-ecdh@4.0.0'
        }
      },
      'npm:create-hash@1.1.2': {
        'map': {
          'inherits': 'npm:inherits@2.0.1',
          'ripemd160': 'npm:ripemd160@1.0.1',
          'cipher-base': 'npm:cipher-base@1.0.2',
          'sha.js': 'npm:sha.js@2.4.5'
        }
      },
      'npm:create-hmac@1.1.4': {
        'map': {
          'create-hash': 'npm:create-hash@1.1.2',
          'inherits': 'npm:inherits@2.0.1'
        }
      },
      'npm:browserify-sign@4.0.0': {
        'map': {
          'create-hash': 'npm:create-hash@1.1.2',
          'create-hmac': 'npm:create-hmac@1.1.4',
          'inherits': 'npm:inherits@2.0.1',
          'parse-asn1': 'npm:parse-asn1@5.0.0',
          'browserify-rsa': 'npm:browserify-rsa@4.0.1',
          'elliptic': 'npm:elliptic@6.3.1',
          'bn.js': 'npm:bn.js@4.11.6'
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
          'miller-rabin': 'npm:miller-rabin@4.0.0',
          'bn.js': 'npm:bn.js@4.11.6'
        }
      },
      'npm:public-encrypt@4.0.0': {
        'map': {
          'create-hash': 'npm:create-hash@1.1.2',
          'randombytes': 'npm:randombytes@2.0.3',
          'parse-asn1': 'npm:parse-asn1@5.0.0',
          'browserify-rsa': 'npm:browserify-rsa@4.0.1',
          'bn.js': 'npm:bn.js@4.11.6'
        }
      },
      'npm:browserify-cipher@1.0.0': {
        'map': {
          'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
          'browserify-aes': 'npm:browserify-aes@1.0.6',
          'browserify-des': 'npm:browserify-des@1.0.0'
        }
      },
      'npm:cipher-base@1.0.2': {
        'map': {
          'inherits': 'npm:inherits@2.0.1'
        }
      },
      'npm:evp_bytestokey@1.0.0': {
        'map': {
          'create-hash': 'npm:create-hash@1.1.2'
        }
      },
      'npm:create-ecdh@4.0.0': {
        'map': {
          'elliptic': 'npm:elliptic@6.3.1',
          'bn.js': 'npm:bn.js@4.11.6'
        }
      },
      'npm:miller-rabin@4.0.0': {
        'map': {
          'bn.js': 'npm:bn.js@4.11.6',
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
      'npm:parse-asn1@5.0.0': {
        'map': {
          'browserify-aes': 'npm:browserify-aes@1.0.6',
          'create-hash': 'npm:create-hash@1.1.2',
          'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
          'pbkdf2': 'npm:pbkdf2@3.0.4',
          'asn1.js': 'npm:asn1.js@4.8.0'
        }
      },
      'npm:browserify-rsa@4.0.1': {
        'map': {
          'bn.js': 'npm:bn.js@4.11.6',
          'randombytes': 'npm:randombytes@2.0.3'
        }
      },
      'npm:elliptic@6.3.1': {
        'map': {
          'inherits': 'npm:inherits@2.0.1',
          'bn.js': 'npm:bn.js@4.11.6',
          'hash.js': 'npm:hash.js@1.0.3',
          'brorand': 'npm:brorand@1.0.5'
        }
      },
      'npm:browserify-des@1.0.0': {
        'map': {
          'inherits': 'npm:inherits@2.0.1',
          'cipher-base': 'npm:cipher-base@1.0.2',
          'des.js': 'npm:des.js@1.0.0'
        }
      },
      'npm:asn1.js@4.8.0': {
        'map': {
          'inherits': 'npm:inherits@2.0.1',
          'bn.js': 'npm:bn.js@4.11.6',
          'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
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
    'es6-shim': 'npm:es6-shim@0.35.1',
    'os': 'github:jspm/nodelibs-os@0.2.0-alpha',
    'process': 'github:jspm/nodelibs-process@0.2.0-alpha',
    'reflect-metadata': 'npm:reflect-metadata@0.1.3',
    'rxjs': 'npm:rxjs@5.0.0-beta.6',
    'ts': 'github:frankwallis/plugin-typescript@4.0.16',
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
    }
  }
});
