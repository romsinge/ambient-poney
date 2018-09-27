import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminComponent } from '../modules/admin/admin/admin.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmGuard implements CanDeactivate<AdminComponent> {
  canDeactivate(
    component: AdminComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return confirm("Êtes-vous sûr de vouloir partir ?")
  }
}
