// function makePizza(toppings = []) {
//   return new Promise(function (resolve, reject) {
//     // reject if people try with pineapple
//     if (toppings.includes('pineapple')) {
//       reject('Seriously? Get out 🍍');
//     }
//     const amountOfTimeToBake = 500 + (toppings.length * 200);
//     // wait 1 second for the pizza to cook:
//     setTimeout(function () {
//       // when you are ready, you can resolve this promise
//       resolve(`Here is your pizza 🍕 with the toppings ${toppings.join(' ')}`);
//     }, amountOfTimeToBake);
//     // if something went wrong, we can reject this promise;
//   });
// }

// // console.log('First');
// makePizza(['pepperoni'])
//   .then(function (pizza) {
//     console.log(pizza);
//     return makePizza(['ham', 'cheese']);
//   })
//   .then(function (pizza) {
//     console.log(pizza);
//     return makePizza(['hot peppers', 'onion', 'feta']);
//   })
//   .then(function (pizza) {
//     console.log(pizza);
//     return makePizza(['pineapple']);
//   })
//   .then(function (pizza) {
//     console.log(pizza);
//     return makePizza(['one', 'two', 'three', 'four', 'one', 'two', 'three', 'four', 'one', 'two', 'three', 'four']);
//   }).then(pizza => {
//     console.log('All done! here is your last pizza');
//     console.log(pizza);
//   })
//   .catch(handleError)

// // console.log('Right after');

// // Run them Concurrently
// // const pizzaPromise1 = makePizza(['hot peppers', 'onion', 'feta']);
// // const pizzaPromise2 = makePizza(['one', 'two', 'three', 'four', 'one', 'two', 'three', 'four', 'one', 'two', 'three', 'four']);
// // const pizzaPromise3 = makePizza(['ham', 'cheese']);

// // const dinnerPromise = Promise.all([pizzaPromise1, pizzaPromise2, pizzaPromise3]);

// // dinnerPromise.then(function ([hottie, garbagePail, hamAndCheese]) {
// //   console.log(hottie, garbagePail, hamAndCheese);
// // });

// // const firstPizzaPromise = Promise.race([pizzaPromise1, pizzaPromise2, pizzaPromise3]);

// // firstPizzaPromise.then(pizza => {
// //   console.log('You must be hungry, here is the first one ready');
// //   console.log(pizza);
// // })

// function handleError(err) {
//   console.log('Ohh noooo!!');
//   console.log(err);
// }

// makePizza(['cheese', 'pineapple'])
//   .then(pizza => {
//     console.log(pizza);
//   }).catch(handleError)

// const p1 = makePizza(['pep']);
// const p2 = makePizza(['pineapple']);

// const dinnerPromise2 = Promise.allSettled([p1, p2]);

// dinnerPromise2.then(results => {
//   console.log(results);
// })

function makePizza(toppings = []) {
  return new Promise(function(resolve, reject) {
    // reject if people try adding pineapple
    if (toppings.includes('pineapple')) {
      reject('seriously, get out!');
    }
    const amountOfTimeToBake = 500 + toppings.length * 200;
    // wait 1 second for pizza to cook
    setTimeout(function() {
      // when you are ready, you can resolve promise
      resolve(`Here is your pizza with the toppings ${toppings.join(' ')}`);
    }, amountOfTimeToBake);
    // if something is wrong, reject it
  });
}

function handleError(err) {
  console.log('Oh no!!!');
  console.log(err);
}

// makePizza(['pepperoni'])
//   .then(function(pizza) {
//     console.log(pizza);
//     return makePizza(['ham', 'cheese']);
//   })
//   .then(function(pizza) {
//     console.log(pizza);
//     return makePizza(['ham', 'cheese', 'peppers', 'onion', 'ham', 'cheese', 'peppers', 'onion']);
//   })
//   .then(function(pizza) {
//     console.log(pizza);
//     return makePizza(['ham', 'cheese', 'peppers', 'pineapple']);
//   })
//   .then(function(pizza) {
//     console.log(pizza);
//     return makePizza(['ham', 'cheese', 'peppers', 'onion']);
//   })
//   .then(function(pizza) {
//     console.log(pizza);
//   })
//   .catch(handleError);

// // Run concurrently
// const pizzaPromise1 = makePizza(['ham', 'cheese']);
// const pizzaPromise2 = makePizza(['ham', 'cheese', 'peppers', 'onion', 'ham', 'cheese', 'peppers', 'onion']);
// const pizzaPromise3 = makePizza(['ham', 'cheese', 'peppers', 'onion']);

// const dinnerPromise = Promise.all([pizzaPromise1, pizzaPromise2, pizzaPromise3]);

// dinnerPromise.then(function(pizzas) {
//   const [hamAndCheese, hottie, garbagePail] = pizzas;
//   console.log(hamAndCheese);
//   console.log(hottie);
//   console.log(garbagePail);
// });

// const firstPizzaPromise = Promise.race([pizzaPromise1, pizzaPromise2, pizzaPromise3]);

// firstPizzaPromise.then(pizza => {
//   console.log('first one ready');
//   console.log(pizza);
// });

// makePizza(['cheese', 'pineapple'])
//   .then(pizza => {
//     console.log(pizza);
//   })
//   .catch(handleError);

const p1 = makePizza(['pep']);
const p2 = makePizza(['pineapple']);
const dinnerPromise2 = Promise.allSettled([p1, p2]);

dinnerPromise2.then(results => {
  console.log(results);
});
