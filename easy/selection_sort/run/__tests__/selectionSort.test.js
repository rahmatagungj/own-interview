const { selectionSort } = require('../easy/selection_sort/selectionSort')

describe('Selection Sort', () => {
  it("selectionSort Function should be exist", () => {
    expect(selectionSort).toExist()
  })

  it("selectionSort type should be a function", () => {
    expect(selectionSort).toBeType('function')
  })

  it("selectionSort should be returned objects", () => {
    expect(selectionSort([])).toBeType('object')
  })
  
  it("selectionSort should be not throw an error", () => {
    expect(() => {
      selectionSort([])
    }).not().toThrowError()
  })

  it("Test Case #1", () => {
    expect(JSON.stringify(selectionSort([]))).toBe(JSON.stringify([]))
  })

  it("Test Case #2", () => {
    expect(JSON.stringify(selectionSort([1]))).toBe(JSON.stringify([1]))
  })

  it("Test Case #3", () => {
    expect(JSON.stringify(selectionSort([1, 2]))).toBe(JSON.stringify([1, 2]))
  })

  it("Test Case #4", () => {
    expect(JSON.stringify(selectionSort([2, 1]))).toBe(JSON.stringify([1, 2]))
  })

  it("Test Case #5", () => {
    expect(JSON.stringify(selectionSort([11, 16, 3, 7, 9, 10, 15, 4, 8, 14, 12, 13, 5, 6]))).toBe(JSON.stringify([3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]))
  })

  it("Test Case #6", () => {
    expect(JSON.stringify(selectionSort([11, 16, 3, 7, 9, 10, 15, 4, 8, 14, 12, 13, 5, 6, 17]))).toBe(JSON.stringify([3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]))
  })

  it("Test Case #7", () => {
    expect(JSON.stringify(selectionSort([11, 16, 3, 7, 9, 10, 15, 4, 8, 14, 12, 13, 5, 6, 17, 1]))).toBe(JSON.stringify([1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]))
  })

  it("Test Case #8", () => {
    expect(JSON.stringify(selectionSort([11, 16, 3, 7, 9, 10, 15, 4, 8, 14, 12, 13, 5, 6, 17, 1, 2]))).toBe(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]))
  })

  it("Test Case #9", () => {
    expect(JSON.stringify(selectionSort([101, 234, 543, 7, 9, 10, 15, 4, 8, 14, 12, 13, 5, 6, 17, 1, 2]))).toBe(JSON.stringify([1,2,4,5,6,7,8,9,10,12,13,14,15,17,101,234,543]))
  })

  it("Test Case #10", () => {
    expect(JSON.stringify(selectionSort([101, 234, 543, 7, 9, 10, 15, 4, 8, 14, 12, 13, 5, 6, 17, 1, 2, -1]))).toBe(JSON.stringify([-1,1,2,4,5,6,7,8,9,10,12,13,14,15,17,101,234,543]))
  })
})