const { Node } = require('../easy/depth_first_search/depthFirstSearch')

describe('Depth-first Search', () => {
  it("Node Class should be exist", () => {
   expect(Node).toExist() 
  })

  it("Node Class should be called without any error", () => {
    expect(() => {
      new Node(1)
    }).not().toThrowError()
  })

  it("Test Case #1", () => {
    const graph = new Node('A');
    graph.addChild('B').addChild('C').addChild('D');
    graph.children[0].addChild('E').addChild('F');
    graph.children[2].addChild('G').addChild('H');
    graph.children[0].children[1].addChild('I').addChild('J');
    graph.children[2].children[0].addChild('K');

    expect(JSON.stringify(graph.depthFirstSearch([]))).toBe(JSON.stringify(['A', 'B', 'E', 'F', 'I', 'J', 'C', 'D', 'G', 'K', 'H']))
  })
})