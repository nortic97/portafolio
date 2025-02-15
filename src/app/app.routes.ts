import {Routes} from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },
  { path: 'projects', loadChildren: () => import('./features/projects/projects.routes').then(m => m.routes) },
  { path: 'about', loadChildren: () => import('./features/about/about.routes').then(m => m.routes) },
  { path: 'contact', loadChildren: () => import('./features/contact/contact.routes').then(m => m.routes) },
  { path: '**', redirectTo: 'home' }
];
