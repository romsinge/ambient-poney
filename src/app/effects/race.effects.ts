import { PmuService } from './../services/pmu.service';
import { HttpClient } from '@angular/common/http';
import * as RaceActions from './../actions/race.actions';
import { Injectable } from "@angular/core";
import { Actions, Effect } from '@ngrx/effects'
import { map, switchMap } from 'rxjs/operators'

@Injectable()
export class RaceEffects {

  constructor(
    private actions$: Actions,
    private pmu: PmuService
  ) {}

  @Effect() addRace$ = this.actions$
    .ofType(RaceActions.ADD_RACE)
    .pipe(switchMap((action: RaceActions.AddRace) => {
      return this.pmu.setRace(action.payload).pipe(map(race => {
        return new RaceActions.AddRaceSuccess(race)
      }))
    }))

  @Effect() deleteRace$ = this.actions$
    .ofType(RaceActions.DELETE_RACE)
    .pipe(switchMap((action: RaceActions.DeleteRace) => {
      return this.pmu.deleteRace(action.payload).pipe(map(() => {
        return new RaceActions.DeleteRaceSuccess(action.payload)
      }))
    }))
}