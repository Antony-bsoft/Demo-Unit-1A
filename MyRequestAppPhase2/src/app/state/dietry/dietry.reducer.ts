import { createReducer, on } from "@ngrx/store"
import * as dietAction from '../dietry/dietry.action'

export interface State{
    viewDiet : any
}

const initialState : State = {
    viewDiet : []
}

export const dietReducer = createReducer(initialState,
    on(dietAction.SET_View_Dietry, (
      state, { payload }) => (
      {
        ...state,
        viewDiet: payload
      }))
)
