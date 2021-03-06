import { createAction, props } from '@ngrx/store';

import { PlanetsAPI } from '@starwars-project/starwars-api/models/planets';

export const loadPlanetsSucceeded = createAction('[Planet API] Planets successfully loaded', props<{ planets: PlanetsAPI.PagedPlanetsModel}>());
export const loadPlanetsFailed = createAction('[Planet API] Planets failed to load', props<{ error: any }>());
export const loadPlanetSucceeded = createAction('[Planet API] Planet successfully loaded', props<{ planet: PlanetsAPI.PlanetModel}>());
export const loadPlanetFailed = createAction('[Planet API] Planet failed to load', props<{ error: any }>());
