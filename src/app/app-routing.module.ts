import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CinemaComponent } from './cinema/cinema.component';
import { SessionsComponent } from './sessions/sessions.component';
import { CardinfoComponent } from './cardinfo/cardinfo.component';
import { BuyticketComponent } from './buyticket/buyticket.component';
import { HallComponent } from './hall/hall.component';

import {AdminModule} from './admin/admin.module';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SheduleComponent } from './shedule/shedule.component';
import { FilminfoComponent } from './filminfo/filminfo.component';



const routes: Routes = [

    { path: '', component: MainpageComponent },
    { path: 'mainpage', component: MainpageComponent },
    { path: 'schedule', component: SheduleComponent },
    { path: 'cinema', component: CinemaComponent },
    { path: 'schedule/ticket/card', component: CardinfoComponent },
    { path: 'schedule/ticket', component: BuyticketComponent },
    // { path: ':id/planzala/:sid', component: HallComponent },
    { path: 'sessions/:id', component: SessionsComponent},
    { path: 'filminfo', component: FilminfoComponent}

   ];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{enableTracing:true})
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
