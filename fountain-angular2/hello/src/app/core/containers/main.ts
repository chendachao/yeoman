import {Component} from '@angular/core';
import {HeaderComponent} from '../partials/header/header.ts';
import {TitleComponent} from '../partials/title/title.ts';
import {TechsComponent} from '../partials/techs/techs.ts';
import {FooterComponent} from '../partials/footer/footer.ts';
import {HelloComponent} from '../partials/hello/hello.ts';

import template from './main.html!text';

@Component({
  selector: 'fountain-app',
  template: template,
  directives: [HeaderComponent, TitleComponent, TechsComponent, FooterComponent, HelloComponent]
})
export class MainComponent {}
