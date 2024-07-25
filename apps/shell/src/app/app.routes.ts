import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes= [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },

  // Routes from the remote app
  {
    path: 'booking',
    loadChildren: () => import('mfe1/Module').then((m) => m.BookingModule)
  }

  // We can load also a component instead of a whole module
  // {
  //   path: 'booking',
  //   loadComponent: () => import('mfe1/Component').then((m) => m.BookingComponent)
  // }
];
