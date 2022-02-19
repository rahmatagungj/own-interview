# Breadth-first Search
You're given a `Node` class that has a `name` and an array of optional `children` nodes. When put together, nodes form an acyclic tree-like structure.

Implement the `breadthFirstSearch` method on the `Node` class, which takes in an empty array, traverses the tree using the Breadth-first Search approach (specifically navigating the tree from left to right), stores all of the nodes' names in the input array, and returns it.

If you're unfamiliar with Breadth-first Search, we recommend watching the Conceptual Overview section of this question's video explanation before starting to code.


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
["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"]
```

## Instructions
1. You need to complete the function breadthFirstSearch on `breadthFirstSearch.js` file.
2. Function `breadthFirstSearch` takes one argument, `root`, which is the root node of the tree.
3. Run the tests to see the results `node run`