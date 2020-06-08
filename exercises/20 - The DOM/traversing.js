const wes = document.querySelector('.wes');
console.log(wes.children);
console.log(wes.firstElementChild);
console.log(wes.lastElementChild);
console.log(wes.previousElementSibling);
console.log(wes.nextElementSibling);
console.log(wes.parentElement);
console.log(wes.childNodes);

const grid = document.querySelector('.items');
const unitCount = grid.childElementCount;
grid.classList.add(`l-1-${unitCount}`);

console.log(grid);

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove(); // Removes it

console.log(p); // but it still exists!

document.body.appendChild(p); // and can be re-added
