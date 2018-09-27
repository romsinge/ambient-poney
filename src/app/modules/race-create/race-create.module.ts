import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaceCreateRoutingModule } from './race-create-routing.module';
import { RaceCreateComponent } from '../../components/race-create/race-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RaceCreateRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [RaceCreateComponent]
})
export class RaceCreateModule { }
