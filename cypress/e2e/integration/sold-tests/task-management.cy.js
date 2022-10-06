describe('task-management.cy.js', () => {

  const newItem = ['Todo1', 'Todo2'];

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

  // Test 2
  it('Using setup method, then mark all as completed. After marked complete, toggle completed flag and assert the “completed” class has been removed', () => {
    cy.get('.todo-list > li')
      .find('input[type=checkbox]')
      .check()

    cy.get('.todo-list > li')
      .should('have.class', 'completed')

    cy.get('.todo-list > li')
      .find('input[type=checkbox]')
      .uncheck()

    cy.get('.todo-list > li')
      .should('not.have.class', 'completed')
  })

  // Test 3
  it('Using setup method, then assert the “.todo-count” has text “2 items left”', () => {
    cy.get('.todo-count')
      .should('have.text', '2 items left')
  })

  // Test 4
  it('Using setup method, mark one of the todos as completed, then assert “Clear Completed” is available', () => {
    cy.get('.todo-list > li')
      .last()
      .find('input[type=checkbox]')
      .check()

    cy.get('button.clear-completed')
      .should('exist')
  })

  // Test 5
  it('Using setup method, mark one of the todos as completed, click Clear Completed button, assert that marked item no longer exists', () => {
    cy.get('.todo-list > li')
      .should('have.length', 2)
      .and('contain', newItem[1])

    cy.get('.todo-list > li')
      .last()
      .find('input[type=checkbox]')
      .check()

    cy.get('button.clear-completed')
      .click()

    cy.get('.todo-list > li')
      .should('have.length', 1)
      .and('not.contain', newItem[1])
  })

  // Test 6
  it('Using setup method, should hide other controls when editing', () => {
    cy.get('.todo-list > li')
      .last()
      .dblclick()
      .find('label')
      .siblings()
      .should('not.be.visible')
  })

  // Test 7
  it('Using setup method, should highlight the currently applied filter (hint use .within method)', () => {
    cy.get('.footer').within(($ul) => {
      cy.get('a')
        .contains('All')
        .click()
        .should('have.class', 'selected')

      cy.get('a')
        .contains('Active')
        .click()
        .should('have.class', 'selected')

      cy.get('a')
        .contains('Completed')
        .click()
        .should('have.class', 'selected')
    })
  })
})
