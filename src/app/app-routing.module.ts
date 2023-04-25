import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./frontOffice/home/home.component";
import {LoginComponent} from "./frontOffice/login/login.component";
import {SignUpComponent} from "./frontOffice/sign-up/sign-up.component";
import {NavBarComponent} from "./frontOffice/nav-bar/nav-bar.component";
import {HomeBackComponent} from "./backOffice/home-back/home-back.component";
import {NavBarBackComponent} from "./backOffice/nav-bar-back/nav-bar-back.component";
import {SideBarBackComponent} from "./backOffice/side-bar-back/side-bar-back.component";
import {FooterBackComponent} from "./backOffice/footer-back/footer-back.component";
import {ProfileComponent} from "./backOffice/profile/profile.component";
import {NotFoundComponent} from "./backOffice/not-found/not-found.component";
import {ListUserComponent} from "./backOffice/list-user/list-user.component";
import {AddOfferComponent} from "./backOffice/add-offer/add-offer.component";

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'nav',component:NavBarComponent},
  {path:'navBack',component:NavBarBackComponent},
  {path:'sideback',component:SideBarBackComponent},
  {path:'homeBack',component:HomeBackComponent,children: [
      { path: 'tablous', component: ListUserComponent },
      { path: 'add_offre', component: AddOfferComponent },
      {path:'profile',component:ProfileComponent},
    ]},
  /*{path:'tablous',component:ListUserComponent},
  {path:'add_offre',component:AddOfferComponent},*/
  {path:'**',component:NotFoundComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
