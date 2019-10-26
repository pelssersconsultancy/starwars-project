import { async, TestBed } from '@angular/core/testing';
import { StarwarsAppShellModule } from './starwars-app-shell.module';

describe('StarwarsAppShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StarwarsAppShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StarwarsAppShellModule).toBeDefined();
  });
});
