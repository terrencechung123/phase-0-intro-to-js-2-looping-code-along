// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy Birthday to me`);
   // debugger;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    //debugger;
  }

  return gifts;
}

wrapGifts(gifts);



const cards = []

function writeCards(name, eventName) {
   
    for(let i = 0; i < name.length; i++) {
       
        cards.push(`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`)
        
    }
    return cards
}



const countDownArray = []

function countDown() {
    let i = 10
    while (i >= 0) {
        console.log(i--)
    }
}