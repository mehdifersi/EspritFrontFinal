import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseUrl from "./helpers.service";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  public ajouterStudent(SignUpData:any){

    return this.http.post(`${baseUrl}/api/v1/auth/register`, SignUpData);
  }
}
