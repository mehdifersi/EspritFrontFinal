import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseUrl from "./helpers.service";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }
  getEventss(){
    return  this.http.get<Event[]>(`${baseUrl}/event/getAll`);
  }
  postEvent(event:Event){
    return this.http.post<Event>(`${baseUrl}/event/add`,event)
  }

  updateEvent(event: Event | null){
    return this.http.put<Event>(`${baseUrl}/event/update`, event);

  }
  deleteEvent(id:number){
    return this.http.delete(`${baseUrl}/event/delete/`+ id)
  }
  getEvent(id:number){
    return  this.http.get<Event>(`${baseUrl}/event/`+id);
  }

}
