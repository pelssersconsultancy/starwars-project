import { Controller, Get, Param } from '@nestjs/common';
import { PlanetsService } from './planets.service';
import { Observable } from 'rxjs';
import { PlanetDto } from './dto/planet.dto';
import { ApiOkResponse, ApiNotFoundResponse, ApiOperation } from '@nestjs/swagger';

@Controller('v1.0/planets')
export class PlanetsController {
  constructor(private readonly planetService: PlanetsService) {}

  @Get(':id')
  @ApiOperation({ title: 'Get a specific planet resource'})
  @ApiOkResponse({ description: 'Planet found', type: PlanetDto })
  @ApiNotFoundResponse({ description: 'Planet not found' })
  getPlanet(@Param('id') id: string): Observable<PlanetDto> {
    return this.planetService.getPlanet(id);
  }
}
