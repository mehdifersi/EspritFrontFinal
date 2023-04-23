import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseUrl from "./helpers.service";

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http:HttpClient) { }
  public ajouterBloc(bloc:any){

    return this.http.post(`${baseUrl}/bloc/add`, bloc);
  }

}
