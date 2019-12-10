import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarwarsPlanetsDataAccessEntitiesModule } from '@starwars-project/starwars/planets/data-access-entities';
import { EffectsModule } from '@ngrx/effects';
import { PlanetOverviewEffects } from './planet-overview/planet-overview.effects';
import { planetOverviewReducer } from './planet-overview/planet-overview.reducer';
import { combineReducers, Action, StoreModule } from '@ngrx/store';
import { PlanetContainersState, planetContainersFeatureKey } from './planet-container-state';

function featureReducers(state: PlanetContainersState | undefined, action: Action): PlanetContainersState {
  return combineReducers({
    planetOverview: planetOverviewReducer
  })(state, action);
}

@NgModule({
  imports: [
    CommonModule,
    StarwarsPlanetsDataAccessEntitiesModule,
    StoreModule.forFeature(planetContainersFeatureKey, featureReducers),
    EffectsModule.forFeature([PlanetOverviewEffects]),
  ]
})
export class StarwarsPlanetsDataAccessContainersModule {}
