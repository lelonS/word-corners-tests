const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I am on the {string} page', (endpoint) => {
  cy.visit(endpoint);
});

When('I click on the {string} button via the menu', (buttonText) => {
  cy.get('.menu').contains(buttonText).click();
});

Then('I should be on the {string} page', (buttonText) => {
  cy.get('menu').find('.active').should('contain', buttonText);
});