function countPackages(carriers, carrierID) {
  let sumPackages = 0;
  let ID = carrierID;

  function findCarrier() {
    const dataCarrier = carriers.find((carrier) => carrier[0] === ID);
    sumPackages += dataCarrier[1];

    for (const carrier of dataCarrier[2]) {
      ID = carrier;
      findCarrier();
    }
  }

  findCarrier();
  return sumPackages;
}

const carriers = [
  ["dapelu", 5, ["midu", "jelowing"]],
  ["midu", 2, []],
  ["jelowing", 2, []],
];

const carriers2 = [
  ["lolivier", 8, ["camila", "jesuspoleo"]],
  ["camila", 5, ["sergiomartinez", "conchaasensio"]],
  ["jesuspoleo", 4, []],
  ["sergiomartinez", 4, []],
  ["conchaasensio", 3, ["facundocapua", "faviola"]],
  ["facundocapua", 2, []],
  ["faviola", 1, []],
];
countPackages(carriers2, "camila");
