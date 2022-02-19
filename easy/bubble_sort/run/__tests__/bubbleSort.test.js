const { bubbleSort } = require('../easy/bubble_sort/bubbleSort')

describe('Bubble Sort', () => {
  it('bubbleSort Function should be exist', () => {
    expect(bubbleSort()).toExist()
  })

  it("bubbleSort Function should be not thowring an error", () => {
    expect(() => {
      bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    }
    ).not().toThrowError()
  })

  it("bubbleSort Function should be returned object type", () => {
    expect(bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBeType('object')
  })

  it("bubbleSort Function should be returned object with length 10", () => {
    expect(bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).length).toBe(10)
  })

  it("Test Case #1", () => {
    expect(JSON.stringify(bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))).toBe(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
  })

  it("Test Case #2", () => {
    expect(JSON.stringify(bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))).toBe(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
  })

  it("Test Case #3", () => {
    expect(JSON.stringify(bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]))).toBe(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]))
  })

  it("Test Case #4", () => {
    expect(JSON.stringify(bubbleSort([11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))).toBe(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]))
  })

  it("Test Case #5", () => {
    expect(JSON.stringify(bubbleSort([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))).toBe(JSON.stringify([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))
  })

  it("Test Case #6", () => {
    expect(JSON.stringify(bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]))).toBe(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]))
  })

  it("Test Case #7", () => {
    expect(JSON.stringify(bubbleSort([12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))).toBe(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]))
  })

  it("Test Case #8", () => {
    expect(JSON.stringify(bubbleSort([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))).toBe(JSON.stringify([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))
  })

  it("Test Case #9", () => {
    expect(JSON.stringify(bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]))).toBe(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]))
  })

  it("Test Case #10", () => {
    expect(JSON.stringify(bubbleSort([13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))).toBe(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]))
  })
})