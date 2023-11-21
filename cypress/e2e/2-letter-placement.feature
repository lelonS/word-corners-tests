Feature: Letters are placed in the correct order

  Background: Use two-letter-combos as dictionary
    Given the dictrionary reqests are intercepted and use two-letter-words.txt

  Scenario: Placing letters on the left side
    Given I am on the game page
    And the page has loaded
    When I place two letters in a row in the "top left" box
    And I place two letters in a row in the "bottom left" box
    Then the letters should be in the correct order

  Scenario: Placing letters on the right side
    Given I am on the game page
    And the page has loaded
    When I place two letters in a row in the "top right" box
    And I place two letters in a row in the "bottom right" box
    Then the letters should be in the correct order