import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes.ts';

import {HelloComponent} from './hello.ts';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    RootComponent,
    HelloComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
