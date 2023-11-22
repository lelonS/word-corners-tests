const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

When('I claim points in the box that is {string}', (classString) => {
  cy.get(`.${classString}`).find('button').click();
});