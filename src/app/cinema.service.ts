import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class CinemaService {
cinema;
  constructor() { }
  
  getCinemaEvent = new EventEmitter<any>();


}
