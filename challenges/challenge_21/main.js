function canCarry(capacity, trip) {
  let totalGift = 0;

  for (let i = 0; i < trip.length; i++) {
    const [numGift, pickupPoint] = trip[i];

    if (i !== 0 && trip[i - 1][2] <= pickupPoint) {
      totalGift -= trip[i - 1][0];
    }

    totalGift += numGift;
  }

  return totalGift <= capacity;
}

canCarry(3, [
  [1, 1, 5],
  [2, 2, 10],
]);
canCarry(4, [
  [2, 5, 8],
  [3, 6, 10],
]);
canCarry(1, [[2, 3, 8]]);

canCarry(3, [
  [2, 1, 5],
  [3, 5, 7],
]);
canCarry(4, [
  [2, 3, 8],
  [2, 5, 7],
]);
canCarry(2, [
  [1, 2, 4],
  [2, 3, 8],
]);
