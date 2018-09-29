// Write a JavaScript program to find the number of even values in sequence before the first occurrence of a given number.
//
function findEven(arr, n) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] % 2 === 0) && (arr[i] < n)) {
      result++;
    }
  }

  return result;
}

console.log(findEven([1,2,3,4,5,6,7,8], 5));
console.log(findEven([1,3,5,6,7,8], 6));
