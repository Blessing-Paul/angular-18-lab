import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SupportComponent } from './pages/support/support.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent  
    },
    {
        path: 'about/:submenu/:id',
        component: AboutComponent  
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'support',
        component: SupportComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
