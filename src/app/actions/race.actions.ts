
import { Action } from '@ngrx/store'
import { Race } from '../interfaces/race';

export const ADD_RACE = '[RACE] Add'
export const ADD_RACE_SUCCESS = '[RACE] Add Success'
export const DELETE_RACE = '[RACE] Delete'
export const DELETE_RACE_SUCCESS = '[RACE] Delete Success'
export const INIT_RACES = '[RACES] Init'

export class AddRace implements Action {
  type = ADD_RACE

  constructor(public payload: Race) {}
}

export class AddRaceSuccess implements Action {
  type = ADD_RACE_SUCCESS

  constructor(public payload: Race) {}
}

export class DeleteRace implements Action {
  type = DELETE_RACE

  constructor(public payload: number) {}
}

export class DeleteRaceSuccess implements Action {
  type = DELETE_RACE_SUCCESS

  constructor(public payload: number) {}
}

export class InitRaces implements Action {
  type = INIT_RACES

  constructor(public payload: Race[]) {}
}

export type Actions = 
  AddRace 
  | DeleteRace 
  | InitRaces 
  | AddRaceSuccess
  | DeleteRaceSuccess