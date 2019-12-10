import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { PlanetOverviewState } from './planet-overview.reducer';
import { loadPlanetsRequested } from './planet-overview.actions';
import { Observable } from 'rxjs';
import { PlanetsAPI } from '@starwars-project/starwars-api/models/planets';

import { PlanetsSelectors } from '@starwars-project/starwars/planets/data-access-entities'

@Injectable({
  providedIn: 'root',
})
export class PlanetOverviewFacade {

  planets$: Observable<PlanetsAPI.PlanetModel[]>;

  constructor(private store: Store<PlanetOverviewState>) {
    this.planets$ = this.store.select(PlanetsSelectors.selectAllPlanets)
  }

  requestPlanets(): void {
    this.store.dispatch(loadPlanetsRequested());
  }
}
