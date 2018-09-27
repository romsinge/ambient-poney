import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaceCreateComponent } from '../../components/race-create/race-create.component';
import { AuthGuard } from '../../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: RaceCreateComponent,
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RaceCreateRoutingModule { }
