const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');


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
  // Stuff
});

Then('the game should reset', () => {
  // Stuff
});



