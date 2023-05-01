import {Component, OnInit} from '@angular/core';
import * as Rellax from 'rellax';
import {ModalComponent} from "../../modal/modal.component";
import {ComplaintService} from "../../services/complaint.service";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Complaint} from "../../core/Model/Complaint";
import {ChatBotService} from "../../services/chat-bot.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements  OnInit {
  data : Date = new Date();
  focus: any;
  focus1: any;
  complaint!:Complaint;
  modalData: any;
  action: any;


  constructor(private complaintService: ComplaintService, private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

  openModal(action:any) {
    const modalRef = this.modalService.open(ModalComponent);
    this.modalData = '';
    modalRef.componentInstance.data = this.modalData;
    modalRef.componentInstance.action = action;

  }

  onModalClosed() {
    this.modalData = null;
  }


}
