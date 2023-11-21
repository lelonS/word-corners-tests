Feature: Play again button starts a correct game

  Background: Use two-letter-combos as dictionary
    Given the dictionary requests are intercepted and use two-letter-words.txt
    And I am on the game page
    And the page has loaded
    When I place 2 letters in a row in the "top left" box
    And I claim points in one box
    And I place 3 letters in each box

  Scenario: Play again
    When I click the play again button
    Then the game should reset

  Scenario: Go to menu
    When I click the menu button
    Then I should be on the "Start" page