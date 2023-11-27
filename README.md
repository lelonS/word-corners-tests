# word-corners-tests

## How to run tests

1.
```bash
npm install
```

2. 
Run tests in terminal (headless)
```bash
npm test
```

Run tests in browser
```bash
npm run test-ui
```

## Github Actions

We run the tests using Github Actions. The tests are run on every push or pull request to the main branch.

## Frameworks

Cypress + Cucumber

## Test cases and scenarios

### Navigation

We're testing that using the navigation bar, the user can navigate to the different pages of the application. We also test that you can start the game via the start game button on the home page. 

### Letter-placement

We're testing that the letters placed in each box are in the expected order. In the left boxes the letters should be in the order they were placed, and in the right boxes the letters should be in the reverse order. We test this by placing two letters in each box. 

We save the letters in the order they were placed in a list for each box. We then check that the letters in the left boxes are in the same order as the list, and that the letters in the right boxes are in the reverse order of the list.

### Game-over

We're testing that the buttons play again and go to menu work as expected. 

We do this by using a custom word list (dictionary) where all two-letter combinations are valid words. We first place two letters in the top-left box and claim the points to make sure that the total points reset when we click play again. We then place three letters in each box to lose the game. We then click the buttons and check that we are taken to the expected pages or the game is restarted.

### Gameplay

*In this test we use the custom word list (dictionary) where all two-letter combinations are valid words.*

We're testing we can claim points by placing two letters in the top-left box and clicking the claim points button. We then check that the total points are updated correctly and that the letters are removed from the box. 

We also test that we can unlock a locked box (due to wrong word) when we claim points. We do this by placing two letters in the top-left box and placing three letters in the top-right box. We then click the claim points button in the top-left box and the unlock button in the top-right box. We then check that there are no invalid boxes left. We check that the three letter word that was invalid is now valid (should turn into a two letter word).

**Note:** *When we unlock a box with hint we expect the word to become a two letter valid word. Due to a bug in the application, the word is not counted as valid and can never be claimed.*

We finally test that we can unlock a locked box (due to timeout) when we claim points. We do this by placing two letters in the top-left box and waiting for the timeout. We then click the claim points button in the top-left box and the unlock button in the top-right box. We then check that there are no invalid boxes left.

### Timeout

*In this test we use the custom word list (dictionary) where all two-letter combinations are valid words.*

We're testing that a green box (valid word) can turn invalid (by timeout) and still be claimed. We do this by placing two letters in each box and wait for the timeout. We then claim the box that is invalid by timeout, click the unlock button in the same box and check that there are no invalid boxes left.

### Dictionary

**Note:** *The full dictionary is so large that the test sometimes fail due to timeout.*

We're testing that the dictionary is working as expected. We test this both with our custom word list and the default word list. 

We go to the dictionary page, enter a word in the search bar and check that the result is correct. We also check that the input is still the word we typed. We found a problem with the application where if you type too fast, the input field is not updated correctly. This only happens when using the full dictionary. 

We don't test this in the most optimal way. We simply use a small timeout to find the expected text in the input field. Which could pass if unlucky as the input field could be updated with the expected text before the timeout. 

## Difficulties in testing randomness

It's hard to test elements that are random because we can't know what the expected result is before running the application. It depends on the information we gather at runtime. 

The difficulties specifically for Word-Corners is that it's hard to play a word that is valid since the letters you get are random. We solved this by using a custom dictionary where all two-letter combinations are valid words. 

It is especially difficult to gather data from elements as you need to use `.then()` to get the data and need to use recursive functions to loop. We did not manage to find a better solution. That is one of the reasons we replaced the dictionary with a custom one to make it predictable when a word is valid or not. 

Before we came up with the solution of using a custom dictionary, we came up with the solution of monkey patching the `randomChar` function. We ultimately decided to use the custom dictionary as it made the loading time of the application much faster and was more simple to implement. You can see our monkey patching solution in the `mpatch` branch in the file `cypress/e2e/step_definitions/1-letter-placement.js`. Note that the code is not up to date with the current code in the main branch.

## Test coverage & Test ideas

We have decent test coverage. We test the main features such as navigation, letter placement, game over buttons, claiming points and dictionary search. 

We're missing different timeout scenarios. 

For example: 
* Claiming points after the game is over due to timeout. 
* When a box has a valid word but is locked by timeout, and you get the ability to unlock the box (by claiming a different box), the unlock button may cover the claim points button. 
* We don't test that you get more points for longer words.
* We don't test that you can lose by timeout. 
* We don't test every combination of letters in the dictionary. 
* We don't test that you can't place letters in a box that is locked. 
* We don't test that timeout always locks an unlocked box. 
* We don't test the application on different devices/browsers.
