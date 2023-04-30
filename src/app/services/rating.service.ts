import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RAtingService {

  constructor(private http:HttpClient) { }

  addrate(id: any , rate :any) {
    
    return this.http.post<any>('http://localhost:9090/ratings/addRating/1/'+id +'/'+rate,null);

}

getScore(id : any){
  return this.http.get<any>('http://localhost:9090/ratings/getScore/'+id);
}
}
