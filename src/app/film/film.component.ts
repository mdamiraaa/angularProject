import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../admin/records.service';
import { Film } from '../admin/filmindex/Film';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  films : Film[];
  constructor(private service:RecordsService) { }

  ngOnInit() {
    this.service.getFilms().subscribe((data: Film[]) => {
      this.films = data;
      
    });
  }

}
