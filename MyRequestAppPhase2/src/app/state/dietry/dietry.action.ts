import {createAction, props} from '@ngrx/store'

export const GET_View_Dietry = createAction("Get View Diet")
export const SET_View_Dietry = createAction("Set View Diet", props<{payload : any[]}>())
export const DummY_Dietry = createAction("Dummy Diet")