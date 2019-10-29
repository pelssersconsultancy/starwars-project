import { async, TestBed } from '@angular/core/testing';
import { StarwarsPlanetsFeaturePlanetsModule } from './starwars-planets-feature-planets.module';

describe('StarwarsPlanetsFeaturePlanetsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StarwarsPlanetsFeaturePlanetsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StarwarsPlanetsFeaturePlanetsModule).toBeDefined();
  });
});
