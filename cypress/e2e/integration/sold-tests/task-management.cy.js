describe('task-management.cy.js', () => {

  const newItem = ['Todo1', 'Todo2', 'Todo3'];

  beforeEach(() => {
    cy.visit('/')

    newItem.map(item => {
      cy.get('input.new-todo')
        .type(`${item}{enter}`)

      cy.get('.todo-list > li')
        .last()
        .should('have.text', item)
    });
  })

  // Test 1
  it('Using setup method, then mark all as completed. After marked complete, assert all items have “completed” class', () => {
    cy.get('.todo-list > li')
      .find('input[type=checkbox]')
      .check()

    cy.get('.todo-list > li')
      .should('have.class', 'completed')
  })

})
