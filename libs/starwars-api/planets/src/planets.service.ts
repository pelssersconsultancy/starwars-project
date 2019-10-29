import { Injectable, HttpService } from '@nestjs/common';
import { PlanetModel } from '@starwars-project/starwars-api/models/planets';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlanetDto } from './dto/planet.dto';
import { mapToPlanetDto } from './planet.mapper';

@Injectable()
export class PlanetsService {

  constructor(private httpService: HttpService) {}

  getPlanet(id: string): Observable<PlanetDto> {
    return this.httpService.get<PlanetModel>(`https://swapi.co/api/planets/${id}`).pipe(
      map(response => mapToPlanetDto(response.data))
    );
  }
}
