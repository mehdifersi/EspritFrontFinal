import {Component, OnInit} from '@angular/core';
import * as Rellax from 'rellax';
import {Offre} from "../../core/Model/Offre";
import {OffreService} from "../../services/offre.service";
import {NavigationEnd, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {SharedService} from "../../services/sharedservices.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements  OnInit {
  listOffers: Offre[] = [];
  data : Date = new Date();
  focus: any;
  focus1: any;

  constructor(private sharedServices: SharedService,private offreService: OffreService,private router: Router,private http:HttpClient) {
    this.offreService.getOffres().subscribe((offers) => {
      console.log(offers); // log the entire array of offers to the console
      this.listOffers = offers;
    });
  }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }



}
