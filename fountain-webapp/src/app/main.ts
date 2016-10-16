import {Component} from '@angular/core';
import {HeaderComponent} from './header.ts';
import {TitleComponent} from './title.ts';
import {TechsComponent} from './techs/techs.ts';
import {FooterComponent} from './footer.ts';

@Component({
  selector: 'fountain-app',
  moduleId: __moduleName,
  templateUrl: 'main.html',
  directives: [HeaderComponent, TitleComponent, TechsComponent, FooterComponent]
})
export class MainComponent {}
