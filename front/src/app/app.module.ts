import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { HideButtonComponent } from './navigation/sidebar/hide-button/hide-button.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ConnexionComponent } from './user/connexion/connexion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfilComponent } from './user/profil/profil.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SidebarComponent,
    HideButtonComponent,
    HomeComponent,
    AboutComponent,
    ConnexionComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
