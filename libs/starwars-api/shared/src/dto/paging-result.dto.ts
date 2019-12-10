import { Exclude, Expose } from 'class-transformer';
import { ApiModelProperty } from '@nestjs/swagger';

import { SharedAPI } from '@starwars-project/starwars-api/models/shared';

@Exclude()
export class PagingResultDto<T> implements SharedAPI.PagingResult<T> {

  @Expose()
  @ApiModelProperty({ example: 40, type: Number })
  count: number;

  @Expose()
  @ApiModelProperty({ example: 3, type: Number, nullable: true })
  nextPage: number | null;

  @Expose()
  @ApiModelProperty({ example: 3, type: Number, nullable: true })
  previousPage: number |  null;


  @Expose()
  @ApiModelProperty({ isArray: true })
  results: T[];
}
