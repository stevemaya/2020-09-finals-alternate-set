# 2020-09 Alternate Finals

### General Tips

- **You can absolutely research your JavaScript.** You don't have to have how `.slice` works memorized. It may worm its way into your brain eventually, but for many developers, they don't want to or can't memorize code; it's always a friendly internet search away, right?
- This is a very challenging set of exercises, and **you are not expected to finish**. Don't get discouraged!
- Make sure you read through each problem carefully (here and in the tests themselves) and pay attention to your terminal's output to see what was the function's expected output and what was received. Better to spend a couple minutes being sure you understand each problem than waste fifteen minutes or more on a misunderstanding of the problem!
- **You can go in any order.** Don't stare at one problem for too long! Each problem 1/4 of the way completed tells us more about how you're doing than one problem 3/4 completed.
- You can also do the tests **within** a problem in any order. **Think of each check-mark as an individual question.** These sub-problems are often dealing with different kinds of inputs, and really are unique challenges even within their problem. Celebrate when you get one, and when you don't, move on to the next.
- And if you're halfway through the problem and feeling stuck, **move on**. You don't have to get an exercise's whole set of tests green.
- Relax and have fun. Here are your tasks, and we'll see you on the other side!

### An Important Note On `isValidPassword`

The SIX problems before it, from `IsLong` to `containsSpace`, are helper functions for `isValidPassword`, with the tests for them provided **for your benefit only**. That means that **they are not graded**. The tests will help you know for sure that each sub-problem (like, "Does a string contain a space?") is functioning correctly, so at the end you can worry only about combining them, not the individual parts.

Again: `isValidPassword` will be graded, but the following will NOT:

- `isLong`
- `containsSpace`
- `containsDigit`
- `containsLowerCase`
- `containsUpperCase`
- `containsNonAlphanumeric`

### Tasks

##### `fizzBuzzSingleNumber`

**Description**

Given a number, returns the string `Fizz` if it's evenly divisible by `3`, `Buzz` if it's evenly divisible by `5`, `FizzBuzz` if it's evenly divisible by both, and the original number if it's divisible by neither.

**Examples**

```javascript
fizzBuzzSingleNumber(1); // --> 1
fizzBuzzSingleNumber(2); // --> 2
fizzBuzzSingleNumber(3); // --> Fizz
fizzBuzzSingleNumber(4); // --> 4
fizzBuzzSingleNumber(5); // --> Buzz
fizzBuzzSingleNumber(15); // --> FizzBuzz
```

**Hints**

There are a few different ways to tackle the logic, but the key is structuring your logic so that a number divisible by BOTH `3` and `5` doesn't end up triggering JUST `Fizz` or `Buzz`. There are some neat solutions involving string-building or short-circuiting logic chains by returning from the function, but an `if/if else` chain is the simplest, andt simplest is probably best when you just need a green check-mark.

##### `yellAll`

**Description**

Capitalizes each letter in each string in the given array.

**Examples**

```javascript
yellAll(["hello there", "ahoy", "greetings"]); // --> ["HELLO THERE", "AHOY", "GREETINGS"]
yellAll(["good-bye", "forever", "my lovely"]); // --> ["GOOD-BYE", "FOREVER", "MY LOVELY"]
```

**Hints**

This is a map operation, so whether you're using `.map` or a manual loop, you want to be pushing a transformed version of each string into an array (and then returning it).
