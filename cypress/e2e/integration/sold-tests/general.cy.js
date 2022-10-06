describe('general.spec.js', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  // Test 1
  it('Initial page display, assert the main and footer sections should be hidden', () => {
    cy.get('main')
      .should('not.be.visible');

    cy.get('footer')
      .should('not.be.visible');
  })

  // Test 2
  it('When page is initially opened, it should focus on the todo input field', () => {
    cy.focused()
      .should('have.class', 'new-todo')
  })

  // Test 3

})
