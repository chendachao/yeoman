import {Component, Input} from '@angular/core';
import {Tech} from './techs.ts';

import template from './tech.html!text';

@Component({
  selector: 'fountain-tech',
  template: template
})
export class TechComponent {
  @Input() public tech: Tech;
}
