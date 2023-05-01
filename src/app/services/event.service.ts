import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Event } from '../core/Model/Event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) {


 
   }
   getEvent(): Observable<Event[]> {
    return this.http.get<Event[]>('http://localhost:9090/event/get-All' );
  }

  addEvent(event: any) {
    
    return this.http.post<any>('http://localhost:9090/event/addEvent', event);

}

delete(id :any){
  return this.http.delete<any>('http://localhost:9090/event/delete/'+id);
}

update(event : any){
  return this.http.put<any>('http://localhost:9090/event/update' , event);

}
}