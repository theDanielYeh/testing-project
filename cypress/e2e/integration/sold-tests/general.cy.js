describe('general.spec.js', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  // Test 1
  it('Initial page display, assert the main and footer sections should be hidden', () => {
    // cy.get('.main')
    //   .should('not.be.visible');

    // cy.get('.footer')
    //   .should('not.be.visible');

    cy.get('.main')
      .should('not.exist');

    cy.get('.footer')
      .should('not.exist');
  })

  // Test 2
  it('When page is initially opened, it should focus on the todo input field', () => {
    cy.focused()
      .should('have.class', 'new-todo')
  })

  // Test 3
  it('Add todo, should clear text input field when an item is added, assert field is blank', () => {
    const newItem = 'Todo1';

    cy.get('input.new-todo')
      .type(`${newItem}{enter}`)
      .should('not.have.value')
  })

  // Test 4
  it('Add todo, assert the main and footer sections should not be hidden', () => {
    const newItem = 'Todo1';

    cy.get('input.new-todo')
      .type(`${newItem}{enter}`)

    cy.get('.main')
      .should('be.visible');

    cy.get('.footer')
      .should('be.visible');
  })

  // Test 5
  it('Add new todo item and assert that it exists', () => {
    const newItem = 'Todo1';

    cy.get('input.new-todo')
      .type(`${newItem}{enter}`)

    cy.get('.todo-list > li')
      .last()
      .should('have.text', newItem)
  })
})
