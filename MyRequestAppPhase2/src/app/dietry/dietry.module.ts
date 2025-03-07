import { Route, RouterModule, Routes } from "@angular/router";
import { AddDietryComponent } from "./add-dietry/add-dietry/add-dietry.component";
import { ViewDietryComponent } from "./view-dietry/view-dietry/view-dietry.component";
import { Component, NgModule } from "@angular/core";
import { Button } from "primeng/button";
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";
import { DietryEffects } from "../state/dietry/dietry.effects";
import { DietryService } from "./dietry.service";
import { CommonModule } from "@angular/common";

const routes : Routes = [
    {
        path : '',
        component : ViewDietryComponent
    },
    {
        path : 'add-dietry',
        component : AddDietryComponent
    }
]

@NgModule({
    declarations : [AddDietryComponent, ViewDietryComponent],
    imports : [RouterModule.forChild(routes), Button, HttpClientModule, CommonModule],
    exports : [RouterModule],
})

export class DietryModule{}