import { Component } from '@angular/core';
import template from './about.component.html!text';
import styles from './about.component.scss!';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  selector: 'fountain-about',
  template: template,
  styles: [styles]
})
export class AboutComponent { }
