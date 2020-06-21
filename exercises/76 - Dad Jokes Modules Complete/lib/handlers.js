import { fetchJoke } from './index.js';
import { loader, jokeHolder, jokeButton } from './elements.js';
import { randomItemFromArray } from './utils.js';
import buttonText from '../data/buttonText.js';

export async function handleClick() {
  const { joke } = await fetchJoke(loader, jokeButton);
  jokeHolder.textContent = joke;
  jokeButton.textContent = randomItemFromArray(buttonText, jokeButton.textContent);
  loader.classList.add('hidden');
  jokeButton.classList.remove('hidden');
}
