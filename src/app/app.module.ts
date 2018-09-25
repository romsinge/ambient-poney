import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PoneyComponent } from './components/poney/poney.component';

import { FormsModule } from '@angular/forms';
import { BoostDirective } from './directives/boost.directive';
import { RaceComponent } from './components/race/race.component'
import { MaterialModule } from './modules/material/material.module';
import { ClonePipe } from './pipes/clone.pipe';
import { FilterPoniesPipe } from './pipes/filter-ponies.pipe';
import { UpperCasePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PoneyComponent,
    BoostDirective,
    RaceComponent,
    ClonePipe,
    FilterPoniesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    UpperCasePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
