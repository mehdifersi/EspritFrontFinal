import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPageScrollModule} from "ngx-page-scroll";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './frontOffice/footer/footer.component';
import { HomeComponent } from './frontOffice/home/home.component';
import { LoginComponent } from './frontOffice/login/login.component';
import { SignUpComponent } from './frontOffice/sign-up/sign-up.component';
import { NavBarComponent } from './frontOffice/nav-bar/nav-bar.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule, HttpInterceptor} from "@angular/common/http";
import { FooterBackComponent } from './backOffice/footer-back/footer-back.component';
import { NavBarBackComponent } from './backOffice/nav-bar-back/nav-bar-back.component';
import { SideBarBackComponent } from './backOffice/side-bar-back/side-bar-back.component';
import { HomeBackComponent } from './backOffice/home-back/home-back.component';
import { ProfileComponent } from './backOffice/profile/profile.component';
import { NotFoundComponent } from './backOffice/not-found/not-found.component';
import { ListUserComponent } from './backOffice/list-user/list-user.component';
import {AuthInterceptorService} from "./services/auth-interceptor.service";
import { ContactComponent } from './backOffice/contact/contact.component';
import { StatistiqueComponent } from './backOffice/statistique/statistique.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    NavBarComponent,
    FooterBackComponent,
    NavBarBackComponent,
    SideBarBackComponent,
    HomeBackComponent,
    ProfileComponent,
    NotFoundComponent,
    ListUserComponent,
    ContactComponent,
    StatistiqueComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxPageScrollModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass :AuthInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
