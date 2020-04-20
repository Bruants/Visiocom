import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { ProfilComponent } from './user/profil/profil.component';
import { AuthGuard } from './user/auth/guard.service';

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
        component: LoginComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'profil',
        canActivate: [AuthGuard],
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
