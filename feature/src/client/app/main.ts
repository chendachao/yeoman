/// <reference path="../../../typings/index.d.ts"/>

import '../../../jspm_packages/system-polyfills.js';
import 'es6-shim';
import 'core-js/client/shim.min.js';
import 'zone.js/dist/zone.js';
import 'reflect-metadata';

import './index.scss!';
import 'bootstrap/dist/css/bootstrap.css!';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


// import { routes, RootComponent } from './routes.ts';
import { AppModule } from './app.module';

import { production } from '@system-env';

// if (String(Config.ENV) === 'prod') { enableProdMode(); }

if (production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

// bootstrap(RootComponent, [
//     provideRouter(routes)
// ]);
