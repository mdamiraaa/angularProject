import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
ticket;
id;
session;
film;
  constructor() { }

  
  getTicketEvent = new EventEmitter<any>();
  getSessionEvent = new EventEmitter<any>();
  getFilmEvent = new EventEmitter<any>();

  // getSession(id: number): Observable<> {
  //   return of(HEROES.find(hero => hero.id === id));
  // }
}
