import {Component, OnInit} from '@angular/core';
import Swal from "sweetalert2";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {RegisterService} from "../../services/register.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  data : Date = new Date();
  focus:any;
  focus1:any;
  SignUpData = {
    firstname:'',
    lastname:'',
    email:'',
    cin :'',
    nationality :'',
    sexe :'',
    typeCours :'',
    niveauActuel :'',
  };
  constructor(private router:Router,private http:HttpClient,private signUp:RegisterService) { }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

  formSubmit(){
    if(this.SignUpData.email.trim() == '' || this.SignUpData.email == null){
      Swal.fire('Champ obligatoire !!', 'email est un champ obligatoire', 'error');
      return;
    }
    if(this.SignUpData.cin.trim() == '' || this.SignUpData.cin == null){
      Swal.fire('Champ obligatoire !!', 'cin est un champ obligatoire', 'error');
      return;
    }
    if(this.SignUpData.lastname.trim() == '' || this.SignUpData.lastname == null){
      Swal.fire('Champ obligatoire !!', 'lastname est un champ obligatoire', 'error');
      return;
    }
    if(this.SignUpData.firstname.trim() == '' || this.SignUpData.firstname == null){
      Swal.fire('Champ obligatoire !!', 'firstname est un champ obligatoire', 'error');
      return;
    }
    if(this.SignUpData.sexe.trim() == '' || this.SignUpData.sexe == null){
      Swal.fire('Champ obligatoire !!', 'select your sexe', 'error');
      return;
    }
    if(this.SignUpData.niveauActuel.trim() == '' || this.SignUpData.niveauActuel == null){
      Swal.fire('Champ obligatoire !!', 'niveauActuel est un champ obligatoire', 'error');
      return;
    }
    if(this.SignUpData.nationality.trim() == '' || this.SignUpData.nationality == null){
      Swal.fire('Champ obligatoire !!', 'nationality est un champ obligatoire', 'error');
      return;
    }
    if(this.SignUpData.typeCours.trim() == '' || this.SignUpData.typeCours == null){
      Swal.fire('Champ obligatoire !!', 'typeCours est un champ obligatoire', 'error');
      return;
    }
    this.signUp.ajouterStudent(this.SignUpData).subscribe(
      (data:any)=>{
        console.log("succes");
        console.log(data);
        Swal.fire('Registred !!', 'verifier ton email', 'success');});
  }
}
