import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../cinema.service';
import { Cinema } from '../admin/cinemalist/Cinema';
import { RecordsService } from '../admin/records.service';
@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {
 
    cinemas:Cinema[];
  
 
  constructor(private cinemaService: CinemaService,
    private service:RecordsService) { }

  ngOnInit() {
    this.service.getCinemas().subscribe((data: Cinema[]) => {
      this.cinemas = data;
    });
  }
  getCinema(cinema): void {
    this.cinemaService.cinema=cinema;
    const gc={name:'GetCinema',data:this.cinemaService.cinema}
      console.log(gc.data);
      this.cinemaService.getCinemaEvent.emit(gc as any);
    }
  }

 

