import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
   { path: 'users', component: UsersComponent },
   { path: 'about-us', component: AboutUsComponent }
];
