const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');


When('I fill the board until the game is over', () => {
  const boxClasses = ['.top.left', '.bottom.left', '.top.right', '.bottom.right'];
  let currentBoxIndex = 0;
  let shouldBreak = false;

  for (let i = 0; i < 32; i++) {
    if (shouldBreak) { break; }
    let currentBox = boxClasses[currentBoxIndex];

    // Wait until a letter is given
    cy.get(`.middle`).children().should('have.length', 3);

    // Place the letter
    cy.get(currentBox).click();

    // Check how many elements have the class invalid


    currentBoxIndex = (currentBoxIndex + 1) % boxClasses.length;
  }










  // let currentBoxIndex = 0;

  // for (let i = 0; i < 8; i++) {
  //   if (currentBoxIndex >= boxClasses.length) { break; }

  //   let currentBox = boxClasses[currentBoxIndex];
  //   // Wait until a letter is given
  //   cy.get(`.middle`).children().should('have.length', 3);

  //   // Place the letter
  //   cy.get(currentBox).click();

  //   // Check if current box has class invalid and if so increment currentBoxIndex
  //   cy.get(currentBox).then((el) => {
  //     cy.log(el);
  //     cy.log(el.hasClass('invalid'));
  //     if (el.hasClass('invalid')) {
  //       currentBoxIndex++;
  //     }
  //   });
  // }
});

When('I click the play again button', () => {
  // Stuff
});

Then('the game should reset', () => {
  // Stuff
});



