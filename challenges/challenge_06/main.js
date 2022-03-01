function sumPairs(numbers, result) {
  const arrResult = [];

  const copyArray = numbers.map((element) => {
    return element;
  });

  for (const element of numbers) {
    for (let i = 0; i < copyArray.length - 1; i++) {
      const sum = element + copyArray[i + 1];

      if (sum === result && arrResult <= 2) {
        arrResult.push(element);
        arrResult.push(copyArray[i + 1]);
        break;
      }
    }

    copyArray.shift();
  }

  if (arrResult.length === 2) {
    return console.log(arrResult);
  } else {
    return console.log(null);
  }
}

sumPairs([2, 2, 3, 1], 4);
sumPairs([3, 5, 7, 2], 10);
sumPairs([-3, -2, 7, -5], 10);
sumPairs([6, 7, 1, 2], 8);
sumPairs([0, 2, 2, 3, -1, 1, 5], 6);
