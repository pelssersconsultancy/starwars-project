import { Injectable, HttpService } from '@nestjs/common';
import { PlanetsAPI } from '@starwars-project/starwars-api/models/planets';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlanetDto } from './dto/planet.dto';
import { mapToPlanetDto, mapToPlanetDtos } from './planet.mapper';
import { PagedPlanetsDto } from './dto/paged-planets.dto';

@Injectable()
export class PlanetsService {

  constructor(private httpService: HttpService) {}

  getPlanets(): Observable<PagedPlanetsDto> {
    return this.httpService.get<PlanetsAPI.PagedSwapiPlanetsModel>('https://swapi.co/api/planets').pipe(
      map(response => mapToPlanetDtos(response.data))
    );
  }

  getPlanet(id: string): Observable<PlanetDto> {
    return this.httpService.get<PlanetsAPI.PlanetModel>(`https://swapi.co/api/planets/${id}`).pipe(
      map(response => mapToPlanetDto(response.data))
    );
  }
}
