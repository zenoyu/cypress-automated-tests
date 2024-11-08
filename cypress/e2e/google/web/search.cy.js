describe('Google Search', () => {
  
  // Google Search
  it('Google Search', () => {

    // Go to Google
    cy.visit('https://www.google.com');

    // Find the textfield and enter the search term 
    cy.get('textarea[name="q"]')
      .type(Cypress.config().search);

    cy.log('Submit the form and verify the result with ' + Cypress.config().search);

    // Click submit button
    cy.get('form')
      .submit( { timeout: 1000 } )
      // verify the result page contain the searched terms
      .get('body')
      .should('contain', Cypress.config().search);

  });

});