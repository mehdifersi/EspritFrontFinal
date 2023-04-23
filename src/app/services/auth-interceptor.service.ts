import { Injectable } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {LoginServiceService} from "./login-service.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private login:LoginServiceService){

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //throw new Error("Method not implemented.");

    let authReq = req;
    const token = this.login.getToken();
    // console.log("inside interceptor");

    if(token != null){

      authReq = authReq.clone({

        setHeaders : {Authorization : `Bearer ${token}`},
      });

    }

    return next.handle(authReq);

  }




}

export const authInterceptorProviders=[
  {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptorService,
    multi:true,
  },
];
