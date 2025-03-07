import { Store } from "@ngrx/store";
import * as dietAction from '../dietry/dietry.action'
import { Injectable } from "@angular/core";
import * as DietSelector from '../dietry/dietry.selector'
import { combineLatest, map, retry } from "rxjs";
import * as fromApp from '../../app.state';


@Injectable({
    providedIn: 'root',
  })
  
export class DietryFacade{

constructor(private store : Store<fromApp.AppState>){}

setViewDiet_Facade(){
  this.store.dispatch(dietAction.GET_View_Dietry())
}

getViewDiet_Facade(){
  this.setViewDiet_Facade()
  return combineLatest(
    [
      this.store.select(DietSelector.getDiet)
    ]).pipe
    (map(([allDiet]) => {
      console.log(allDiet)
    return allDiet
  }))
}

}