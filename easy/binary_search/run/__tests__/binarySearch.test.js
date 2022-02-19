const { binarySearch } = require('../easy/binary_search/binarySearch')

describe('Binary Search', () => {
  it("binarySearch Function should be exist", () => {
    expect(binarySearch()).toExist()
  })

  it("binarySearch Function should be return number", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -1)).toBeType('number')
  })

  it("binarySearch Function shoud be not throwing an error", () => {
    expect(() => {
      binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -1)
    }).not().toThrowError()
  })

  it("Test Case #1", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)).toBe(0)
  })

  it("Test Case #2", () => {
    expect(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 45)).toBe(4)
  })
})