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
