import {Component} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {Observable} from 'rxjs/Observable';
// TODO: clean
import 'rxjs/Rx';
import {TechComponent} from '../tech/tech.ts';

import template from './techs.html!text';

export class Tech {
  constructor(
    public logo: string,
    public title: string,
    public text1: string,
    public text2: string
  ) {}
}

@Component({
  selector: 'fountain-techs',
  template: template,
  directives: [TechComponent],
  providers: [HTTP_PROVIDERS]
})
export class TechsComponent {
  public techs: Tech[];
  public tech: Tech;

  constructor(public http: Http) {
    this.getTechs().subscribe(result => this.techs = result);
  }

  getTechs(): Observable<Tech[]> {
    return this.http
      .get('src/app/techs/techs.json')
      .map(response => response.json());
  }
}
