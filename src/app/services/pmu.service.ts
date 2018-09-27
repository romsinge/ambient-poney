import { AppState } from './../app.state';
import { Injectable } from '@angular/core';
import { Poney } from '../interfaces/poney';
import { Race } from '../interfaces/race';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class PmuService {

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  API: string = "http://localhost:3000/"

  get ponies(): Observable<Poney[]> {
    return this.http.get(`${this.API}ponies`).pipe(map((ponies) => <Poney[]>ponies))
  }

  get races(): Observable<Race[]> {
    return this.http.get(`${this.API}races`).pipe(map((races) => <Race[]>races))
  }

  getRaceById(id: number): Observable<Race> {
    // return this.http.get(`${this.API}races/${id}`).pipe(map(race => <Race>race))

    return this.store.select('race').pipe(map((races: Race[]) => {
      return races.find(race => race.id == id)
    }))
  }

  setRace(race: Race): Observable<Race> {
    return this.http.post(`${this.API}races`, race).pipe(map(race => <Race>race))
  }

  deleteRace(id: number): Observable<Object> {
    return this.http.delete(`${this.API}races/${id}`)
  }
}
