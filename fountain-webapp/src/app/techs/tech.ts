import {Component, Input} from '@angular/core';
import {Tech} from './techs.ts';

@Component({
  selector: 'Tech',
  moduleId: __moduleName,
  templateUrl: 'tech.html'
})
export class TechComponent {
  @Input() public tech: Tech;
}
