import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaceListRoutingModule } from './race-list-routing.module';
import { HomeComponent } from '../../components/home/home.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    RaceListRoutingModule,
    MaterialModule
  ],
  declarations: [HomeComponent]
})
export class RaceListModule { }
