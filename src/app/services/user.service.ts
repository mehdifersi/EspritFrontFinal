import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../core/Model/User";
import baseUrl from "./helpers.service";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers(){
    return  this.http.get<User[]>(`${baseUrl}/user/getAll`);
  }
  postUser(user:User){
    return this.http.post<User>(`${baseUrl}/user/add`,user)
  }
  updateUser(user:User){
    return this.http.put<User>(`${baseUrl}/user/update`, user);

  }
  deleteUser(id:number){
    return this.http.delete(`${baseUrl}/user/delete/`+ id)
  }
  getUser(id:number){
    return  this.http.get<User>(`${baseUrl}/user/`+ id);
  }
  statistique(role:any,cretetria:any){
    return  this.http.get<User>(`${baseUrl}/user/statistique/`+role+`/`+cretetria);
  }

  updateUser3(id:number,user:User){
    return this.http.put<User>(`${baseUrl}/user/updateUser/`+id,id);
  }

  updateUser2(id: number, user: User): Observable<User> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<User>(`${baseUrl}/user/updateUser/${id}`, user, { headers });
  }

}
