import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {Interview} from "../../core/Model/Interview";
import {InterviewService} from "../../services/interview.service";
import {User} from "../../core/Model/User";
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-interview',
  templateUrl: './student-interview.component.html',
  styleUrls: ['./student-interview.component.css']
})
export class StudentInterviewComponent implements OnInit {
  interview !: Interview;
  idStudent !: number;
  student !: User;

  constructor(private interviewService: InterviewService, private route: ActivatedRoute, private userService: UserService, private router: Router) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idStudent = params['id'];
    });
console.log(this.idStudent)
    this.userService.getUser(this.idStudent).subscribe(
      {
        next: (data) => {this.student = data
        },
      })
    this.interviewService.getInterviewByStudent(this.idStudent).subscribe(
      {
        next: (data) => {this.interview = data
        },
      })

  }


  updateInterview(idInterview: number,interview:Interview) {
    this.interviewService.updateInterview2(idInterview,interview).subscribe({
      next:(data)=>{this.interview = data}
    })
  }

  deleteInterview(idInterview: any) {

  }


  return(id: number) {
    this.router.navigate(['/studentDashboard', id]);
  }





}
