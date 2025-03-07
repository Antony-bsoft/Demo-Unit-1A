import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './home/dashboard/dashboard/dashboard.component';
import { AppMainComponent } from './app-main/app-main/app-main.component';

const routes: Routes = [
  {
  path : '',
  component : AppMainComponent,
  children : [
    {
      path : 'dashboard',
      loadChildren : () => import('./home/dashboard.module').then(x => x.DashboardModule)
      // path : 'dashboard',
      // component : DashboardComponent
    },
    {
      path : 'view-dietry',
      loadChildren: () => import('./dietry/dietry.module').then(x => x.DietryModule)
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
