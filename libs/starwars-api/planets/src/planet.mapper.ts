import { PlanetsAPI } from '@starwars-project/starwars-api/models/planets';
import { PlanetDto } from './dto/planet.dto';
import { plainToClass } from 'class-transformer';
import { PagedPlanetsDto } from './dto/paged-planets.dto';
import { mapToPagedResult } from '@swapi/shared/paged-swapi-result.mapper';

export function mapToPlanetDtos(pagedPlanetsResult: PlanetsAPI.PagedSwapiPlanetsModel): PagedPlanetsDto {
  return plainToClass<PagedPlanetsDto, PlanetsAPI.PagedPlanetsModel>(PagedPlanetsDto, mapToPagedResult(pagedPlanetsResult));
}

export function mapToPlanetDto(planetModel: PlanetsAPI.PlanetModel): PlanetDto {
  return plainToClass<PlanetDto, PlanetsAPI.PlanetModel>(PlanetDto, planetModel);
}
