import { Controller, Get, Param } from '@nestjs/common';
import { PlanetsService } from './planets.service';
import { Observable } from 'rxjs';
import { PlanetDto } from './dto/planet.dto';
import { ApiOkResponse, ApiNotFoundResponse, ApiOperation } from '@nestjs/swagger';
import { PagedPlanetsDto } from './dto/paged-planets.dto';

@Controller('v1.0/planets')
export class PlanetsController {
  constructor(private readonly planetService: PlanetsService) {}

  @Get()
  @ApiOperation({ title: 'Get all planet resources'})
  @ApiOkResponse({ description: 'Planets found', type: PagedPlanetsDto })
  getPlanets(): Observable<PagedPlanetsDto> {
    return this.planetService.getPlanets();
  }

  @Get(':id')
  @ApiOperation({ title: 'Get a specific planet resource'})
  @ApiOkResponse({ description: 'Planet found', type: PlanetDto })
  @ApiNotFoundResponse({ description: 'Planet not found' })
  getPlanet(@Param('id') id: string): Observable<PlanetDto> {
    return this.planetService.getPlanet(id);
  }
}
