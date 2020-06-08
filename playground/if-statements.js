// const age = 50;
// if (10 > 2) {
//   console.log('Yep 1');
// } else if (11 > 10) {
//   console.log('Yep 2');
// } else if (3 > 1) {
//   console.log('Yep 3');
// }

// function slugify(sentence, lowercase) {
//   const slug = sentence.replace(/\s/g, '-');
//   if (lowercase) {
//     return slug.toLowerCase();
//   }
//   return slug;
// }

// // const check = null;

// // console.log(check === undefined);

// const check = {};

// if (check.length) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// ternary
const count = 345;
// let word;
// if (count === 1) {
//   word = 'item';
// } else {
//   word = 'items';
// }

const word = count === 1 ? 'item' : 'items';

const sentence = `You have ${count} item${count === 1 ? '' : 's'} in your card`;
console.log(sentence);

function showAdminBar() {
  console.log('wuxxup');
}

const isAdmin = true;
// isAdmin ? showAdminBar() : null;

function check1() {
  console.log('running check 1');
  return true;
}
function check2() {
  console.log('running check 2');
  return false;
}
function check3() {
  console.log('running check 3');
  return true;
}

if (check1() && check2() && check3()) {
  console.log('all checks passed');
} else {
  console.log('some checks failed');
}

// Conditional Abuse
// {isAdmin && showAdminBar();}
if (isAdmin) {
  showAdminBar();
}
