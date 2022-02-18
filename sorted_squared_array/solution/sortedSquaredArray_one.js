function sortedSquaredArray(arr) {
  return arr.map(x => x * x).sort((a, b) => a - b)
}

// dont change the code below
exports.sortedSquaredArray = sortedSquaredArray