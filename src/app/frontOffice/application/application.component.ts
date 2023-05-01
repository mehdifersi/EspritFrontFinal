import {Component, OnInit} from '@angular/core';
import {CondidatOffre} from "../../core/Model/CondidatOffre";

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  focus: any;
  focus1: any;
ApplicationData:CondidatOffre={
  idOffre:0,
  FirstName:'',
  LastName:'',
  email:'',
  Notification:'',
  enableCondidatOffre:false
}

  ngOnInit(): void {
  }

  formSubmit() {

  }

}
