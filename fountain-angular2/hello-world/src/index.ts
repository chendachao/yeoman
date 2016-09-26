/// <reference path="../typings/index.d.ts"/>

import 'core-js/client/shim';
import 'zone.js/dist/zone';

import '@angular/common';
import 'rxjs';

import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/index.ts';

import {production} from '@system-env';

if (production) {
  enableProdMode();
} else {
  Error['stackTraceLimit'] = Infinity; // tslint:disable-line:no-string-literal
  System.import('zone.js/dist/long-stack-trace-zone'); // tslint:disable-line:no-var-requires
}

platformBrowserDynamic().bootstrapModule(AppModule);
