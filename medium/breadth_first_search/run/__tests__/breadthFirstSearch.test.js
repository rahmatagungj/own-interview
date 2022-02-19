const { Node } = require('../medium/breadth_first_search/breadthFirstSearch')

describe('Breadth-first Search', () => {
  it("Node class should be exist", () => {
    expect(Node).toExist()
  })

  it("Node should be not throw an error", () => {
    expect(() => {
      new Node("A")
    }).not().toThrowError()
  })

  it("Test Case #1", () => {
    const node = new Node("A")
    expect(JSON.stringify(node.breadthFirstSearch([]))).toBe(JSON.stringify(["A"]))
  })

  it("Test Case #2", () => {
    const node = new Node("A")
    node.addChild("B")
    expect(JSON.stringify(node.breadthFirstSearch([]))).toBe(JSON.stringify(["A", "B"]))
  })

  it("Test Case #3", () => {
    const node = new Node("A")
    node.addChild('B').addChild('C').addChild('D');
    node.children[0].addChild('E').addChild('F');
    node.children[2].addChild('G').addChild('H');
    node.children[0].children[1].addChild('I').addChild('J');
    node.children[2].children[0].addChild('K');
    expect(JSON.stringify(node.breadthFirstSearch([]))).toBe(JSON.stringify(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K']))
  })

  it("Test Case #4", () => {
    const node = new Node("A")
    node.addChild('B').addChild('C').addChild('D');
    node.children[0].addChild('E').addChild('F');
    node.children[2].addChild('G').addChild('H');
    node.children[0].children[1].addChild('I').addChild('J');
    node.children[2].children[0].addChild('K');
    expect(JSON.stringify(node.breadthFirstSearch(['A']))).toBe(JSON.stringify(['A', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K']))
  })

  it("Test Case #5", () => {
    const node = new Node("A")
    node.addChild('B').addChild('C').addChild('D');
    node.children[0].addChild('E').addChild('F');
    node.children[2].addChild('G').addChild('H');
    node.children[0].children[1].addChild('I').addChild('J');
    node.children[2].children[0].addChild('K');
    expect(JSON.stringify(node.breadthFirstSearch(['A', 'B']))).toBe(JSON.stringify(['A', 'B', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K']))
  })
})