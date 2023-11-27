const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

When('I enter {string} in the searchbar', (text) => {
  cy.get('[name="searchWord"]').type(text);
});

Then('there should be {int} results', (num) => {
  cy.get('.hits').should('have.text', `${num} träffar`);
});

Then('the first result should be {string}', (text) => {
  cy.get('.result>div>span').first().should('have.text', text);
});

Then('the result should not change from {string}', (text) => {
  cy.get('input[name="searchWord"]', { timeout: 10 }).should('have.value', text);
});


