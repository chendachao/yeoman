import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {routing, RootComponent} from './routes.ts';
import {store} from './reducers/index.ts';

import {AppComponent} from './containers/App.ts';
import {FooterComponent} from './components/Footer.ts';
import {HeaderComponent} from './components/Header.ts';
import {MainSectionComponent} from './components/MainSection.ts';
import {TodoItemComponent} from './components/TodoItem.ts';
import {TodoTextInputComponent} from './components/TodoTextInput.ts';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    store
  ],
  declarations: [
    RootComponent,
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainSectionComponent,
    TodoItemComponent,
    TodoTextInputComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
