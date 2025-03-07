import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";
import * as dietAction from '../dietry/dietry.action'
import {DietryService} from '../../dietry/dietry.service'
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

@Injectable()

export class DietryEffects{

    constructor(private actions$ : Actions, private dietryService : DietryService, private store : Store){}

    FetchViewDiet$ = createEffect(() =>
        this.actions$.pipe(
          ofType(dietAction.GET_View_Dietry),
          switchMap(() =>
             this.dietryService.getViewDietry().pipe(
                map((x) => dietAction.SET_View_Dietry({payload : x}))
             )
            )
          )
        )
}