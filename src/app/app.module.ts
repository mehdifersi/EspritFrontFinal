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
import {HttpClientModule} from "@angular/common/http";
import { FooterBackComponent } from './backOffice/footer-back/footer-back.component';
import { NavBarBackComponent } from './backOffice/nav-bar-back/nav-bar-back.component';
import { SideBarBackComponent } from './backOffice/side-bar-back/side-bar-back.component';
import { HomeBackComponent } from './backOffice/home-back/home-back.component';
import { ProfileComponent } from './backOffice/profile/profile.component';
import { NotFoundComponent } from './backOffice/not-found/not-found.component';
import { ListUserComponent } from './backOffice/list-user/list-user.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import {NgChartsModule } from 'ng2-charts';
import { NgProgressModule } from 'ngx-progressbar';
import { NgCircleProgressModule } from 'ng-circle-progress';




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
    ComplaintsComponent,
    ModalComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxPageScrollModule,
        FormsModule,
        HttpClientModule,
      BrowserAnimationsModule,
      MdbModalModule,
      NgbModalModule,
      NgChartsModule,
      NgProgressModule,
      NgCircleProgressModule.forRoot({
        // set defaults here
        radius: 100,
        outerStrokeWidth: 16,
        innerStrokeWidth: 8,
        outerStrokeColor: '#78C000',
        innerStrokeColor: '#C7E596',
        animationDuration: 300,
        backgroundColor: '#fff',
        showSubtitle:false

      })






    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
