const { riverSizes } = require("../medium/river-sizes/riverSizes");

describe("Test Name", () => {
  it("riverSizes Function should be exist", () => {
    expect(riverSizes).toExist();
  })

  it("riverSizes should have Function type", () => {
    expect(riverSizes).toBeInstanceOf(Function);
  })

  it("riverSizes should return an array", () => {
    expect(riverSizes([[1, 0, 0], [1, 0, 0], [1, 0, 0]])).toBeInstanceOf(Array);
  })

  it("riverSizes Function should not throw error", () => {
    expect(riverSizes([[1, 0, 0], [1, 0, 0], [1, 0, 0]])).not().toThrowError();
  })

  it("Test Case #1", () => {
    expect(riverSizes([[1, 0, 0], [1, 0, 0], [1, 0, 0]])).toEqual([3]);
  })

  it("Test Case #2", () => {
    expect(riverSizes([[0]])).toEqual([]);
  })

  it("Test Case #3", () => {
    expect(riverSizes([[1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0]])).toEqual([3,2,1]);
  })

  it("Test Case #4", () => {
    let matrix = [
      [1, 0, 0, 0, 0, 0, 1],
      [0, 1, 0, 0, 0, 1, 0],
      [0, 0, 1, 0, 1, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 1, 0, 1, 0, 0],
      [0, 1, 0, 0, 0, 1, 0],
      [1, 0, 0, 0, 0, 0, 1]
    ]
    expect(riverSizes(matrix)).toEqual([1,1,1,1,1,1,1,1,1,1,1,1,1]);
  })

  it("Test Case #5", () => {
    let matrix = [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1]
    ]
    expect(riverSizes(matrix)).toEqual([49])
  })
});
