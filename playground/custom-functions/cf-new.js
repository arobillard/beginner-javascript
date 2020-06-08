// function definition
function calculateBill(price, taxRate = 13, tipRate = 15) {
  const total = price + price * (taxRate / 100) + price * (tipRate / 100);
  return total;
}

// // function call or **run**
// const newTotal = calculateBill(12, 12);
// const newTotal2 = calculateBill(9, 15);

// console.log(newTotal, newTotal2);
// console.log(`My bill is $${calculateBill(35, 13)}`);

// const adamTotal = 93;
// const adamTax = 13;

// console.log(calculateBill(adamTotal, adamTax));

// function sayHiTo(firstName) {
//   return `Hello ${firstName}`;
// }

// const greeting = sayHiTo('Adam');
// console.log(greeting);
// const yourBill = 100;
// const myBill = 75;
// const myTotal3 = calculateBill(yourBill + myBill + 20, 13);
// console.log(myTotal3);

function doctorize(name) {
  return `Dr. ${name}`;
}

// Adds a default value
function yell(name = 'Silly goose') {
  return `HEY ${name.toUpperCase()}`;
}

const myNewestBill = calculateBill(100, 10); // Only way to use default value of middle value
