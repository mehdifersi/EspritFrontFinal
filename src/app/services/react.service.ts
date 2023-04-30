import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReactService {

  constructor(private http:HttpClient) { }

  addreact(id: any , react :any) {
    
    return this.http.post<any>('http://localhost:9090/react/addReact/1/'+id+'/'+react,null);

}
}
