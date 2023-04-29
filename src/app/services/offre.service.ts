import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Offre } from '../core/Model/Offre';
import baseUrl from './helpers.service';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private http:HttpClient) { }
  getOffres() {
    return this.http.get<Offre[]>(`${baseUrl}/offre/getAll`);
  }

  postOffre(offre: any) {
    console.log(offre)
    return this.http.post<any>(`${baseUrl}/offre/add`,offre);
  }

  updateOffre(offre: Offre) {
    return this.http.put<Offre>(`${baseUrl}/offre/update`, offre);
  }

  deleteOffre(id: number) {
    return this.http.delete(`${baseUrl}/offre/delete/${id}`);
  }

  getOffre(id: number) {
    return this.http.get<Offre>(`${baseUrl}/offre/${id}`);
  }


}
