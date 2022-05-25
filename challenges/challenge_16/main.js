function decodeNumber(symbols) {
  const symbolsValue = {
    ".": 1,
    ",": 5,
    ":": 10,
    ";": 50,
    "!": 100,
  };

  const errorSymbols = /[a-z0-9]/gi.test(symbols);
  if (errorSymbols) return NaN;

  const transformSymbol = symbols.split("").map((item, index, currentArray) => {
    for (const key in symbolsValue) {
      if (item === key) {
        return (currentArray[index] = symbolsValue[key]);
      }
    }
    return currentArray;
  });

  const valueSymbols = transformSymbol.reduce(
    (accumulator, currentValue, index, array) => {
      if (array[index] < array[index + 1]) {
        accumulator -= currentValue;
      } else {
        accumulator += currentValue;
      }

      return accumulator;
    },
    0
  );

  return valueSymbols;
}

decodeNumber(".,"); // 4 (5 - 1)
decodeNumber(",."); // 6 (5 + 1)
decodeNumber("..."); // 3
decodeNumber(",..."); // 8 (5 + 3)
decodeNumber(".........!"); // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumber(".;"); // 49 (50 - 1)
decodeNumber("..,"); // 5 (-1 + 1 + 5)
decodeNumber("..,!"); // 95 (1 - 1 - 5 + 100)
decodeNumber(".;!"); // 49 (-1 -50 + 100)
decodeNumber("!!!"); // 300
decodeNumber(";!"); // 50
decodeNumber(";.W"); // NaN
