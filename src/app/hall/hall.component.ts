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

  seats : Seat[] = [
  {seat_id: 1,status:true},
  {seat_id: 2,status:true},
  {seat_id: 3,status:true},
  {seat_id: 4,status:true},
  {seat_id: 5,status:true},
  {seat_id: 6,status:true},
  {seat_id: 7,status:true},
  {seat_id: 8,status:true},
  {seat_id: 9,status:true},
  {seat_id: 10,status:true},
  {seat_id: 11,status:true},
  {seat_id: 12,status:true},
  {seat_id: 13,status:true},
  {seat_id: 14,status:true},
  {seat_id: 15,status:true},
  {seat_id: 16,status:true},
  {seat_id: 17,status:true},
  {seat_id: 18,status:true},
  {seat_id: 19,status:true},
  {seat_id: 20,status:true},
  ];

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
        //this.changeColor();
       
        
       }

     }
   );

  }


  test(cinema, session,row,col){
    this.ryad=row;
    // this.myColor["background-color"]="red";
    this.mesto=col.seat_id+1;
    this.createTicket(session,row,col.seat_id+1);
    // col.status=false;
    // console.log(col);
    //this.changeColor(column.seat_id);
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

  // changeColor(id){

  //     console.log(this.column[id].status);
  //   if(this.column[id].status===false){
  //     this.myColor={"background-color":"red"};
  //   }
  //   else{
  //     this.myColor={"background-color":"white"};
  //   }
  // }
}

