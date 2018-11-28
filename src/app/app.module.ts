import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CinemaComponent } from './cinema/cinema.component';
import { FilmComponent } from './film/film.component';
import { SessionsComponent } from './sessions/sessions.component';
import { HallComponent } from './hall/hall.component';
import { BuyticketComponent } from './buyticket/buyticket.component';
import { CardinfoComponent } from './cardinfo/cardinfo.component';
import {HttpClientModule} from '@angular/common/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { AppRoutingModule }     from './app-routing.module';
import {AdminModule} from './admin/admin.module';
import {NgPipesModule} from 'ngx-pipes';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {MatOptionModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import {MatCardModule} from '@angular/material';

import {MatToolbarModule} from '@angular/material/toolbar';
import 'hammerjs';
import { FormsModule } from '@angular/forms';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SessionService } from './session.service';
import { RecordsService } from './admin/records.service';
import { MenuComponent } from './menu/menu.component';
import { SheduleComponent } from './shedule/shedule.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
import { FilminfoComponent } from './filminfo/filminfo.component';



@NgModule({
  declarations: [
    AppComponent,
    CinemaComponent,
    FilmComponent,
    SessionsComponent,
    HallComponent,
    BuyticketComponent,
    CardinfoComponent,
    MainpageComponent,
    MenuComponent,
    SheduleComponent,
    LoadingSpinnerComponent,
    FilminfoComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatGridListModule,
    MatCardModule,
    AppRoutingModule,
    AdminModule ,
    HttpClientModule,
    SlimLoadingBarModule,
    BsDropdownModule.forRoot(),
    NgPipesModule,
    TabsModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [SessionService,RecordsService],
  bootstrap: [AppComponent],
  entryComponents: [HallComponent]
})
export class AppModule { }
