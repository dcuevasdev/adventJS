function getCoins(change) {
  const availableCoins = [1, 2, 5, 10, 20, 50];
  const returnedCoins = [0, 0, 0, 0, 0, 0];
  let changeForClient = change;

  for (const item of availableCoins) {
    if (changeForClient !== 0) {
      availableCoins.reverse().map((item, i) => {
        if (returnedCoins[i] === 1 || changeForClient > 50) {
          changeForClient -= item;
          returnedCoins[i] += 1;
        }
        if (changeForClient >= item) {
          changeForClient -= item;
          returnedCoins[i] += 1;
        }
      });
    }
  }

  return returnedCoins.reverse();
}

getCoins(100); // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
getCoins(3); // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
getCoins(51); // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
getCoins(5); // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
getCoins(16); // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
