import { PlanetsState } from './planets/planets.reducer';
import { createFeatureSelector } from '@ngrx/store';

export interface PlanetsFeatureState {
  planets: PlanetsState
}

export const planetsFeatureKey = 'planets-feature';
export const selectPlanetsFeatureState = createFeatureSelector<PlanetsFeatureState>(planetsFeatureKey);
