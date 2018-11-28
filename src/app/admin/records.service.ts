import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Film} from './filmindex/Film'


@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  arrayofsessions=[];
  arrayofhalls=[];

  uri = 'http://localhost:4000/adunits';

  constructor(private http: HttpClient) { }
  
  addFilm(film_name,film_duration,film_studio,film_limit,film_format,film_genre,url,desc) {
    const obj = {
      film_name:film_name,
      film_duration:film_duration,
      film_studio:film_studio,
      film_limit:film_limit,
      film_format:film_format,
      film_genre:film_genre,
      film_image:url,
      film_desc:desc
    };
    this.http.post(`${this.uri}/addfilm`, obj)
        .subscribe(res => console.log('Done'));
  }

  
  getFilms() {
    return this
           .http
           .get(`${this.uri}/getfilm`);
    }


    editFilm(id) {
      return this
                .http
                .get(`${this.uri}/editfilm/${id}`);
      }

      updateFilm(film_name,film_duration,film_studio,film_limit,film_format,film_genre,film_image,film_desc, id) {

        const obj = {
        film_name:film_name,
        film_duration:film_duration,
        film_studio:film_studio,
        film_limit:film_limit,
        film_format:film_format,
        film_genre:film_genre,
        film_image:film_image,
        film_desc:film_desc
        };
        this
          .http
          .post(`${this.uri}/update/${id}`, obj)
          .subscribe(res => console.log('Done'));
      }  
      
      deleteFilm(id) {
        return this
                  .http
                  .get(`${this.uri}/deletefilm/${id}`);
    }


    addCinema(cinema_name,cinema_address) {
      
      const obj = {
        cinema_name:cinema_name,
        cinema_address:cinema_address,
        sessions:[],
        halls:[]
      };
      console.log(obj)
      this.http.post(`${this.uri}/addcinema`, obj)
          .subscribe(res => console.log('Done'));
    }

    getCinemas() {
      return this
             .http
             .get(`${this.uri}/getcinema`);
      }


      deleteCinema(id) {
        return this
                  .http
                  .get(`${this.uri}/deletecinema/${id}`);
    }  

    editCinema(id) {
      return this
                .http
                .get(`${this.uri}/editcinema/${id}`);
      }

      addSession(Session_id,Film,SDate,Time,Hall,Price,id) {

        const obj = {
        id:Session_id,
        film:Film,
        date:SDate,
        time:Time,
        hall:Hall,
        price:Price
        };
        //this.arrayofsessions.push(obj);
        console.log(this.arrayofsessions);
        this
          .http
          .post(`${this.uri}/addsession/${id}`, obj)
          .subscribe(res => console.log('Done'));
      } 
      
    

      deleteSession(c_id,s_id){
        return this
        .http
        .get(`${this.uri}/${c_id}/deletesession/${s_id}`);

      }
      
      addHall(s_id,name,columns,rows,id) {
        const obj = {
          id:s_id,
          name:name,
          row:rows,
          column:columns
          };
        //this.arrayofhalls.push(obj);
        console.log(this.arrayofhalls);
        this
          .http
          .post(`${this.uri}/addhall/${id}`, obj)
          .subscribe(res => console.log('Done'));
      }  
}
