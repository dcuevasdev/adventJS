function wrapGifts(gifts) {
  const packedGifts = [];
  if (gifts.length === 0) return gifts;

  for (let i = 0; i < gifts.length + 2; i++) {
    if (i === 0 || i === gifts.length + 1) {
      if (gifts[0].length === 2) {
        packedGifts.push("*".repeat(gifts[0].length * 2));
      } else {
        packedGifts.push("*".repeat((gifts[0].length - 1) * 2));
      }
    }

    if (i !== 0 && i !== gifts.length + 1) {
      packedGifts.push(`*${gifts[i - 1]}*`);
    }
  }
  return packedGifts;
}

wrapGifts(["📷", "⚽️"]);
wrapGifts(["🏈🎸", "🎮🧸"]);
wrapGifts(["📷"]);
wrapGifts([]);
