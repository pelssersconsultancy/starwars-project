import { PlanetModel } from '@starwars-project/starwars-api/models/planets';
import { PlanetDto } from './dto/planet.dto';
import { plainToClass } from 'class-transformer';

export function mapToPlanetDto(planetModel: PlanetModel): PlanetDto {
  return plainToClass<PlanetDto, PlanetModel>(PlanetDto, planetModel);
}
