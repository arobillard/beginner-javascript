const cardBtns = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');
function handleButtonClick(e) {
  const btn = e.currentTarget;
  const card = btn.closest('.card');
  // grab image src
  const imgSrc = card.querySelector('img').src;
  const name = card.querySelector('h2').textContent;
  const desc = card.dataset.description;
  // populae modal with new info
  modalInner.innerHTML = `
    <img src="${imgSrc.replace('200', '600')}" alt="${name}" />
    <p>${desc}</p>
  `;
  modalOuter.classList.add('open');
}
cardBtns.forEach(btn => btn.addEventListener('click', handleButtonClick));

function closeModal() {
  modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function(e) {
  const isOutside = !e.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
