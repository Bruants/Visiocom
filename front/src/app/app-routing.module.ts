import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './user/connexion/connexion.component';
import { ProfilComponent } from './user/profil/profil.component';

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
    path: 'user',
    children: [
      {
        path: '',
        component: ConnexionComponent
      },
      {
        path: 'connexion',
        component: ConnexionComponent
      },
      {
        path: 'profil',
        component: ProfilComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
