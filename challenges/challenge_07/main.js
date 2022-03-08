function contains(store, product) {
  const objectToString = JSON.stringify(store);
  console.log(objectToString);
  return console.log(objectToString.includes(`:"${product}"`));
}

const almacen = {
  estanteria1: {
    cajon1: {
      producto1: "coca-cola",
      producto2: "fanta",
      producto3: "sprite",
    },
  },
  estanteria2: {
    cajon1: "vacio",
    cajon2: {
      producto1: "pantalones",
      producto2: "camiseta",
    },
  },
};
contains(almacen, "camiseta");

const otroAlmacen = {
  baul: {
    fondo: {
      objeto: "cd-rom",
      otroObjeto: "disquette",
      otraCosa: "mando",
    },
  },
};

contains(otroAlmacen, "gameboy");
