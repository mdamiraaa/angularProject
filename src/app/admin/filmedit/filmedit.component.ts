import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Film } from '../filmindex/Film';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-filmedit',
  templateUrl: './filmedit.component.html',
  styleUrls: ['./filmedit.component.css']
})
export class FilmeditComponent implements OnInit {
  film: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: RecordsService,
    private fb: FormBuilder) { 
      this.createForm()
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

      updateFilm(film_name,film_duration,film_studio,film_limit,film_format,film_genre,film_image,film_desc) {
        this.route.params.subscribe(params => {
           this.service.updateFilm(film_name,film_duration,film_studio,film_limit,film_format,film_genre,film_image,film_desc, params['id']);
           this.router.navigate(['index']);
        });
     }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.editFilm(params['id']).subscribe(res => {
        this.film = res;
    });
  });
  }

}
