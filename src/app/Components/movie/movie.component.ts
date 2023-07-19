import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

   type="";
   id="";
   Url=""
   movies:any=""
   movie:any
  constructor(private route:ActivatedRoute , private http:HttpClient) { }

  ngOnInit(): void {
    this.type=this.route.snapshot.params['type'];
    this.id=this.route.snapshot.params['id']
  console.log(this.route);
  if(this.type === 'trending'){
    this.Url="http://localhost:4200/assets/data/trending-movies.json"
  }
  if(this.type==='theater'){
    this.Url="http://localhost:4200/assets/data/theatre-movies.json"
  } 
  if(this.type==="popular"){
    this.Url="http://localhost:4200/assets/data/popular-movies.json"
  }
  this.getMovies();
  }
 getMovies(){
this.http.get(this.Url).subscribe((data:any)=>{
this.movies=data;
console.log(this.movies)
let index=this.movies.findIndex(
  (movie:{id:string})=>movie.id == this.id
);
if(index > -1){
  this.movie=this.movies[index]
  console.log(this.movie);
}
});
 }
}
