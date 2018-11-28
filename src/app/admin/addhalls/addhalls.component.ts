import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';
import { Film } from '../filmindex/Film';
import { Router, ActivatedRoute } from '@angular/router';
import {HALL} from '../../Models/hall-list';
import {Hall} from '../../Models/hall';
import {Seat} from '../../Models/seat';

@Component({
  selector: 'app-addhalls',
  templateUrl: './addhalls.component.html',
  styleUrls: ['./addhalls.component.css']
})
export class AddhallsComponent implements OnInit {
halls=HALL;
hall:Hall;
seat:Seat;

cinema: any = {};
f:any;
  selectedHall:any;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: RecordsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.editCinema(params['id']).subscribe(res => {
        this.cinema = res;
    });
  });
  }

createHall(id,name,num_column,num_row){
  console.log(id,name,num_row,num_column);
  let columns=[];
  let rows=[]
  for (let i=0;i<num_column;i++){
    const s:Seat={
      seat_id:i,
      status:true
    }

  columns.push(s);
  }
  for (let i=0;i<num_row;i++){
    rows.push("Ряд "+(i+1));
    
  }

 
  console.log(columns);
  console.log(rows);
    this.route.params.subscribe(params => {
    this.service.addHall(id,name,columns,rows,params['id']);
   
 });
}
}

