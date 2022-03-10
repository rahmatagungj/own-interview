function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  redShirtSpeeds.sort((a,b) => a - b);
  blueShirtSpeeds.sort((a,b) => a - b);

  if (!fastest) {
      redShirtSpeeds.reverse();
  }
  let totalSpeed = 0;
  for (let idx = 0; idx < redShirtSpeeds.length; idx++) {
      const rider1 = redShirtSpeeds[idx];
      const rider2 = blueShirtSpeeds[blueShirtSpeeds.length - idx - 1];
      totalSpeed += Math.max(rider1, rider2);
  }
  return totalSpeed;
}

// dont change the code below
exports.tandemBicycle = tandemBicycle;
