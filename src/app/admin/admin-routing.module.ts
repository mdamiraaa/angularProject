import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { CreatecinemaComponent } from './createcinema/createcinema.component';
import { MainComponent } from './main/main.component';
import { CreatefilmComponent } from './createfilm/createfilm.component';
import { FilmindexComponent } from './filmindex/filmindex.component';
import { FilmeditComponent } from './filmedit/filmedit.component';
import { FilmsComponent } from './films/films.component';
import { CinemasComponent } from './cinemas/cinemas.component';
import { CinemalistComponent } from './cinemalist/cinemalist.component';
import { AddsessionsComponent } from './addsessions/addsessions.component';
import { AddhallsComponent } from './addhalls/addhalls.component';
import { CinemaeditComponent } from './cinemaedit/cinemaedit.component';
import { AllsessionsComponent } from './allsessions/allsessions.component';

const adminRoutes:Routes=[
 
  {path:'admin', component:MainComponent},
  {path:'admin/films', component:FilmsComponent},
  {path:'admin/cinemas', component:CinemasComponent},
  {path:'admin/cinemas/createcinema', component:CreatecinemaComponent},
  {path:'admin/cinemas/indexcinema', component:CinemalistComponent},
  {path:'admin/films/createfilm', component: CreatefilmComponent},
  {path:'admin/films/index', component: FilmindexComponent},
  {path:'edit/:id', component: FilmeditComponent},
  {path:'cinemaedit/:id', component: CinemaeditComponent},
  {path:'cinemaedit/:id/addhalls', component: AddhallsComponent},
  {path:'cinemaedit/:id/addsessions', component: AddsessionsComponent},
  {path:'cinemaedit/:id/allsessions', component: AllsessionsComponent}
  

 
 ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  exports :[RouterModule],
  declarations: []
})
export class AdminRoutingModule { }
