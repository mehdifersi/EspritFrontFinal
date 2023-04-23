import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Rdv } from '../core/Model/RDV_offre';
import baseUrl from './helpers.service';

@Injectable({
  providedIn: 'root'
})
export class RdvOffreService {

  constructor(private http:HttpClient) { }
  getRdvs() {
    return this.http.get<Rdv[]>(`${baseUrl}/rdv/getAll`);
  }

  postRdv(rdv: Rdv) {
    return this.http.post<Rdv>(`${baseUrl}/rdv/add`, rdv);
  }

  updateRdv(rdv: Rdv) {
    return this.http.put<Rdv>(`${baseUrl}/rdv/update`, rdv);
  }

  deleteRdv(id: number) {
    return this.http.delete(`${baseUrl}/rdv/delete/${id}`);
  }

  getRdv(id: number) {
    return this.http.get<Rdv>(`${baseUrl}/rdv/${id}`);
  }

}
