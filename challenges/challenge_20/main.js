function pangram(letter) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "ñ",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let counter = 0;

  for (const word of alphabet) {
    const verify = letter.toLowerCase().includes(word);
    if (verify) {
      counter += 1;
    }
  }

  if (counter === 27) {
    return true;
  } else {
    return false;
  }
}
pangram("Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!");

pangram("Extraño pan de col y kiwi se quemó bajo fugaz vaho");
pangram(
  "Esto es una frase larga pero no tiene todas las letras del abecedario"
);
pangram("De la a a la z, nos faltan letras");
