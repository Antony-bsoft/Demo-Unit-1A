import { ActionReducerMap } from '@ngrx/store';
import * as dietReducer  from '../app/state/dietry/dietry.reducer'; // Import your reducer

export interface AppState {
  dietry: dietReducer.State; // Define state shape
}

export const reducers: ActionReducerMap<AppState> = {
  dietry: dietReducer.dietReducer
};
