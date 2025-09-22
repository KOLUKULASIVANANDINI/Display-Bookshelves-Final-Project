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
}

export default new UrbanLadderOasisPage();
