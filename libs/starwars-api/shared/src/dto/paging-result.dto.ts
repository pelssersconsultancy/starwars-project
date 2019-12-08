import { Exclude, Expose } from 'class-transformer';
import { ApiModelProperty } from '@nestjs/swagger';

import { SharedAPI } from '@starwars-project/starwars-api/models/shared';

@Exclude()
export class PagingResultDto<T> implements SharedAPI.PagingResult<T> {

  @Expose()
  @ApiModelProperty({ example: 40, type: Number })
  count: number;

  @Expose()
  @ApiModelProperty({ example: 'https://swapi.co/api/planets/?page=3', type: String, nullable: true })
  next: string | null;


  @Expose()
  @ApiModelProperty({ example: 'https://swapi.co/api/planets/?page=1', type: String, nullable: true })
  previous: string |  null;


  @Expose()
  @ApiModelProperty({ isArray: true })
  results: T[];

}
