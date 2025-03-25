import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SupportComponent } from './pages/support/support.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { CustomerAddComponent } from './pages/customer-add/customer-add.component';
import { FallbackComponent } from './fallback/fallback.component';
import { authGuard } from './Guards/auth.guard';
import { childauthGuard } from './Guards/childauth.guard';
import { authDeactivateGuard } from './Guards/auth-deactivate.guard';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [authGuard],
  },
  {
    path: 'about/:id',
    component: AboutComponent,
    canActivate: [authGuard],
  },
  {
    path: 'about/:submenu/:id',
    component: AboutComponent,
    canActivate: [authGuard],
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'support',
    component: SupportComponent,
    canActivate: [authGuard],
  },
  {
    path: 'customer',
    component: CustomerComponent,
    canActivate: [authGuard],
    canActivateChild: [childauthGuard],
    canDeactivate: [authDeactivateGuard],
    children: [
      {
        path: 'add-customer',
        component: CustomerAddComponent,
      },
      {
        path: 'edit-customer/:id',
        component: CustomerAddComponent,
      },
    ],
  },
  {
    path: '**',
    component: FallbackComponent,
  },
];
