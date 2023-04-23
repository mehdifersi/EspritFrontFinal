import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Result } from '../core/Model/Result';
import baseUrl from './helpers.service';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http:HttpClient) { }
  getRdvs() {
    return this.http.get<Result[]>(`${baseUrl}/result/getAll`);
  }

  postRdv(result: Result) {
    return this.http.post<Result>(`${baseUrl}/result/add`, result);
  }

  updateRdv(result: Result) {
    return this.http.put<Result>(`${baseUrl}/result/update`, result);
  }

  deleteRdv(id: number) {
    return this.http.delete(`${baseUrl}/result/delete/${id}`);
  }

  getRdv(id: number) {
    return this.http.get<Result>(`${baseUrl}/rdv/${id}`);
  }

}
