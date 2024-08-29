const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operator = document.getElementById('operator');
const result = document.getElementById('result');
const form = document.querySelector('form');
const button = document.querySelector('button');

function calculate() {
  const num1Value = parseFloat(num1.value);
  const num2Value = parseFloat(num2.value);
  const operatorValue = operator.value;

  if (isNaN(num1Value) || isNaN(num2Value)) {
    result.textContent = 'Введите числа';
    return;
  }

  switch (operatorValue) {
    case '+':
      result.textContent = num1Value + num2Value;
      break;
    case '-':
      result.textContent = num1Value - num2Value;
      break;
    case '*':
      result.textContent = num1Value * num2Value;
      break;
    case '/':
      break;
      case '%':
        result.textContent = num1Value % num2Value;
        
      if (num2Value === 0) {
        result.textContent = 'Деление на ноль!';
      } else {
        result.textContent = num1Value / num2Value;
      }
      break;
    default:
      result.textContent = 'Выберите оператор';
  }

  const resultValue = parseFloat(result.textContent);
  if (resultValue % 2 === 0) {
    result.style.background = 'green';
  } else {
    result.style.background = 'red';
  }
}

form.style.width = '300px';
form.style.margin = '180px  550px';
form.style.padding = '20px';
form.style.border = '1px solid #ccc';
form.style.borderRadius = '10px';
form.style.boxShadow = '5px 5px 5px  #ccc';




num1.style.width = '93%';
num1.style.height = '30px';
num1.style.marginBottom = '10px';
num1.style.padding = '10px';
num1.style.border = '1px solid #ccc';
num1.style.borderRadius = '5px';

num2.style.width = '93%';
num2.style.height = '30px';
num2.style.marginBottom = '10px';
num2.style.padding = '10px';
num2.style.border = '1px solid #ccc';
num2.style.borderRadius = '5px';

operator.style.width = '100%';
operator.style.height = '30px';
operator.style.marginBottom = '10px';
operator.style.padding = '0 10px';
operator.style.border = '1px solid #ccc';
operator.style.borderRadius = '5px';

button.style.width = '100%';
button.style.height = '30px';
button.style.background = '#4CAF50';
button.style.color = '#fff';
button.style.padding = '10px';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';

result.style.textAlign = 'center';
result.style. padding = '10px';
result.style. border = '1px solid #ccc';

button.addEventListener('click', calculate);

const resultValue = parseFloat(result.textContent);
if (resultValue % 2 === 0) {
    result.style.background = 'green';
} else {
    result.style.background = 'red';
    
}