import wait from 'waait';
import faker from 'faker';
import { format, formatDistance, formatDistanceStrict } from 'date-fns';
import axios from 'axios';
import { isEqual, intersection } from 'lodash';
import to from 'await-to-js';

console.log(faker.name.firstName());

const fakeNames = Array.from({ length: 10 }, () => `${faker.name.firstName()} ${faker.name.lastName()}`);

console.log(fakeNames);

async function go() {
  console.log('going');
  await wait(200);
  console.log('ending');
}

const diff = formatDistanceStrict(new Date(1987, 3, 4, 21, 32, 0), new Date(), { addSuffix: true });
console.log(diff);

const date = new Date();
const formatted = format(date, `LLLL 'the' do y`);

console.log(formatted);

async function getJoke() {
  const { data } = await axios.get('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  });
  console.log(data);
}

getJoke();

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b = [5, 3, 4, 6, 7, 8, 9, 10, 11];

const sameValues = intersection(a, b);
console.log(sameValues);

const person1 = { name: 'wes' };
const person2 = { name: 'wes' };
console.log(isEqual(person1, person2, { name: 'Bob' }));

function checkIfNameIsCool(firstName) {
  return new Promise(function(resolve, reject) {
    if (firstName === 'Wes') {
      return resolve('Cool Name');
    }
    reject(new Error('not a cool name'));
  });
}

async function checkName() {
  const [err, successValue] = await to(checkIfNameIsCool('Adam'));
  if (err) {
    console.log(err);
  } else {
    console.log(successValue);
  }
}
checkName();
