import { Component, OnInit } from '@angular/core';
import { Film } from './Film';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-filmindex',
  templateUrl: './filmindex.component.html',
  styleUrls: ['./filmindex.component.css']
})
export class FilmindexComponent implements OnInit {
  films : Film[];

  constructor(private service:RecordsService) { }

  deleteFilm(id) {
    this.service.deleteFilm(id).subscribe(res => {
      console.log('Deleted');
    });
  }

  ngOnInit() {
    this.service.getFilms().subscribe((data: Film[]) => {
      this.films = data;
    });
  }

}
