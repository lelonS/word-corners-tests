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

test

### Gameplay

lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.

### Timeout

lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.

### Dictionary

lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.





## Difficulties

## Test coverage

## Test ideas