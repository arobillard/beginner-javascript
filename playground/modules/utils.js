const last = 'bos';
const middle = 'slam dunk';

function returnHi(name) {
  return `Hi ${name} ${last}!`;
}

const first = 'wes';

// named exports - as many as you want
export { last, middle, returnHi };
// Default export - only one
export default first;
