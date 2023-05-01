import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-side-bar-back-teacher',
  templateUrl: './side-bar-back-teacher.component.html',
  styleUrls: ['./side-bar-back-teacher.component.css']
})
export class SideBarBackTeacherComponent {
  idTeacher !: number;
  teacher !: any;
  constructor(private userService:UserService,private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idTeacher = params['id'];
    });

    this.userService.getUser(this.idTeacher).subscribe(
      {next: (data) => this.teacher = data,
      })
  }



}
