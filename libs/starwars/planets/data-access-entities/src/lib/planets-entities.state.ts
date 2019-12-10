import { PlanetsState } from './planets/planets.reducer';
import { createFeatureSelector } from '@ngrx/store';

export interface PlanetEntitiesState {
  planets: PlanetsState
}

export const planetsEntitiesKey = 'planets-entities';
export const selectPlanetEntitiesState = createFeatureSelector<PlanetEntitiesState>(planetsEntitiesKey);
