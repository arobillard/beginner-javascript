// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
document.body.insertAdjacentElement('afterbegin', div);
// make an unordered list
const list = document.createElement('ul');
// add three list items with the words "one, two three" in them
const items = ['one', 'two', 'three'];
items.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  list.appendChild(li);
});
// put that list into the above wrapper
div.appendChild(list);
// create an image
// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper
const img = document.createElement('img');
const imgW = 250;
const desc = 'Cute Puppy';
img.src = `https://picsum.photos/${imgW}`;
img.classList.add('cute');
img.alt = desc;
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const newHTML = `
  <div>
    <p>A dope paragraph</p>
    <p>An alright paragraph</p>
  </div>
`;

list.insertAdjacentHTML('beforebegin', newHTML);
// add a class to the second paragraph called warning

const newDiv = document.querySelector('.wrapper div');
newDiv.lastElementChild.classList.add('warning');

// remove the first paragraph
newDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
  return `
    <div class="playerCard">
      <h2>${name} — ${age}</h2>
      <p>They are ${height} and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
    </div>
  `;
}

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');
// Have that function make 4 cards
const cardData = [
  {
    name: 'Adam',
    age: 26,
    height: `6'2"`,
  },
  {
    name: 'Hannah',
    age: 27,
    height: `5'2"`,
  },
  {
    name: 'Hugh',
    age: 59,
    height: `5'11"`,
  },
  {
    name: 'Patti',
    age: 56,
    height: `5'6"`,
  },
];

cardData.forEach(player => {
  const newCard = generatePlayerCard(player.name, player.age, player.height);
  cards.insertAdjacentHTML('beforeend', newCard);
});
// append those cards to the div
// put the div into the DOM just before the wrapper element
const wrapper = document.querySelector('.wrapper');
wrapper.insertAdjacentElement('beforebegin', cards);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
const allCards = document.querySelectorAll('.playerCard');

allCards.forEach(e => {
  // const btn = `<button class="delete">Delete</button>`;
  const btn = document.createElement('button');
  btn.classList.add('delete');
  btn.textContent = 'delete';
  btn.type = 'button';
  e.appendChild(btn);
});
// <button class="delete">Delete</button>
// select all the buttons!
const btns = document.querySelectorAll('.delete');
// make out delete function
function deleteCard() {
  // this.parentElement.remove();
  this.closest('.playerCard').remove(); // will move up the tree until it finds the target
}
// loop over them and attach a listener
btns.forEach(button => button.addEventListener('click', deleteCard));
