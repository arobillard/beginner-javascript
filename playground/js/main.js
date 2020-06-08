const digits = document.querySelectorAll('.digit');
const operations = document.querySelectorAll('.operations');
const operation = document.querySelector('.operation');
const result = document.querySelector('.operation-complete');
let operationValue = '';
let operationType = '';
let resultValue = 0;

function digitPress(e) {
  const newNum = parseFloat(e.currentTarget.dataset.number);
  operationValue += `${newNum}`;
  if (operationType === '+') {
    resultValue += newNum;
  } else if (operationType === '-') {
    resultValue -= newNum;
  } else if (operationType === '*') {
    resultValue *= newNum;
  } else if (operationType === '/') {
    resultValue /= newNum;
  } else if (operationType === '') {
    if (resultValue === 0) {
      resultValue = newNum;
    } else {
      const resultValueStr = resultValue.toString();
      const newNumStr = newNum.toString();
      resultValue = resultValueStr + newNumStr;
    }
  }
  operation.textContent = operationValue;
  result.textContent = resultValue;
}

function operationPress(e) {
  const newOp = e.currentTarget.dataset.operation;
  operationValue += ` ${newOp} `;
  operationType = newOp;
  operation.textContent = operationValue;
  console.log(newOp);
}

digits.forEach(e => {
  e.addEventListener('click', digitPress);
});

operations.forEach(e => {
  e.addEventListener('click', operationPress);
});
