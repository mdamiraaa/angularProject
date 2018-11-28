import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';
import { Film } from '../filmindex/Film';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HALL} from '../../Models/hall-list'

@Component({
  selector: 'app-addsessions',
  templateUrl: './addsessions.component.html',
  styleUrls: ['./addsessions.component.css']
})
export class AddsessionsComponent implements OnInit {
  films : Film[];
  
  cinema: any = {};
  angForm: FormGroup;
  selectedFilm:any;
  chFilm:any;
  chDate:any;
  chTime:any;
  chHall:any;
  f:any;
  h:any;
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: RecordsService,
    private fb: FormBuilder) {
      this.createForm()
     }

     createForm() {
      this.angForm = this.fb.group({
        cinema_name: ['', Validators.required ],
        cinema_address: ['', Validators.required ],
         });
      }

  ngOnInit() {
    this.service.getFilms().subscribe((data: Film[]) => {
      this.films = data;
    });
    this.route.params.subscribe(params => {
      this.service.editCinema(params['id']).subscribe(res => {
        this.cinema = res;
    });
  });
  }
  // addCStudent(){

  //   console.log(parseInt(this.selectedOption)-1);
  //   console.log(this.course.id);
    
  //   //this.courses[this.course.id-1].students.push(this.selectedOption);
  //   this.courses[this.course.id-1].students.push(this.stud[parseInt(this.selectedOption)-1]);
  //   let s=this.stud[parseInt(this.selectedOption)-1];
  //   console.log(s);
   
  //    }
  onChange(event):void{
    this.chFilm= event.target.value;
    for(var i=0;i<this.films.length;i++){
    if(this.films[i].film_name===this.chFilm){
      this.f=this.films[i]
    }
  }
  console.log(this.f);
  }
  onChangedate(event):void{
  this.chDate=event.target.value;
  console.log(this.chDate)
  }
  onChangetime(event):void{
    this.chTime=event.target.value;
    console.log(this.chTime)
  }
  onChangehall(event):void{
    this.chHall=event.target.value;
    for(var i=0;i<this.cinema.halls.length;i++){
      
      if(this.cinema.halls[i].id==this.chHall){
        this.h=this.cinema.halls[i]
      }
    }
    console.log(this.h);
   // console.log(this.cinema.halls)
  }
  addSession(id,price){
  
    console.log(id,this.f,this.chDate,this.chTime, this.h,price)
    this.route.params.subscribe(params => {
      this.service.addSession(id,this.f,this.chDate,this.chTime, this.h, price,params['id']);
  
   });

  }


}
