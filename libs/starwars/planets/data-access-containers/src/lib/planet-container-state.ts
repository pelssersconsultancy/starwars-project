import { createFeatureSelector } from '@ngrx/store';

import { PlanetOverviewState } from './planet-overview/planet-overview.reducer';

export const planetContainersFeatureKey = 'planet-containers';
export const selectPlanetContainersState = createFeatureSelector<PlanetContainersState>(planetContainersFeatureKey);

export interface PlanetContainersState {
  planetOverview: PlanetOverviewState;
}
