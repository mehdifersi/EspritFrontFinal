import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-side-bar-back-student',
  templateUrl: './side-bar-back-student.component.html',
  styleUrls: ['./side-bar-back-student.component.css']
})
export class SideBarBackStudentComponent implements OnInit{
  idStudent !: number;
  student !: any;
  constructor(private userService:UserService,private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idStudent = params['id'];
    });

    this.userService.getUser(this.idStudent).subscribe(
      {next: (data) => this.student = data,
      })
  }

}
