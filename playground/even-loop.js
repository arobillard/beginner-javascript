// function go(e) {
//   const el = e.currentTarget;
//   // 1. Change the text to GO when clicked.
//   el.textContent = 'GO';
//   setTimeout(function () {
//     // 2. Make it a circle after 2 seconds
//     el.classList.add('circle');
//     setTimeout(function () {
//       // 3. Make it red after 0.5s
//       el.classList.add('red');
//       setTimeout(function () {
//         // 4. make it square after 0.25s
//         el.classList.remove('circle');
//         setTimeout(function () {
//           // 5. make it purple
//           el.classList.remove('red');
//           el.classList.add('purple');
//           setTimeout(function () {
//             // 6. fade out after 0.5s
//             el.classList.add('invisible');
//             setTimeout(function () {
//               console.log('You have reacted the 7th layer of callback hell');
//               el.classList.remove('invisible', 'purple');
//             }, 500);
//           }, 500);
//         }, 500);
//       }, 500)
//     }, 500)
//   }, 500)
// }

// console.log('starting');
// setTimeout(function() {
//   console.log('Running');
// }, 2000);
// console.log('ending');

const go = document.querySelector('.go');

go.addEventListener('click', function(e) {
  const el = e.currentTarget;
  el.textContent = 'GO!';
  console.log(el);
  setTimeout(function() {
    el.classList.add('circle');
    setTimeout(function() {
      el.classList.add('red');
      setTimeout(function() {
        el.classList.remove('circle');
        setTimeout(function() {
          el.classList.remove('red');
          el.classList.add('purple');
          setTimeout(function() {
            el.classList.add('fadeOut');
          }, 500);
        }, 300);
      }, 250);
    }, 500);
  }, 2000);
});
