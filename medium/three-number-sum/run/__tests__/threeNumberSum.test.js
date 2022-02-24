const { threeNumberSum } = require("../medium/three-number-sum/threeNumberSum");

describe("Test Name", () => {
  it("threeNumberSum Function should be exist", () => {
    expect(threeNumberSum).toExist();
  })

  it("threeNumberSum Function should return an object", () => {
    expect(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0)).toBeType("object");
  })

  it("threeNumberSum Function should be not throwing any error", () => {
    expect(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0)).not().toThrowError()
  })

  it("Test Case #1", () => {
    expect(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0)).toEqual([[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]);
  })

  it("Test Case #2", () => {
    expect(threeNumberSum([1, 2, 3], 6)).toEqual([[1, 2, 3]]);
  })

  it("Test Case #3", () => {
    expect(threeNumberSum([1, 2, 3], 7)).toEqual([]);
  })

  it("Test Case #4", () => {
    expect(threeNumberSum([1, 2, 3], 1)).toEqual([]);
  })

  it("Test Case #5", () => {
    expect(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 16)).toEqual([[1,3,12]]);
  })

  it("Test Case #6", () => {
    expect(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 17)).toEqual([[2,3,12]]);
  })

  it("Test Case #7", () => {
    expect(threeNumberSum([8, 10, -2, 49, 14], 57)).toEqual([[-2,10,49]]);
  })
});
