import { async, TestBed } from '@angular/core/testing';
import { StarwarsLayoutModule } from './starwars-layout.module';

describe('StarwarsLayoutModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StarwarsLayoutModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StarwarsLayoutModule).toBeDefined();
  });
});
