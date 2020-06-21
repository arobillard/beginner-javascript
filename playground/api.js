// AJAX - fetching data from an API and displaying it
// A - Async
// J - Javascript
// A - and
// X - Xml
const endpoint = 'https://api.asdhub.com';
const usersEndpoint = `${endpoint}/users`;
const userEl = document.querySelector('.user');

async function displayUser(username) {
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();
  console.log(data);
  console.log(data.blog);
  console.log(data.name);
  userEl.textContent = `${data.name} - ${data.location}`;
  console.log(data.location);
}

function handleError(err) {
  console.log('Oh no!');
  console.log(err);
  userEl.textContent = `Something went wrong: ${err}`;
}

displayUser('arobillard').catch(handleError);
