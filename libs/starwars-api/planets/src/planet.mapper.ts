import { PlanetsAPI } from '@starwars-project/starwars-api/models/planets';
import { PlanetDto } from './dto/planet.dto';
import { plainToClass } from 'class-transformer';
import { PagedPlanetsDto } from './dto/paged-planets.dto';


export function mapToPlanetDtos(pagedPlanetsResult: PlanetsAPI.PagedPlanetsModel): PagedPlanetsDto {
  return plainToClass<PagedPlanetsDto, PlanetsAPI.PagedPlanetsModel>(PagedPlanetsDto, pagedPlanetsResult);
}

export function mapToPlanetDto(planetModel: PlanetsAPI.PlanetModel): PlanetDto {
  return plainToClass<PlanetDto, PlanetsAPI.PlanetModel>(PlanetDto, planetModel);
}
