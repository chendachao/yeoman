import {Component} from '@angular/core';
import {HeaderComponent} from './core/components/header/header.ts';
import {TitleComponent} from './core/components/title/title.ts';
import {TechsComponent} from './techs/techs.ts';
import {FooterComponent} from './core/components/footer/footer.ts';
import {HelloComponent} from './core/components/hello/hello.ts';

import template from './main.html!text';

@Component({
  selector: 'fountain-app',
  template: template,
  directives: [HeaderComponent, TitleComponent, TechsComponent, FooterComponent, HelloComponent]
})
export class MainComponent {}
