import {Component} from '@angular/core';
import {HeaderComponent} from './header/header.ts';
import {TitleComponent} from './title/title.ts';
import {TechsComponent} from './techs/techs.ts';
import {FooterComponent} from './footer/footer.ts';
import {HelloComponent} from './hello/hello.ts';

import template from './main.html!text';

@Component({
  selector: 'fountain-app',
  template: template,
  directives: [HeaderComponent, TitleComponent, TechsComponent, FooterComponent, HelloComponent]
})
export class MainComponent {}
