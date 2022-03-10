const { tandemBicycle } = require("../indonesia/sepeda-gandeng/tandemBicycle")

describe("Functional Test", () => {
  it("tandemBicycle should be defined", () => {
    expect(tandemBicycle([10, 20, 30], [5, 10, 15], true)).toBeDefined()
  })

  it("tandemBicycle should return correct value", () => {
    expect(tandemBicycle([10, 20, 30], [5, 10, 15], true)).toEqual(65)
    expect(tandemBicycle([10, 20, 30], [5, 10, 15], false)).toEqual(60)
  })

  it("tandemBicycle Function should not throw any error", () => {
    expect(() => tandemBicycle([10, 1, 30], [5, 1, 15], true)).not().toThrowError()
  })

  it("tandemBicycle should have number return type", () => {
    expect(typeof tandemBicycle([10, 20, 30], [5, 10, 15], true)).toBe("number")
  })
})

describe("Return Value Test", () => {
  it("Test Case #1", () => {
    expect(tandemBicycle([10, 20, 30], [5, 10, 15], true)).toEqual(65)
  })

  it("Test Case #2", () => {
    expect(tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], true)).toEqual(32)
  })

  it("Test Case #3", () => {
    expect(tandemBicycle([10, 20, 30], [5, 10, 15], false)).toEqual(60)
  })

  it("Test Case #4", () => {
    expect(tandemBicycle([1, 2, 1, 9, 12, 3], [3, 3, 4, 6, 1, 2], true)).toEqual(37)
  })

  it("Test Case #5", () => {
    expect(tandemBicycle([1, 2, 1, 9, 12, 3], [3, 3, 4, 6, 1, 2], false)).toEqual(30)
  })
})

describe("Deep Test", () => {
  it("Test Case #1", () => {
    expect(tandemBicycle([10, 20, 30], [5, 10, 15], true)).toStrictEqual(65)
    expect(tandemBicycle([10, 20, 30], [5, 10, 15], true)).toBe(65)
    expect(tandemBicycle([10, 20, 30], [5, 10, 15], true)).not().toThrowError()
    expect(tandemBicycle([10, 20, 30], [5, 10, 15], true)).toBeType("number")
  })

  it("Test Case #2", () => {
    expect(tandemBicycle([1, 2, 1, 9, 12, 3], [3, 3, 4, 6, 1, 2], true)).toStrictEqual(37)
    expect(tandemBicycle([1, 2, 1, 9, 12, 3], [3, 3, 4, 6, 1, 2], true)).toBe(37)
    expect(tandemBicycle([1, 2, 1, 9, 12, 3], [3, 3, 4, 6, 1, 2], true)).not().toThrowError()
    expect(tandemBicycle([1, 2, 1, 9, 12, 3], [3, 3, 4, 6, 1, 2], true)).toBeType("number")
  })

  it("Test Case #3", () => {
    expect(tandemBicycle([10, 20, 30], [5, 10, 15], false)).toStrictEqual(60)
    expect(tandemBicycle([10, 20, 30], [5, 10, 15], false)).toBe(60)
    expect(tandemBicycle([10, 20, 30], [5, 10, 15], false)).not().toThrowError()
    expect(tandemBicycle([10, 20, 30], [5, 10, 15], false)).toBeType("number")
  })

  it("Test Case #4", () => {
    expect(tandemBicycle([1, 2, 1, 9, 12, 3], [3, 3, 4, 6, 1, 2], false)).toStrictEqual(30)
    expect(tandemBicycle([1, 2, 1, 9, 12, 3], [3, 3, 4, 6, 1, 2], false)).toBe(30)
    expect(tandemBicycle([1, 2, 1, 9, 12, 3], [3, 3, 4, 6, 1, 2], false)).not().toThrowError()
    expect(tandemBicycle([1, 2, 1, 9, 12, 3], [3, 3, 4, 6, 1, 2], false)).toBeType("number")
  })

  it("Test Case #5", () => {
    expect(tandemBicycle([1, 2, 1, 9, 12, 3, 1, 54, 21, 231, 32, 1], [3, 3, 4, 6, 1, 2, 5, 6, 34, 256, 123, 32], false)).toStrictEqual(484)
    expect(tandemBicycle([1, 2, 1, 9, 12, 3, 1, 54, 21, 231, 32, 1], [3, 3, 4, 6, 1, 2, 5, 6, 34, 256, 123, 32], false)).toBe(484)
    expect(tandemBicycle([1, 2, 1, 9, 12, 3, 1, 54, 21, 231, 32, 1], [3, 3, 4, 6, 1, 2, 5, 6, 34, 256, 123, 32], false)).not().toThrowError()
    expect(tandemBicycle([1, 2, 1, 9, 12, 3, 1, 54, 21, 231, 32, 1], [3, 3, 4, 6, 1, 2, 5, 6, 34, 256, 123, 32], false)).toBeType("number")
  })
})
