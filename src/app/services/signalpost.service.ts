import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SignalpostService {

  constructor(private http:HttpClient) { }


  addsignal(id : any) {
    
    return this.http.post<any>('http://localhost:9090/signal/addSignal/1/'+id, null);

}
}
