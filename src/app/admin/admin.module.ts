import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RecordsService} from './records.service';
import { MainComponent } from './main/main.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CreatefilmComponent } from './createfilm/createfilm.component';
import { CreatecinemaComponent } from './createcinema/createcinema.component';
import {MatToolbarModule} from '@angular/material/toolbar';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { FilmindexComponent } from './filmindex/filmindex.component';
import { FilmeditComponent } from './filmedit/filmedit.component';
import { FilmsComponent } from './films/films.component';
import { CinemasComponent } from './cinemas/cinemas.component';
import { CinemalistComponent } from './cinemalist/cinemalist.component';
import { AddsessionsComponent } from './addsessions/addsessions.component';
import { AddhallsComponent } from './addhalls/addhalls.component';
import { CinemaeditComponent } from './cinemaedit/cinemaedit.component';
import { AllsessionsComponent } from './allsessions/allsessions.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AdminRoutingModule,
    MatToolbarModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    FormsModule
   
    
  ],
  declarations: [
     MainComponent,
     CreatefilmComponent,
     FilmindexComponent,
     FilmeditComponent,
     FilmsComponent,
     CinemasComponent,
     CreatecinemaComponent,
     CinemalistComponent,
     AddsessionsComponent,
     AddhallsComponent,
     CinemaeditComponent,
     AllsessionsComponent 
     

     
    ],
    providers: [RecordsService],
    bootstrap: [MainComponent]
})
export class AdminModule { }
