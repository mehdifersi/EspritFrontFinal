import {Component, OnInit} from '@angular/core';
import {CondidatOffre} from "../../core/Model/CondidatOffre";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {RegisterService} from "../../services/register.service";
import {CondidatOffreService} from "../../services/condidat-offre.service";
import Swal from "sweetalert2";
import {SharedService} from "../../services/sharedservices.service";
import {Offre} from "../../core/Model/Offre";

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  id!:number;
  focus: any;
  focus1: any;
ApplicationData:CondidatOffre={
  idOffre:0,
  firstName:'',
  lastName:'',
  email:'',
  Notification:'',
  enableCondidatOffre:false
}
  constructor(private activatedroute:ActivatedRoute,private apply:CondidatOffreService,private router:Router) {
  this.id=this.activatedroute.snapshot.params['id'];
  }


  ngOnInit(): void {
  console.log(this.id);
  console.log(typeof (this.ApplicationData));
  }

  formSubmit() {
    if(this.ApplicationData.email.trim() == '' || this.ApplicationData.email == null){
      Swal.fire('Required Field !!', 'email is a required field', 'error');
      return;
    }
    if(this.ApplicationData.lastName.trim() == '' || this.ApplicationData.lastName == null){
      Swal.fire('Required field !!', 'lastname is a required field', 'error');
      return;
    }
    if(this.ApplicationData.firstName.trim() == '' || this.ApplicationData.firstName == null){
      Swal.fire('Required field !!', 'firstname is a required field', 'error');
      return;
    }
    this.apply.addapplicationandassigntooffer(this.ApplicationData,this.id).subscribe(
      (data:any)=>{
        Swal.fire("The Job Offer was updated successfully").then((result)=>{
          if (result.isConfirmed){
            this.router.navigate(['/homeBack/offers']);
          }})

        console.log("succes");
        console.log(data);
      })

}
}
