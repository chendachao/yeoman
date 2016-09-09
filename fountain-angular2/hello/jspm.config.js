SystemJS.config({
  devConfig: {
    'map': {
      'plugin-babel': 'npm:systemjs-plugin-babel@0.0.14',
      'ts': 'github:frankwallis/plugin-typescript@5.1.2'
    },
    'packages': {
      'github:frankwallis/plugin-typescript@5.1.2': {
        'map': {
          'typescript': 'npm:typescript@2.0.2'
        }
      }
    }
  },
  transpiler: 'plugin-babel',
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ],
    "compact": false
  },
  typescriptOptions: {
    'tsconfig': true
  },
  packages: {
    'src': {
      'defaultExtension': 'ts',
      "format": "system",
      'meta': {
        "*.js": {
          "loader": "plugin-babel"
        },
        "*.jsx": {
          "loader": "plugin-babel"
        },
        "*.ts": {
          "loader": "ts"
        },
        "*.tsx": {
          "loader": "ts"
        },
        '*.html': {
          'loader': 'text'
        },
        '*.css': {
          'loader': 'css'
        },
        '*.scss': {
          'loader': 'scss'
        },
        '*.json': {
          'loader': 'json'
        }
      }
    },
    "scss": {
      "defaultExtension": "js",
      "loader": "plugin-babel"
    },
    'typings': {
      'defaultExtension': 'ts'
    }
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
    'assert': 'github:jspm/nodelibs-assert@0.2.0-alpha',
    'bootstrap': 'github:twbs/bootstrap@3.3.7',
    'buffer': 'github:jspm/nodelibs-buffer@0.2.0-alpha',
    'child_process': 'github:jspm/nodelibs-child_process@0.2.0-alpha',
    'constants': 'github:jspm/nodelibs-constants@0.2.0-alpha',
    'core-js': 'npm:core-js@2.4.1',
    'crypto': 'github:jspm/nodelibs-crypto@0.2.0-alpha',
    'css': 'github:systemjs/plugin-css@0.1.27',
    'es6-shim': 'npm:es6-shim@0.35.1',
    'events': 'github:jspm/nodelibs-events@0.2.0-alpha',
    'font-awesome': 'npm:font-awesome@4.6.3',
    'fs': 'github:jspm/nodelibs-fs@0.2.0-alpha',
    'jquery': 'npm:jquery@3.1.0',
    'json': 'github:systemjs/plugin-json@0.1.2',
    'os': 'github:jspm/nodelibs-os@0.2.0-alpha',
    'path': 'github:jspm/nodelibs-path@0.2.0-alpha',
    'process': 'github:jspm/nodelibs-process@0.2.0-alpha',
    'reflect-metadata': 'npm:reflect-metadata@0.1.3',
    'rxjs': 'npm:rxjs@5.0.0-beta.6',
    'sass': 'github:mobilexag/plugin-sass@0.4.6',
    'scss': 'github:KevCJones/plugin-scss@0.2.11',
    'stream': 'github:jspm/nodelibs-stream@0.2.0-alpha',
    'string_decoder': 'github:jspm/nodelibs-string_decoder@0.2.0-alpha',
    'text': 'github:systemjs/plugin-text@0.0.9',
    'ts-helpers': 'npm:ts-helpers@1.1.1',
    'typescript': 'npm:typescript@2.0.2',
    'util': 'github:jspm/nodelibs-util@0.2.0-alpha',
    'vm': 'github:jspm/nodelibs-vm@0.2.0-alpha',
    'zone.js': 'npm:zone.js@0.6.17'
  },
  packages: {
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
    },
    'github:mobilexag/plugin-sass@0.4.6': {
      'map': {
        'sass.js': 'npm:sass.js@0.9.12',
        'postcss': 'npm:postcss@5.2.0',
        'url': 'github:jspm/nodelibs-url@0.1.0',
        'path': 'github:jspm/nodelibs-path@0.1.0',
        'autoprefixer': 'npm:autoprefixer@6.4.1',
        'lodash': 'npm:lodash@4.15.0',
        'reqwest': 'github:ded/reqwest@2.0.5',
        'fs': 'github:jspm/nodelibs-fs@0.1.2'
      }
    },
    'github:KevCJones/plugin-scss@0.2.11': {
      'map': {
        'sass.js': 'npm:sass.js@0.9.12',
        'postcss': 'npm:postcss@5.2.0',
        'url': 'github:jspm/nodelibs-url@0.1.0',
        'path': 'github:jspm/nodelibs-path@0.1.0',
        'autoprefixer': 'npm:autoprefixer@6.4.1',
        'lodash': 'npm:lodash@4.15.0',
        'reqwest': 'github:ded/reqwest@2.0.5',
        'fs': 'github:jspm/nodelibs-fs@0.1.2'
      }
    },
    'npm:autoprefixer@6.4.1': {
      'map': {
        'postcss': 'npm:postcss@5.2.0',
        'num2fraction': 'npm:num2fraction@1.2.2',
        'normalize-range': 'npm:normalize-range@0.1.2',
        'browserslist': 'npm:browserslist@1.3.6',
        'caniuse-db': 'npm:caniuse-db@1.0.30000528',
        'postcss-value-parser': 'npm:postcss-value-parser@3.3.0'
      }
    },
    'npm:postcss@5.2.0': {
      'map': {
        'js-base64': 'npm:js-base64@2.1.9',
        'source-map': 'npm:source-map@0.5.6',
        'supports-color': 'npm:supports-color@3.1.2'
      }
    },
    'github:jspm/nodelibs-path@0.1.0': {
      'map': {
        'path-browserify': 'npm:path-browserify@0.0.0'
      }
    },
    'npm:browserslist@1.3.6': {
      'map': {
        'caniuse-db': 'npm:caniuse-db@1.0.30000528'
      }
    },
    'github:jspm/nodelibs-buffer@0.2.0-alpha': {
      'map': {
        'buffer-browserify': 'npm:buffer@4.9.1'
      }
    },
    'npm:supports-color@3.1.2': {
      'map': {
        'has-flag': 'npm:has-flag@1.0.0'
      }
    },
    'npm:buffer@4.9.1': {
      'map': {
        'isarray': 'npm:isarray@1.0.0',
        'ieee754': 'npm:ieee754@1.1.6',
        'base64-js': 'npm:base64-js@1.1.2'
      }
    },
    'github:jspm/nodelibs-url@0.1.0': {
      'map': {
        'url': 'npm:url@0.10.3'
      }
    },
    'github:jspm/nodelibs-crypto@0.2.0-alpha': {
      'map': {
        'crypto-browserify': 'npm:crypto-browserify@3.11.0'
      }
    },
    'npm:url@0.10.3': {
      'map': {
        'querystring': 'npm:querystring@0.2.0',
        'punycode': 'npm:punycode@1.3.2'
      }
    },
    'npm:crypto-browserify@3.11.0': {
      'map': {
        'browserify-sign': 'npm:browserify-sign@4.0.0',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'browserify-cipher': 'npm:browserify-cipher@1.0.0',
        'inherits': 'npm:inherits@2.0.3',
        'public-encrypt': 'npm:public-encrypt@4.0.0',
        'diffie-hellman': 'npm:diffie-hellman@5.0.2',
        'randombytes': 'npm:randombytes@2.0.3',
        'create-ecdh': 'npm:create-ecdh@4.0.0',
        'pbkdf2': 'npm:pbkdf2@3.0.4',
        'create-hash': 'npm:create-hash@1.1.2'
      }
    },
    'npm:browserify-sign@4.0.0': {
      'map': {
        'create-hmac': 'npm:create-hmac@1.1.4',
        'inherits': 'npm:inherits@2.0.3',
        'parse-asn1': 'npm:parse-asn1@5.0.0',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'bn.js': 'npm:bn.js@4.11.6',
        'elliptic': 'npm:elliptic@6.3.1',
        'create-hash': 'npm:create-hash@1.1.2'
      }
    },
    'npm:create-hmac@1.1.4': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
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
    'npm:public-encrypt@4.0.0': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.3',
        'parse-asn1': 'npm:parse-asn1@5.0.0',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'bn.js': 'npm:bn.js@4.11.6',
        'create-hash': 'npm:create-hash@1.1.2'
      }
    },
    'npm:browserify-rsa@4.0.1': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.3',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:elliptic@6.3.1': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'inherits': 'npm:inherits@2.0.3',
        'hash.js': 'npm:hash.js@1.0.3',
        'brorand': 'npm:brorand@1.0.6'
      }
    },
    'npm:browserify-cipher@1.0.0': {
      'map': {
        'browserify-des': 'npm:browserify-des@1.0.0',
        'browserify-aes': 'npm:browserify-aes@1.0.6',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0'
      }
    },
    'npm:miller-rabin@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'brorand': 'npm:brorand@1.0.6'
      }
    },
    'npm:browserify-des@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'cipher-base': 'npm:cipher-base@1.0.2',
        'des.js': 'npm:des.js@1.0.0'
      }
    },
    'npm:parse-asn1@5.0.0': {
      'map': {
        'browserify-aes': 'npm:browserify-aes@1.0.6',
        'pbkdf2': 'npm:pbkdf2@3.0.4',
        'asn1.js': 'npm:asn1.js@4.8.0',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'create-hash': 'npm:create-hash@1.1.2'
      }
    },
    'npm:browserify-aes@1.0.6': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'cipher-base': 'npm:cipher-base@1.0.2',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'buffer-xor': 'npm:buffer-xor@1.0.3',
        'create-hash': 'npm:create-hash@1.1.2'
      }
    },
    'npm:hash.js@1.0.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:des.js@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:cipher-base@1.0.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:create-ecdh@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'elliptic': 'npm:elliptic@6.3.1'
      }
    },
    'npm:pbkdf2@3.0.4': {
      'map': {
        'create-hmac': 'npm:create-hmac@1.1.4'
      }
    },
    'npm:asn1.js@4.8.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'github:jspm/nodelibs-stream@0.2.0-alpha': {
      'map': {
        'stream-browserify': 'npm:stream-browserify@2.0.1'
      }
    },
    'npm:stream-browserify@2.0.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'readable-stream': 'npm:readable-stream@2.1.5'
      }
    },
    'npm:evp_bytestokey@1.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2'
      }
    },
    'npm:create-hash@1.1.2': {
      'map': {
        'cipher-base': 'npm:cipher-base@1.0.2',
        'inherits': 'npm:inherits@2.0.3',
        'ripemd160': 'npm:ripemd160@1.0.1',
        'sha.js': 'npm:sha.js@2.4.5'
      }
    },
    'npm:sha.js@2.4.5': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'github:jspm/nodelibs-string_decoder@0.2.0-alpha': {
      'map': {
        'string_decoder-browserify': 'npm:string_decoder@0.10.31'
      }
    },
    'npm:readable-stream@2.1.5': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'isarray': 'npm:isarray@1.0.0',
        'string_decoder': 'npm:string_decoder@0.10.31',
        'util-deprecate': 'npm:util-deprecate@1.0.2',
        'process-nextick-args': 'npm:process-nextick-args@1.0.7',
        'buffer-shims': 'npm:buffer-shims@1.0.0',
        'core-util-is': 'npm:core-util-is@1.0.2'
      }
    }
  }
});
