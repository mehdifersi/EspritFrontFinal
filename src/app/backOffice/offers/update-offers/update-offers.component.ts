import { Component } from '@angular/core';
import {Offre} from "../../../core/Model/Offre";
import {Type} from "../../../core/Model/Type";
import {OffreService} from "../../../services/offre.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {SharedService} from "../../../services/sharedservices.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-update-offers',
  templateUrl: './update-offers.component.html',
  styleUrls: ['./update-offers.component.css']
})
export class UpdateOffersComponent {
  offer: Offre = this.sharedServices.selectedOffer;
  constructor(private sharedServices: SharedService,private offreService: OffreService,private router: Router,private http:HttpClient) {}

  ngOnInit() {
  }

  formSubmit() {
    this.offreService.updateOffre(this.offer).subscribe(
      (data:any)=> {
        Swal.fire("The Job Offer was updated successfully").then((result)=>{
          if (result.isConfirmed){
            this.router.navigate(['/homeBack/offers']);
          }})

        console.log("succes");
        console.log(data);
      })
  }
}
