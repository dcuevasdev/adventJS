const letter = "bici coche balón _playstation bici coche peluche";

const stringToArray = letter.split(" ");

const filterGifts = stringToArray.filter((gift) => {
  const expReg = /_/g;

  if (!expReg.test(gift)) {
    return gift;
  }
});

const counterGifts = filterGifts.reduce((obj, gift) => {
  if (obj[gift]) {
    obj[gift] += 1;
  } else {
    obj[gift] = 1;
  }

  return obj;
}, {});

console.log(counterGifts);
