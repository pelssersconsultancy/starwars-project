import { Exclude, Expose } from 'class-transformer';
import { ApiModelProperty } from '@nestjs/swagger';

import { PlanetsAPI } from '@starwars-project/starwars-api/models/planets';

@Exclude()
export class PlanetDto implements PlanetsAPI.PlanetModel {
  @Expose()
  @ApiModelProperty({ example: 'Tatooine' })
  name: string;

  @Expose()
  @ApiModelProperty({ example: '10465' })
  diameter: string;

  @Expose()
  @ApiModelProperty({ example: '23' })
  rotation_period: string;

  @Expose()
  @ApiModelProperty({ example: '304' })
  orbital_period: string;

  @Expose()
  @ApiModelProperty({ example: '1 standard' })
  gravity: string;

  @Expose()
  @ApiModelProperty({ example: '200000' })
  population: string;

  @Expose()
  @ApiModelProperty({ example: 'arid' })
  climate: string;

  @Expose()
  @ApiModelProperty({ example: 'desert' })
  terrain: string;

  @Expose()
  @ApiModelProperty({ example: '1' })
  surface_water: string;

  @Expose()
  @ApiModelProperty({ example: [
    'https://swapi.co/api/people/1/',
    'https://swapi.co/api/people/2/',
    'https://swapi.co/api/people/4/',
    'https://swapi.co/api/people/6/',
    'https://swapi.co/api/people/7/',
    'https://swapi.co/api/people/8/',
    'https://swapi.co/api/people/9/',
    'https://swapi.co/api/people/11/',
    'https://swapi.co/api/people/43/',
    'https://swapi.co/api/people/62/'
  ] })
  residents: string[];

  @Expose()
  @ApiModelProperty({ example: [
    'https://swapi.co/api/films/5/',
    'https://swapi.co/api/films/4/',
    'https://swapi.co/api/films/6/',
    'https://swapi.co/api/films/3/',
    'https://swapi.co/api/films/1/'
  ] })
  films: string[];

  @Expose()
  @ApiModelProperty({ example: 'https://swapi.co/api/planets/1/' })
  url: string;

  @Expose()
  @ApiModelProperty({ example: '2014-12-09T13:50:49.641000Z' })
  created: string;

  @Expose()
  @ApiModelProperty({ example: '2014-12-21T20:48:04.175778Z' })
  edited: string;
}
