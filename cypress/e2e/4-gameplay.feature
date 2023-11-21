Feature: Play the game

    Background: Use two-letter-combos as dictionary
        Given the dictionary requests are intercepted and use two-letter-words.txt
        And I am on the game page
        And the page has loaded

    Scenario: Claim point
        When I place 2 letters in a row in the "top left" box
        And I claim points in one box
        Then I should have 2 points
        And the "top left" box should be empty

    Scenario: Claim points and unlock invalid-word + hint
        When I place 2 letters in a row in the "top left" box
        And I place 3 letters in a row in the "top right" box
        And I claim points in one box
        And I click on "unlock"
        Then there should be no "invalid" boxes
        And the "top right" box should be valid

    Scenario: Claim points and unlock invalid-by-timeout
        When I place 2 letters in a row in the "top left" box
        And I wait until a box is "invalid-by-timeout"
        And I claim points in one box
        And I click on "unlock"
        Then there should be no "invalid" boxes