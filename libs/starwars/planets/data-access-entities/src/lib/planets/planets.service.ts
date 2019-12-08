import { Inject, Injectable } from '@angular/core';


@Injectable()
export class PlanetsService {

  constructor(@Inject('planetsApiEndpoint') planetsApiEndpoint: string) {
    
  }
}
