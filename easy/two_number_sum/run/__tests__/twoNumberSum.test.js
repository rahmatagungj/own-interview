const { twoNumberSum } = require('../easy/two_number_sum/twoNumberSum')

describe('Two Number Sum', () => {
  it("twoNumberSum Function should be exist", () => {
    expect(twoNumberSum).toExist()
  })

  it("twoNumberSum should be a function type", () => {
    expect(twoNumberSum).toBeType('function')
  })

  it("twoNumberSum function should be not throwing any error", () => {
    expect(twoNumberSum).not().toThrowError()
  })

  it("Test Case #1", () => {
    expect(JSON.stringify(twoNumberSum([2, 7, 11, 15], 9))).toBe(JSON.stringify([2, 7]))
  })

  it("Test Case #2", () => {
    expect(JSON.stringify(twoNumberSum([2, 7, 11, 15], 18))).toBe(JSON.stringify([7, 11]))
  })

  
  it("Test Case #3", () => {
    expect(JSON.stringify(twoNumberSum([20, 22, 12, 15, 10], 33))).toBe(JSON.stringify([]))
  })
  
  it("Test Case #4", () => {
    expect(JSON.stringify(twoNumberSum([20, 22, 12, 15, 10], 100))).toBe(JSON.stringify([]));
  })
  
  it("Test Case #5", () => {
    expect(JSON.stringify(twoNumberSum([2, 7, 11, 18], 9))).toBe(JSON.stringify([2, 7]))
  })
})