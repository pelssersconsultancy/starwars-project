import { createSelector } from "@ngrx/store";

import { selectPlanetEntitiesState } from '../planets-entities.state';
import { planetAdapterSelectors } from './planets.reducer';

const selectPlanetsState = createSelector(
  selectPlanetEntitiesState,
  state => state.planets
);

export const selectAllPlanetEntities = createSelector(
  selectPlanetsState,
  planetAdapterSelectors.selectEntities
);

export const selectAllPlanets = createSelector(
  selectPlanetsState,
  planetAdapterSelectors.selectAll
);
