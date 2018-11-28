import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-allsessions',
  templateUrl: './allsessions.component.html',
  styleUrls: ['./allsessions.component.css']
})
export class AllsessionsComponent implements OnInit {
  cinema: any = {};
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
  deleteSession(cinema_id,session_id){
    this.service.deleteSession(cinema_id,session_id).subscribe(res => {
      console.log('Deleted');
    });
  }

}
