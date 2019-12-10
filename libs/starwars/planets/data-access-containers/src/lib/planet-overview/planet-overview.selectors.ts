import { createSelector } from '@ngrx/store';

import { PlanetsSelectors } from '@starwars-project/starwars/planets/data-access-entities'

import { selectPlanetContainersState } from '../planet-container-state';

const selectPlanetOverviewState = createSelector(
  selectPlanetContainersState,
  planetContainerState => planetContainerState.planetOverview,
);

const selectIsLoading = createSelector(
  selectPlanetOverviewState,
  planetOverviewState => planetOverviewState.loading
);

const selectError = createSelector(
  selectPlanetOverviewState,
  planetOverviewState => planetOverviewState.error
);

export const selectPlanetOverviewData = createSelector(
  PlanetsSelectors.selectAllPlanets,
  selectIsLoading,
  selectError,
  (planets, isLoading, error) => ({ planets, isLoading, error })
);
