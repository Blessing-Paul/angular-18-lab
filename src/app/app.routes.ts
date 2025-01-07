import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SupportComponent } from './pages/support/support.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { CustomerAddComponent } from './pages/customer-add/customer-add.component';
import { FallbackComponent } from './fallback/fallback.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'about/:submenu/:id',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'support',
    component: SupportComponent,
  },
  {
    path: 'customer',
    component: CustomerComponent,
    children: [
      {
        path: 'add-customer',
        component: CustomerAddComponent,
      },
      {
        path: 'edit-customer/:id',
        component: CustomerAddComponent
      }
    ],
  },
  {
    path: '**',
    component: FallbackComponent
  },
];
