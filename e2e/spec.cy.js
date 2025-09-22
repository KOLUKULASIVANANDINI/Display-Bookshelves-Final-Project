
import urbanLadderOasisPage from '../support/PageObjectModel/NewArrivalsPage';
 
describe('Urban Ladder Bookshelves Filter Test', () => {
 
  it('Logs each Oasis sub-item with sequential numbering', () => {
    Cypress.on('uncaught:exception', () => false);
 
    urbanLadderOasisPage.visitHomePage();
    urbanLadderOasisPage.hoverNewArrivalsAndOasis();
    urbanLadderOasisPage.logOasisSubItems();
  });

 
});