const { generateChildrenName } = require("../indonesia/membuat-nama-anak/generateChildrenName");

describe("Functional Test", () => {
  it("generateChildrenName Function should be defined", () => {
    expect(generateChildrenName).toBeDefined();
  })
  
  it("generateChildrenName Function should be not throw any error", () => {
    expect(() => generateChildrenName("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz")).not().toThrowError();
  })

  it("generateChildrenName Function should have function type", () => {
    expect(typeof generateChildrenName).toBe("function");
  })
});

describe("Basic result test", () => {
  it("generateChildrenName should be return boolean type", () => {
    expect(typeof generateChildrenName("abc", "abb")).toBe("boolean");
  })

  it("generateChildrenName should be return true", () => {
    expect(generateChildrenName("abcc", "abc")).toBe(true);
  })

  it("generateChildrenName should be return false", () => {
    expect(generateChildrenName("abc", "abb")).toBe(false);
  })
})

describe("More Test", () => {
  it("Test Case #1", () => {
    expect(generateChildrenName("abc", "abc")).toBeTruthy();
  })

  it("Test Case #2", () => {
    expect(generateChildrenName("abc", "ab")).toBeTruthy();
  })

  it("Test Case #3", () => {
    expect(generateChildrenName("udi", "idu")).toBeTruthy();
  })

  it("Test Case #4", () => {
    expect(generateChildrenName("abc", "abcd")).toBeFalsy();
  })

  it("Test Case #5", () => {
    expect(generateChildrenName("abc", "abcd")).toBeFalsy();
  })
})

describe("Deep Test", () => {
  it("Test Case #1", () => {
    expect(generateChildrenName("abc", "abc")).toStrictEqual(true);
  })

  it("Test Case #2", () => {
    expect(generateChildrenName("Aaeanp Sj say", "Asep Sanjaya")).toStrictEqual(true);
  })

  it("Test Case #3", () => {
    expect(generateChildrenName("thaaRm", "Rahmat")).not().toThrowError()
    expect(generateChildrenName("thaaRm", "Rahmat")).toStrictEqual(true);
  })

  it("Test Case #4", () => {
    expect(generateChildrenName("indualllaJ", "Jalaludin")).toBeType('boolean');
    expect(generateChildrenName("indualllaJ", "Jalaludin")).toStrictEqual(true);
    expect(generateChildrenName("indualllaJ", "Jalaludin")).not().toThrowError()
  })

  it("Test Case #5", () => {
    expect(generateChildrenName("FmiahFnanerda ", "Fahmi Fernanda")).toBeType('boolean');
    expect(generateChildrenName("FmiahFnanerda ", "Fahmi Fernanda")).toStrictEqual(true);
    expect(generateChildrenName("FmiahFnanerda ", "Fahmi Fernanda")).not().toThrowError()
  })

  it("Test Case #6", () => {
    expect(generateChildrenName("adit Putranto", "Adit Putranto")).toBeType('boolean');
    expect(generateChildrenName("adit Putranto", "Adit Putranto")).toStrictEqual(false);
    expect(generateChildrenName("adit Putranto", "Adit Putranto")).not().toThrowError()
  })

  it("Test Case #7", () => {
    expect(generateChildrenName("zarinNzNar ad", "Nizar Nazarudin")).toBeType('boolean');
    expect(generateChildrenName("zarinNzNar ad", "Nizar Nazarudin")).toStrictEqual(false);
    expect(generateChildrenName("zarinNzNar ad", "Nizar Nazarudin")).not().toThrowError()
  })
})