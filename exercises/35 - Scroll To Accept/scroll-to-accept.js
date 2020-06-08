const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('button');

function obCallBack(payload) {
  console.log(payload[0].intersectionRatio);
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    // stop observing the button
    ob.unobserve(terms.lastElementChild);
  }
}

const ob = new IntersectionObserver(obCallBack, {
  root: terms,
  threshold: 1,
});

ob.observe(terms.lastElementChild);
