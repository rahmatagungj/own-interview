const { branchSums, BinaryTree } = require("../easy/branch-sums/branchSums")

describe("branchSums Basic Test", () => {
  it("branchSums Function should be exist", () => {
    expect(branchSums).toExist()
  })

  it("branchSums should be funtion type", () => {
    expect(typeof branchSums).toBe("function")
    expect(branchSums).toBeType("function")
  })

  it("branchSums Function should be not throw error", () => {
    const root = new BinaryTree(1)
    root.left = new BinaryTree(2)
    root.right = new BinaryTree(3)
    root.left.left = new BinaryTree(4)
    root.left.right = new BinaryTree(5)
    expect(branchSums(root)).not().toThrowError()
  })
})

describe("BinaryTree Functional Test", () => {
  it("Test Case #1", () => {
    const root = new BinaryTree(1)
    root.left = new BinaryTree(2)
    root.right = new BinaryTree(3)
    root.left.left = new BinaryTree(4)
    root.left.right = new BinaryTree(5)
    expect(branchSums(root)).toBe([7, 8, 4])
  })

  it("Test Case #2", () => {
    const root = new BinaryTree(1)
    root.left = new BinaryTree(2)
    root.right = new BinaryTree(3)
    root.left.left = new BinaryTree(4)
    root.left.right = new BinaryTree(5)
    root.right.left = new BinaryTree(6)
    root.right.right = new BinaryTree(7)
    expect(branchSums(root)).toBe([7, 8, 10, 11])
  })

  it("Test Case #3", () => {
    const root = new BinaryTree(102)
    root.left = new BinaryTree(101)
    root.right = new BinaryTree(103)
    root.left.left = new BinaryTree(100)
    root.left.right = new BinaryTree(104)
    root.right.left = new BinaryTree(105)
    root.right.right = new BinaryTree(106)
    expect(branchSums(root)).toBe([303, 307, 310, 311])
  })

  it("Test Case #4", () => {
    const root = new BinaryTree(1)
    root.left = new BinaryTree(2)
    root.right = new BinaryTree(30)
    root.left.left = new BinaryTree(4)
    root.left.right = new BinaryTree(5)
    root.right.left = new BinaryTree(6)
    root.right.right = new BinaryTree(70)
    root.right.left.left = new BinaryTree(7)
    root.right.left.right = new BinaryTree(8)
    expect(branchSums(root)).toBe([7, 8, 44, 45, 101])
  })

  it("Test Case #5", () => {
    const root = new BinaryTree(20)
    root.left = new BinaryTree(10)
    root.right = new BinaryTree(30)
    expect(branchSums(root)).toBe([30, 50])
  })
})
