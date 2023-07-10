import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router:Router, private auth:AuthService) { }

  ngOnInit(): void {
  }

// naviagte to home 
gotohome(){
this.router.navigate(['home']);
console.log("vamsi");
 }
    
 //for log out function using auth service 
 logout(){
 this.auth.logout()
 }

}
