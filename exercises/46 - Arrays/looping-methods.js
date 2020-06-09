const toppings = [
  'Mushrooms ',
  'Tomatoes',
  'Eggs',
  'Chili',
  'Lettuce',
  'Avocado',
  'Chiles',
  'Bacon',
  'Pickles',
  'Onions',
  'Cheese',
];

const students = [
  {
    id: '11ce',
    first_name: 'Dall',
    last_name: 'Puckring',
  },
  {
    id: '2958',
    first_name: 'Margarete',
    last_name: 'Brandi',
  },
  {
    id: '565a',
    first_name: 'Bendicty',
    last_name: 'Woodage',
  },
  {
    id: '3a16',
    first_name: 'Micki',
    last_name: 'Mattes',
  },
  {
    id: 'f396',
    first_name: 'Flory',
    last_name: 'Gladeche',
  },
  {
    id: 'de5f',
    first_name: 'Jamill',
    last_name: 'Emilien',
  },
  {
    id: '54cb',
    first_name: 'Brett',
    last_name: 'Aizikowitz',
  },
  {
    id: '9135',
    first_name: 'Lorry',
    last_name: 'Smallman',
  },
  {
    id: '978f',
    first_name: 'Gilly',
    last_name: 'Flott',
  },
];

const people = [
  {
    birthday: 'April 22, 1993',
    names: {
      first: 'Keith',
      last: 'Buckley',
    },
  },
  {
    birthday: 'January 3, 1975',
    names: {
      first: 'Larry',
      last: 'Heep',
    },
  },
  {
    birthday: 'February 12, 1944',
    names: {
      first: 'Linda',
      last: 'Bermeer',
    },
  },
];

const buns = ['egg', 'wonder', 'brioche'];

const meats = {
  beyond: 10,
  beef: 5,
  pork: 7,
};

const prices = {
  hotDog: 453,
  burger: 765,
  sausage: 634,
  corn: 234,
};

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

const faces = ['😃', '🤠', '🤡', '🤑', '😵', '🌞', '🐶', '😺'];

const inventory = [
  { type: 'shirt', price: 4000 },
  { type: 'pants', price: 4532 },
  { type: 'socks', price: 234 },
  { type: 'shirt', price: 2343 },
  { type: 'pants', price: 2343 },
  { type: 'socks', price: 542 },
  { type: 'pants', price: 123 },
];

/*
  Looping Methods
*/

function logTopping(topping, index, ogArray) {
  // console.log(topping, index, array);
  // topping
  // next topping topping
  const prevTopping = ogArray[index - 1];
  const nextTopping = ogArray[index + 1];
  prevTopping ? console.log(prevTopping) : console.log('We starting');
  console.log(topping);
  nextTopping ? console.log(nextTopping) : console.log('Good Bye!');
  // say goodbye if last
  console.log('-------------------------------');
}

toppings.forEach(logTopping);

// Maps

console.clear();

function addArms(face) {
  return `👋 ${face} 👋`;
}

const toys = faces.map(addArms);

console.log(toys);

function bosify(name) {
  return `${name} Bos`;
}

function capitalize(word) {
  return `${word[0].toUpperCase()}${word.slice(1)}`;
}

const fullNames = ['wes', 'kait', 'poppy'].map(capitalize).map(bosify);
console.log(fullNames);

const orderTotalsWithTax = orderTotals.map(total => total * 1.13);
console.log(orderTotalsWithTax);

const cleanPeople = people.map(function(person) {
  // get their bday
  const birthday = new Date(person.birthday).getTime();
  const now = Date.now();
  // figure iout their age
  const age = Math.floor((now - birthday) / 31536000000);
  // return full name and bday in object
  return {
    age,
    name: `${person.names.first} ${person.names.last}`,
  };
});

console.clear();
console.table(cleanPeople);

// Filter

// const over40 = cleanPeople.filter(function(person) {
//   if (person.age > 40) {
//     return true;
//   }
// });
const over40 = cleanPeople.filter(person => person.age > 40);
console.log(over40);

const student = students.find(stud => stud.id === '565a');
console.log(student);

// Reduce
console.clear();
function tallyNumbers(tally, currentTotal) {
  console.log(`The current tally is ${tally}`);
  console.log(`The current total is ${currentTotal}`);
  console.log('------------------')
  return tally + currentTotal;
}

const allOrders = orderTotals.reduce(tallyNumbers, 0);