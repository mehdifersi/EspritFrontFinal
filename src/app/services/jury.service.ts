import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Jury } from '../core/Model/Jury';
import baseUrl from './helpers.service';

@Injectable({
  providedIn: 'root'
})
export class JuryService {

  constructor(private http:HttpClient) { }
  getJurys(){
    return  this.http.get<Jury[]>(`${baseUrl}/jury/getAll`);
  }
  postJury(jury:Jury){
    return this.http.post<Jury>(`${baseUrl}/jury/add`,jury)
  }
  updateJury(jury:Jury){
    return this.http.put<Jury>(`${baseUrl}/jury/update`, jury);

  }
  deleteJury(id:number){
    return this.http.delete(`${baseUrl}/jury/delete/`+ id)
  }
  getJury(id:number){
    return  this.http.get<Jury>(`${baseUrl}/jury/`+id);
  }
}
