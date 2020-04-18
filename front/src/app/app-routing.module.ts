import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './users/connexion/connexion.component';

const routes: Routes = [
  { 
    path: '', 
    pathMatch: 'full', 
    redirectTo: 'home' 
  },
  { 
    path: 'home', 
    component: HomeComponent },
  { 
    path: 'about', 
    component: AboutComponent },
  {
    path: 'users',
    children: [
      {
        path: '',
        component: ConnexionComponent
      },
      {
        path: 'connexion',
        component: ConnexionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
