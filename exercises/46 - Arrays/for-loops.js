const numbers = [2, 34, 3, 23, 42, 3, 1, 65, 364, 5, 645, 6];

const name = 'Wes Bos👪🏻🎅🏻👩‍👩‍👧‍👦';

const wes = {
  name: 'wes',
  age: 100,
  cool: true,
};

// For
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// For of
for (const letter of name) {
  console.log(letter);
}

for (const number of numbers) {
  console.log(number);
}

// For in

for (const keys in wes) {
  console.log(keys);
}

const baseHumanStats = {
  feet: 2,
  arms: 2,
  eyes: 2,
  head: 1,
};

function Human(name) {
  this.name = name;
}

Human.prototype = baseHumanStats;

const wes2 = new Human('wes');

// While
let cool = true;
let i = 0;
while (cool === true) {
  console.log('You are cool');
  i++;
  if (i > 100) {
    cool = false;
  }
}

// Do While
