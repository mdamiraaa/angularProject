import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecordsService } from '../admin/records.service';
import { SessionService } from '../session.service';
import { Film } from '../admin/filmindex/Film';
import { BsModalService , BsModalRef } from 'ngx-bootstrap/modal' 
@Component({
  selector: 'app-filminfo',
  templateUrl: './filminfo.component.html',
  styleUrls: ['./filminfo.component.css']
})
export class FilminfoComponent implements OnInit {
  film: any = {};
  f;
  films : Film[];
  session;
  closeBtnName: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: RecordsService,
    private sessionService: SessionService,
    public bsModalRef: BsModalRef ) { }

  ngOnInit() {
    //this.=this.sessionService.session;
    this.sessionService.getFilmEvent.subscribe(
      (something: any) => {
        if (something.name === 'GetFilm') {
          this.film = something.data;
          console.log(this.film);
        }
 
      }
    );
    this.session=this.sessionService.session;
    this.sessionService.getSessionEvent.subscribe(
      (something: any) => {
        if (something.name === 'GetSession') {
          this.f = something.data;
          console.log(this.f);
        }
 
      }
    );
    this.service.getFilms().subscribe((data: Film[]) => {
      this.films = data;
      console.log(data.length)
      for(var i=0;i< data.length ;i++){
        if(data[i].film_name ==this.f){
          this.film=data[i];
          console.log(this.film)
        }
      }
    });




  }
 

}
