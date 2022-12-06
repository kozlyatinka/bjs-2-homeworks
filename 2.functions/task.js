function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg;

  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
    if (arr[i] > max){
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }

  avg = parseFloat((sum / arr.length).toFixed(2)) ;

  return { min: min, max: max, avg: avg };

}


function summElementsWorker(...arr) {
  let sum = 0;
  if (arr.length < 1) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++){
      sum += arr[i];
    }
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = arr[0];
  let max = arr[0];

  if (arr.length < 1) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++){

      if (arr[i] > max){
        max = arr[i];
      }

      if (arr[i] < min) {
        min = arr[i];
      }
    }
  }

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  if (arr.length < 1) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++){

      if (arr[i] % 2 === 0){
        sumEvenElement += arr[i];
      }

      if (arr[i] % 2 !== 0) {
        sumOddElement += arr[i];
      }
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if (arr.length < 1) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++){

      if (arr[i] % 2 === 0){
        sumEvenElement += arr[i];
        countEvenElement += 1;
      }
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let final;

  for (let i = 0; i < arrOfArr.length; i++) {
    
    final = func(...arrOfArr[i]);

    if (final > maxWorkerResult) {
      maxWorkerResult = final;
    }
  }
  return maxWorkerResult;
}
