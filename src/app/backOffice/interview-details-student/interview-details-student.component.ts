import { Component } from '@angular/core';
import {InterviewService} from "../../services/interview.service";
import {Interview} from "../../core/Model/Interview";

@Component({
  selector: 'app-interview-details-student',
  templateUrl: './interview-details-student.component.html',
  styleUrls: ['./interview-details-student.component.css']
})
export class InterviewDetailsStudentComponent {

  interview !:Interview;
  constructor(private interviewService:InterviewService) {
  }
  updateInterview(idInterview: any) {

  }

  deleteInterview(idInterview: any) {

  }
}
