const { sortedSquaredArray } = require('../sorted_squared_array/sortedSquaredArray')

describe('Sorted Squared Array', () => {
  it('sortedSquaredArray Function should be exist', () => {
    expect(sortedSquaredArray).toExist()
  })

  it('sortedSquaredArray Function should be return an object', () => {
    expect(sortedSquaredArray([-4, -1, 0, 3, 10])).toBeType('object')
  })

  it('should be not throwing an error', () => {
    expect(() => {
      sortedSquaredArray([-4, -1, 0, 3, 10])
    }).not().toThrowError()
  })

  it('Test Case #1', () => {
    let actual = sortedSquaredArray([1, 2, 3, 5, 6, 8, 9])
    expect(JSON.stringify(actual)).toBe(JSON.stringify([1, 4, 9, 25, 36, 64, 81]))
  })

  it('Test Case #2', () => {
    let actual = sortedSquaredArray([-4, -1, 0, 3, 10])
    expect(JSON.stringify(actual)).toBe(JSON.stringify([0, 1, 9, 16, 100]))
  })

  it('Test Case #3', () => {
    let actual = sortedSquaredArray([-7, -3, 2, 3, 11])
    expect(JSON.stringify(actual)).toBe(JSON.stringify([4, 9, 9, 49, 121]))
  })

  it('Test Case #4', () => {
    let actual = sortedSquaredArray([-1, -1])
    expect(JSON.stringify(actual)).toBe(JSON.stringify([1, 1]))
  })

  it('Test Case #5', () => {
    let actual = sortedSquaredArray([-1, 0])
    expect(JSON.stringify(actual)).toBe(JSON.stringify([0, 1]))
  })

  it('Test Case #6', () => {
    let actual = sortedSquaredArray([-1, 0, 1])
    expect(JSON.stringify(actual)).toBe(JSON.stringify([0, 1, 1]))
  })

  it('Test Case #7', () => {
    let actual = sortedSquaredArray([-1, 0, 1, 2])
    expect(JSON.stringify(actual)).toBe(JSON.stringify([0, 1, 1, 4]))
  })

  it('Test Case #8', () => {
    let actual = sortedSquaredArray([-1, 0, 1, 2, 3])
    expect(JSON.stringify(actual)).toBe(JSON.stringify([0, 1, 1, 4, 9]))
  })
})