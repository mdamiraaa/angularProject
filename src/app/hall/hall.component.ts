import { Component, OnInit } from '@angular/core';
import {Hall} from '../Models/hall'
import { Router, ActivatedRoute } from '@angular/router';
import { CinemaService } from '../cinema.service';
import { RecordsService } from '../admin/records.service';
import { SessionService } from '../session.service';
import { BsModalService , BsModalRef } from 'ngx-bootstrap/modal' 
import { Seat } from '../Models/seat';

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css']
})
export class HallComponent implements OnInit {

  
  cinema: any = {};
  session;
  title: string;
  closeBtnName: string;
  ryad;
  mesto;
  myColor;



  public seatColor;

  column;
  row;
  // seats =["Ряд 1","Ряд 2","Ряд 3","Ряд 4"];
  //column=["1","2","3","4","5","6","7","8","9","10"];
  constructor(private route: ActivatedRoute,
    private sessionService:SessionService,
    private cinemaService: CinemaService,
    private service: RecordsService,
    public bsModalRef: BsModalRef ) { }

  ngOnInit() {

  this.session=this.sessionService.session;
   this.sessionService.getSessionEvent.subscribe(
     (something: any) => {
       if (something.name === 'GetSession') {
         this.session = something.data;
         console.log(this.session);
         console.log(this.session.hall.row);
         console.log(this.session.hall.column)
         this.row=something.data.hall.row;
         this.column=something.data.hall.column;

         //this.updateSeats();
  
       
        
       }

     }
   );

  }


  test(cinema, session,row,col){
    this.ryad=row;
    this.mesto=col.seat_id+1;
    this.createTicket(session,row,col.seat_id+1);
    // col.status=false;
    // console.log(col);
    //this.updateSeats();
  }
createTicket(session,row,column){
  const ticket={
    //cinema:cinema.cinema_name,
    film:session.film.film_name,
    date:session.date,
    time :session.time,
    place: row+" Место "+column,
    price:session.price
  }
  this.sessionService.ticket=ticket;
  const gt={
    name:'GetTicket',
    data: this.sessionService.ticket
  };
  this.sessionService.getTicketEvent.emit(gt as any);
 

}

updateSeats(){
  console.log('work');
  console.log(this.column.length);
  for(let i = 0; i <this.column.length;i++){
    console.log(this.column[i].status);
    if(this.column[i].status == false){
      this.seatColor = "seat-notfree";
    }
    else{
      this.seatColor = "seat-free";
    }
  }
}


}

