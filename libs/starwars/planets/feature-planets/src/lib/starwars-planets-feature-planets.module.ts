import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlanetDetailsComponent } from './containers/planet-details/planet-details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: PlanetDetailsComponent   //TODO: replace this
      },
      { path: ':id', pathMatch: 'full', component: PlanetDetailsComponent }
    ])
  ],
  declarations: [PlanetDetailsComponent]
})
export class StarwarsPlanetsFeaturePlanetsModule {
  constructor() {
    console.log('StarwarsPlanetsFeaturePlanetsModule constructed')
  }
}
