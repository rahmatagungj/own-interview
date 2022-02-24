# Three Number Sum
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold.

If no three numbers sum up to the target sum, the function should return an empty array.


### Input
```js
array = [12, 3, 1, 2, -6, 5, -8, 6]
targetSum = 0
```

### Output
```js
[[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
```

## Instructions
1. You need to complete the function threeNumberSum on `threeNumberSum.js` file.
2. The function should return an array of arrays.
3. Run the tests to see the results `node run`