import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {OffreService} from "../../../services/offre.service";
import {Type} from "../../../core/Model/Type";
import {Offre} from "../../../core/Model/Offre";
import {HttpClient} from "@angular/common/http";
import Swal from "sweetalert2";

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent {
  offer: Offre={
    idOffre:0,
    title:"",
    type:"" as Type,
    capacity:0,
    description:""
  };
  constructor(private offreService: OffreService,private router: Router,private http:HttpClient) {
  }

  ngOnInit() {
  }
  formSubmit() {
    if(this.offer.title.trim() == '' || this.offer.title == null){
      Swal.fire('Required Field !!', 'title is a required field', 'error');
      return;
    }
    if(this.offer.description.trim() == '' || this.offer.description == null){
      Swal.fire('Required Field !!', 'description is a required field', 'error');
      return;
    }
    if(this.offer.type.trim() == '' || this.offer.type == null){
      Swal.fire('Required Field !!', 'Please Select a type', 'error');
      return;
    }
    if(this.offer.capacity==0 || this.offer.capacity <0){
      Swal.fire('Required Field !!', 'Capacity shouldn t be less or equal than zero', 'error');
      return;
    }
    this.offreService.postOffre(this.offer).subscribe(
      (data:any)=> {
        Swal.fire("The Job Offer was added successfully").then((result)=>{
          if (result.isConfirmed){
            this.router.navigate(['/homeBack/offers']);
          }})

        console.log("succes");
        console.log(data);
      })
  }
}
