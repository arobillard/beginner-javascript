function wait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
  popup.classList.remove('open');
  await wait(1000);
  // remove popup
  popup.remove();
  /* eslint-disable no-param-reassign */
  popup = null;
  /* eslint-enable no-param-reassign */
}

function ask(options) {
  return new Promise(async function(resolve) {
    // 1 create pop-up with fields
    const popup = document.createElement('form');
    popup.classList.add('popup');
    popup.insertAdjacentHTML(
      'afterbegin',
      `<fieldset>
        <label>${options.title}</label>
        <input type="text" name="input" />
        <button type="submit">Submit</button>
      </fieldset>
    `
    );
    console.log(popup);
    // 2 check if they want a cancel
    if (options.cancel) {
      const skipButton = document.createElement('button');
      skipButton.type = 'button';
      skipButton.textContent = 'Cancel';
      popup.firstElementChild.appendChild(skipButton);
      // TODO: listen for a click on cancel
      skipButton.addEventListener(
        'click',
        function() {
          resolve(null);
          destroyPopup(popup);
        },
        { once: true }
      );
    }
    // 3 Listen for submit
    popup.addEventListener(
      'submit',
      function(e) {
        e.preventDefault();
        console.log('submitted');
        resolve(e.target.input.value);
        // remove from DOM
        destroyPopup(popup);
      },
      { once: true }
    );
    // 4 when submit, resolve data in input box

    // insert popup in dom
    document.body.appendChild(popup);
    // put a very small timeout
    await wait(50);
    popup.classList.add('open');
  });
}

// select all btns
async function askQuestion(e) {
  const button = e.currentTarget;
  const cancel = 'cancel' in button.dataset;
  const answer = await ask({ title: button.dataset.question, cancel });
  console.log(answer);
}

const buttons = document.querySelectorAll('[data-question]');
buttons.forEach(button => button.addEventListener('click', askQuestion));

const questions = [
  { title: 'What is your name?' },
  { title: 'What is your age?', cancel: true },
  { title: "What is your dog's name?" },
];

async function asyncMap(array, callback) {
  // make an array to store results
  const results = [];
  // loop over array
  for (const item of array) {
    results.push(await callback(item));
  }
  // when done loop
  return results;
}

async function go() {
  const answers = await asyncMap(questions, ask);
  console.log(answers);
}
go();

// Promise.all([ask(questions[0]), ask(questions[1]), ask(questions[2])]).then(answers => {
//   console.log(answers);
// }); // they all happen at once which ain't what we want
