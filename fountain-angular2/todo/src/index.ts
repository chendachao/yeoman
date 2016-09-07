/// <reference path="../typings/index.d.ts"/>

import 'zone.js/dist/zone';
import {bootstrap} from '@angular/platform-browser-dynamic';
import 'todomvc-app-css/index.css!';
import {provideStore, combineReducers} from '@ngrx/store';

import {todos, visibility, initialTodo, initialVisibility} from './app/reducers/todos.ts';

import {provideRouter} from '@angular/router';
import {enableProdMode} from '@angular/core';
import {routes, RootComponent} from './routes.ts';

import {production} from '@system-env';

if (production) {
  enableProdMode();
}

bootstrap(RootComponent, [
  provideRouter(routes),
  provideStore(combineReducers({todos, visibility}), {todos: [initialTodo], visibility: initialVisibility})
]);
