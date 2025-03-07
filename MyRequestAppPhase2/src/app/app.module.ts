import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app-main/app-main/app-main.component';
import { DashboardComponent } from './home/dashboard/dashboard/dashboard.component';
import { LeftMenuComponent } from './shared/left-menu/left-menu.component';

// ✅ Import PrimeNG Modules
import { LeftMenuSharedModule } from './shared/left-menu-module';
import { DashboardModule } from './home/dashboard.module';
import { FooterComponent } from './shared/footer/footer/footer.component';
import { DietryModule } from './dietry/dietry.module';
import { EffectsModule } from '@ngrx/effects';
import { DietryEffects } from './state/dietry/dietry.effects';
import { StoreModule } from '@ngrx/store';

import * as AppReducer from './app.state'

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    DashboardComponent,
    LeftMenuComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeftMenuSharedModule,
    DashboardModule,
    DietryModule,
    EffectsModule.forRoot([DietryEffects]),
    StoreModule.forRoot(AppReducer.reducers)
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
