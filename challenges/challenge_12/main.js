function getMinJump(obstacles) {
  const maxValue = Math.max(...obstacles);

  for (let i = 1; i < maxValue; i++) {
    const isOdd = obstacles.every((num) => {
      return num % i !== 0;
    });

    if (isOdd) {
      return i;
    }
  }
}

getMinJump([2, 4, 6, 8, 10]);
getMinJump([3, 7, 5]);
getMinJump([1, 5, 2, 3]);
getMinJump([9, 5, 1]);
getMinJump([14, 10, 8, 2, 3, 6]);
