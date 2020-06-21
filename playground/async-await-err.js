function wait(ms = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

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
  console.log('oh no!');
  console.log(err);
}

async function go() {
  const pizza = await makePizza(['pineapple']);
  console.log(pizza);
  return pizza;
}

// catch at run time
// go().catch(handleError);

// make a safe function with a HOF
function makeSafe(fn, errorHandler) {
  return function() {
    fn().catch(errorHandler);
  };
}

const safeGo = makeSafe(go, handleError);

safeGo();

// go()
//   .then(result => {
//     console.log.apply(result);
//   })
//   .catch(handleError);

// async function goGo() {
//   const result = await go();
// }

// goGo().catch(handleError);
