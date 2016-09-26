SystemJS.config({
  devConfig: {
    'map': {
      'plugin-babel': 'npm:systemjs-plugin-babel@0.0.14',
      'ts': 'github:frankwallis/plugin-typescript@5.1.2',
      'core-js': 'npm:core-js@2.4.1',
      'babel-runtime': 'npm:babel-runtime@6.11.6',
      'clean-css': 'npm:clean-css@3.4.19',
      'https': 'github:jspm/nodelibs-https@0.2.0-alpha',
      'babel': 'npm:babel-core@6.14.0'
    },
    'packages': {
      'github:frankwallis/plugin-typescript@5.1.2': {
        'map': {
          'typescript': 'npm:typescript@2.0.2'
        }
      },
      'npm:clean-css@3.4.19': {
        'map': {
          'source-map': 'npm:source-map@0.4.4',
          'commander': 'npm:commander@2.8.1'
        }
      },
      'npm:commander@2.8.1': {
        'map': {
          'graceful-readlink': 'npm:graceful-readlink@1.0.1'
        }
      },
      'npm:babel-runtime@6.11.6': {
        'map': {
          'core-js': 'npm:core-js@2.4.1',
          'regenerator-runtime': 'npm:regenerator-runtime@0.9.5'
        }
      },
      'npm:babel-core@6.14.0': {
        'map': {
          'babel-code-frame': 'npm:babel-code-frame@6.11.0',
          'babel-generator': 'npm:babel-generator@6.14.0',
          'path-exists': 'npm:path-exists@1.0.0',
          'babel-helpers': 'npm:babel-helpers@6.8.0',
          'json5': 'npm:json5@0.4.0',
          'debug': 'npm:debug@2.2.0',
          'babel-register': 'npm:babel-register@6.14.0',
          'convert-source-map': 'npm:convert-source-map@1.3.0',
          'private': 'npm:private@0.1.6',
          'lodash': 'npm:lodash@4.15.0',
          'babylon': 'npm:babylon@6.9.2',
          'babel-template': 'npm:babel-template@6.15.0',
          'babel-messages': 'npm:babel-messages@6.8.0',
          'babel-types': 'npm:babel-types@6.15.0',
          'babel-traverse': 'npm:babel-traverse@6.15.0',
          'minimatch': 'npm:minimatch@3.0.3',
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'source-map': 'npm:source-map@0.5.6',
          'shebang-regex': 'npm:shebang-regex@1.0.0',
          'slash': 'npm:slash@1.0.0',
          'path-is-absolute': 'npm:path-is-absolute@1.0.0'
        }
      },
      'npm:babel-generator@6.14.0': {
        'map': {
          'lodash': 'npm:lodash@4.15.0',
          'babel-messages': 'npm:babel-messages@6.8.0',
          'detect-indent': 'npm:detect-indent@3.0.1',
          'babel-types': 'npm:babel-types@6.15.0',
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'source-map': 'npm:source-map@0.5.6'
        }
      },
      'npm:babel-code-frame@6.11.0': {
        'map': {
          'esutils': 'npm:esutils@2.0.2',
          'chalk': 'npm:chalk@1.1.3',
          'js-tokens': 'npm:js-tokens@2.0.0',
          'babel-runtime': 'npm:babel-runtime@6.11.6'
        }
      },
      'npm:babel-register@6.14.0': {
        'map': {
          'babel-core': 'npm:babel-core@6.14.0',
          'lodash': 'npm:lodash@4.15.0',
          'path-exists': 'npm:path-exists@1.0.0',
          'home-or-tmp': 'npm:home-or-tmp@1.0.0',
          'core-js': 'npm:core-js@2.4.1',
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'source-map-support': 'npm:source-map-support@0.2.10',
          'mkdirp': 'npm:mkdirp@0.5.1'
        }
      },
      'npm:babel-helpers@6.8.0': {
        'map': {
          'babel-template': 'npm:babel-template@6.15.0',
          'babel-runtime': 'npm:babel-runtime@6.11.6'
        }
      },
      'npm:babel-template@6.15.0': {
        'map': {
          'babylon': 'npm:babylon@6.9.2',
          'babel-traverse': 'npm:babel-traverse@6.15.0',
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-types': 'npm:babel-types@6.15.0',
          'lodash': 'npm:lodash@4.15.0'
        }
      },
      'npm:babel-messages@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6'
        }
      },
      'npm:babel-types@6.15.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'esutils': 'npm:esutils@2.0.2',
          'lodash': 'npm:lodash@4.15.0',
          'to-fast-properties': 'npm:to-fast-properties@1.0.2'
        }
      },
      'npm:babel-traverse@6.15.0': {
        'map': {
          'babel-code-frame': 'npm:babel-code-frame@6.11.0',
          'babel-messages': 'npm:babel-messages@6.8.0',
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babylon': 'npm:babylon@6.9.2',
          'babel-types': 'npm:babel-types@6.15.0',
          'debug': 'npm:debug@2.2.0',
          'lodash': 'npm:lodash@4.15.0',
          'invariant': 'npm:invariant@2.2.1',
          'globals': 'npm:globals@8.18.0'
        }
      },
      'npm:chalk@1.1.3': {
        'map': {
          'escape-string-regexp': 'npm:escape-string-regexp@1.0.5',
          'supports-color': 'npm:supports-color@2.0.0',
          'has-ansi': 'npm:has-ansi@2.0.0',
          'strip-ansi': 'npm:strip-ansi@3.0.1',
          'ansi-styles': 'npm:ansi-styles@2.2.1'
        }
      },
      'npm:detect-indent@3.0.1': {
        'map': {
          'get-stdin': 'npm:get-stdin@4.0.1',
          'minimist': 'npm:minimist@1.2.0',
          'repeating': 'npm:repeating@1.1.3'
        }
      },
      'npm:home-or-tmp@1.0.0': {
        'map': {
          'user-home': 'npm:user-home@1.1.1',
          'os-tmpdir': 'npm:os-tmpdir@1.0.1'
        }
      },
      'npm:minimatch@3.0.3': {
        'map': {
          'brace-expansion': 'npm:brace-expansion@1.1.6'
        }
      },
      'npm:source-map-support@0.2.10': {
        'map': {
          'source-map': 'npm:source-map@0.1.32'
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
      'npm:brace-expansion@1.1.6': {
        'map': {
          'balanced-match': 'npm:balanced-match@0.4.2',
          'concat-map': 'npm:concat-map@0.0.1'
        }
      },
      'npm:invariant@2.2.1': {
        'map': {
          'loose-envify': 'npm:loose-envify@1.2.0'
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
      'npm:is-finite@1.0.1': {
        'map': {
          'number-is-nan': 'npm:number-is-nan@1.0.0'
        }
      }
    }
  },
  transpiler: 'plugin-babel',
  babelOptions: {
    'optional': [
      'runtime',
      'optimisation.modules.system'
    ],
    'compact': false
  },
  typescriptOptions: {
    'tsconfig': true
  },
  packages: {
    'src': {
      'defaultExtension': 'ts',
      'main': 'client/app/main.ts',
      'format': 'system',
      'meta': {
        '*.js': {
          'loader': 'ts'
        },
        '*.jsx': {
          'loader': 'ts'
        },
        '*.ts': {
          'loader': 'ts'
        },
        '*.tsx': {
          'loader': 'ts'
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
        'index.scss': {
          'loader': 'sass'
        },
        '*.json': {
          'loader': 'json'
        }
      }
    },
    'scss': {
      'defaultExtension': 'js',
      'loader': 'plugin-babel'
    },
    'typings': {
      'defaultExtension': 'ts'
    },
    'ng2-bootstrap': {
      'format': 'cjs',
      'defaultExtension': 'js',
      'main': 'ng2-bootstrap.js'
    },
    'moment': {
      'format': 'cjs'
    },
    'emmet': {
      'format': 'cjs',
      'defaultExtension': 'js',
      'main': 'emmet.js'
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
    '@angular/common': 'npm:@angular/common@2.0.0',
    '@angular/compiler': 'npm:@angular/compiler@2.0.0',
    '@angular/compiler-cli': 'npm:@angular/compiler-cli@0.6.2',
    '@angular/core': 'npm:@angular/core@2.0.0',
    '@angular/forms': 'npm:@angular/forms@2.0.0',
    '@angular/http': 'npm:@angular/http@2.0.0',
    '@angular/platform-browser': 'npm:@angular/platform-browser@2.0.0',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@2.0.0',
    '@angular/platform-server': 'npm:@angular/platform-server@2.0.0',
    '@angular/router': 'npm:@angular/router@3.0.0',
    'ace': 'github:ajaxorg/ace-builds@1.2.5',
    'assert': 'github:jspm/nodelibs-assert@0.2.0-alpha',
    'bootstrap': 'github:twbs/bootstrap@3.3.7',
    'brace': 'npm:brace@0.8.0',
    'buffer': 'github:jspm/nodelibs-buffer@0.2.0-alpha',
    'child_process': 'github:jspm/nodelibs-child_process@0.2.0-alpha',
    'constants': 'github:jspm/nodelibs-constants@0.2.0-alpha',
    'crypto': 'github:jspm/nodelibs-crypto@0.2.0-alpha',
    'css': 'github:systemjs/plugin-css@0.1.27',
    'emmet': 'github:cloud9ide/emmet-core@master',
    'es6-shim': 'github:es-shims/es6-shim@0.35.1',
    'events': 'github:jspm/nodelibs-events@0.2.0-alpha',
    'font-awesome': 'npm:font-awesome@4.6.3',
    'fs': 'github:jspm/nodelibs-fs@0.2.0-alpha',
    'http': 'github:jspm/nodelibs-http@0.2.0-alpha',
    'jquery': 'npm:jquery@3.1.0',
    'json': 'github:systemjs/plugin-json@0.1.2',
    'module': 'github:jspm/nodelibs-module@0.2.0-alpha',
    'ng2-bootstrap': 'npm:ng2-bootstrap@1.1.5',
    'os': 'github:jspm/nodelibs-os@0.2.0-alpha',
    'path': 'github:jspm/nodelibs-path@0.2.0-alpha',
    'process': 'github:jspm/nodelibs-process@0.2.0-alpha',
    'readline': 'github:jspm/nodelibs-readline@0.2.0-alpha',
    'reflect-metadata': 'npm:reflect-metadata@0.1.8',
    'rxjs': 'npm:rxjs@5.0.0-beta.12',
    'sass': 'github:mobilexag/plugin-sass@0.4.6',
    'scss': 'github:KevCJones/plugin-scss@0.2.11',
    'stream': 'github:jspm/nodelibs-stream@0.2.0-alpha',
    'string_decoder': 'github:jspm/nodelibs-string_decoder@0.2.0-alpha',
    'systemjs-hot-reloader': 'github:capaj/systemjs-hot-reloader@0.6.0',
    'text': 'github:systemjs/plugin-text@0.0.9',
    'timers': 'github:jspm/nodelibs-timers@0.2.0-alpha',
    'ts-helpers': 'npm:ts-helpers@1.1.1',
    'typescript': 'npm:typescript@2.1.0-dev.20160918',
    'url': 'github:jspm/nodelibs-url@0.2.0-alpha',
    'util': 'github:jspm/nodelibs-util@0.2.0-alpha',
    'vm': 'github:jspm/nodelibs-vm@0.2.0-alpha',
    'zone.js': 'npm:zone.js@0.6.21'
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
        'caniuse-db': 'npm:caniuse-db@1.0.30000530',
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
        'caniuse-db': 'npm:caniuse-db@1.0.30000530'
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
        'pbkdf2': 'npm:pbkdf2@3.0.7',
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
        'elliptic': 'npm:elliptic@6.3.2',
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
        'cipher-base': 'npm:cipher-base@1.0.3',
        'des.js': 'npm:des.js@1.0.0'
      }
    },
    'npm:parse-asn1@5.0.0': {
      'map': {
        'browserify-aes': 'npm:browserify-aes@1.0.6',
        'pbkdf2': 'npm:pbkdf2@3.0.7',
        'asn1.js': 'npm:asn1.js@4.8.1',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'create-hash': 'npm:create-hash@1.1.2'
      }
    },
    'npm:browserify-aes@1.0.6': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'cipher-base': 'npm:cipher-base@1.0.3',
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
    'npm:create-ecdh@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'elliptic': 'npm:elliptic@6.3.2'
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
        'cipher-base': 'npm:cipher-base@1.0.3',
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
    },
    'github:capaj/systemjs-hot-reloader@0.6.0': {
      'map': {
        'debug': 'npm:debug@2.2.0',
        'weakee': 'npm:weakee@1.0.0',
        'socket.io-client': 'github:socketio/socket.io-client@1.4.8'
      }
    },
    'npm:debug@2.2.0': {
      'map': {
        'ms': 'npm:ms@0.7.1'
      }
    },
    'github:mobilexag/plugin-sass@0.4.6': {
      'map': {
        'path': 'github:jspm/nodelibs-path@0.1.0',
        'url': 'github:jspm/nodelibs-url@0.1.0',
        'fs': 'github:jspm/nodelibs-fs@0.1.2',
        'reqwest': 'github:ded/reqwest@2.0.5',
        'postcss': 'npm:postcss@5.2.0',
        'autoprefixer': 'npm:autoprefixer@6.4.1',
        'sass.js': 'npm:sass.js@0.9.12',
        'lodash': 'npm:lodash@4.15.0'
      }
    },
    'github:jspm/nodelibs-url@0.2.0-alpha': {
      'map': {
        'url-browserify': 'npm:url@0.11.0'
      }
    },
    'npm:url@0.11.0': {
      'map': {
        'querystring': 'npm:querystring@0.2.0',
        'punycode': 'npm:punycode@1.3.2'
      }
    },
    'github:jspm/nodelibs-http@0.2.0-alpha': {
      'map': {
        'http-browserify': 'npm:stream-http@2.4.0'
      }
    },
    'npm:stream-http@2.4.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'readable-stream': 'npm:readable-stream@2.1.5',
        'xtend': 'npm:xtend@4.0.1',
        'builtin-status-codes': 'npm:builtin-status-codes@2.0.0',
        'to-arraybuffer': 'npm:to-arraybuffer@1.0.1'
      }
    },
    'github:jspm/nodelibs-timers@0.2.0-alpha': {
      'map': {
        'timers-browserify': 'npm:timers-browserify@1.4.2'
      }
    },
    'npm:timers-browserify@1.4.2': {
      'map': {
        'process': 'npm:process@0.11.9'
      }
    },
    'npm:brace@0.8.0': {
      'map': {
        'w3c-blob': 'npm:w3c-blob@0.0.1'
      }
    },
    'npm:pbkdf2@3.0.7': {
      'map': {
        'create-hmac': 'npm:create-hmac@1.1.4'
      }
    },
    'npm:elliptic@6.3.2': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'inherits': 'npm:inherits@2.0.3',
        'brorand': 'npm:brorand@1.0.6',
        'hash.js': 'npm:hash.js@1.0.3'
      }
    },
    'npm:cipher-base@1.0.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:rxjs@5.0.0-beta.12': {
      'map': {
        'symbol-observable': 'npm:symbol-observable@1.0.2'
      }
    },
    'npm:source-map@0.4.4': {
      'map': {
        'amdefine': 'npm:amdefine@1.0.0'
      }
    },
    'npm:mkdirp@0.5.1': {
      'map': {
        'minimist': 'npm:minimist@0.0.8'
      }
    },
    'npm:source-map@0.1.32': {
      'map': {
        'amdefine': 'npm:amdefine@1.0.0'
      }
    },
    'npm:@angular/compiler-cli@0.6.2': {
      'map': {
        'reflect-metadata': 'npm:reflect-metadata@0.1.8',
        'minimist': 'npm:minimist@1.2.0',
        '@angular/tsc-wrapped': 'npm:@angular/tsc-wrapped@0.3.0',
        'parse5': 'npm:parse5@1.3.2'
      }
    },
    'npm:@angular/platform-server@2.0.0': {
      'map': {
        'parse5': 'npm:parse5@1.3.2'
      }
    },
    'npm:@angular/tsc-wrapped@0.3.0': {
      'map': {
        'tsickle': 'npm:tsickle@0.1.7'
      }
    },
    'npm:tsickle@0.1.7': {
      'map': {
        'minimist': 'npm:minimist@1.2.0',
        'mkdirp': 'npm:mkdirp@0.5.1',
        'source-map': 'npm:source-map@0.4.4',
        'source-map-support': 'npm:source-map-support@0.3.3'
      }
    },
    'npm:source-map-support@0.3.3': {
      'map': {
        'source-map': 'npm:source-map@0.1.32'
      }
    },
    'npm:ng2-bootstrap@1.1.5': {
      'map': {
        'moment': 'npm:moment@2.15.0'
      }
    },
    'npm:asn1.js@4.8.1': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    }
  }
});
