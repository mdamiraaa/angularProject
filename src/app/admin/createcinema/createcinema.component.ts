import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {HALL} from '../../Models/hall-list'

@Component({
  selector: 'app-createcinema',
  templateUrl: './createcinema.component.html',
  styleUrls: ['./createcinema.component.css']
})
export class CreatecinemaComponent implements OnInit {
  angForm: FormGroup;
  halls=HALL;
  arrayofhalls:Array<any> = [];
  constructor(private service: RecordsService,private fb: FormBuilder) { 
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      cinema_name: ['', Validators.required ],
      cinema_address: ['', Validators.required ],
    
   });
  }

 

  onChange(hall:object, isChecked: boolean) {
    if(isChecked) {
      this.arrayofhalls.push(hall);
     
    } else {
      let index = this.arrayofhalls.indexOf(hall);
      this.arrayofhalls.splice(index,1);
    }
}
addCinema(cinema_name,cinema_address){
  this.service.addCinema(cinema_name,cinema_address);
  //console.log(this.arrayofhalls);

}
  ngOnInit() {
  }

}
