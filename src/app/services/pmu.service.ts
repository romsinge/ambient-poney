import { Injectable } from '@angular/core';
import { Poney } from '../interfaces/poney';
import { Race } from '../interfaces/race';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PmuService {

  constructor(private http: HttpClient) {}

  API: string = "http://localhost:3000/"

  get ponies(): Observable<Poney[]> {
    return this.http.get(`${this.API}ponies`).pipe(map((ponies) => <Poney[]>ponies))
  }

  get races(): Observable<Race[]> {
    return this.http.get(`${this.API}races`).pipe(map((races) => <Race[]>races))
  }

  getRaceById(id: number): Observable<Race> {
    return this.http.get(`${this.API}races/${id}`).pipe(map(race => <Race>race))
  }

  setRace(race: Race): Observable<Race> {
    return this.http.post(`${this.API}races`, race).pipe(map(race => <Race>race))
  }
}
