import { async, TestBed } from '@angular/core/testing';
import { StarwarsSharedStatePlanetsModule } from './starwars-shared-state-planets.module';

describe('StarwarsSharedStatePlanetsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StarwarsSharedStatePlanetsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StarwarsSharedStatePlanetsModule).toBeDefined();
  });
});
