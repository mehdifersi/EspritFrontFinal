import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {LoginServiceService} from "./login-service.service";

@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate {

  constructor(private login:LoginServiceService, private router:Router){

  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.login.isLoggedIn()&&this.login.getUserRole()=='STUDENT'){
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }

}
