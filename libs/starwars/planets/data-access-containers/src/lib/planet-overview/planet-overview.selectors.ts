import { createSelector } from '@ngrx/store';

import { selectPlanetContainersState } from '../planet-container-state';

const selectPlanetOverviewState = createSelector(
  selectPlanetContainersState,
  planetContainerState => planetContainerState.planetOverview,
);

export const selectIsLoading = createSelector(
  selectPlanetOverviewState,
  planetOverviewState => planetOverviewState.loading
);

export const selectError = createSelector(
  selectPlanetOverviewState,
  planetOverviewState => planetOverviewState.error
);
