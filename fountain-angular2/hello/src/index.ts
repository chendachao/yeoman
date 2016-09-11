/// <reference path="../typings/index.d.ts"/>

import 'es6-shim';
import 'zone.js/dist/zone';

import './index.scss!';

import {bootstrap} from '@angular/platform-browser-dynamic';

import {provideRouter} from '@angular/router';
import {enableProdMode} from '@angular/core';
import {routes, RootComponent} from './routes.ts';

import {production} from '@system-env';

if (production) {
  enableProdMode();
}

bootstrap(RootComponent, [
  provideRouter(routes)
]);
