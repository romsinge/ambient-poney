import { PmuService } from './services/pmu.service';
import { Component } from '@angular/core';
import { Poney } from './interfaces/poney';
import { Race } from './interfaces/race';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import * as RaceActions from './actions/race.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AmbientIT';

  constructor(
    private pmu: PmuService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.pmu.races.subscribe(races => {
      this.store.dispatch(new RaceActions.InitRaces(races))
    })
  }
  
  handleTitleClick(): void {
    console.log('title click')
  }

  getDate(): Date {
    return new Date()
  }
}
