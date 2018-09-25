import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PoneyComponent } from './components/poney/poney.component';

import { FormsModule } from '@angular/forms';
import { BoostDirective } from './directives/boost.directive'

@NgModule({
  declarations: [
    AppComponent,
    PoneyComponent,
    BoostDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
