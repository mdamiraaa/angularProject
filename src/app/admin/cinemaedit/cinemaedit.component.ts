import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cinemaedit',
  templateUrl: './cinemaedit.component.html',
  styleUrls: ['./cinemaedit.component.css']
})
export class CinemaeditComponent implements OnInit {
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

}
