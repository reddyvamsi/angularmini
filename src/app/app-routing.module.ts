import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MovieComponent } from './Components/movie/movie.component';

const routes: Routes = [
      {path:'' , redirectTo:"login", pathMatch:'full'},
     { path:'login', component:LoginComponent},
     {path:'home', component:HomeComponent},
     {path:'movie', component:MovieComponent},
     {path:"**", component:LoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
