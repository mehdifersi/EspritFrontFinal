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
  offer: Offre = {
    idOffre:0,
    title: "",
    type: "" as Type,
    description: "",
    capacity: 10
  };
  constructor(private offreService: OffreService,private router: Router,private http:HttpClient) {}

  ngOnInit() {
  }

  /*initValidation() {
    "use strict";
    const forms = document.querySelectorAll(".requires-validation");
    Array.from(forms).forEach(form => {
      form.addEventListener(
        "submit",
        event => {
          // Cast the form element to HTMLFormElement interface
          const htmlForm = form as HTMLFormElement;
          if (!htmlForm.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          } else {
            event.preventDefault();
            console.log(this.offer.title);
            this.offreService.postOffre(this.offer).subscribe(
              () => {
                console.log('Offer added successfully');
                // Reset the form
                this.router.navigate(['/homeBack'])
              },
              (              error: any) => {
                console.error('Failed to add offer', error);
              }
            );
          }

          htmlForm.classList.add("was-validated");
        },
        false
      );
    });
  }
*/
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
