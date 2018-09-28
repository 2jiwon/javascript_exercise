// Write a JavaScript program to find the number which appears most in a given array of integers. 
//
// w3resource solution
function maxNum(arr) {
  const numArr = [];
  let max = 0;

  for (let i = 0; i < 10; i++) {
    numArr.push(0);
  }

  for (let i = 0; i < arr.length; i++) {
    numArr[arr[i] - 1]++;

    if (numArr[arr[i] - 1] > numArr[max]) {
      max = arr[i] - 1;
    }
  }
  return max + 1;
}

console.log(maxNum([1,2,3,2,2,8,1,9]));
console.log(maxNum([1,3,2,9,9,2,8,9,1]));
console.log(maxNum([1,2,2,3,9,2,8,9,1]));
