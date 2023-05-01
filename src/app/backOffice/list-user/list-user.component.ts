import {Component, OnInit} from '@angular/core';
import {User} from "../../core/Model/User";
import {UserService} from "../../services/user.service";
import {Uploader, UploadWidgetConfig, UploadWidgetResult} from "uploader";
import {HttpHeaders} from "@angular/common/http";
import * as XLSX from 'xlsx';
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

  fileInput!:File
  fileName= 'UserInformation.xlsx';
  listUsers: User[] | undefined
  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      {
        next: (data)=> this.listUsers=data,
      }
    )
  }
  // uploadUser(event: any){
  //
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.readAsArrayBuffer(file);
  //   reader.onload = ()=>{
  //     this.userService.uploadUser(file)
  //   }
  // }

  uploadUser(event:any){
    console.log(event)
    this.fileInput=event.target.files[0];
  }

  saveUser(){
    if (this.fileInput != null ){
      const headers = new HttpHeaders({
        'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary' + Math.random().toString(36).substring(2)
      });
      console.log(this.fileInput)
      let formData=new FormData();
      formData.append("file",this.fileInput)
      this.userService.uploadUser(formData).subscribe(response => {
        alert("sucess")
      });
    }
  }
  deleteUser(id:number){
    this.userService.deleteUser(id).subscribe({
      next:()=>this.ngOnInit()
    })
  }
  exportexcel(){
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }
}
