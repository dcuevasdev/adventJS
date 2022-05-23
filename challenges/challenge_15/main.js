function checkSledJump(heights) {
  const findLagerNumber = Math.max(...heights);
  const findLargerPosition = heights.indexOf(findLagerNumber);
  let beforeValidator = false;
  let afterValidator = false;

  for (let i = 0; i < findLargerPosition; i++) {
    if (heights[i] < heights[i + 1]) {
      beforeValidator = true;
    } else {
      return false;
    }
  }

  for (let i = findLargerPosition; i < heights.length - 1; i++) {
    if (heights[i] > heights[i + 1]) {
      afterValidator = true;
    } else {
      return false;
    }
  }

  return beforeValidator && afterValidator ? true : false;
}

checkSledJump([1, 2, 3, 2, 1]);
checkSledJump([0, 1, 0]);
checkSledJump([0, 3, 2, 1]);
checkSledJump([0, 1000, 1]);

checkSledJump([1, 2, 3]);
checkSledJump([2, 4, 4, 6, 2]);
checkSledJump([1, 2, 3, 2, 1, 2, 3]);
