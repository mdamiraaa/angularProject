import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-buyticket',
  templateUrl: './buyticket.component.html',
  styleUrls: ['./buyticket.component.css']
})
export class BuyticketComponent implements OnInit {
ticket;
  constructor(private sessionService:SessionService) { }

  ngOnInit() {
    this.ticket=this.sessionService.ticket;
    //this.ticket=
    this.sessionService.getTicketEvent.subscribe(
      (something: any) => {
        if (something.name === 'GetTicket') {
          this.ticket = something.data;
        }
      }
    );
  }

}
