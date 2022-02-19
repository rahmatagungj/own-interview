const { answer } = require('./_template/level/answer')

describe('Test Name', () => {
  it("Test Case #1", () => {
    expect(answer(2)).toExist()
  })

  it("Test Case #2", () => {
    expect(answer(2)).toBeType('number')
  })
})