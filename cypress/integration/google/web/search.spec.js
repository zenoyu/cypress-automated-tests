/// <reference types="cypress" />

// failed exception
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});

context('Customers', () => {
  beforeEach(() => {
    cy.visit(Cypress.env().endpoint + '/')
  })


});
