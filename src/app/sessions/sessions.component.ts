import { Component, OnInit } from '@angular/core';
import { Cinema } from '../Models/cinema';

import {ActivatedRoute} from '@angular/router';
import { CinemaService } from '../cinema.service';
import { Location } from '@angular/common';
import { RecordsService } from '../admin/records.service';
import { SessionService } from '../session.service';
import { BsModalService , BsModalRef } from 'ngx-bootstrap/modal' 
import { HallComponent } from '../hall/hall.component';
import { FilminfoComponent } from '../filminfo/filminfo.component';
@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {
  cinema = this.service.editCinema('5bf423175954db1510a0de97');
 // cinema:Cinema;
  cinemas;
  bsModalRef: BsModalRef;
  constructor(private route: ActivatedRoute,
    private cinemaService: CinemaService,
    private sessionService :SessionService,
    private location: Location,
    private service: RecordsService,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.service.getCinemas().subscribe((data: Cinema[]) => {
      this.cinema = data["0"];
    });
    this.cinema=this.cinemaService.cinema;
  //  this.cinema = this.service.editCinema('5bf423175954db1510a0de97');
   this.cinemaService.getCinemaEvent.subscribe(
     (something: any) => {
       if (something.name === 'GetCinema') {
         this.cinema = something.data;
         console.log(this.cinema);
       }
     }
   );

 
  }


  goBack(): void {
    this.location.back();
  }
openModal(session){
  console.log(session);
  this.bsModalRef = this.modalService.show(HallComponent);
  this.bsModalRef.content.closeBtnName = 'Close';
  this.getSession(session);
}

openModal2(session){
  console.log(session);
  this.bsModalRef = this.modalService.show(FilminfoComponent);
  this.bsModalRef.content.closeBtnName = 'Close';
  this.getSession(session);
}

  getSession(session): void {
    console.log("work");
    this.sessionService.session=session;
    const gs={name:'GetSession',data:this.sessionService.session}
     this.sessionService.getSessionEvent.emit(gs as any);
      console.log(gs);
    }
}
