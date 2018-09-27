import { RaceEffects } from './effects/race.effects';
import { APP_ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PoneyComponent } from './components/poney/poney.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoostDirective } from './directives/boost.directive';
import { RaceComponent } from './components/race/race.component'
import { MaterialModule } from './modules/material/material.module';
import { ClonePipe } from './pipes/clone.pipe';
import { FilterPoniesPipe } from './pipes/filter-ponies.pipe';
import { UpperCasePipe } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { RaceCreateComponent } from './components/race-create/race-create.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/race.reducer'
import { EffectsModule } from '@ngrx/effects';

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
    MaterialModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    StoreModule.forRoot({
      race: reducer
    }),
    EffectsModule.forRoot([RaceEffects])
  ],
  providers: [
    UpperCasePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
