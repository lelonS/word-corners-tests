Feature: rename later

  Background: Use two-letter-combos as dictionary
    Given the dictionary requests are intercepted and use two-letter-words.txt
    And I am on the game page
    And the page has loaded


  Scenario: After timeout, a green box turns invalid and can be claimed
    When I place 2 letters in each box
    And I wait until a box is "invalid-by-timeout"
    And I claim points in the box that is "invalid-by-timeout"
    And I click on "unlock"
    Then there should be no "invalid" boxes

# Scenario: Unlock green box that is invalid by timeout