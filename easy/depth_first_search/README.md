# Depth-first Search
You're given a `Node` class that has a `name` and an array of optional `children` nodes. When put together, nodes form an acyclic tree-like structure.

Implement the `depthFirstSearch` method on the `Node` class, which takes in an empty array, traverses the tree using the Depth-first Search approach (specifically navigating the tree from left to right), stores all of the nodes' names in the input array, and returns it.

If you're unfamiliar with Depth-first Search, we recommend watching the Conceptual Overview section of this question's video explanation before starting to code.

### Input
```js
graph = A
     /  |  \
    B   C   D
   / \     / \
  E   F   G   H
     / \   \
    I   J   K
```

### Output
```js
["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"]
```

## Instructions
1. You need to complete the function depthFirstSearch on `depthFirstSearch.js` file.
2. Function `depthFirstSearch` should return an array of node names.
3. Run the tests to see the results `node run`