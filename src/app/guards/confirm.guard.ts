import { ConfirmService } from './../modules/admin/services/confirm.service';
import { ConfirmComponent } from './../modules/admin/confirm/confirm.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminComponent } from '../modules/admin/admin/admin.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmGuard implements CanDeactivate<AdminComponent> {
  constructor(private confirm: ConfirmService) {}
  
  canDeactivate(
    component: AdminComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.confirm.isOpen = true
    setTimeout(() => {
      this.confirm.isOpen = false
    }, 2000)
      // confirm("Êtes-vous sûr de vouloir partir ?")
      return false
  }
}
