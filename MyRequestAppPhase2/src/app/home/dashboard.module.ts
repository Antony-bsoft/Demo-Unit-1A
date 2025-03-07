import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { TableModule } from 'primeng/table'; // Import TableModule
import { ButtonModule } from 'primeng/button';

const routes: Routes = [
    { 
        path: '', component: DashboardComponent 
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'prefix'
      }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule, TableModule, ButtonModule]
  })

export class DashboardModule{}