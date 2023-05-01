import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {LoginServiceService} from "../../services/login-service.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data : Date = new Date();
  focus: any;
  focus1: any;

  loginData = {
    email:'',
    password :'',
  };


  constructor(/*private snack:MatSnackBar,*/private login:LoginServiceService, private router:Router) { }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  // ngOnDestroy(){
  //   var body = document.getElementsByTagName('body')[0];
  //   body.classList.remove('login-page');
  //
  //   var navbar = document.getElementsByTagName('nav')[0];
  //   navbar.classList.remove('navbar-transparent');
  // }



  formSubmit(){

    //console.log("clicked");

    if(this.loginData.email.trim() == '' || this.loginData.email == null){

      Swal.fire('Champ obligatoire !!', 'email est un champ obligatoire', 'error');

      /*  this.snack.open('Username est un champ obligatoire', '',{
          duration:3000,
        });*/

      return;
    }

    if(this.loginData.password.trim() == '' || this.loginData.password == null){

      Swal.fire('Champ obligatoire !!', 'Password est un champ obligatoire', 'error');


      /*  this.snack.open('password est un champ obligatoire', '',{
          duration:3000,
        });*/

      return;
    }

    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log("succes");
        console.log(data);
        this.login.loginUser(data.token);
        this.router.navigateByUrl('/homeBack')
        this.login.getCurrentUser(this.loginData.email).subscribe(
          (user)=>{
            this.login.setUser(user);
             console.log(user);

            if(user.role=='STUDENT'){

              Swal.fire('Bienvenue',this.login.getUser()?.firstname, 'success').then((result)=>{
                if(result.isConfirmed){

                  this.router.navigate(['/profile']);

                  // window.location.href='/';
                }
              });
              //  window.location.href='/';

            }else{
              this.login.logout();
            }



          }
        )



      },
      (error)=>{
        console.log("Error");
        console.log(error);
        Swal.fire('Information Invalide', '', 'error');
      }
    );



  }

}
