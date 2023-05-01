import {Component, OnInit} from '@angular/core';
import {Offre} from "../../../core/Model/Offre";
import {OffreService} from "../../../services/offre.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {SharedService } from "../../../services/sharedservices.service"
import {Observable} from "rxjs";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-get-offers',
  templateUrl: './get-offers.component.html',
  styleUrls: ['./get-offers.component.css']
})
export class GetOffersComponent implements OnInit{
  listOffers: Offre[] = [];

  constructor(private sharedServices: SharedService,private offreService: OffreService,private router: Router,private http:HttpClient) {
    this.offreService.getOffres().subscribe((offers) => {
      console.log(offers); // log the entire array of offers to the console
      this.listOffers = offers;
    });
  }

  ngOnInit(): void {
    }



  deletation(id: number) {


    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        this.offreService.deleteOffre(id).subscribe((response) => {
          console.log('Deletion confirmed for id ' + id);
          // Update the listeoffre Observable after deleting the offer
          this.listOffers = this.listOffers.filter(offre => offre.idOffre !== id);
        }, (error) => {
          console.log('Error while deleting the offer: ' + error);
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Handle cancellation here
        console.log('Deletion cancelled for id ' + id);
      }
    });
  }

  getoffre(idOffre: number) {
    this.offreService.getOffre(idOffre).subscribe(
      (offre) => {
        this.sharedServices.selectedOffer = offre;
        this.router.navigateByUrl("/homeBack/updateoffer")
      },
      (error) => {
        console.log('Error while getting offre: ' + error);
      }
    );
  }

}
