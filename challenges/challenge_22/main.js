function countDecorations(bigTree) {
  let count = 0;

  const isObject = (argument) => {
    return Object.prototype.toString.call(argument) == "[object Object]";
  };

  function iterationObject(obj) {
    if (typeof obj.value === "number") {
      count += obj.value;
    }

    for (const element in obj) {
      const validationObject = isObject(obj[element]);

      if (validationObject) {
        if (obj[element].left === null && obj[element].right === null) {
          count += obj[element].value;
        } else {
          iterationObject(obj[element]);
        }
      }
    }
  }

  iterationObject(bigTree);
  return count;
}

const tree = {
  value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
  left: {
    value: 2, // el nodo izquierdo necesita dos decoraciones
    left: null, // no tiene más ramas
    right: null, // no tiene más ramas
  },
  right: {
    value: 3, // el nodo de la derecha necesita tres decoraciones
    left: null, // no tiene más ramas
    right: null, // no tiene más ramas
  },
};

countDecorations(tree);

const bigTree = {
  value: 1,
  left: {
    value: 5,
    left: {
      value: 7,
      left: {
        value: 3,
        left: null,
        right: null,
      },
      right: null,
    },
    right: null,
  },
  right: {
    value: 6,
    left: {
      value: 5,
      left: null,
      right: null,
    },
    right: {
      value: 1,
      left: null,
      right: null,
    },
  },
};

countDecorations(bigTree);
