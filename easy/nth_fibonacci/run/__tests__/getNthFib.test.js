const { getNthFib } = require('../easy/nth_fibonacci/getNthFib')

describe('Nth Fibonacci', () => {
  it("getNthFib Function should be exist", () => {
    expect(getNthFib).toExist()
  })

  it("getNthFib Function should be return number", () => {
    expect(getNthFib(2)).toBeType('number')
  })

  it("getNthFib Function should be not throw any error", () => {
    expect(() => getNthFib(2)).not().toThrowError()
  })
  
  it("Test Case #1", () => {
    expect(getNthFib(2)).toBe(1)
  })

  it("Test Case #2", () => {
    expect(getNthFib(3)).toBe(1)
  })

  it("Test Case #3", () => {
    expect(getNthFib(4)).toBe(2)
  })

  it("Test Case #4", () => {
    expect(getNthFib(5)).toBe(3)
  })

  it("Test Case #5", () => {
    expect(getNthFib(6)).toBe(5)
  })

  it("Test Case #6", () => {
    expect(getNthFib(102)).toBe(573147844013817200000)
  })

  it("Test Case #7", () => {
    expect(getNthFib(24)).toBe(28657)
  })

  it("Test Case #8", () => {
    expect(getNthFib(25)).toBe(46368)
  })

  it("Test Case #9", () => {
    expect(getNthFib(26)).toBe(75025)
  })

  it("Test Case #10", () => {
    expect(getNthFib(83)).toBe(61305790721611580)
  })
})