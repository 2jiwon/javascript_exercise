// Write a JavaScript program to find the number which appears most in a given array of integers. 
//
function maxNum(arr) {
  let numArr = [];
  let max = 0;

  for (let el of arr) {
    if (numArr[el]) {
      numArr[el]++;
    } else {
      numArr[el] = 1;
    }
  }

  for (let el in numArr) {
    if (numArr[el] > max) {
      max = el;
    }
  }

  return max;
}

console.log(maxNum([1,2,3,2,2,8,1,9]));
console.log(maxNum([1,3,2,9,9,2,8,9,1]));
console.log(maxNum([1,2,2,3,9,2,8,9,1]));
