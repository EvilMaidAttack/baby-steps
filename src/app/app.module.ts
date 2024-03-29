import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { FormsModule } from '@angular/forms';
import { SchemeTogglerComponent } from './scheme-toggler/scheme-toggler.component';
import { ThemeService } from './theme.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    SignupFormComponent,
    SchemeTogglerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([ 
      {path: 'home', component: HomeComponent},  
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupFormComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full' }
    ])
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
