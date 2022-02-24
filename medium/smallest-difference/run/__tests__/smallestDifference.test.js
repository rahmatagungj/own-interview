const { smallestDifference } = require("../medium/smallest-difference/smallestDifference");

describe("Test Name", () => {
  it("smallestDifference Function should be exist", () => {
    expect(smallestDifference).toExist();
  })

  it("smallestDifference should have Function type", () => {
    expect(smallestDifference).toBeInstanceOf(Function);
  })

  it("smallestDifference should return an array", () => {
    expect(smallestDifference([1, 3, 15, 11, 2], [23, 127, 235, 19, 8])).toBeInstanceOf(Array);
  })

  it("smallestDifference Function should be not throw any error", () => {
    expect(smallestDifference([1, 3, 15, 11, 2], [23, 127, 235, 19, 8])).not().toThrowError();
  })

  it("Test Case #1", () => {
    expect(smallestDifference([1, 3, 15, 11, 2], [23, 127, 235, 19, 8])).toEqual([11, 8]);
  })

  it("Test Case #2", () => {
    expect(smallestDifference([1, 3, 15, 11, 2], [23, 127, 235, 19])).toEqual([15, 19]);
  })

  it("Test Case #3", () => {
    expect(smallestDifference([1, 3, 15, 11, 2], [23, 127, 235, 19, 8, 1])).toEqual([1, 1]);
  })

  it("Test Case #4", () => {
    expect(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17])).toEqual([28, 26]);
  })

  it("Test Case #5", () => {
    expect(smallestDifference([1, 1, 1, 1], [1, 1, 1, 1])).toEqual([1, 1]);
  })
});
