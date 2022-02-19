const { findThreeLargestNumbers } = require('../easy/find_three_largest_numbers/findThreeLargestNumbers')

describe('Find Three Largest Numbers', () => {
  it("findThreeLargestNumbers Function should be exist", () => {
    expect(findThreeLargestNumbers).toExist()
  })

  it("findThreeLargestNumbers Function should be a function", () => {
    expect(findThreeLargestNumbers).toBeType('function')
  })

  it("findThreeLargestNumbers Function should be not throwing an error", () => {
    expect(findThreeLargestNumbers([1,2,3,4])).not().toThrowError()
  })

  it("findThreeLargestNumbers Function should return an object", () => {
    expect(findThreeLargestNumbers([1,2,3,4])).toBeType('object')
  })

  it("Test Case #1", () => {
    expect(JSON.stringify(findThreeLargestNumbers([1,2,3,4]))).toBe(JSON.stringify([2,3,4]))
  })

  it("Test Case #2", () => {
    expect(JSON.stringify(findThreeLargestNumbers([1,2,3,4,5]))).toBe(JSON.stringify([3,4,5]))
  })

  it("Test Case #3", () => {
    expect(JSON.stringify(findThreeLargestNumbers([1001, 200, 400, 2, 4, -5, 14]))).toBe(JSON.stringify([200, 400, 1001]))
  })

  it("Test Case #4", () => {
    expect(JSON.stringify(findThreeLargestNumbers([1,2,3,4,5,6,7,8,9,10]))).toBe(JSON.stringify([8,9,10]))
  })

  it("Test Case #5", () => {
    expect(JSON.stringify(findThreeLargestNumbers([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]))).toBe(JSON.stringify([18,19,20]))
  })

  it("Test Case #6", () => {
    expect(JSON.stringify(findThreeLargestNumbers([900, 200, -100, 201, 400, 2, 4, -5, 14]))).toBe(JSON.stringify([201, 400, 900]))
  })
})