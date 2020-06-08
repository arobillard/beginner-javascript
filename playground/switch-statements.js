const turtle = document.querySelector('.turt');
let x = 0;
let y = 0;
let flipped = false;
let rotate = 0;
function handleKeyDown(e) {
  if (!e.key.includes('Arrow')) return;
  switch (e.key) {
    case 'ArrowUp':
      y -= 50;
      rotate = -90;
      break;
    case 'ArrowDown':
      y += 50;
      rotate = 90;
      break;
    case 'ArrowLeft':
      x -= 50;
      flipped = true;
      rotate = 0;
      break;
    case 'ArrowRight':
      x += 50;
      flipped = false;
      rotate = 0;
      break;
    default:
      console.log(`that ain't valid`);
      break;
  }
  turtle.setAttribute(
    'style',
    `
    --x: ${x}px;
    --y: ${y}px;
    --flipped: ${flipped ? '180deg' : '0'};
    --rotate: ${rotate}deg;
  `
  );
}
window.addEventListener('keydown', handleKeyDown);
