import { AuthGuard } from './../../guards/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmGuard } from '../../guards/confirm.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [ AuthGuard ],
    canDeactivate: [ ConfirmGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
