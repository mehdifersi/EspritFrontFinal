import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }

  addComment(pub: any, id :any) {
    
    return this.http.post<any>('http://localhost:9090/comment/addComment/1/'+id, pub);

}
}
