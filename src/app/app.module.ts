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
import { InterviewDetailsAdminComponent } from './backOffice/interview-details-admin/interview-details.component';
import { AdminDashboardComponent } from './backOffice/admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './backOffice/student-dashboard/student-dashboard.component';
import { StudentInterviewComponent } from './backOffice/student-interview/student-interview.component';
import { AdminInterviewsListComponent } from './backOffice/admin-interviews-list/admin-interviews-list.component';
import { StudentProfileComponent } from './backOffice/student-profile/student-profile.component';
import {AuthInterceptorService} from "./services/auth-interceptor.service";
import { SideBarBackStudentComponent } from './backOffice/side-bar-back-student/side-bar-back-student.component';
import { TeacherInterviewsComponent } from './backOffice/teacher-interviews/teacher-interviews.component';
import { SideBarBackTeacherComponent } from './backOffice/side-bar-back-teacher/side-bar-back-teacher.component';
import { TeacherDashboardComponent } from './backOffice/teacher-dashboard/teacher-dashboard.component';
import { DatePipe } from '@angular/common';


// @ts-ignore
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
    InterviewDetailsAdminComponent,
    AdminDashboardComponent,
    StudentDashboardComponent,
    InterviewDetailsAdminComponent,
    StudentInterviewComponent,
    AdminInterviewsListComponent,
    StudentProfileComponent,
    SideBarBackStudentComponent,
    TeacherInterviewsComponent,
    SideBarBackTeacherComponent,
    TeacherDashboardComponent
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
    multi:true,
  },
    DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
