const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// array to hold our state
let items = [];

function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value;
  if (!name) return; // stops empty from submitting
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };
  // push to state
  items.push(item);
  // clear form
  e.target.reset();
  // fire off custom event saying items updated
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  console.log(items);
  const html = items
    .map(
      item => `<li class="shopping-item">
      <input type="checkbox" value="${item.id}" ${item.complete ? 'checked' : ''}>
      <span class="itemName">${item.name}</span>
      <button value="${item.id}" aria-label="Remove ${item.name}">&times;</button>
    </li>`
    )
    .join('');
  list.innerHTML = html;
}

function mirrorToLocalStorage() {
  console.info('Saving to localStorage');
  localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
  // pull from LS
  const lsItems = JSON.parse(localStorage.getItem('items'));
  if (lsItems.length) {
    items.push(...lsItems);
  }
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function deleteItem(id) {
  console.log('deleting');
  console.log(id);
  // update items array and remove id
  items = items.filter(item => item.id !== id);
  console.log(items);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
  console.log('marking as complete', id);
  const itemRef = items.find(item => item.id === id);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
// event delegation, listen for click on list UL but delegate click to the button if button is clicked
list.addEventListener('click', function(e) {
  console.log(e.target, e.currentTarget);
  const id = parseInt(e.target.value);
  if (e.target.matches('button')) {
    deleteItem(id);
  }
  if (e.target.matches('input[type="checkbox"]')) {
    markAsComplete(id);
  }
});
restoreFromLocalStorage();

// 1, 2, 5-6, 11, 36-37
// stories
// 12, 15, 17, 27, 35, 38, 42, 47
