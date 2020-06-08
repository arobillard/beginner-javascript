// const butts = document.querySelector('.butts');
// const coolButton = document.querySelector('.cool');

// function handleClick() {
//   console.log('🐛 IT GOT CLICKED!!!');
// }

// const hooray = () => console.log('HOORAY!');

// butts.addEventListener('click', function() {
//   console.log('Im an anon!');
// });
// coolButton.addEventListener('click', hooray);

// butts.removeEventListener('click', handleClick);

// // Listen on multiple items
// const buyButtons = document.querySelectorAll('button.buy');

// function handleBuyButtonClick(event) {
//   console.log('You clicked a button!');
//   const button = event.target;
//   // console.log(button.textContent);
//   // console.log(parseFloat(event.target.dataset.price));
//   console.log(event.target);
//   console.log(event.currentTarget);
//   console.log(event.target === event.currentTarget);
//   // Stop this event from bubbling up
//   // event.stopPropagation();
// }

// buyButtons.forEach(function(buyButton) {
//   buyButton.addEventListener('click', handleBuyButtonClick);
// });

// window.addEventListener(
//   'click',
//   function(event) {
//     console.log('YOU CLICKED THE WINDOW');
//     console.log(event.target);
//     console.log(event.type);
//     // event.stopPropagation();
//     console.log(event.bubbles);
//   },
//   { capture: true }
// );

// const photoEl = document.querySelector('.photo');

// photoEl.addEventListener('mouseenter', e => {
//   console.log(e.currentTarget);
//   console.log(this);
// });

const butts = document.querySelector('.butts');
const cool = document.querySelector('.cool');

function handleClick() {
  console.log('hello');
}

const hooray = () => console.log('hooray');

butts.addEventListener('click', handleClick);
cool.addEventListener('click', hooray);

butts.removeEventListener('click', handleClick);
cool.removeEventListener('click', hooray);

// Listen on multiple items
const buyBtns = document.querySelectorAll('button.buy');
// console.log(buyBtns);

// function buyItem() {
//   console.log('bought!');
// }

// function attachListener(handle) {
//   handle.addEventListener('click', buyItem);
// }

// buyBtns.forEach(attachListener); // the argument is automatically passed in by the browser in the for each
// buyBtns.forEach(e => console.dir(e)); // the argument is automatically passed in by the browser in the for each

function handleBuyButtonClick(event) {
  const btn = event.target;
  const data = parseFloat(btn.dataset.price);
  console.log(btn.textContent);
  console.log(data);
  // Stop bubbling up
  // event.stopPropagation();
}

buyBtns.forEach(buyBtn => {
  buyBtn.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
  'click',
  e => {
    console.log('open the windows!');
    console.log(e.target);
    console.log(e.type);
    console.log(e.bubbles);
    e.stopPropagation();
  },
  { capture: true } // reverses the order of propogation
);

const photo = document.querySelector('.photo');

photo.addEventListener('mousemove', e => {
  console.log(e.currentTarget);
});

// arrow functions don't have a {this}!
