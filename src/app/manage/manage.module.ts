import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ManageRoutes } from './manage.routing';

import { ManageComponent } from './manage.component';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';
import { CityComponent } from './city/city.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ManageRoutes)
  ],
  declarations: [ManageComponent, CountryComponent, StateComponent, CityComponent]
})
export class ManageModule { }
