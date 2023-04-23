import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseUrl from "./helpers.service";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {


  //public loginStatusSubject = new Subject<boolean>();



  constructor(private http:HttpClient) { }


  public generateToken(loginData:any){

    return this.http.post(`${baseUrl}/api/v1/auth/generate-token`, loginData);

  }


  //set token in localStorage
  public loginUser(token:any){

    localStorage.setItem('token',token);

    // this.loginStatusSubject.next(true);
    return true;

  }


  public isLoggedIn(){

    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null){

      return false;


    }else{
      return true;

    }

  }

  public logout(){

    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;


  }

  public getToken(){


    return localStorage.getItem('token');

  }


  public getUser(){

    let userStr = localStorage.getItem('User');
    if(userStr!=null){

      return JSON.parse(userStr);

    }else{

      this.logout();
      return null;

    }

  }


  // public setUser(user:any){
  //
  //   localStorage.setItem('User', JSON.stringify(user));
  //
  //
  // }


 public getUserRole(){

    let user = this.getUser();
    return user.getRole();


  }


  public getCurrentUser(email:any){

    return this.http.get(`${baseUrl}/api/v1/auth/current-user`,email);

  }

}
