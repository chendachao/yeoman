import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import * as actions from '../actions/index.ts';

@Component({
  selector: 'fountain-header',
  moduleId: __moduleName,
  templateUrl: 'Header.html'
})
export class HeaderComponent {
  constructor(public store: Store<any[]>) {}

  handleSave(text: string) {
    if (text.length !== 0) {
      this.store.dispatch(actions.addTodo(text));
    }
  }
}
