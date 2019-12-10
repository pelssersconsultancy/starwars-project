import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsFeatureState, planetsFeatureKey } from './planets-entities.state';
import { Action, combineReducers, StoreModule } from '@ngrx/store';
import { planetsReducer } from './planets/planets.reducer';

function featureReducers(state: PlanetsFeatureState | undefined, action: Action): PlanetsFeatureState {
  return combineReducers({
    planets: planetsReducer
  })(state, action);
}


@NgModule({
  imports: [CommonModule, StoreModule.forFeature(planetsFeatureKey, featureReducers)],
})
export class StarwarsPlanetsDataAccessEntitiesModule {}
