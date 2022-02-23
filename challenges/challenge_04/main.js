function createXmasTree(height) {
  const signs = {
    asterisk: "*",
    underscore: "_",
    hash: "#",
  };
  const tree = [];
  let counterSpace = 0;

  for (let i = 1; i <= height; i++) {
    const leave = "";
    const dryLeaveRight = leave.padStart(height - i, signs.underscore);
    const greenLeave = dryLeaveRight.padEnd(
      height + counterSpace,
      signs.asterisk
    );
    const dryLeaveLeft = greenLeave.padEnd(
      height + (height - 1),
      signs.underscore
    );

    tree.push(dryLeaveLeft);

    counterSpace++;
  }

  for (let i = 1; i <= 2; i++) {
    const trunk = "";
    const drySand = trunk.padStart(height - 1, signs.underscore);
    const strongTrunk = drySand.padEnd(height, signs.hash);
    const drySandLeft = strongTrunk.padEnd(
      height + (height - 1),
      signs.underscore
    );

    tree.push(drySandLeft);
  }

  return tree.join("\n");
}

createXmasTree(5);
