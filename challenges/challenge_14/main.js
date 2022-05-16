function missingReindeer(ids) {
  const orderIds = ids.sort((minor, major) => {
    return minor - major;
  });

  const findIdReindeer = orderIds.find((id, index) => id !== index);

  return findIdReindeer ? findIdReindeer - 1 : ids.length;
}

missingReindeer([0, 1]); // -> 2 (¡es el último el que falta!)
missingReindeer([0, 2, 3]); // -> 1
missingReindeer([5, 6, 1, 2, 3, 7, 0]); // -> 4
missingReindeer([3, 0, 1]); // -> 2
missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]); // -> 8
missingReindeer([0]); // -> 1 (¡es el último el que falta!)
