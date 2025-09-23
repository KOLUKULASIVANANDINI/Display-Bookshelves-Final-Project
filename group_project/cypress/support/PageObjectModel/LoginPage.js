export class LoginPage {
  openLoginModal() {
    cy.get('div.XodQ6', { timeout: 10000 })
      .should('be.visible')
      .first()
      .click({ force: true })
      .wait(200)
      .click({ force: true });
  }
 
  clickSignInButtonIfVisible() {
    cy.get('body').then(($body) => {
      if ($body.find('button[class*="zTzmw"]').length > 0) {
        cy.log('SIGN IN button found, clicking');
        cy.get('button[class*="zTzmw"]', { timeout: 10000 })
          .should('be.visible')
          .click({ force: true });
      } else {
        cy.log('SIGN IN button not found, skipping click');
      }
    });
  }
 
  enterDummyCredentials() {
    cy.get('.sXb8S > .kgo2k > .uI1qJ', { timeout: 10000 })
      .should('be.visible')
      .type('1234');
  }
 
  verifyErrorMessageVisible() {
    cy.get('.vNEcZ', { timeout: 10000 })
      .should('be.visible');
  }
}