# 💎 Birthstone Finder Challenge

## 📌 Your Task

In this exercise, you'll create a Node.js app that determines the birthstone for a month inputted by the user in the `warmup-birthstone-finder.js` exercise.

Your app should:

- Take a month as user input (such as "January") with `process.argv`
- Check if the inputted month is valid and exists in the `birthstones` data object included in the code file
    - If the month is invalid, output an error message: 

            Invalid month. Please enter a valid month.

    - If the month is valid, output a console.log() message that says the month's birthstone:

            The birthstone for January is Garnet.

Later in lecture, we'll refactor your code from `warmup-birthstone-finder.js` into the `lecture-birthstone-finder.js` file. 

## 🧠 Learning Goals 

You will practice: 

* Getting user inputs from the command line with `process.argv`
* Input validation: check if the user inputted a valid month

## 📖 Test Cases

### 1. Running `node warmup-birthstone.js January` should output:

```bash
The birthstone for January is Garnet.
```

### 2. Running `node warmup-birthstone.js July` should output:

```bash
The birthstone for July is Ruby.
```

### 3. Running `node warmup-birthstone.js january` (all lowercase) should output:

```bash
Invalid month. Please enter a valid month.
```
