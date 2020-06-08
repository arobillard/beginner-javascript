// const names = ['wes', 'kait', 'snickers'];

// console.log(names[0]);
// console.log(names.length);
// console.log(names[names.length - 1]);

// names.push('lux');
// console.log(names);
// const names2 = [...names, 'lux'];
// names.unshift('poppy');
// console.log(names);
// const names3 = ['poppy', ...names];
// console.log(names3);

// const bikes = ['bianchi', 'miele', 'panasonic', 'miyata'];
// const newBikes = [
//   ...bikes.slice(0, 2),
//   'benotto',
//   ...bikes.slice(2)
// ];

// const newBikes2 = [
//   ...newBikes.slice(0, 3),
//   ...newBikes.slice(4)
// ];
// console.log(newBikes2);

// //
// const comments = [
//   { text: 'Cool Beans', id: 123 },
//   { text: 'Love this', id: 133 },
//   { text: 'Neato', id: 233 },
//   { text: 'good bikes', id: 333 },
//   { text: 'so good', id: 433 },
// ];

// function deleteComment(id, comments) {
//   // first find the index of the item in the array
//   const commentIndex = comments.findIndex(comment => comment.id === id);
//   // make a new array without that item in it
//   return [
//     ...comments.slice(0, commentIndex),
//     ...comments.slice(commentIndex + 1),
//   ];
//   // return our new array
// }

// const kaitIndex = names.findIndex(name => name === 'kait');
// const newNamesWithOutKait = [
//   // get everything up to kait index
//   ...names.slice(0, kaitIndex),
//   // everything after Kait index
//   ...names.slice(kaitIndex + 1)
// ];
// console.log(newNamesWithOutKait);

//     // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//     // console.log(numbers);
//     // numbers.splice(3, 2);
//     // console.log(numbers);

//     // // Mutation Methods - DO CHANGE THE ORIGINAL DATA
//     // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     // // anytime you want to use a mutation method and NOT mutate the orignal array
//     // // we need to take a copy of the array
//     // const numbersReversed = [...numbers].reverse();
//     // console.log(numbersReversed);
//     // // numbers.reverse();
//     // console.log(numbers);
//     // // Immutable - THEY DO NOT CHANGE THE ORIGINAL DATA
//     // const pizzaSlice = numbers.slice(2, 4);
//     // console.log(pizzaSlice);
//     // console.log(numbers);

const names = ['wes', 'kait', 'snickers']; // array literal

console.log(names.length);
console.log(names[2]);
console.log(names[names.length - 1]);

names.push('lux');
names.unshift('poppy');
const namesNew = [...names, 'george'];
console.log(names);
console.log(namesNew);

const bikes = ['bianchi', 'miele', 'panasonic', 'miyata'];
const newBikes = [...bikes.slice(0, 2), 'benotto', ...bikes.slice(2)];
const newBikes2 = [...newBikes.slice(0, 3), ...newBikes.slice(4)];
console.log(bikes);
console.log(newBikes);
console.log(newBikes2);

const comments = [
  { text: 'Cool Beans', id: 123 },
  { text: 'Cooler Beans', id: 124 },
  { text: 'Coolest Beans', id: 125 },
  { text: 'Cool Beaners', id: 126 },
  { text: 'Cool Beanests', id: 127 },
];

function deleteComment(id, comments) {
  // first find the index of the item in the array
  const commentIndex = comments.findIndex(comment => comment.id === id);
  // make a new array without that item in it
  return [...comments.slice(0, commentIndex), ...comments.slice(commentIndex + 1)];
  // return our new array
}

const kaitIndex = names.findIndex(name => name === 'kait');
const newNamesWithOutKait = [...names.slice(0, kaitIndex), ...names.slice(kaitIndex + 1)];
console.log(kaitIndex);
console.log(names[kaitIndex]);
console.log(newNamesWithOutKait);

// // Mutation Method -- Does Change OG data
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const numbersReversed = [...numbers].reverse();
// // numbers.reverse();
// console.log(numbers);
// console.log(numbersReversed);

// // Immutable -- Does not Change OG data
// const pizzaSlice = numbers.slice(2, 4);
// console.log(pizzaSlice);
