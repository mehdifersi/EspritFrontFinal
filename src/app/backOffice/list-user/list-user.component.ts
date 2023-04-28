import {Component, OnInit} from '@angular/core';
import {User} from "../../core/Model/User";
import {UserService} from "../../services/user.service";
import {Uploader, UploadWidgetConfig, UploadWidgetResult} from "uploader";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit{
  headers :any = {
    'Access-Control-Allow-Origin' : 'http://localhost:9090/*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Content-Type': 'application/json',
  }
  config = {
    headers:this.headers
  }

  constructor(private userService:UserService) { }



  listUsers: User[] | undefined
  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      {
        next: (data)=> this.listUsers=data,
      }
    )
  }
  uploadUser(event: any){

    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = ()=>{
      this.userService.uploadUser(file)
    }
  }

}
