let calculation = localStorage.getItem('calc') || '';
document.querySelector('.calculatorOnScreen').innerHTML = calculation;

function updateCalculation(term) {
  if (term === '+' || term === '-' || term === '*' || term === '/') {
    calculation += ` ${term} `;
  } else {
    calculation += term;
  }
  localStorage.setItem('calc', calculation);
  document.querySelector('.calculatorOnScreen').innerHTML = calculation;
}