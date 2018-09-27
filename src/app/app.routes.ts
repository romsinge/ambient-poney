import { Routes } from '@angular/router'
import { RaceComponent } from './components/race/race.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'race-list',
    pathMatch: 'full'
  },
  {
    path: 'race-list',
    loadChildren: './modules/race-list/race-list.module#RaceListModule'
  },
  {
    path: 'race-create',
    loadChildren: './modules/race-create/race-create.module#RaceCreateModule'
  },
  {
    path: 'admin',
    loadChildren: './modules/admin/admin.module#AdminModule'
  },
  {
    path: 'race',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'race/:id',
    component: RaceComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]