class UrbanLadderPage {
  visitHomePage() {
    cy.visit('https://www.urbanladder.com/');
    cy.viewport(1280, 800);
    cy.wait(5000);
  }
 
  closePopupIfPresent() {
    cy.get('body').then($body => {
      if ($body.find('.close-reveal-modal').length) {
        cy.get('.close-reveal-modal').click();
      }
    });
  }
 
  navigateToBookshelves() {
    cy.contains('Storage Furniture').click({ force: true });
    cy.contains('Bookshelves').click({ force: true });
    cy.wait(3000);
  }
 
  applyStorageTypeFilter() {
    cy.contains("Storage Type").click({ force: true });
    cy.contains('Open Storage').click({ force: true });
  }
 
  openPriceFilter() {
    cy.contains("ALL FILTERS").click({ force: true });
    cy.contains("Price").click({ force: true });
  }
 
  setPriceSlider(targetPrice = 15000, minPrice = 752, maxPrice = 122975) {
    const percent = (targetPrice - minPrice) / (maxPrice - minPrice);

  

    cy.get('.customRangeSlider',{timeout:2000}).then($slider => {
      const sliderWidth = $slider[0].getBoundingClientRect().width;
      const clientX = sliderWidth * percent;
 
      cy.get('div.range-slider__thumb[data-upper="true"]')
        .trigger('mousedown', { which: 1, force: true })
        .trigger('mousemove', { clientX: clientX, force: true })
        .trigger('mouseup', { force: true });
    });
  }
 
  applyFilter() {
    cy.contains('Apply Filter').dblclick({ force: true });
  }
 
  excludeOutOfStock() {
    cy.contains("Availability").click({ force: true });
    cy.get('.UnrgZ').click({ force: true });
    cy.contains('Apply Filter').click({ force: true });
    cy.wait(3000);
  }
 
}
 
export default new UrbanLadderPage();
 