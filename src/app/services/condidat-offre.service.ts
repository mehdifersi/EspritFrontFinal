import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
// @ts-ignore
import baseUrl from "./helpers.service";
import { CondidatOffre } from '../core/Model/CondidatOffre';

@Injectable({
  providedIn: 'root'
})
export class CondidatOffreService {

  constructor(private http:HttpClient) { }
  addapplicationandassigntooffer( condidatOffre:CondidatOffre,  id_offre:number){
    return this.http.post(`${baseUrl}/candidatoffre/assign/${id_offre}`,condidatOffre);
  }
  getCondidatOffres(){
    return  this.http.get<CondidatOffre[]>(`${baseUrl}/condidatOffre/getAll`);
  }
  postCondidatOffre(condidatOffre:CondidatOffre){
    return this.http.post<CondidatOffre>(`${baseUrl}/condidatOffre/add`,condidatOffre)
  }
  updateCondidatOffre(condidatOffre:CondidatOffre){
    return this.http.put<CondidatOffre>(`${baseUrl}/condidatOffre/update`, condidatOffre);

  }
  deleteCondidatOffre(id:number){
    return this.http.delete(`${baseUrl}/condidatOffre/delete/`+ id)
  }
  getCondidatOffre(id:number){
    return  this.http.get<CondidatOffre>(`${baseUrl}/condidatOffre/`+id);
  }
}
