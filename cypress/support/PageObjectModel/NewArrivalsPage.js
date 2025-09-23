class UrbanLadderOasisPage {
  visitHomePage() {
    cy.visit('https://www.urbanladder.com/');
    cy.viewport(1280, 800);
    cy.wait(3000);
  }
 
  hoverNewArrivalsAndOasis() {
    cy.contains('New Arrivals').trigger('mouseover');
    cy.contains('Oasis').trigger('mouseover');
    cy.wait(2000);
  }
 
  logOasisSubItems() {
    cy.get('.ZDF6_').within(() => {
      cy.get(':nth-child(1)').each(($el, index) => {
        cy.wrap($el)
          .scrollIntoView()
          .invoke('text')
          .then(text => {
            cy.log(`${index + 1}. ${text.trim()}`);
          });
 
        cy.wait(300); // optional pause for clarity
      });
    });
 
    cy.scrollTo('bottom');
  }
 
  checkKeyboardNavigationToOasis() {
    cy.get('body').tab(); // simulate tab key
    cy.focused().should('contain.text', 'New Arrivals'); // first tab lands here
 
    cy.focused().tab(); // tab again to reach Oasis
    cy.focused().should('contain.text', 'Oasis'); // confirm focus on Oasis
 
    cy.focused().trigger('keydown', { keyCode: 13 }); // simulate Enter key
    cy.wait(2000); // allow dropdown to appear
 
    // Optional: verify dropdown is visible
    cy.get('.ZDF6_').should('be.visible');
  }
}
 
export default new UrbanLadderOasisPage();
 