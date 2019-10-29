import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlanetDetailsComponent } from './containers/planet-details/planet-details.component';
import { PlanetOverviewComponent } from './containers/planet-overview/planet-overview.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: PlanetOverviewComponent
      },
      { path: ':id', pathMatch: 'full', component: PlanetDetailsComponent }
    ])
  ],
  declarations: [PlanetDetailsComponent, PlanetOverviewComponent]
})
export class StarwarsPlanetsFeaturePlanetsModule {
  constructor() { }
}
