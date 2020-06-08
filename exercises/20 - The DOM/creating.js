const myP = document.createElement('p');
myP.textContent = 'I am a P';
myP.classList.add('special');
console.log(myP);

const myImg = document.createElement('img');
myImg.src = 'https://picsum.photos/500';
myImg.alt = 'Photolicious';
console.log(myImg);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myImg);
myDiv.appendChild(myP);
document.body.appendChild(myDiv);

const heading = document.createElement('h2');
heading.textContent = 'Cool Things';
myDiv.insertAdjacentElement('afterbegin', heading);

const ul = document.createElement('ul');
const items = ['1', 'Jonas', '3', '4', '5'];
const li = document.createElement('li');

items.forEach(element => {
  const li = document.createElement('li');
  li.textContent = element;
  ul.appendChild(li);
});

li.textContent = 'coolio';
const li2 = li.cloneNode(true);
li2.textContent = 'poop';
ul.insertAdjacentElement('beforeend', li);
ul.insertAdjacentElement('beforeend', li2);

myDiv.insertAdjacentElement('beforeend', ul);
