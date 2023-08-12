describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://en.wikipedia.org/wiki/Main_Page')

    cy.get('.cdx-text-input__input').type('Schwarzenegger')

    cy.get('.cdx-text-input__input').type('{enter}')

    cy.contains('Arnold Schwarzenegger')
  })
})