Feature: Play again button starts a correct game

  Background: Use two-letter-combos as dictionary
    Given the dictionary requests are intercepted and use two-letter-words.txt

  Scenario: Playing with timer
    Given I am on the game page
    And the page has loaded
    When I place 3 letters in each box
    And I click the play again button
    Then the game should reset
