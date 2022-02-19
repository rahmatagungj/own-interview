const { insertionSort } = require('../easy/insertion_sort/insertionSort')

describe('Insertion Sort', () => {
  it("insertionSort Function should be exist", () => {
    expect(insertionSort).toExist()
  })

  it("insertionSort Function should be Function type", () => {
    expect(insertionSort).toBeType('function')
  })

  it("insertionSort should be not throw any error", () => {
    expect(() => {
      insertionSort([])
    }).not().toThrowError()
  })

  it("Test Case #1", () => {
    expect(JSON.stringify(insertionSort([]))).toBe(JSON.stringify([]))
  })

  it("Test Case #2", () => {
    expect(JSON.stringify(insertionSort([1]))).toBe(JSON.stringify([1]))
  })

  it("Test Case #3", () => {
    expect(JSON.stringify(insertionSort([1, 2]))).toBe(JSON.stringify([1, 2]))
  })

  it("Test Case #4", () => {
    expect(JSON.stringify(insertionSort([2, 1]))).toBe(JSON.stringify([1, 2]))
  })

  it("Test Case #5", () => {
    expect(JSON.stringify(insertionSort([11, 16, 3, 7, 9, 10, 15, 4, 8, 14, 12, 13, 5, 6]))).toBe(JSON.stringify([3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]))
  })
})