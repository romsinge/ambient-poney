import { AppState } from './../app.state';
import { createSelector } from "@ngrx/store";

export const selectRaces = (state: AppState) => state.race

export const getRaceById = (id) => {

  return createSelector(selectRaces, (races) => {
    console.log(races)
    return races.find(race => race.id == id)

  })

}