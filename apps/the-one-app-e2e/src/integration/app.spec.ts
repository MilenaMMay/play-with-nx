import { getGreeting } from '../support/app.po';

describe('the-one-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display specific welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('I AM THE ONE APP');
  });

  it('should display common welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome to COMMON!');
  });
});
