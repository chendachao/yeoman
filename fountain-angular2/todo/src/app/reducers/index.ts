import {StoreModule, combineReducers} from '@ngrx/store';
import * as todos from './todos.ts';

const reducer = combineReducers(todos);

export const store = StoreModule.provideStore(reducer);
