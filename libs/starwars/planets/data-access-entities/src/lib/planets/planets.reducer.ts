import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { PlanetsAPI } from '@starwars-project/starwars-api/models/planets';
import { loadPlanetSucceeded, loadPlanetsSucceeded } from './planets.actions';

export interface PlanetsState extends EntityState<PlanetsAPI.PlanetModel> {}

export const planetsAdapter: EntityAdapter<PlanetsAPI.PlanetModel> = createEntityAdapter<PlanetsAPI.PlanetModel>({
  selectId: planet => planet.name,
  sortComparer: (a, b) => a.name.localeCompare(b.name)
})

const initialPlanetsState: PlanetsState = planetsAdapter.getInitialState<PlanetsState>({ entities: {}, ids: [] });

export const planetsReducer = createReducer(
  initialPlanetsState,
  on(loadPlanetSucceeded, (state, { planet }) => planetsAdapter.upsertOne(planet, state)),
  on(loadPlanetsSucceeded, (state, { planets }) => planetsAdapter.upsertMany(planets.results, state))
);

const { selectEntities, selectIds, selectAll } = planetsAdapter.getSelectors();
export const planetAdapterSelectors = { selectEntities, selectIds, selectAll };
