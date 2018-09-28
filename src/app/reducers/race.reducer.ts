import { Race } from "../interfaces/race";
import * as RaceActions from  '../actions/race.actions'
///<reference path='../../../node_modules/immutable/dist/immutable.d.ts'/>
import * as immutable from 'immutable'

export function reducer(state: Race[], action: RaceActions.Actions) {

  switch(action.type) {
    case RaceActions.ADD_RACE_SUCCESS:
      return [...state, action.payload]
    case RaceActions.DELETE_RACE_SUCCESS:
      let index = state.findIndex(race => race.id == action.payload)
      return [...state.slice(0, index), ...state.slice(index + 1, state.length)]
      // let newState = immutable.List(state)
      // return newState.removeIn()
    case RaceActions.INIT_RACES:
      return action.payload
    default:
      return state
  }

}