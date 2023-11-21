const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');


When('I claim points in one box', () => {
  cy.get('.valid > .take-points').click();
});

When('I place {int} letters in each box', (count) => {
  const boxClasses = ['.top.left', '.bottom.left', '.top.right', '.bottom.right'];

  for (let boxClass of boxClasses) {
    // Place 3 letters in each box
    for (let i = 0; i < count; i++) {
      // Wait for a letter to be given
      cy.get(`.middle`).children().should('have.length', 3);
      // Place the letter
      cy.get(boxClass).click();
    }
  }
});

When('I click the play again button', () => {
  cy.get('.play-again-btn').click();
});

Then('the game should reset', () => {
  cy.get('.score').should('contain', 'POÄNG: 0');
  cy.get('.time>span').should('not.contain', '0');
  cy.get('.restart-buttons').should('not.exist');
  cy.get('div').contains('GAME OVER').should('not.exist');
  cy.get('.invalid').should('not.exist');
  cy.get('invalid-by-timeout').should('not.exist');
});



