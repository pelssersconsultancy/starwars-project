import { createSelector } from '@ngrx/store';

import { PlanetsSelectors } from '@starwars-project/starwars/planets/data-access-entities'

import { selectPlanetContainersState } from '../planet-container-state';

const selectPlanetOverviewState = createSelector(
  selectPlanetContainersState,
  planetContainerState => planetContainerState.planetOverview,
);

export const selectPlanetOverviewData = createSelector(
  PlanetsSelectors.selectAllPlanets,
  selectPlanetOverviewState,
  (planets, { loading, error }) => ({ planets, loading, error })
);
