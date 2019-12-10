import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { PlanetOverviewState } from './planet-overview.reducer';
import { loadPlanetsRequested } from './planet-overview.actions';

@Injectable({
  providedIn: 'root',
})
export class PlanetOverviewFacade {

  

  constructor(private store: Store<PlanetOverviewState>) {}

  requestPlanets(): void {
    this.store.dispatch(loadPlanetsRequested());
  }
}
