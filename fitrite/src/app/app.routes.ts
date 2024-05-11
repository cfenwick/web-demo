import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { OurWorkComponent } from './our-work/our-work.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'our-work', component: OurWorkComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];
