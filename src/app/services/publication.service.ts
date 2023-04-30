import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'src/assets/BackAssets/vendor/tinymce/tinymce';
import { Publication } from '../Modals/Publication.modal';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {


  constructor(private http:HttpClient) {


 
  }

  getPosts(){
    return this.http.get<any>('http://localhost:9090/publication/getAll' );
  }
  deletePost(id :any){
    return this.http.delete<any>('http://localhost:9090/publication/delete/'+id );

  }

  addpub(pub: any) {
    
    return this.http.post<any>('http://localhost:9090/publication/addPub/1', pub);

}
updatepub(pub : any){
    
  return this.http.put<any>('http://localhost:9090/publication/update', pub);

}
}
