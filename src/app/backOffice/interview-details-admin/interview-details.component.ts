import { Component } from '@angular/core';
import {InterviewService} from "../../services/interview.service";

@Component({
  selector: 'app-interview-details-admin',
  templateUrl: './interview-details.component.html',
  styleUrls: ['./interview-details.component.css']
})
export class InterviewDetailsAdminComponent {

  interviews : any[]=[];

  constructor(private interviewService:InterviewService) {
  }
  ngOnInit(): void {
    this.interviewService.getAllInterviewsWithEvaluatorAndStudentName().subscribe({
      next: (data) => this.interviews = data,
    })
  }

  deleteInterview(id : number) {
    this.interviewService.deleteInterview(id).subscribe({
      next:()=>this.ngOnInit()
    })

  }

}
