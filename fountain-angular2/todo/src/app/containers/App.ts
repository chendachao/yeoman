import {Component} from '@angular/core';
import {HeaderComponent} from '../components/Header.ts';
import {MainSectionComponent} from '../components/MainSection.ts';

@Component({
  selector: 'fountain-app',
  moduleId: __moduleName,
  templateUrl: 'App.html',
  directives: [HeaderComponent, MainSectionComponent]
})
export class AppComponent {
}
