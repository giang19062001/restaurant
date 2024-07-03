import {Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
export  const routes: Routes = [
    { path: '', component: AppComponent },  // Default route
    { path: 'about', component: AboutComponent }
  ];