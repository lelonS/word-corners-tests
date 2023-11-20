Feature: Play again button starts a correct game

  Scenario: Playing with timer
    Given I am on the game page
    And the page has loaded
    When I fill the board until the game is over
    And I click the play again button
    Then the game should reset


  Scenario: Playing without timer
    Given I am on the game page