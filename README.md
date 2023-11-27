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

**Note:** When we unlock a box with hint we expect the word to become a two letter valid word. Due to a bug in the application, the word is not counted as valid and can never be claimed.

We finally test that we can unlock a locked box (due to timeout) when we claim points. We do this by placing two letters in the top-left box and waiting for the timeout. We then click the claim points button in the top-left box and the unlock button in the top-right box. We then check that there are no invalid boxes left.

### Timeout

*In this test we use the custom word list (dictionary) where all two-letter combinations are valid words.*

We're testing that a green box (valid word) can turn invalid (by timeout) and still be claimed. We do this by placing two letters in each box and wait for the timeout. We then claim the box that is invalid by timeout, click the unlock button in the same box and check that there are no invalid boxes left.

### Dictionary

lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.





## Difficulties

## Test coverage

## Test ideas