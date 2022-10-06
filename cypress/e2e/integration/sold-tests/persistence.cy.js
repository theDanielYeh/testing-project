describe('persistence.cy.js', () => {

  const newItem = ['Todo1', 'Todo2'];

  beforeEach(() => {
    cy.visit('/')

    newItem.forEach(item => {
      cy.get('input.new-todo')
        .type(`${item}{enter}`)

      cy.get('.todo-list > li')
        .last()
        .should('have.text', item)
    });
  })

  // Test 1
  it('Verify todos are persisted', () => {
    cy.get('.todo-list > li')
      .should('have.length', 2)

    cy.get('input.new-todo')
      .type(`Todo3{enter}`)

    cy.get('.todo-list > li')
      .should('have.length', 3)
      .and('contain.text', 'Todo3')

    cy.reload()

    cy.get('.todo-list > li')
      .should('have.length', 3)
      .and('contain.text', 'Todo3')
  })

  // Test 2
  // Copy and paste the following into the terminal:
  // npx cypress run --spec "cypress/e2e/integration/sold-tests/persistence.cy.js"

})
