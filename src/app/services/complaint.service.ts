import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Complaint} from "../core/Model/Complaint";
import baseUrl from "./helpers.service";
import {Status} from "../core/Model/Status";
import {MailingContent} from "../core/Model/MailingContent";

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  private apiUrl = 'http://localhost:9090/complaint';
  constructor(private http:HttpClient) {}

  httpOptions = { headers: new HttpHeaders({
      'Content-Type': 'application/json'})}

  getComplaints(): Observable<Complaint[]>{
    return  this.http.get<Complaint[]>(`${baseUrl}/complaint/getAll`);
  }
  OnDetailsComplaint(id:number): Observable<Complaint>{
    return  this.http.get<Complaint>(`${baseUrl}/complaint/`+`${id}`);
  }

  getComplaintByStatus(status:String): Observable<Complaint[]>{
    return  this.http.get<Complaint[]>(`${baseUrl}/complaint/showComplaintsByStatus/`+'PENDING');
  }
  addComplaint(complaintData:any){
    return this.http.post(`${baseUrl}/complaint/add`,complaintData);
  }
  updateComplaint(complaint:any,id:number):Observable<Complaint>{
    return this.http.put<Complaint>(`${baseUrl}/complaint/update/`+`${id}`,complaint);
  }

  deleteComplaint(complaint:Complaint){
    const id =typeof complaint =='number'? complaint:complaint.idComplaint;
    return this.http.delete(`${baseUrl}/complaint/delete/`+ id)
  }

  updateComplaintStatus(id:number, status: Status):Observable<Complaint> {
    return this.http.put<Complaint>(`${baseUrl}/complaint/updateStatus/${id}/`+status, null);
  }

  // ResolveComplaint(content:any,id:number){
  //   return this.http.put(`${baseUrl}/complaint/Resolve/`+ id, content);
  // }

  ResolveComplaint(content:any,id:number):Observable<any>{
    return this.http.put<any>(`${baseUrl}/complaint/Resolve/`+ id, content);
  }







  // needs mailContent

  //  RejectComplaint(mailcontent:mailcontent,id:number){
  //   return this.http.put<Complaint>(`${baseUrl}/Complaint/Reject/`+id, mailcontent);
  // }
  //
  // ResolveComplaint(mailcontent:mailcontent,id:number){
  //   return this.http.put<Complaint>(`${baseUrl}/Complaint/Resolve/`+id, mailcontent);
  // }
  //
  // DisciplinaryAction(idComplaint:number,idUser:number,Action:string){
  //   return this.http.put<Complaint>(`${baseUrl}/Complaint/Action/`+idComplaint+`/`+idUser+`/`+Action);
  // }

  //
  // ChangeStatus(id:number,status:StatusComplaint){
  //   return this.http.put<Complaint>(`${baseUrl}/Complaint/updateStatus/`+ id + `/`+status);
  // }



  // deleteCategory(idCategory: number): Observable<Object>{
  //   return this.httpClient.delete(`${this.baseURL}`+"/delete-category/"+`${idCategory}`);
  // }
  // setArchivedCategory(category:Category):Observable<Object>{
  //   return this.httpClient.put(`${this.baseURL}`+"/archive-category/",category);
  //
  // }
  // setArchivedCancelCategory(category:Category):Observable<Object>{
  //   return this.httpClient.put(`${this.baseURL}`+"/cancel-archive-category/",category);
  //
  // }
  //
  // setArchive (category:Category):Observable<Object>{
  //   return this.httpClient.put(`${this.baseURL}`+"/set-archive-category/",category);
  //
  // }
}
