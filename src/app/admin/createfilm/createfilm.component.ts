import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-createfilm',
  templateUrl: './createfilm.component.html',
  styleUrls: ['./createfilm.component.css']
})
export class CreatefilmComponent implements OnInit {

  angForm: FormGroup;
  constructor(private service: RecordsService, private fb: FormBuilder) {
    this.createForm();
   }
   createForm() {
    this.angForm = this.fb.group({
      film_name: ['', Validators.required ],
      film_duration: ['', Validators.required ],
      film_studio: ['', Validators.required ],
      film_limit: ['', Validators.required ],
      film_format: ['', Validators.required ],
      film_genre: ['', Validators.required ],
      film_image: ['', Validators.required ],
      film_desc: ['', Validators.required ]
   });
  }

  addFilm(film_name,film_duration,film_studio,film_limit,film_format,film_genre,url,desc) {
    this.service.addFilm(film_name,film_duration,film_studio,film_limit,film_format,film_genre,url,desc);
}
  ngOnInit() {
  }

}
