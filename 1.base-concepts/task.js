"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4*a*c;
  if (d === 0) {
    arr.push(-b / 2 * a);
  } else if (d > 0){
    arr.push((-b + Math.sqrt(d))/(2*a));
    arr.push((-b - Math.sqrt(d))/(2*a));
  } 
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  //percent - процентная ставка
  //contribution - сумму первоначального взноса
  //amount - сумму кредита
  //countMonths - срок 
  let totalCreditSum;
  let monthlyPayment;
  let monthlyPercent = percent/100/12;
  let creditBody = amount - contribution;

  if (isNaN(percent)) {
    return (`Параметр Процентная ставка содержит неправильное значение ${percent}`);
  } 
  if (isNaN(contribution)) {
    return (`Параметр Процентная ставка содержит неправильное значение ${contribution}`);
  }

  if (isNaN(amount)) {
    return (`Параметр Процентная ставка содержит неправильное значение ${amount}`);
  }

  if (isNaN(countMonths)) {
    return (`Параметр Процентная ставка содержит неправильное значение ${countMonths}`);
  }

  monthlyPayment = creditBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent)**countMonths) - 1)));
  totalCreditSum = parseFloat((monthlyPayment * countMonths).toFixed(2));
    
  return totalCreditSum;

}
