const { SuffixTrie } = require("../medium/suffix-trie-construction/SuffixTrie");

describe("Test Name", () => {
  it("SuffixTrie Class should be exist", () => {
    expect(SuffixTrie).toExist();
  });
  
  it("SuffixTrie should be not throw any error", () => {
    expect(new SuffixTrie('abc')).not().toThrowError();
  })

  it("Test Case #1", () => {
    const suffixTrie = new SuffixTrie('abc');
    expect(JSON.stringify(suffixTrie)).toEqual(`{"root":{"a":{"b":{"c":{"*":true}}},"b":{"c":{"*":true}},"c":{"*":true}},"endSymbol":"*"}`)
  })

  it("Test Case #2", () => {
    const suffixTrie = new SuffixTrie('test');
    expect(JSON.stringify(suffixTrie)).toEqual(`{"root":{"t":{"e":{"s":{"t":{"*":true}}},"*":true},"e":{"s":{"t":{"*":true}}},"s":{"t":{"*":true}}},"endSymbol":"*"}`)
  })

  it("Test Case #3", () => {
    const suffixTrie = new SuffixTrie('tested');
    expect(suffixTrie.contains('tested')).toBeTruthy();
  })

  it("Test Case #4", () => {
    const suffixTrie = new SuffixTrie('the car is good');
    expect(JSON.stringify(suffixTrie)).toHaveReturned(`{"root":{"t":{"h":{"e":{" ":{"c":{"a":{"r":{" ":{"i":{"s":{" ":{"g":{"o":{"o":{"d":{"*":true}}}}}}}}}}}}}}},"h":{"e":{" ":{"c":{"a":{"r":{" ":{"i":{"s":{" ":{"g":{"o":{"o":{"d":{"*":true}}}}}}}}}}}}}},"e":{" ":{"c":{"a":{"r":{" ":{"i":{"s":{" ":{"g":{"o":{"o":{"d":{"*":true}}}}}}}}}}}}}," ":{"c":{"a":{"r":{" ":{"i":{"s":{" ":{"g":{"o":{"o":{"d":{"*":true}}}}}}}}}}},"i":{"s":{" ":{"g":{"o":{"o":{"d":{"*":true}}}}}}},"g":{"o":{"o":{"d":{"*":true}}}}},"c":{"a":{"r":{" ":{"i":{"s":{" ":{"g":{"o":{"o":{"d":{"*":true}}}}}}}}}}},"a":{"r":{" ":{"i":{"s":{" ":{"g":{"o":{"o":{"d":{"*":true}}}}}}}}}},"r":{" ":{"i":{"s":{" ":{"g":{"o":{"o":{"d":{"*":true}}}}}}}}},"i":{"s":{" ":{"g":{"o":{"o":{"d":{"*":true}}}}}}},"s":{" ":{"g":{"o":{"o":{"d":{"*":true}}}}}},"g":{"o":{"o":{"d":{"*":true}}}},"o":{"o":{"d":{"*":true}},"d":{"*":true}},"d":{"*":true}},"endSymbol":"*"}`)
  })

  it("Test Case #5", () => {
    const suffixTrie = new SuffixTrie('good');
    expect(suffixTrie.contains('goods')).toBeFalsy();
  })
});
