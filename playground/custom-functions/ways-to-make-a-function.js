// // function doctorize(firstName) {
// //   return `Dr. ${firstName}`;
// // }

// // Anon Function
// // function (firstName) {
// //   return `Dr. ${firstName}`;
// // }

// // Function Expression
// // const doctorize = function(firstName) {
// //   return `Dr. ${firstName}`;
// // };

// /* eslint-disable */
// const inchToCM = inches => inches * 2.54;

// // function add(a, b = 3) {
// //   const total = a + b;
// //   return total;
// // }

// // const add = (a, b = 3) => a + b;

// // returning an object

// // function makeABaby(first, last) {
// //   const baby = {
// //     name: `${first} ${last}`,
// //     age: 0
// //   }
// //   return baby;
// // }

// const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// // IIFE
// // Immediately Invoked Function Expression

// (function(age) {
//   return `You are cool and age ${age}`;
// })(10);

// // Methods!!!
// const wes = {
//   name: 'Westopher Bos',
//   // Method!
//   sayHi: function() {
//     console.log(`Hey ${this.name}`);
//     return 'Hey Wes';
//   },
//   // Short hand Method
//   yellHi() {
//     console.log('HEY WESSSSS');
//   },
//   // Arrow function
//   wisperHi: () => {
//     console.log('hii wesss im a mouse');
//   }
// }

// // Callback Functions
// // Click Callback
// const button = document.querySelector('.clickMe');

// function handleClick() {
//   console.log('Great Clicking!!');
// }

// button.addEventListener('click', function() {
//   console.log('NIce Job!!!');
// });

// // Timer Callback
// setTimeout(() => {
//   console.log('DONE! Time to eat!');
// }, 1000);

// ------------------------------------------------------------------------------------------------------------------------------------------------------

// Basic Declaration

// function doctorize(name) {
//   return `Dr. ${name}`;
// }

// Anonymous functions

// function (name) {
//   return `Dr. ${name}`;
// }

// Function Expression
const doctorize = function(name) {
  return `Dr. ${name}`;
};

// Arrow function (they are considered anonymous)
// Initial
function inchToCM(inches) {
  const cm = inches * 2.54;
  return cm;
}
// Better
function inchToCMBetter(inches) {
  return inches * 2.54;
}
// Betterer
const inchToCMBetterer = function(inches) {
  return inches * 2.54;
};
// Bettererer
/* eslint-disable-next-line */
const inchToCMBettererer = (inches) => {
  return inches * 2.54;
};

// Bettererer
const inchToCMBest = inches => inches * 2.54;

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

const add = (a, b = 3) => a + b;

// some gotchas

// return an object

// const makeABaby = (first, last) => {
//   return {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// IIFE
// Immediately Invoked Function Expression

(function(age) {
  return `You are cool and ${age}`;
})();

// Methods!!!
// Function that lives in an object
const adam = {
  name: 'Adam Robillard',
  // Method below
  sayHi() {
    console.log('Hey Adam');
    return `Hey Adam`;
  },
  // Arrow method
  whisperHi: () => {
    console.log('sup sup sup');
  },
};

// callback functions
// Click call back
const button = document.querySelector('.clickMe');

function handleClick() {
  console.log('Great clicking');
}

button.addEventListener('click', function() {
  console.log('nice job');
});

// Timer Callback

setTimeout(function() {
  console.log('nom nom nom times');
}, 1000);
