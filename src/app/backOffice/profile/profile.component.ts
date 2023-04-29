import {Component, OnInit} from '@angular/core';
import {LoginServiceService} from "../../services/login-service.service";
import {Router} from "@angular/router";
import {User} from "../../core/Model/User";
import {UserService} from "../../services/user.service";
import {HttpHeaders} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {UploadFileComponent} from "../upload-file/upload-file.component";
import {Uploader, UploadWidgetConfig, UploadWidgetResult} from "uploader";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  headers :any = {
    'Access-Control-Allow-Origin' : 'http://localhost:9090/*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Content-Type': 'application/json',
  }
  config = {
    headers:this.headers
  }
  user!:User | null
  private response: any;
  constructor(private login:LoginServiceService,private userService:UserService,private router:Router,private dialogRef:MatDialog) { }

  uploader = Uploader({
    apiKey: "free"
  });
  options: UploadWidgetConfig = {
    multi: false
  };
  // 'onUpdate' vs 'onComplete' attrs on 'upload-dropzone':
  // - Dropzones are non-terminal by default (they don't have an end
  //   state), so by default we use 'onUpdate' instead of 'onComplete'.
  // - To create a terminal dropzone, use the 'onComplete' attribute
  //   instead and add the 'showFinishButton: true' option.
  onUpdate = (files: UploadWidgetResult[]) => {
    alert(files.map(x => x.fileUrl).join("\n"));
  };
  width = "600px";
  height = "375px";


  ngOnInit(): void {
    this.user=this.login.getUser()
  }

  updateProfile(user: User){
    this.userService.updateUser(user)
  }

  generateBadge(id: number): void {
    let fileName: string;
    let a: HTMLAnchorElement;

    this.userService.generateBadge(id).subscribe({
      next: (blob: Blob) => {
        fileName = blob.type.split('/')[1]+"_"+this.user?.firstname+"_"+this.user?.lastname;
        a = document.createElement('a');
        a.download = fileName;
        a.href = window.URL.createObjectURL(blob);
        a.click();
        window.URL.revokeObjectURL(a.href);
      },
      error: (error: any) => {
        console.error('Error generating badge:', error);
      }
    });}
    openDialog(){
        const modelDiv =document.getElementById('uploadModel');
        if(modelDiv!=null){
          modelDiv.style.display='none'
        }
      }
}
