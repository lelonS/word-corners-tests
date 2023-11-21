const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

let boxes = { 'top left': [], 'bottom left': [], 'top right': [], 'bottom right': [] };


Given('I am on the game page', () => {
  boxes = { 'top left': [], 'bottom left': [], 'top right': [], 'bottom right': [] };

  cy.intercept('GET', '/workers/dictionaries/svenska-ord.txt', { fixture: 'two-letter-words.txt' });
  cy.intercept('GET', '/workers/dictionaries/svenska-pronomen.txt', { fixture: 'empty.txt' });

  cy.visit('/game');
});

Given('the page has loaded', () => {
  cy.wait(1000);
  cy.get('.splash').should('not.exist');
});

When('I place two letters in a row in the {string} box', (boxClass) => {
  const classes = boxClass.split(' ');
  for (let i = 0; i < 2; i++) {
    cy.get(`.middle`).children().should('have.length', 3);
    cy.get(`.middle`).children().eq(1).then((el) => {
      boxes[boxClass].push(el.text());
    });

    cy.get(`.${classes.join('.')}`).click();
  }

});

Then('the letters should be in the correct order', () => {
  for (let key in boxes) {
    const classes = key.split(' ');
    cy.log(key);
    let letters = boxes[key].join('');
    if (key.includes('right')) {
      letters = letters.split('').reverse().join('');
    }
    cy.get(`.${classes.join('.')}`).should('contain', letters); // find better way to check letters
  }
});

