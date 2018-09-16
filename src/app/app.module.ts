import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FetchdataService } from "./fetchdata.service";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    RouterModule.forRoot([
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "signup",
        component : SignUpComponent
      },
      {
        path:"home",
        component:HomeComponent
      }
    ])
  ],
  providers: [FetchdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
