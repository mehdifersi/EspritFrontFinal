import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseUrl from "./helpers.service";
import {User} from "../core/Model/User";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {


  //public loginStatusSubject = new Subject<boolean>();



  constructor(private http:HttpClient) { }

  user!:User
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

     let userStr= localStorage.getItem('User');
    if(userStr!=null){
      this.user=JSON.parse(userStr)
      return this.user;

    }else{

      this.logout();
      return null;

    }

  }


  public setUser(user:any){

    localStorage.setItem('User', JSON.stringify(user));


  }


 public getUserRole(){

 return this.user.role


  }


  public getCurrentUser(email:any){

    return this.http.get(`${baseUrl}/api/v1/auth/getUserByEmail/`+email);

  }

}
