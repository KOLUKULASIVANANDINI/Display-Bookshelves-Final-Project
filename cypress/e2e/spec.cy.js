import { LoginPage } from '../support/PageObjectModel/LoginPage';
 
describe('Urban Ladder Login Validation', () => {

  const baseUrl = 'https://www.urbanladder.com/';

  const loginPage = new LoginPage();
 
  Cypress.env('RETRIES', 2);

  Cypress.on('uncaught:exception', () => false);
 
  beforeEach(() => {

    cy.visit(baseUrl);

    cy.clearCookies();

    cy.clearLocalStorage();

    cy.window().then((win) => {

      win.sessionStorage.clear();

    });

  });
 
  it('Displays error for invalid email format', () => {

    loginPage.openLoginModal();

    loginPage.clickSignInButtonIfVisible();

    loginPage.enterDummyCredentials();

    loginPage.verifyErrorMessageVisible();

  });

});
 