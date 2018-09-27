import { Race } from "../interfaces/race";
import * as RaceActions from  '../actions/race.actions'

let initialState: Race[] = [
  {
    "id": 0,
    "name": "Madrid",
    "poneyIds": [
      0,
      1
    ]
  },
  {
    "id": 1,
    "name": "Tokyo",
    "poneyIds": [
      2,
      3
    ]
  },
  {
    "name": "Paris",
    "poneyIds": [
      2,
      3
    ],
    "id": 2
  }
]

export function reducer(state: Race[] = initialState, action: RaceActions.Actions) {

  switch(action.type) {
    case RaceActions.ADD_RACE:
      return [...state, action.payload]
    case RaceActions.DELETE_RACE:
      let index = state.findIndex(race => race.id == action.payload)
      return [...state.slice(0, index), ...state.slice(index + 1, state.length)]
    default:
      return state
  }

}