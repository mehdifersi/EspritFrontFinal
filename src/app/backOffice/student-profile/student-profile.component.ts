import {Component, OnInit} from '@angular/core';
import {User} from "../../core/Model/User";
import {UserService} from "../../services/user.service";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit{

  idStudent !: number;
  student !: User;
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


  updateProfile(student: User) {
    this.userService.updateUser(student).subscribe(
      {next: (data) => this.student = data,
      })
  }
}
