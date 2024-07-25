import { Route } from '@angular/router';
import { RemoteEntryComponent } from './remote-entry/entry.component';

export const appRoutes: Route[] = [
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./remote-entry/entry.component').then((m) => m.RemoteEntryComponent),
  // }
  {
    path: '',
    component: RemoteEntryComponent,
    pathMatch: 'full'
  }
];
