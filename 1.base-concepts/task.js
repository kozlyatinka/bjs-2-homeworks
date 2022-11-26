"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4*a*c;
  document.writeln(d);
  if (d < 0) {
    arr = [];
  } else if (d == 0) {
    arr.push(-b / 2 * a);
  } else {
    arr.push((-b + Math.sqrt(d))/(2*a));
    arr.push((-b - Math.sqrt(d))/(2*a));
  }
  return arr;
}

document.writeln(solveEquation(10, 25, 3));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}
