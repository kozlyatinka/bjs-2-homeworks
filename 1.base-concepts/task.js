"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let firstRoot;
  let secondRoot;
  let d = Math.pow(b, 2) - 4*a*c;
  if (d < 0) {
    arr = [];
  } else if (d == 0) {
    firstRoot = -b/2*a;
    arr.push(firstRoot);
  } else {
    firstRoot = (-b + Math.sqrt(d))/(2*a);
    secondRoot = (-b - Math.sqrt(d))/(2*a);
    arr.push(firstRoot, secondRoot);
  }
  return arr;
}
solveEquation(1, 2, 3);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}
