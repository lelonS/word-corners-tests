Feature: Letters are placed in the correct order

  Background: Use two-letter-combos as dictionary
    Given the dictionary requests are intercepted and use two-letter-words.txt

  Scenario: Placing letters in all boxes
    Given I am on the game page
    And the page has loaded
    When I place 2 letters in a row in the "top left" box
    And I place 2 letters in a row in the "bottom left" box
    And I place 2 letters in a row in the "top right" box
    And I place 2 letters in a row in the "bottom right" box
    Then the letters should be in the correct order
