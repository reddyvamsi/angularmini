import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router } from '@angular/router';
import { SahreddataService } from 'src/app/services/sahreddata.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Trendingmovies:any=[];
  theatermovies:any=[];
  papularmovies:any=[];
  searchterm:string="";

  constructor(private http:HttpClient, private router:Router, private sharedservice:SahreddataService) { }

  ngOnInit(): void {
    this.getmovies();
    this.gettheatremvoies();
    this.popularmovies();
    this.sharedservice.shared.subscribe((val)=>{
      this.searchterm=val;
      console.log(this.searchterm.length);
      console.log("vamsi"+ +val);
    })
  }
  //trending movies
 getmovies(){
this.http.get('http://localhost:4200/assets/data/trending-movies.json')
.subscribe((movies)=>{
   this.Trendingmovies=movies;
   console.log(this.Trendingmovies.length && this.searchterm.length);
})
 }
//getting theater mvores
gettheatremvoies(){
  this.http.get('http://localhost:4200/assets/data/theatre-movies.json')
  .subscribe((tmovies)=>{
    this.theatermovies=tmovies
    console.log(`theater movis---${tmovies}`);
  })
}



// getting popular movies
popularmovies(){
  this.http.get('http://localhost:4200/assets/data/popular-movies.json')
  .subscribe((pmovies)=>{
    this.papularmovies=pmovies;
    console.log(`popular movies---${pmovies}`);
  })
}

//navigate to movie page
 gotomovie(type:string, id:string){
 this.router.navigate(['movie', type,id])
 }


}
