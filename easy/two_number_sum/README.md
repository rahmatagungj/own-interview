# Two Number Sum
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.

Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.

You can assume that there will be at most one pair of numbers summing up to the target sum.

### Input
```js
array = [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10
```

### Output
```js
[-1, 11] // the numbers could be in reverse order
```

## Instructions
1. You need to complete the function twoNumberSum on `twoNumberSum.js` file.
2. Function `twoNumberSum` should return an array of two integers.
3. Run the tests to see the results `node run`