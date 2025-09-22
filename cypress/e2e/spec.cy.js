
<reference type = "Cypress"/>

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.urbanladder.com/products/search?utf8=%E2%9C%93&keywords=books')
  })
})