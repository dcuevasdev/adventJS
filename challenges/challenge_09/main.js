function groupBy(collection, it) {
  if (typeof it === "function") {
    const groupFunction = collection.reduce((obj, item) => {
      const key = it(item);
      if (obj[key]) {
        obj[key].push(item);
      } else {
        obj[key] = [item];
      }
      return obj;
    }, {});

    return groupFunction;
  }

  if (typeof it === "string") {
    const groupString = collection.reduce((obj, item) => {
      const key = item[it];
      if (obj[key]) {
        obj[key].push(item);
      } else {
        obj[key] = [item];
      }
      return obj;
    }, {});
    return groupString;
  }
}

groupBy([{ age: 23 }, { age: 24 }], "age"); // { 23: [{age: 23}], 24: [{age: 24}] }
groupBy(["one", "two", "three"], "length"); // { 3: ['one', 'two'], 5: ['three'] }
groupBy([6.1, 4.2, 6.3], Math.floor); // { 6: [6.1, 6.3], 4: [4.2] }

groupBy([1397639141184, 1363223700000], (timestamp) =>
  new Date(timestamp).getFullYear()
);
// { 2013: [1363223700000], 2014: [1397639141184] }

groupBy(
  [
    { title: "JavaScript: The Good Parts", rating: 8 },
    { title: "Aprendiendo Git", rating: 10 },
    { title: "Clean Code", rating: 9 },
  ],
  "rating"
);
// { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
//   9: [{ title: 'Clean Code', rating: 9 }],
//   10: [{ title: 'Aprendiendo Git', rating: 10 }] }
