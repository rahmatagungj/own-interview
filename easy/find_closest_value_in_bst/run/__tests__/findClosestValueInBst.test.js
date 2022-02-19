const { findClosestValueInBst } = require('../easy/find_closest_value_in_bst/findClosestValueInBst')

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

describe('Find Closest Value In BST', () => {
  it("findClosestValueInBst Function should be exist", () => {
    expect(findClosestValueInBst()).toExist()
  })

  it("findClosestValueInBst Function should be a function", () => {
    expect(findClosestValueInBst).toBeType('function')
  })

  it("Test Case #1", () => {
    const bst = new BST(4);
    bst.left = new BST(2);
    bst.right = new BST(7);
    bst.left.left = new BST(1);
    bst.left.right = new BST(3);
    bst.right.left = new BST(6);
    bst.right.right = new BST(9);
    expect(findClosestValueInBst(bst, 5)).toBe(4)
  })

  it("Test Case #2", () => {
    const bst = new BST(4);
    bst.left = new BST(2);
    bst.right = new BST(7);
    bst.left.left = new BST(1);
    bst.left.right = new BST(3);
    bst.right.left = new BST(6);
    bst.right.right = new BST(9);
    expect(findClosestValueInBst(bst, 8)).toBe(7)
  })

  it("Test Case #3", () => {
    const bst = new BST(4);
    bst.left = new BST(2);
    bst.right = new BST(7);
    bst.left.left = new BST(1);
    bst.left.right = new BST(3);
    bst.right.left = new BST(6);
    bst.right.right = new BST(9);
    expect(findClosestValueInBst(bst, 0)).toBe(1)
  })

  it("Test Case #4", () => {
    const bst = new BST(4);
    bst.left = new BST(2);
    bst.right = new BST(7);
    bst.left.left = new BST(1);
    bst.left.right = new BST(3);
    bst.right.left = new BST(6);
    bst.right.right = new BST(9);
    expect(findClosestValueInBst(bst, 10)).toBe(9)
  })

  it("Test Case #5", () => {
    const bst = new BST(4);
    bst.left = new BST(2);
    bst.right = new BST(7);
    bst.left.left = new BST(1);
    bst.left.right = new BST(3);
    bst.right.left = new BST(6);
    bst.right.right = new BST(9);
    expect(findClosestValueInBst(bst, -1)).toBe(1)
  })
})