import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetEntitiesState, planetsEntitiesKey } from './planets-entities.state';
import { Action, combineReducers, StoreModule } from '@ngrx/store';
import { planetsReducer } from './planets/planets.reducer';

function featureReducers(state: PlanetEntitiesState | undefined, action: Action): PlanetEntitiesState {
  return combineReducers({
    planets: planetsReducer
  })(state, action);
}


@NgModule({
  imports: [CommonModule, StoreModule.forFeature(planetsEntitiesKey, featureReducers)],
})
export class StarwarsPlanetsDataAccessEntitiesModule {}
