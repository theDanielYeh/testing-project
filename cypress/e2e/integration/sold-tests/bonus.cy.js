describe('bonus.cy.js', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  // Test 1
  it('Initial page display, assert the main and footer sections should be hidden', () => {
    cy.get('.main')
      .should('not.exist');

    cy.get('.footer')
      .should('not.exist');
  })

})
