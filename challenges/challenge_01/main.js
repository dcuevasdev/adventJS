const sheep = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];

const filterSheep = sheep.filter((animal) => {
  const expReg = /a/gi;
  const expReg2 = /n/gi;
  const validator =
    animal.color === "rojo" &&
    expReg.test(animal.name) &&
    expReg2.test(animal.name);

  if (validator) {
    return animal;
  }
});

console.log(filterSheep);
