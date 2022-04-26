function shouldBuyFidelity(times) {
  const normalPrice = times * 12;
  let counterFidelityPrice = 0;
  let counter = times;

  while (counter > 0) {
    const calculatePrice = 12 * Math.pow(0.75, counter);
    counterFidelityPrice += calculatePrice;
    counter--;
  }

  const fidelityPrice = 250 + counterFidelityPrice;

  if (normalPrice > fidelityPrice) {
    return true;
  } else {
    return false;
  }
}

shouldBuyFidelity(3);
shouldBuyFidelity(100);
