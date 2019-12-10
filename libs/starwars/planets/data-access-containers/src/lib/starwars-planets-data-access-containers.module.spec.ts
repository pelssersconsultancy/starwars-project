import { async, TestBed } from '@angular/core/testing';
import { StarwarsPlanetsDataAccessContainersModule } from './starwars-planets-data-access-containers.module';

describe('StarwarsPlanetsDataAccessContainersModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StarwarsPlanetsDataAccessContainersModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StarwarsPlanetsDataAccessContainersModule).toBeDefined();
  });
});
