// go.addEventListener('click', function(e) {
//   const el = e.currentTarget;
//   el.textContent = 'GO!';
//   console.log(el);
//   setTimeout(function() {
//     el.classList.add('circle');
//     setTimeout(function() {
//       el.classList.add('red');
//       setTimeout(function() {
//         el.classList.remove('circle');
//         setTimeout(function() {
//           el.classList.remove('red');
//           el.classList.add('purple');
//           setTimeout(function() {
//             el.classList.add('fadeOut');
//           }, 500);
//         }, 300);
//       }, 250);
//     }, 500);
//   }, 2000);
// });

const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

wait(2000).then(() => {
  console.log('Done!');
});

const go = document.querySelector('.go');

// function animate(e) {
//   const el = e.currentTarget;
//   el.textContent = 'GO!';
//   wait(200)
//     .then(() => {
//       el.classList.add('circle');
//       return wait(500);
//     })
//     .then(() => {
//       el.classList.add('red');
//       return wait(250);
//     })
//     .then(() => {
//       el.classList.remove('circle');
//       return wait(500);
//     })
//     .then(() => {
//       el.classList.remove('red');
//       el.classList.add('purple');
//       return wait(500);
//     })
//     .then(() => {
//       el.classList.add('fadeOut');
//     });
// }

async function animate2(e) {
  const el = e.currentTarget;
  el.textContent = 'GO!';
  await wait(200);
  el.classList.add('circle');
  await wait(500);
  el.classList.add('red');
  await wait(250);
  el.classList.remove('circle');
  await wait(500);
  el.classList.remove('red');
  el.classList.add('purple');
  await wait(500);
  el.classList.add('fadeOut');
}

go.addEventListener('click', animate2);
