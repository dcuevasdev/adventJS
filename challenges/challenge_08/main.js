function maxProfit(prices) {
  const possibleGain = [];

  const copyArray = prices.map((element) => {
    return element;
  });

  for (const element of prices) {
    for (let i = 0; i < copyArray.length - 1; i++) {
      const win = Math.abs(element - copyArray[i + 1]);

      if (element < copyArray[i + 1]) {
        possibleGain.push(win);
      }
    }
    copyArray.shift();
  }

  if (possibleGain.length === 0) return -1;
  const benefitOfDay = Math.max(...possibleGain);
  return benefitOfDay;
}

const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
maxProfit(pricesBtc);

const pricesEth = [10, 20, 30, 40, 50, 60, 70];
maxProfit(pricesEth);

const pricesDoge = [18, 15, 12, 11, 9, 7];
maxProfit(pricesDoge);

const pricesAda = [3, 3, 3, 3, 3];
maxProfit(pricesAda);
