const { nodeDepths } = require("../easy/node-depths/nodeDepths");

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

describe("nodeDepths Basic Test", () => {
  it("nodeDepths Function should be exist", () => {
    expect(nodeDepths).toExist();
  })

  it("nodeDepths should be funtion type", () => {
    expect(typeof nodeDepths).toBe("function");
    expect(nodeDepths).toBeType("function");
  })

  it("nodeDepths Function should be not throw error", () => {
    const root = new BinaryTree(1);
    root.left = new BinaryTree(2);
    root.right = new BinaryTree(3);
    root.left.left = new BinaryTree(4);
    root.left.right = new BinaryTree(5);
    expect(nodeDepths(root)).not().toThrowError();
  })

  it("nodeDepths Function should be return number", () => {
    const root = new BinaryTree(1);
    root.left = new BinaryTree(2);
    root.right = new BinaryTree(3);
    root.left.left = new BinaryTree(4);
    root.left.right = new BinaryTree(5);
    expect(nodeDepths(root)).toBeType("number");
  })
});

describe("nodeDepths Functional Test", () => {
  it("Test Case #1", () => {
    const root = new BinaryTree(1);
    root.left = new BinaryTree(2);
    root.right = new BinaryTree(3);
    root.left.left = new BinaryTree(4);
    root.left.right = new BinaryTree(5);
    expect(nodeDepths(root)).toBe(6);
  })

  it("Test Case #2", () => {
    const root = new BinaryTree(1);
    root.left = new BinaryTree(2);
    root.right = new BinaryTree(3);
    root.left.left = new BinaryTree(4);
    root.left.right = new BinaryTree(5);
    root.right.left = new BinaryTree(6);
    root.right.right = new BinaryTree(7);
    expect(nodeDepths(root)).toBe(10);
  })

  it("Test Case #3", () => {
    const root = new BinaryTree(100);
    root.left = new BinaryTree(560);
    root.right = new BinaryTree(200);
    root.left.left = new BinaryTree(40);
    root.left.right = new BinaryTree(30);
    root.right.left = new BinaryTree(150);
    root.right.right = new BinaryTree(300);
    root.left.left.left = new BinaryTree(10);
    root.left.left.right = new BinaryTree(20);
    expect(nodeDepths(root)).toBe(16);
  })

  it("Test Case #4", () => {
    const root = new BinaryTree(1);
    root.left = new BinaryTree(2);
    root.right = new BinaryTree(3);
    root.left.left = new BinaryTree(4);
    root.left.right = new BinaryTree(5);
    root.right.left = new BinaryTree(6);
    root.right.right = new BinaryTree(7);
    root.left.left.left = new BinaryTree(8);
    root.left.left.right = new BinaryTree(9);
    root.left.right.left = new BinaryTree(10);
    root.left.right.right = new BinaryTree(11);
    root.right.left.left = new BinaryTree(12);
    root.right.left.right = new BinaryTree(13);
    root.right.right.left = new BinaryTree(14);
    root.right.right.right = new BinaryTree(15);
    expect(nodeDepths(root)).toBe(34);
  })

  it("Test Case #5", () => {
    const root = new BinaryTree(80);
    root.left = new BinaryTree(40);
    root.right = new BinaryTree(120);
    root.left.left = new BinaryTree(20);
    root.left.right = new BinaryTree(60);
    expect(nodeDepths(root)).toBe(6);
  })
})