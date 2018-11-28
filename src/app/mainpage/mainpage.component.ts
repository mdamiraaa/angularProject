import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../admin/records.service';
import { Cinema } from '../admin/cinemalist/Cinema';
import { Film } from '../admin/filmindex/Film';
import { BsModalService , BsModalRef } from 'ngx-bootstrap/modal' 
import { HallComponent } from '../hall/hall.component';
import { SessionService } from '../session.service';
import { FilminfoComponent } from '../filminfo/filminfo.component';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  films : Film[];
  cinemas:Cinema[];
  url1;
  url2;
  url3;
  url4;

  showSpinner: boolean=true;
  bsModalRef: BsModalRef;
  
  constructor( private service:RecordsService,
    private modalService: BsModalService,
    private sessionService :SessionService,) { }

  ngOnInit() {
    this.service.getFilms().subscribe((data: Film[]) => {
      this.films = data;
      console.log(data["0"]);
     this.url1=data["0"].film_image;
     this.url2=data["1"].film_image;
     this.url3=data["2"].film_image;
     this.url4=data["3"].film_image;
      console.log(this.url1);
      this.showSpinner=false;
    })
    
  }

  openModal(film){
    console.log(film);
    this.bsModalRef = this.modalService.show(FilminfoComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
    this.getSession(film);
  }

  getSession(film): void {
    console.log("work");
    this.sessionService.film=film;
    const gf={name:'GetFilm',data:this.sessionService.film}
     this.sessionService.getFilmEvent.emit(gf as any);
      console.log(gf);
    }

}
