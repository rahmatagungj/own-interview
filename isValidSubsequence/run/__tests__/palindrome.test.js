const { isValidSubquence } = require('./isValidSubsequence/isValidSubsequence')

describe('isValidSequence Check', () => {
  it("isValidSequence Function should be exist", () => {
    expect(isValidSubquence()).toExist()
  })

  it("isValidSequence Function should be return boolean", () => {
    expect(isValidSubquence()).toBeType('boolean')
  })

  it("isValidSequence Function should be return true", () => {
    expect(
      isValidSubquence([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])
      ).toBe(true)
  })

  it("isValidSequence Function should be not throwing an error", () => {
    expect(() => {
      isValidSubquence([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])
    }).not().toThrowError()
  })

  it('Test Case #1', () => {
    expect(
      isValidSubquence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])
    ).toBe(true)
  })

  it('Test Case #2', () => {
    expect(
      isValidSubquence([5, 1, 22, 25, 6, -1, 8, 10],  [1, 6, 10])
    ).toBeTruthy()
  })

  it('Test Case #3', () => {
    expect(
      isValidSubquence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 10])
    ).toBe(true)
  })

  it('Test Case #3', () => {
    expect(
      isValidSubquence([5, 1, 22, 25, 6, -1, 8, 10], [5, -1, 8, 10])
    ).toBeTruthy()
  })

  it('Test Case #4', () => {
    expect(
      isValidSubquence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10, 12])
    ).toBeFalsy()
  })
})