import { Exclude, Expose, Type } from 'class-transformer';
import { ApiModelProperty } from '@nestjs/swagger';

import { PagingResultDto } from '@swapi/shared/dto/paging-result.dto';
import { PlanetDto } from './planet.dto';

@Exclude()
export class PagedPlanetsDto extends PagingResultDto<PlanetDto> {
  @ApiModelProperty({ type: [PlanetDto] })
  @Expose()
  @Type(() => PlanetDto)
  readonly results: PlanetDto[]
}
