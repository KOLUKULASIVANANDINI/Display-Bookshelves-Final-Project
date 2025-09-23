import { LoginPage } from '../support/PageObjectModel/LoginPage';
import urbanLadderPage from '../support/PageObjectModel/BookshelfPage';
import urbanLadderOasisPage from '../support/PageObjectModel/NewArrivalsPage';


 
describe('Urban Ladder Validation', () => {

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

it('Filters open-storage bookshelves under ₹15,000 and displays top 3', () => {
    Cypress.on('uncaught:exception', () => false);
 
    urbanLadderPage.visitHomePage();
    urbanLadderPage.closePopupIfPresent();
    urbanLadderPage.navigateToBookshelves();
    urbanLadderPage.applyStorageTypeFilter();
    urbanLadderPage.openPriceFilter();
    urbanLadderPage.setPriceSlider();
    urbanLadderPage.applyFilter();
    urbanLadderPage.extractTopProducts();
  });

    it('Logs each Oasis sub-item with sequential numbering', () => {
    Cypress.on('uncaught:exception', () => false);
 
    urbanLadderOasisPage.visitHomePage();
    urbanLadderOasisPage.hoverNewArrivalsAndOasis();
    urbanLadderOasisPage.logOasisSubItems();
  });
 
});
 