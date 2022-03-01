function nonConstructibleChange(coins) {
  let currentMinImpossibleChange = 1

  const sortedCoins = coins.sort((a, b) => a - b)

  for (let i = 0; i < sortedCoins.length; i += 1) {
    if (currentMinImpossibleChange < sortedCoins[i])
      return currentMinImpossibleChange
    currentMinImpossibleChange += sortedCoins[i]
  }

  return currentMinImpossibleChange
}

// dont change the code below
exports.nonConstructibleChange = nonConstructibleChange
