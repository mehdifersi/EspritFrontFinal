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

    console.log("the id is ",this.idStudent);

    this.userService.getUser(this.idStudent).subscribe(
      {next: (data) => this.student = data,
      })

    console.log("the user is ",this.student);
  }


  // ngOnInit(): void {
  //   this.userService.getUser().subscribe({
  //     next: (data) => this.interviews = data,
  //   })
  // }

}
