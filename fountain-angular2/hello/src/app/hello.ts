import {Component} from '@angular/core';

import { Observable } from 'rxjs/Observable';

import * as _tempalte from './hello.html';
import _styles from './hello.css!';

let template = _tempalte && _tempalte.default ? _tempalte.default : _tempalte;
let styles = _styles && _styles.default ? _styles.default : _styles;

@Component({
  selector: 'fountain-hello',
  moduleId: __moduleName,
  template: template,
  styleUrl: [styles]
})
export class HelloComponent {
  public hello: string;

  constructor() {
    this.hello = 'Hello World!';
    console.log(Observable);
  }
}
