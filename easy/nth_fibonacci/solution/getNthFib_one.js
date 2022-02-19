function getNthFib(n = 0) {
  let lastTwo = [0, 1];
  let counter = 2;

  if (n === 2) return 1;
  else if (n === 1) return 0;
  else {
    while (counter <= n) {
      let nextFib = lastTwo[0] + lastTwo[1];
      lastTwo[0] = lastTwo[1];
      lastTwo[1] = nextFib;
      counter++;
      if (counter === n) {
        return lastTwo[1];
      }
    }
  }
}

// Do not edit the line below.
exports.getNthFib = getNthFib;
