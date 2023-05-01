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
Delete(id :any) {
    
  return this.http.delete<any>('http://localhost:9090/comment/delete/'+id);

}
update(com: any, id :any) {
    
  return this.http.post<any>('http://localhost:9090/comment/updateComment/'+id+'/1', com);

}
}
