import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';

import {TechsComponent} from './techs.ts';
import {TechComponent} from './tech.ts';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    TechsComponent,
    TechComponent
  ],
  exports: [
    TechsComponent
  ]
})
export class TechsModule {}
