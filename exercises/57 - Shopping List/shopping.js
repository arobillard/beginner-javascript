const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// array to hold our state
const items = [];

function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value;
  if (!name) return; // stops empty from submitting
  const item = {
    name,
    id: Date.now(),
    complete: false
  }
  // push to state
  items.push(item);
  // clear form
  e.target.reset();
  // fire off custom event saying items updated
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  console.log(items);
  const html = items.map(
    item => `<li class="shopping-item">
      <input type="checkbox">
      <span class="itemName">${item.name}</span>
      <button aria-label="Remove ${item.name}">&times;</button>
    </li>`
  ).join('');
  list.innerHTML = html;
}

function mirrorToLocalStorage() {
  console.info('Saving to localStorage');
  localStorage.setItem('items', JSON.stringify(items));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);