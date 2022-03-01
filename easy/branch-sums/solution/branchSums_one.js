// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  //DFS the tree keeping track of the sum
  const answer = [];
  helper(root, 0);
  return answer;

  function helper(node, currentSum) {
    if (!node) {
      return;
    }

    currentSum += node.value;

    if (!node.left && !node.right) {
      answer.push(currentSum);
      return;
    }

    helper(node.left, currentSum);
    helper(node.right, currentSum);
  }
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;