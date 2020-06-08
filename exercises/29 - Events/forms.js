const wes = document.querySelector('.wes');

wes.addEventListener('click', function(e) {
  console.log(e);
  const change = confirm('ya sure?');
  if (!change) {
    e.preventDefault();
  }
});

const signupForm = document.querySelector('[name="signup');

signupForm.addEventListener('submit', function(e) {
  const name = e.currentTarget.name.value;
  console.log(e.currentTarget.name.value);
  console.log(e.currentTarget.email.value);
  console.log(e.currentTarget.agree.checked);
  if (name.includes('chad')) {
    alert('sorry brah');
    e.preventDefault();
  }
});

function logEvent(e) {
  console.log(e.type);
  console.log(e.currentTarget.value);
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent); // focus in
signupForm.name.addEventListener('blur', logEvent); // focus out
