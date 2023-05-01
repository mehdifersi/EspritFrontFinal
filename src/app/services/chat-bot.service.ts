import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Complaint} from "../core/Model/Complaint";
import baseUrl from "./helpers.service";

@Injectable({
  providedIn: 'root'
})
export class ChatBotService {

  constructor(private http: HttpClient) {
  }

  private baseUrlA = 'http://localhost:9090'; // Replace with the actual Spring Boot server URL


  chatWithGpt3(message: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrlA}/EspritBot/${message}`);
  }
}
