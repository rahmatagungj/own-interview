function generateChildrenName(characters, name) {
  const characterCounts = {}

  for (const character of characters) {
    if (!(character in characterCounts)) {
      characterCounts[character] = 0
    }

    characterCounts[character]++
  }

  for (const character of name) {
    if (!(character in characterCounts) || characterCounts[character] === 0) {
      return false
    }

    characterCounts[character]--
  }

  return true
}

// dont change the code below
exports.generateChildrenName = generateChildrenName;
