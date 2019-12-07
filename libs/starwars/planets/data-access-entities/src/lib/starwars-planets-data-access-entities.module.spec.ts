import { async, TestBed } from '@angular/core/testing';
import { StarwarsPlanetsDataAccessEntitiesModule } from './starwars-planets-data-access-entities.module';

describe('StarwarsPlanetsDataAccessEntitiesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StarwarsPlanetsDataAccessEntitiesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StarwarsPlanetsDataAccessEntitiesModule).toBeDefined();
  });
});
