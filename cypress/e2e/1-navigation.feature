Feature: Navigating the website

  Background: Use two-letter-combos as dictionary
    Given the dictionary requests are intercepted and use two-letter-words.txt

  Scenario: Go to the game page through the menu
    Given I am on the "/" page
    When I click on the "Spela" button via the menu
    Then I should be on the "Spela" page

  Scenario: Go to the game page through the play button
    Given I am on the "/" page
    When I click on "start-btn"
    Then I should be on the "Spela" page

  Scenario: Go to the dictionary page
    Given I am on the "/" page
    When I click on the "Ordlistan" button via the menu
    Then I should be on the "Ordlistan" page

  Scenario: Go back to the home page
    Given I am on the "/dictionary" page
    When I click on the "Start" button via the menu
    Then I should be on the "Start" page
