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
import {AddOfferComponent} from "./backOffice/offers/add-offer/add-offer.component";

import {ContactComponent} from "./backOffice/contact/contact.component";
import {StatistiqueComponent} from "./backOffice/statistique/statistique.component";
import {GetOffersComponent} from "./backOffice/offers/get-offers/get-offers.component";
import {UpdateOffersComponent} from "./backOffice/offers/update-offers/update-offers.component";

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
      {path:'profile',component:ProfileComponent},
      {path:'add_offer',component:AddOfferComponent},
      {path:'contact',component:ContactComponent},
      {path:'stat',component:StatistiqueComponent},
      {path:'offers',component:GetOffersComponent},
      {path:'updateoffer',component:UpdateOffersComponent}
    ]},
  {path:'**',component:NotFoundComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
