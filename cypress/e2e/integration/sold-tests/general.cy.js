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

  // Test 6
  it('Add three todos and make sure they all exist, and assert there are 3 li items', () => {
    const newItem = ['Todo1', 'Todo2', 'Todo3'];

    newItem.map(item => {
      cy.get('input.new-todo')
        .type(`${item}{enter}`)

      cy.get('.todo-list > li')
        .last()
        .should('have.text', item)
    });

    cy.get('.todo-list > li')
      .should('have.length', 3)
  })

  // Test 7
  it('Add todo item which has leading and trailing spaces, when created should trim', () => {
    const newItem = '   Todo1    ';

    cy.get('input.new-todo')
      .type(`${newItem}{enter}`)

    cy.get('.todo-list > li')
      .last()
      .should('have.text', newItem.trim())
  })
})
