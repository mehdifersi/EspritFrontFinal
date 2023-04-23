import {Component, OnInit} from '@angular/core';
import {User} from "../../core/Model/User";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit{
  constructor(private userService:UserService) { }
  listUsers: User[] | undefined
  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      {
        next: (data)=> this.listUsers=data,
      }
    )
    console.log(this.listUsers)
  }}
