import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Criteria } from '../core/Model/Criteria';
import baseUrl from './helpers.service';

@Injectable({
  providedIn: 'root'
})
export class CriteriaService {

  constructor(private http:HttpClient) { }
  getCriterias(){
    return  this.http.get<Criteria[]>(`${baseUrl}/criteria/getAll`);
  }
  postCriteria(criteria:Criteria){
    return this.http.post<Criteria>(`${baseUrl}/criteria/add`,criteria)
  }
  updateCriteria(criteria:Criteria){
    return this.http.put<Criteria>(`${baseUrl}/criteria/update`, criteria);

  }
  deleteCriteria(id:number){
    return this.http.delete(`${baseUrl}/criteria/delete/`+ id)
  }
  getCriteria(id:number){
    return  this.http.get<Criteria>(`${baseUrl}/criteria/`+id);
  }
}
