import { getGreeting } from '../support/app.po';

describe('the-other-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display specific welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome to the-other-app!');
  });

  it('should display common welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome to COMMON!');
  });
});
