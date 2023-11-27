Feature: Dictionary search

  Scenario: Using two-letter-words.txt dictionary
    Given the dictionary requests are intercepted and use two-letter-words.txt
    And I am on the "/dictionary" page
    And the page has loaded
    When I enter "a" in the searchbar
    Then there should be 29 results
    And the first result should be "aa"
    And the result should not change from "a"


  Scenario: Using the full dictionary
    Given I am on the "/dictionary" page
    And the page has loaded
    When I enter "realisationsvinstbeskattning" in the searchbar
    Then there should be 1 results
    And the first result should be "realisationsvinstbeskattning"
    And the result should not change from "realisationsvinstbeskattning"
