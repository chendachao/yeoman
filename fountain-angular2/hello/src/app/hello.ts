import {Component} from '@angular/core';

import * as _tempalte from './hello.html';
import * as _css from './hello.css';

let template = _tempalte && _tempalte.default ? _tempalte.default : _tempalte;
let css = _css && _css.default ? _css.default : _css;

@Component({
  selector: 'fountain-hello',
  moduleId: __moduleName,
  template: template,
  styleUrl: [css]
})
export class HelloComponent {
  public hello: string;

  constructor() {
    this.hello = 'Hello World!';
  }
}
