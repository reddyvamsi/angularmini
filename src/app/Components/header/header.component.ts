import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { SahreddataService } from 'src/app/services/sahreddata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() products: any;

  textselect: string = '';
  alldata: any;
  filterdata: any;

  constructor(
    private httP: HttpClient,
    private router: Router,
    private auth: AuthService,
    private sharedservice:SahreddataService
  ) {}

  ngOnInit(): void {
    this.getmovies();
  }

  // naviagte to home
  gotohome() {
    this.router.navigate(['home']);
    console.log('vamsi');
  }

  //for log out function using auth service
  logout() {
    this.auth.logout();
  }

  getmovies() {
    this.httP
      .get('http://localhost:4200/assets/data/trending-movies.json')
      .subscribe((movies) => {
        this.alldata = movies;
        this.filterdata = movies;
        console.log(movies);
      });
  }

  searchfun() {
    this.filterdata = this.alldata.filter((P: any) => {
     P.name.toLowerCase().includes(this.textselect.toLocaleLowerCase);
     this.sharedservice.shared.next(this.textselect);
     console.log(this.textselect)
    });
  }
}
