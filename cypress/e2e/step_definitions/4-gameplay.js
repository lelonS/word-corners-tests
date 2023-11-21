const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Then('I should have {int} points', (points) => {
  cy.get('.score').should('contain', points);
});

Then('the {string} box should be empty', (boxClass) => {
  cy.get(`.${boxClass.split(' ').join('.')}`).should('not.have.class', 'valid');
  cy.get(`.${boxClass.split(' ').join('.')}`).should('not.have.class', 'invalid');
  cy.get(`.${boxClass.split(' ').join('.')}`).should('not.have.class', 'invalid-by-timeout');
  // cy.get(`.${boxClass.split(' ').join('.')}`).should('have.text', '');
});

Then('there should be no {string} boxes', (classString) => {
  cy.get(`.${classString}`).should('not.exist');
});

Then('the {string} box should be valid', (boxClass) => {
  cy.get(`.${boxClass.split(' ').join('.')}`).should('have.class', 'valid');
});

When('I wait until a box is {string}', (classString) => {
  cy.get(`.${classString}`, { timeout: 20000 }).should('exist');
});