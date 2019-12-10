import { createReducer, on } from '@ngrx/store';

import { PlanetsActions } from '@starwars-project/starwars/planets/data-access-entities';

import { loadPlanetsRequested } from './planet-overview.actions';

export interface PlanetOverviewState {
  loading: boolean;
  error: any | undefined;
}

const initialPlanetOverviewState: PlanetOverviewState = {
  loading: false,
  error: undefined
};

export const planetOverviewReducer = createReducer(
  initialPlanetOverviewState,
  on(loadPlanetsRequested, state => ({ ...state, loading: true })),
  on(PlanetsActions.loadPlanetsSucceeded, state => ({
    ...state,
    loading: true
  })),
  on(PlanetsActions.loadPlanetsFailed, (state, { error }) => ({
    ...state,
    loading: true,
    error
  }))
);
