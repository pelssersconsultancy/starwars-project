import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PlanetsAPI } from '@starwars-project/starwars-api/models/planets';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlanetsService {

  constructor(@Inject('apiEndpoint') private apiEndpoint: string, private httpClient: HttpClient) { }

  getPlanets(): Observable<PlanetsAPI.PagedPlanetsModel> {
    return this.httpClient.get<PlanetsAPI.PagedPlanetsModel>(`${this.apiEndpoint}/v1.0/planets`);
  }

  getPlanet(planetId: string): Observable<PlanetsAPI.PlanetModel> {
    return this.httpClient.get<PlanetsAPI.PlanetModel>(`${this.apiEndpoint}/v1.0/planets/${planetId}`);
  }

}
