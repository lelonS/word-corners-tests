const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

When("I visit the main page", () => {
  cy.visit("/hej", {
    onBeforeLoad: (win) => {
      win.console.log = () => { };
    }
  });
});

Then("I should see the text {string}", (text) => {
  cy.contains(text, { matchCase: false });
});