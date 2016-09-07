import {Component} from '@angular/core';

@Component({
  selector: 'fountain-hello',
  moduleId: __moduleName,
  templateUrl: 'hello.html'
})
export class HelloComponent {
  public hello: string;

  constructor() {
    this.hello = 'Hello World!';
  }
}
