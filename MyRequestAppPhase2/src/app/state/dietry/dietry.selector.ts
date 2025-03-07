import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.state';
import { State } from './dietry.reducer';

const Prpo = (state: AppState) => state.dietry;

export const getDiet = createSelector(
  Prpo,
  (state: State) => state.viewDiet
);