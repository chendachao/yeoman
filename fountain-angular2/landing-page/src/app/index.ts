import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes.ts';

import {TechsModule} from './techs/index.ts';

import {MainComponent} from './main.ts';
import {HeaderComponent} from './header.ts';
import {TitleComponent} from './title.ts';
import {FooterComponent} from './footer.ts';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    TechsModule
  ],
  declarations: [
    RootComponent,
    MainComponent,
    HeaderComponent,
    TitleComponent,
    FooterComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
