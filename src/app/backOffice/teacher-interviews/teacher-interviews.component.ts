import { Component } from '@angular/core';
import {Interview} from "../../core/Model/Interview";
import {User} from "../../core/Model/User";
import {InterviewService} from "../../services/interview.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-teacher-interviews',
  templateUrl: './teacher-interviews.component.html',
  styleUrls: ['./teacher-interviews.component.css']
})
export class TeacherInterviewsComponent {
  interviews : any[]=[];
  idTeacher !: number;
  teacher !: User;

  constructor(private interviewService: InterviewService, private route: ActivatedRoute, private userService: UserService, private router: Router) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idTeacher = params['id'];
    });

    this.userService.getUser(this.idTeacher).subscribe(
      {
        next: (data) => this.teacher = data,
      })
    this.interviewService.getInteviewsForTeacher(this.idTeacher).subscribe(
      {
        next: (data) => this.interviews = data,
      })
  }

  deleteInterview(idInterview: any) {
    this.interviewService.deleteInterview(idInterview).subscribe({
      next:()=>this.ngOnInit()
    })

  }
}
