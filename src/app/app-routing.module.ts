import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./frontOffice/home/home.component";
import {LoginComponent} from "./frontOffice/login/login.component";
import {SignUpComponent} from "./frontOffice/sign-up/sign-up.component";
import {NavBarComponent} from "./frontOffice/nav-bar/nav-bar.component";
import {HomeBackComponent} from "./backOffice/home-back/home-back.component";
import {NavBarBackComponent} from "./backOffice/nav-bar-back/nav-bar-back.component";
import {SideBarBackComponent} from "./backOffice/side-bar-back/side-bar-back.component";
import {ProfileComponent} from "./backOffice/profile/profile.component";
import {NotFoundComponent} from "./backOffice/not-found/not-found.component";
import {ListUserComponent} from "./backOffice/list-user/list-user.component";
import {StudentDashboardComponent} from "./backOffice/student-dashboard/student-dashboard.component";
import {AdminDashboardComponent} from "./backOffice/admin-dashboard/admin-dashboard.component";
import {StudentInterviewComponent} from "./backOffice/student-interview/student-interview.component";
import { EventComponent } from './frontOffice/event/event.component';
import { PublicationComponent } from './frontOffice/publication/publication.component';
import { PublicationBackComponent } from './backOffice/publication-back/publication-back.component';
import { EventBackComponent } from './backOffice/event-back/event-back.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'event',component:EventComponent},
  {path:'eventB',component:EventBackComponent},

  {path:'post',component:PublicationComponent},
  {path:'postB',component:PublicationBackComponent},

  {path:'login',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'nav',component:NavBarComponent},
  {path:'navBack',component:NavBarBackComponent},
  {path:'sideback',component:SideBarBackComponent},
  {path:'profile',component:ProfileComponent},
  {path:'homeBack',component:HomeBackComponent},
  {path:'tablous',component:ListUserComponent},
  {path:'adminDashboard',component:AdminDashboardComponent},
  {path:'studentDashboard/:id',component:StudentDashboardComponent},
  {path:'studentInterview/:id',component:StudentInterviewComponent},
  {path:'**',component:NotFoundComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
