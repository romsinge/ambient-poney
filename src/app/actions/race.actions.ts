
import { Action } from '@ngrx/store'
import { Race } from '../interfaces/race';

export const ADD_RACE = '[RACE] Add'
export const DELETE_RACE = '[RACE] Delete'

export class AddRace implements Action {
  type = ADD_RACE

  constructor(public payload: Race) {}
}

export class DeleteRace implements Action {
  type = DELETE_RACE

  constructor(public payload: number) {}
}

export type Actions = AddRace | DeleteRace