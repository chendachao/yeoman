/**
 * Created by dachao.chen on 9/15/2016.
 */

// TODO: https://cloud9ide.github.io/emmet-core/emmet.js
// import 'emmet';

// TODO: try this way
// import ace = require('ace');

// See solutions here https://github.com/jspm/registry/issues/38
import ace from 'ace';
// get the path to the ace theme/mode assets- eg "http://localhost:9000/jspm_packages/github/ajaxorg/ace-builds@1.2.2.js"
let base = SystemJS.normalizeSync('ace');
// strip the trailing ".js" from the path:
base = base.substr(0, base.length - 6);
// configure ace with the base path
ace.config.set('basePath', base);

// TODO: just import what you need
import "ace/ext-language_tools";
import "ace/ext-emmet";
import "ace/ext-beautify";

import "ace/ext-modelist";
import "ace/ext-statusbar";


// import 'brace';
// // get the path to the ace theme/mode assets- eg "http://localhost:9000/jspm_packages/github/ajaxorg/ace-builds@1.2.2.js"
// let base = SystemJS.normalizeSync('brace');
// // strip the trailing ".js" from the path:
// base = base.substr(0, base.length - 8);
// // configure ace with the base path
// ace.config.set('basePath', base);
//
// // TODO: just import what you need
// import "brace/ext/language_tools";
// import "brace/ext/modelist";
// import 'brace/theme/monokai';
// import 'brace/mode/html';


