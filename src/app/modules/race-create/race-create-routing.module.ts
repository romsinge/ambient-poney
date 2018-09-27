import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaceCreateComponent } from '../../components/race-create/race-create.component';

const routes: Routes = [
  {
    path: '',
    component: RaceCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RaceCreateRoutingModule { }
