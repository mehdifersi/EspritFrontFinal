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
import { AddOfferComponent } from './backOffice/offers/add-offer/add-offer.component';
import { DeleteOfferComponent } from './backOffice/offers/delete-offer/delete-offer.component';
import { UpdateOffersComponent } from './backOffice/offers/update-offers/update-offers.component';
import { GetOffersComponent } from './backOffice/offers/get-offers/get-offers.component';
import { ContactComponent } from './backOffice/contact/contact.component';
import { StatistiqueComponent } from './backOffice/statistique/statistique.component';
import {UploaderModule} from "angular-uploader";
import {NgApexchartsModule} from "ng-apexcharts";
import {MatDialogModule} from "@angular/material/dialog";
import { UploadFileComponent } from './backOffice/upload-file/upload-file.component';
import {MatButtonModule} from "@angular/material/button";
import {NgbActiveModal, NgbModalModule} from "@ng-bootstrap/ng-bootstrap";
import { StatRoleAnneeComponent } from './backOffice/statistique/stat-role-annee/stat-role-annee.component';
import { StatRoleSexeComponent } from './backOffice/statistique/stat-role-sexe/stat-role-sexe.component';
import { StatRoleNationalityComponent } from './backOffice/statistique/stat-role-nationality/stat-role-nationality.component';

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
    AddOfferComponent,
    DeleteOfferComponent,
    UpdateOffersComponent,
    GetOffersComponent,
    ContactComponent,
    StatistiqueComponent,
    UploadFileComponent,
    StatRoleAnneeComponent,
    StatRoleSexeComponent,
    StatRoleNationalityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPageScrollModule,
    FormsModule,
    HttpClientModule,
    UploaderModule,
    NgApexchartsModule,
    MatDialogModule,
    MatButtonModule,
    NgbModalModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass :AuthInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
