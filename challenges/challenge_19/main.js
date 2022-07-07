function learn(time, courses) {
  if (courses.every((item) => item >= time)) return null;

  let verifySum = 0;
  const coursesToDo = [];

  const iteration = courses.forEach((timeOfCourse, index) => {
    for (let i = 0; i < courses.length; i++) {
      const sumNumbers = timeOfCourse + courses[i];

      if (sumNumbers <= time && sumNumbers > verifySum && index !== i) {
        coursesToDo[0] = index;
        coursesToDo[1] = i;
        verifySum = sumNumbers;
      }
    }
  });

  return coursesToDo;
}

learn(10, [2, 3, 8, 1, 4]);
learn(15, [2, 10, 4, 1]);
learn(25, [10, 15, 20, 5]);
learn(8, [8, 2, 1]);
learn(8, [8, 2, 1, 4, 3]);
learn(5, [5, 5, 5]);
learn(4, [10, 14, 20]);
