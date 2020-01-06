import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { PlanetOverviewState } from './planet-overview.reducer';
import { loadPlanetsRequested } from './planet-overview.actions';
import { Observable } from 'rxjs';
import { PlanetsAPI } from '@starwars-project/starwars-api/models/planets';

import { selectPlanetOverviewData } from './planet-overview.selectors';

@Injectable({
  providedIn: 'root',
})
export class PlanetOverviewFacade {

  planetOverviewData$: Observable<{planets: PlanetsAPI.PlanetModel[], loading: boolean, error: any }>;

  constructor(private store: Store<PlanetOverviewState>) {
    this.planetOverviewData$ = this.store.select(selectPlanetOverviewData);
  }

  requestPlanets(): void {
    this.store.dispatch(loadPlanetsRequested());
  }
}
