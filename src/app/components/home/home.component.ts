import { AppState } from './../../app.state';
import { Component, OnInit } from '@angular/core';
import { Race } from '../../interfaces/race';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as RaceActions from '../../actions/race.actions'

@Component({
  selector: 'amb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  races$: Observable<Race[]>

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.races$ = this.store.select('race')
  }

  deleteRace(id: number) {
    this.store.dispatch(new RaceActions.DeleteRace(id))
  }
}
