import { Component, OnInit } from '@angular/core';
import {Cinema} from './Cinema';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-cinemalist',
  templateUrl: './cinemalist.component.html',
  styleUrls: ['./cinemalist.component.css']
})
export class CinemalistComponent implements OnInit {
  cinemas : Cinema[];
  constructor(private service:RecordsService) { }

  deleteCinema(id) {
    this.service.deleteCinema(id).subscribe(res => {
      console.log('Deleted');
    });
  }

  ngOnInit() {
    this.service.getCinemas().subscribe((data: Cinema[]) => {
      this.cinemas = data;
    });
  }

}
