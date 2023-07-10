import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // imports:[CommonModule, FormsModule ]
})
export class LoginComponent implements OnInit {

  public imgeur:string="../../../assets/film.jpg";

  userdetails:any={
    username:'',
    password:'' 
  }

  errormessage:string="";

  constructor(private aut:AuthService, private router:Router) { }

  ngOnInit(): void {
    //this.userdetails=this.aut.login(username:any  password:any)
  }

  login(){
     if(this.userdetails.username.trim().length === 0){
       this.errormessage="username is required"
     }else if(this.userdetails.password.trim().length === 0){
        this.errormessage="password is required"
     } else {
       this.errormessage=""

       let res=this.aut.login(this.userdetails.username, this.userdetails.password);

       if(res===200){
         this.router.navigate(['home']);
       }
       if(res===403){
         this.errormessage="Invalid credentails"
       }
     }
  }
}
