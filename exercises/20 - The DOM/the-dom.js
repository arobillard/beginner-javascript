// const p = document.querySelector('p');
// const div = document.querySelector('div');
// const divImg = div.querySelector('img');
// console.log(p);
// console.log(divImg);

// const heading = document.querySelector('h2');
// console.log(heading.textContent);
// console.log(heading.innerText);
// // heading.textContent = 'Adam Rocks';
// console.log(heading.textContent);
// console.log(heading.innerText);
// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);

// // pizzaList.textContent = `${pizzaList.textContent} 🍕`; // old
// // Adds text to the end
// pizzaList.insertAdjacentText('afterbegin', '🍕');
// pizzaList.insertAdjacentText('beforeend', '🍕');

// Classes

const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.alt = 'Cute pup'; // getters and setters
// pic.style = 'position: absolute; top: 10rem; left: 10rem';

console.log(pic.naturalWidth); // just a getter, not a setter

window.addEventListener('load', function() {
  console.log(pic.naturalWidth);
});

pic.addEventListener('load', function() {
  console.log(pic.naturalWidth);
});

const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', function() {
  alert(`Welcome ${custom.dataset.name}`);
});
