const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

let boxes = { 'top left': [], 'bottom left': [], 'top right': [], 'bottom right': [] };


Given('I am on the game page', () => {
  boxes = { 'top left': [], 'bottom left': [], 'top right': [], 'bottom right': [] };

  // cy.intercept('GET', '/workers/word-worker.js', (req) => {
  //   req.continue((res) => {  DOES NOT WORK WINDOW DONT EXIST 
  //     res.body += ';window.randomChar = randomChar; console.log("randomChar set", randomChar);';
  //   });
  // });

  cy.intercept('GET', '/assets/index-d27a4d00.js', (req) => {
    req.continue((res) => {
      res.body = res.body.replace('await xt.randomChar()', 'randomChar()');
      res.body += ';const randomChar = () => {console.log("called");return "Z"}; console.log("randomChar set", randomChar)'
      // res.body += ';window.exposedProxy = xt; xt.randomChar = () => {console.log("called");return "Z"}; console.log("exposedProxy set", xt)';
    });
  });

  cy.visit('/game');
});

Given('the page has loaded', () => {
  cy.wait(1000);
  cy.get('.splash', { timeout: 20000 }).should('not.exist');

  // Get window.exposedWorker
  // cy.window().then((win) => {

  // });
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

