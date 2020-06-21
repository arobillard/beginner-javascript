export async function fetchJoke(loader, jokeButton) {
  loader.classList.remove('hidden');
  jokeButton.classList.add('hidden');
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await response.json();
  return data;
}
