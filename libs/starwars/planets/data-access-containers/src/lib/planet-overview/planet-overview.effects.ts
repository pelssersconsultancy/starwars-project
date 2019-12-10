import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { PlanetsActions, PlanetsService } from '@starwars-project/starwars/planets/data-access-entities';
import { loadPlanetsRequested } from './planet-overview.actions';



@Injectable()
export class PlanetOverviewEffects {

  loadPlanetsResult$: Observable<ReturnType<typeof PlanetsActions.loadPlanetsSucceeded | typeof PlanetsActions.loadPlanetsFailed>> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadPlanetsRequested),
        switchMap(_ =>
          this.planetsService.getPlanets().pipe(
            map(planets => PlanetsActions.loadPlanetsSucceeded({ planets })),
            catchError(error => of(PlanetsActions.loadPlanetsFailed({ error }))),
          ),
        ),
      ),
  );

  constructor(private actions$: Actions, private planetsService: PlanetsService) {}
}
