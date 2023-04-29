import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Interview } from '../core/Model/Interview';
import baseUrl from './helpers.service';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  constructor(private http:HttpClient) { }
  getInterviews() {
    return this.http.get<Interview[]>(`${baseUrl}/interview/getAll`);
  }

  getAllInterviewsWithEvaluatorAndStudentName() {
    return this.http.get<Interview[]>(`${baseUrl}/interview/getAllInterviewsWithEvaluatorAndStudentName`);
  }

  getInteviewsForTeacher(id:number){
    return this.http.get<Interview[]>(`${baseUrl}/interview/getInteviewsForTeacher/${id}`);

  }

  postInterview(interview: Interview) {
    return this.http.post<Interview>(`${baseUrl}/interview/add`, interview);
  }

  updateInterview(interview: Interview) {
    return this.http.put<Interview>(`${baseUrl}/interview/update`, interview);
  }

  deleteInterview(id: number) {
    return this.http.delete(`${baseUrl}/interview/deleteInterviewById/${id}`);
  }

  getInterview(id: number) {
    return this.http.get<Interview>(`${baseUrl}/interview/${id}`);
  }

  getInterviewByStudent(id:number){
    return this.http.get<Interview>(`${baseUrl}/interview/getInterviewByStudent/${id}`);
  }

}
