const item = document.querySelector('.item');
const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `Cute pup <h1 onload="alert('HACKED')">Love this guy!</h1>`;
const myHTML = `
  <div class="wrapper">
    <h2>${desc}</h2>
    <img src="${src}" alt="${desc}" />
  </div>
`; // shortcoming is that it makes it a string, not actual targetable elements in js until after it is dumped into the DOM

// here is how we can turn it into a DOM element

const myFragment = document.createRange().createContextualFragment(myHTML);
console.log(myFragment.querySelector('img'));

document.body.appendChild(myFragment);
