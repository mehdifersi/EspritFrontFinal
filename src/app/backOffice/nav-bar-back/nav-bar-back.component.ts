import {Component, ElementRef, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ROUTES} from "../side-bar-back/side-bar-back.component";
import {LoginServiceService} from "../../services/login-service.service";
import {User} from "../../core/Model/User";

@Component({
  selector: 'app-nav-bar-back',
  templateUrl: './nav-bar-back.component.html',
  styleUrls: ['./nav-bar-back.component.css']
})
export class NavBarBackComponent implements OnInit{
  user!:User | null

  constructor(private login:LoginServiceService,private route:Router){}

  ngOnInit(): void {
    this.user=this.login.getUser()

  }
  logout(){
    this.login.logout()
    this.route.navigateByUrl("/home")
  }


}
