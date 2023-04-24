import {Component, OnInit} from '@angular/core';
import {LoginServiceService} from "../../services/login-service.service";
import {Router} from "@angular/router";
import {User} from "../../core/Model/User";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user!:User | null
  constructor(private login:LoginServiceService, private router:Router) { }
  ngOnInit(): void {
    this.user=this.login.getUser()
  }

}
