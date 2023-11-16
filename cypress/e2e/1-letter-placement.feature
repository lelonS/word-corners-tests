Feature: Letters are placed in the correct order

  Scenario: Placing letters on the left side
    Given I am on the game page
    And the page has loaded
    When I place two letters in a row in the "top left" box
    And I place two letters in a tow in the "bottom left" box
    Then the letters should be in the correct order

  Scenario: Placing letters on the right side
    Given I am on the game page
    And the page has loaded
    When I place two letters in a row in the "top right" box
    And I place two letters in a tow in the "bottom right" box
    Then the letters should be in the correct order