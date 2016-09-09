import {Component} from '@angular/core';

import { Observable } from 'rxjs/Observable';

import template from './hello.html!text';
import styles from './hello.scss!';

// let template = _template && _template.default ? _template.default : _template;
// let styles = _styles && _styles.default ? _styles.default : _styles;

@Component({
  selector: 'fountain-hello',
  // moduleId: __moduleName,
  template: template,
  styles: [styles]
})
export class HelloComponent {
  public hello: string;

  constructor() {
    this.hello = 'Hello World!';
    console.log(Observable);
  }
}
