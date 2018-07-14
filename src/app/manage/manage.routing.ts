import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ManageComponent } from './manage.component';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';
import { CityComponent } from './city/city.component';


export const ManageRoutes: Routes = [
  {
  path: '',
  component: ManageComponent,
	data: {
        title: 'Starter Pagesss',
        urls: [{title: 'Manage',url: '/manage'},{title: 'Starter Page'}]
    },
    children: [
    {
      path: 'country',
      component: CountryComponent,
      data: {
        title: 'Manage Country',
        urls: [{title: 'Manage',url: '/country'},{title: 'ngComponent'},{title: 'Progressbar'}]
      }
    },
  ]} 
];



