import {Component} from '@angular/core';

import { Observable } from 'rxjs/Observable';

import template from './hello.html!text';
import styles from './hello.scss!';

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
