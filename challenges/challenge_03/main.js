function isValid(letter) {
  let startGift = 0;
  let finishGift = 0;

  for (word of letter) {
    switch (word) {
      case "(":
        startGift = letter.indexOf(word);
        break;
      case ")":
        finishGift = letter.indexOf(word);
        break;
    }
  }

  if (startGift > finishGift) return console.log(false);

  const wordGift = letter.slice(startGift, finishGift + 1);
  const symbols = ["[", "{", "()"];

  const validateGift = symbols.some((sign) => {
    return wordGift.includes(sign);
  });

  return validateGift ? console.log(false) : console.log(true);
}

// Test
isValid(")bici( casa play");
isValid("(muñeca) consola bici");
isValid("() bici");
isValid("peluche (bici [coche) bici coche balón");
isValid("bici coche (balón) bici coche peluche");
isValid("(()) bici");
isValid("(a) (b) (c)");
isValid("bici coche (balón bici coche");
isValid("(peluche {) bici");
isValid("(a() bici (a)");
