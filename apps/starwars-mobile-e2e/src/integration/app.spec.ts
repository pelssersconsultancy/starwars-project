import { getGreeting } from '../support/app.po';

describe('starwars-mobile', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to starwars-mobile!');
  });
});
