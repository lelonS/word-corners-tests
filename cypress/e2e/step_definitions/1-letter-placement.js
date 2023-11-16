const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("I visit the game page", () => {
  cy.visit("/game");
});

