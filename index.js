const gifts = ["teddy bear", "drone", "doll"];

function wrapGift(gift) {
  console.log(`Wrapped ${gift} and added a bow!`);
}

for (let i = 0; i < gifts.length; i++) {
  wrapGift(gifts[i]);
}

function writeCards(names) {
  let messages = [];
  for (let name of names) {
    messages.push(`Thank you, ${name}, for the wonderful surprise gift!`);
  }
  return messages;
}

function countDown(num) {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
}
