import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Trendingmovies:any;
  theatermovies:any;
  papularmovies:any;

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.getmovies();
    this.gettheatremvoies();
    this.popularmovies();
  }
  //trending movies
 getmovies(){
this.http.get('http://localhost:4200/assets/data/trending-movies.json')
.subscribe((movies)=>{
   this.Trendingmovies=movies;
   console.log(movies);
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
